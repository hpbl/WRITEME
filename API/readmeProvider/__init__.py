from API.readmeProvider.AbstractREADMEProvider import AbstractREADMEProvider
from API.readmeProvider.LocalREADMEProvider import LocalREADMEProvider


def get_readme_provider() -> AbstractREADMEProvider:
    return LocalREADMEProvider()