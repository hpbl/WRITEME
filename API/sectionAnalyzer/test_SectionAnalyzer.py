import unittest

from API.sectionAnalyzer.SectionAnalyzer import group_sections_by_level
from API.model.Section import Section

class SectionAnalyzerTestCase(unittest.TestCase):
    """Section Analyzer Test Case"""
    def setUp(self):
        self.sections = [
            Section(
                file_id='1',
                section_id='1',
                readme_file_name='Quick.Quick.md',
                heading_level=1,
                title='Nimble',
                section_codes=[1, 3]
            ),
            Section(
                file_id='1',
                section_id='2',
                readme_file_name='Quick.Quick.md',
                heading_level=2,
                title='Swift Version',
                section_codes=[3, 4]
            ),
            Section(
                file_id='1',
                section_id='1',
                readme_file_name='Quick.Quick.md',
                heading_level=2,
                title='Nimble',
                section_codes=[1, 3]
            ),
            Section(
                file_id='1',
                section_id='2',
                readme_file_name='Quick.Quick.md',
                heading_level=4,
                title='Swift Version',
                section_codes=[3, 4]
            )
        ]

    def test_group_sections_by_level(self):
        """
            Given a List of sections,
            When they are grouped by level
            Then we should have a dict with arrays for each level
        """
        given = self.sections
        when = group_sections_by_level(given)
        self.assertEqual(len(when[1]), 1)
        self.assertEqual(len(when[2]), 2)
        self.assertEqual(len(when[3]), 0)
        self.assertEqual(len(when[4]), 1)
        self.assertEqual(len(when[5]), 0)
        self.assertEqual(len(when[6]), 0)
