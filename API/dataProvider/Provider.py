import configparser
import math
import logging
import datetime
import sqlite3
import json
from containerizedModel.script.classifier.classifier_classify_target import classify_sections
from containerizedModel.script.loading.load_target_sections import load_sections
import requests as rq
from functools import reduce
from API.dataProvider.AbstractDataProvider import AbstractDataProvider
from API.sectionProvider import get_section_provider
from API.readmeProvider import get_readme_provider
import os
import sys
from typing import Optional
import glob
import shutil
import time
from datetime import datetime, timedelta
sys.path.append('containerizedModel')


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
        request_url = f'{base_url}/{repo_full_name}/readme'
        headers = {'Authorization': f'token {token}'}

        log_filename = 'containerizedModel/log/requests.log'
        logging.basicConfig(handlers=[logging.FileHandler(log_filename, 'w+', 'utf-8')], level=20)
        logging.getLogger().addHandler(logging.StreamHandler())
        try:
            response = rq.get(request_url, headers=headers)
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
        number_repos = 500

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

        try:
            config = configparser.ConfigParser()
            config.read('containerizedModel/config/config.cfg')
            db_filename = config['DEFAULT']['db_filename']
            conn = sqlite3.connect(db_filename)
            c = conn.cursor()
            response = {'status': True, 'message': 'Files generated successfully'}
            if not self.validation_expired(c, language):
                raise Exception('Language was recently processed.')

            language_saved = c.execute(f'SELECT * FROM languages_dates WHERE language = "{language}"').fetchone()

            saved_readmes = self.get_language_repos(language)
            logging.info(f'>>>Saved {saved_readmes} {language} READMEs')
            if saved_readmes > 0 and not language_saved:
                c.execute(f'-- INSERT INTO languages_dates (language) VALUES ("{language}")')
                conn.commit()

            load_sections(language)
            logging.info(f'>>>Loaded {language} sections')
            classify_sections(language)
            logging.info(f'>>>Classified {language} sections')

            sections = get_section_provider().fetch_classified_sections(
                f'containerizedModel/output/output_section_codes_{language}.csv')
            trees = get_readme_provider().fetch_readmes_trees(
                f'containerizedModel/input/clf_target_readmes/{language.lower()}')
            sections_serializable = list(map(lambda s: s.to_json(), sections))

            logging.info(f'saving {language} sections json file')
            self.write_json(f'sections_{language}.json', json.dumps(sections_serializable))
            logging.info(f'saving {language} trees json file')
            self.write_json(f'trees_{language}.json', json.dumps(trees))

            # cleaning files
            shutil.rmtree(f'containerizedModel/input/clf_target_readmes/{language.lower()}')
            logging.info(f'removed {language} folder')

            dev_and_eval_readmes_readmes = glob.glob('containerizedModel/input/dev_and_eval_readmes/*.md')
            for f in dev_and_eval_readmes_readmes:
                try:
                    os.remove(f)
                except OSError as e:
                    print("Error: %s : %s" % (f, e.strerror))

            if self.json_output_exists(f'trees_{language}.json') and self.json_output_exists(f'sections_{language}.json'):
                conn = sqlite3.connect(db_filename)
                c = conn.cursor()
                self.save_last_execution(c, conn, language)
                conn.close()
        except Exception as e:
            logging.exception(e)
            response = {'status': False, 'message': str(e)}
        finally:
            return response

    def save_last_execution(self, c, conn, language):
        c.execute(f'UPDATE languages_dates SET last_execution_date="{datetime.now().strftime("%Y-%m-%d")}" WHERE language = \'{language}\'')
        conn.commit()

    def validation_expired(self, c, language):
        raw = c.execute(f'SELECT last_execution_date, days_interval FROM languages_dates WHERE language = \'{language}\'').fetchone()
        return not raw or not raw[0] or datetime.now() > (datetime.strptime(raw[0], '%Y-%m-%d')  + timedelta(days=raw[1]))


    def write_json(self, filename, data):
        file_path = f'{os.getcwd()}/containerizedModel/output/{filename}'
        if os.path.exists(file_path):
            os.remove(file_path)
        file = open(f'{file_path}', "w+")
        file.write(data)
        file.close()
        
    def json_output_exists(self, filename):
        file_path = f'{os.getcwd()}/containerizedModel/output/{filename}'
        return os.path.exists(file_path)

    def get_json_file(self, language, data_type='sections'):
        log_filename = 'containerizedModel/log/get_sections_trees.log'
        logging.basicConfig(handlers=[logging.FileHandler(log_filename, 'w+', 'utf-8')], level=20)
        logging.getLogger().addHandler(logging.StreamHandler())

        file_path = f'{os.getcwd()}/containerizedModel/output/{data_type}_{language.lower()}.json'
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                data = file.read()
                logging.info(data)
                return json.loads(data)
        else:
            logging.error(f'file {file_path} not found')
            raise ValueError('Data not found')
