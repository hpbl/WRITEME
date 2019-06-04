from API.sectionProvider.AbstractSectionProvider import AbstractSectionProvider
from API.sectionProvider.CSVSectionProvider import CSVSectionProvider


def get_section_provider() -> AbstractSectionProvider:
    return CSVSectionProvider()