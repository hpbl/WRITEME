from API.dataProvider.Provider import Provider
from API.dataProvider.MockProvider import MockProvider


def get_provider(debug):
    if debug:
        return MockProvider()
    else:
        return Provider()
