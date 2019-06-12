import unittest
import csv
import os
import collections
from API.parser.FileLoader import load_csv_file, load_markdown_file


class FileLoaderTestCase(unittest.TestCase):
    """File Loader test case"""
    nonexistent_csv_file_path = 'API/parser/nonexistent_file.csv'
    existent_csv_file_path = 'API/parser/existent_file.csv'
    headers = ['file_id', 'section_id', 'local_readme_file', 'heading_markdown', 'section_code']
    csv_file_rows = [
        ['1', '1', 'Quick.Quick.md', '#### Nimble', '1,3'],
        ['1', '2', 'Quick.Quick.md', '## Swift Version', '3,4'],
        ['1', '3', 'Quick.Quick.md', '## Documentation', '3,6'],
        ['1', '4', 'Quick.Quick.md', '## Projects using Quick', '6'],
        ['1', '5', 'Quick.Quick.md', '## Who uses Quick', '1,6'],
        ['1', '6', 'Quick.Quick.md', '## License', '5'],
    ]
    parsed_csv_file = []

    nonexistent_markdown_file_path = 'API/parser/nonexistent_file.md'
    existent_markdown_file_path = 'API/parser/existent_file.md'
    markdown_file_content = """
        # File Title
        > impressive tagline
        ![header image](image/path.png)
    
        ## Header 2
        some great description
        
        ```
        # cool usage example
        print('hello, world!')
        ```
    """

    def setUp(self):
        """Creating test csv file"""
        with open(self.existent_csv_file_path, mode='w') as sections_csv:
            section_writer = csv.writer(sections_csv, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
            section_writer.writerow(self.headers)
            [section_writer.writerow(row) for row in self.csv_file_rows]

        with open(self.existent_markdown_file_path, mode='w') as markdown_file:
            markdown_file.write(self.markdown_file_content)

    def test_load_csv_file_nonexistent(self):
        """Given that a file does not exist, assert that load_csv_file returns None"""
        res = load_csv_file(self.nonexistent_csv_file_path)
        self.assertEqual(res, None)

    def test_load_csv_file(self):
        """Given that a file does exist, assert that load_csv_file returns it's content"""
        res = load_csv_file(self.existent_csv_file_path)

        parsed_csv_file = []
        for row in self.csv_file_rows:
            ordered_dict = collections.OrderedDict()
            for (header, item) in zip(self.headers, row):
                ordered_dict[header] = item
            parsed_csv_file.append(ordered_dict)

        self.assertEqual(res, parsed_csv_file)

    def test_load_markdown_file_nonexistent(self):
        """Given that a file does not exist, assert that load_markdown_file returns None"""
        res = load_markdown_file(self.nonexistent_markdown_file_path)
        self.assertIsNone(res)

    def test_load_markdown_file(self):
        """Given that a file does exist, assert that load_markdown_file returns it's content"""
        res = load_markdown_file(self.existent_markdown_file_path)
        self.assertEqual(res, self.markdown_file_content)

    def tearDown(self):
        os.remove(self.existent_csv_file_path)
        os.remove(self.existent_markdown_file_path)
