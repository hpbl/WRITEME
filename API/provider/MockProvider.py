import json
import os


class MockProvider:
    def fetch_repositories(self, parameters, sort, num_results):
        mock_api_response = json.load(open(f'API/provider/mock.json', 'r'))
        return mock_api_response
