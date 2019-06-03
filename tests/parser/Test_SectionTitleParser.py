import unittest
from API.parser.SectionParser import *


class TestSectionTitleParser(unittest.TestCase):
    """"Test cases for SectionTitleParser"""


    def setUp(self):
        """Defining mock csv to be parsed on tests"""
        self.csv_file_path = 'tests/parser/mock_output_section_codes.csv'


    def test_load_classified_sections(self):
        

    def test_parse_classified_sections(self):
        """"Test if csv is correctly loaded to memory"""
