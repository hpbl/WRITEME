import configparser
import math
import logging
import sqlite3
from containerizedModel.script.classifier.classifier_classify_target import classify_sections
from containerizedModel.script.loading.load_target_sections import load_sections
import requests as rq
from functools import reduce
from API.dataProvider.AbstractDataProvider import AbstractDataProvider
import os
import sys
from typing import Optional


class Provider(AbstractDataProvider):
    # DataProvider Implementations
    def fetch_repositories(self, parameters, sort, num_results):
        pages = self.pages_count(num_results)

        repositories = []
        queries = []
        for page_number, per_page in enumerate(pages):
            query_url = self.assemble_repository_query(parameters, sort, page_number + 1, per_page)
            queries.append(query_url)
            print("query:" + query_url, file=sys.stderr)
            repositories.append(rq.get(query_url).json())

        return self.json_responses(repositories, queries)

    def fetch_readme_url(self, repo_full_name) -> Optional[str]:
        base_url = 'https://api.github.com/repos'
        token = os.environ['GITHUB_TOKEN']
        request_url = f'{base_url}/{repo_full_name}/readme?access_token={token}'

        try:
            response = rq.get(request_url)
        except rq.exceptions.RequestException as e:
            # TODO: Handle error
            print("ERROR HERE:", file=sys.stderr)
            print(e, file=sys.stderr)

        response_json = response.json()
        readme_url = response_json.get('download_url')

        return readme_url

    def download_readme(self, download_url, repo_full_name, language=''):
        response = rq.get(download_url)

        file_name = repo_full_name.replace('/', '.')
        folder_path = f'{os.getcwd()}/containerizedModel/input/clf_target_readmes/{language}'

        if not os.path.exists(folder_path):
            os.mkdir(folder_path)

        file = open(f'{folder_path}/{file_name}.md', "wb")
        file.write(response.content)
        file.close()

    # Auxiliar Methods
    def pages_count(self, num_results):
        page_count = []
        github_page_limit = 100

        for x in range(math.floor(num_results / github_page_limit)):
            page_count.append(github_page_limit)

        remainder = num_results % github_page_limit
        if remainder != 0:
            page_count.append(remainder)

        return page_count

    def assemble_repository_query(self, parameters, sort, page_number, per_page):
        base_url = "https://api.github.com/search/repositories?q="
        base_url += parameters + "+sort:" + sort + "&per_page=" + str(per_page) + "&page=" + str(page_number)
        return base_url

    def json_responses(self, responses, urls):
        json = {}

        json["repos"] = reduce(lambda accum, response: accum + response["items"], responses, [])
        json["urls"] = urls
        return json

    def get_language_repos(self, language):
        language_query = f'language:{language}'
        sort = "stars"
        number_repos = 3

        formatted_json = self.fetch_repositories(language_query, sort, number_repos)

        names_readme_urls_tuples = []
        for repo in formatted_json['repos']:
            repo_full_name = repo['full_name']
            download_url = self.fetch_readme_url(repo_full_name)

            if download_url is not None:
                names_readme_urls_tuples.append((repo_full_name, download_url))
        current_index = 1
        for (repo_full_name, download_url) in names_readme_urls_tuples:
            self.download_readme(download_url, repo_full_name, language.lower())
            current_index += 1

        return current_index

    def generate(self, language):
        log_filename = 'containerizedModel/log/generate.log'
        logging.basicConfig(handlers=[logging.FileHandler(log_filename, 'w+', 'utf-8')], level=20)
        logging.getLogger().addHandler(logging.StreamHandler())
        logging.info(f'generating {language} json files')

        config = configparser.ConfigParser()
        config.read('containerizedModel/config/config.cfg')
        db_filename = config['DEFAULT']['db_filename']
        conn = sqlite3.connect(db_filename)
        c = conn.cursor()
        response = {'status': True, 'message': 'Files generated successfully'}

        try:
            language_processing = c.execute(f'SELECT * FROM languages_dates WHERE processing').fetchone()
            if language_processing:
                raise Exception('Another language is already being processed, try again later.')
            # saving processing TRUE flag
            language_saved = c.execute(f'SELECT * FROM languages_dates WHERE language = "{language}"').fetchone()
            if language_saved:
                self.change_flag(c, True, language)
                conn.commit()
            else:
                self.change_flag(c, True, 'default')
                conn.commit()

            saved_readmes = self.get_language_repos(language)
            load_sections(language)
            classify_sections(language)
        except Exception as e:
            logging.exception(e)
            response = {'status': False, 'message': str(e)}
        finally:
            # saving processing FALSE flag
            language_saved = c.execute(f'SELECT * FROM languages_dates WHERE language = "{language}"').fetchone()
            if language_saved:
                self.change_flag(c, False, language)
                conn.commit()
            else:
                self.change_flag(c, False, 'default')
                conn.commit()
            conn.close()
            return response


    def change_flag(self, c, value, language):
        return c.execute(f'UPDATE languages_dates SET processing={1 if value else 0} WHERE language = \'{language}\'')
