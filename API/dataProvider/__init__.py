from API.dataProvider.Provider import Provider
from API.dataProvider.MockProvider import MockProvider


def get_provider(debug):
    return Provider()
    if debug:
        return MockProvider()
    else:
        return Provider()
