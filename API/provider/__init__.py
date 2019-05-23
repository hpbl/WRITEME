from provider.Provider import Provider
from provider.MockProvider import MockProvider

def get_provider(debug):
    if debug:
        return MockProvider()
    else:
        return Provider()
