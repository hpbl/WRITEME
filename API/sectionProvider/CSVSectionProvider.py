from typing import Optional, List
from API.parser.Section import Section
from API.parser.FileLoader import load_csv_file
from API.parser.SectionParser import parse_classified_sections
from API.sectionProvider.AbstractSectionProvider import AbstractSectionProvider


class CSVSectionProvider(AbstractSectionProvider):
    def fetch_classified_sections(self, url) -> Optional[List[Section]]:
        classified_csv_sections = load_csv_file(url)
        if classified_csv_sections:
            return parse_classified_sections(classified_csv_sections)
        else:
            return None
