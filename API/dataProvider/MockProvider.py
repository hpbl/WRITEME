import json
from API.dataProvider.AbstractDataProvider import AbstractDataProvider


class MockProvider(AbstractDataProvider):
    def fetch_repositories(self, parameters, sort, num_results):
        mock_api_response = json.load(open(f'API/dataProvider/mock-data/mock.json', 'r'))
        return mock_api_response

    def fetch_readme_url(self, repo_full_name):
        mock_api_response = json.load(open(f'API/dataProvider/mock-data/mock-readme-urls.json'))
        return mock_api_response[repo_full_name]

    def download_readme(self, download_url, repo_full_name, language):
        return

    def clear_readmes(self, language):
        return
