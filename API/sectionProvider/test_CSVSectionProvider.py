import unittest
import csv
import os
from API.model.Section import Section
from API.sectionProvider.CSVSectionProvider import CSVSectionProvider


class CSVSectionProviderTestCase(unittest.TestCase):
    """CSV Section Provider Test Case"""

    nonexistent_csv_file_path = "API/sectionProvider/nonexistent_file.csv"
    existent_csv_file_path = "API/sectionProvider/existent_file.csv"
    headers = ['file_id', 'section_id', 'local_readme_file', 'heading_markdown', 'section_code']
    csv_file_rows = [
        ['1', '1', 'Quick.Quick.md', '#### Nimble', '1,3'],
        ['1', '2', 'Quick.Quick.md', '## Swift Version', '3,4'],
        ['1', '3', 'Quick.Quick.md', '# Documentation', '3,6'],
    ]

    def setUp(self):
        """Creating test csv file and Section list"""
        with open(self.existent_csv_file_path, mode='w') as sections_csv:
            section_writer = csv.writer(sections_csv, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            section_writer.writerow(self.headers)
            [section_writer.writerow(row) for row in self.csv_file_rows]

        self.sections = [
            Section(
                file_id='1',
                section_id='1',
                readme_file_name='Quick.Quick.md',
                heading_level=4,
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
                section_id='3',
                readme_file_name='Quick.Quick.md',
                heading_level=1,
                title='Documentation',
                section_codes=[3, 6]
            )
        ]

    def test_fetch_classified_sections_existent(self):
        """
            Given a path to a csv file with classified sections,
            When the provider fetches sections from that file
            Then we should have a list of Section objects
        """
        given = self.existent_csv_file_path
        when = CSVSectionProvider().fetch_classified_sections(given)
        self.assertEqual(when, self.sections)

    def test_fetch_classified_sections_nonexistent(self):
        """
            Given a path to a nonexistent csv file,
            When the provider tries to fetch sections from that file
            Then we should have None
        """
        given = self.nonexistent_csv_file_path
        when = CSVSectionProvider().fetch_classified_sections(given)
        self.assertEqual(when, None)

    def tearDown(self):
        os.remove(self.existent_csv_file_path)