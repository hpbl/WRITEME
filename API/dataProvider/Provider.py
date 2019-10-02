import math
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

    def download_readme(self, download_url, repo_full_name):
        response = rq.get(download_url)

        file_name = repo_full_name.replace('/', '.')
        folder_path = f'{os.getcwd()}/containerizedModel/input/targetREADMEs'

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