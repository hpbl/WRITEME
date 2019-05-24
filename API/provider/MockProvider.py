import json
import requests as rq
from provider.AbstractDataProvider import AbstractDataProvider


class MockProvider(AbstractDataProvider):
    def fetch_repositories(self, parameters, sort, num_results):
        mock_api_response = json.load(open(f'API/provider/mock.json', 'r'))
        return mock_api_response

    def fetch_readme_url(self, repo_full_name):
        base_url = 'https://api.github.com/repos'
        token = 'a595da1188d630414b9a3c28044ce1ba951895ec'
        request_url = f'{base_url}/{repo_full_name}/readme?access_token={token}'

        try:
            response = rq.get(request_url)
        except rq.exceptions.RequestException as e:
            # TODO: Handle error
            print(e)

        response_json = response.json()
        readme_url = response_json['download_url']

        return readme_url
