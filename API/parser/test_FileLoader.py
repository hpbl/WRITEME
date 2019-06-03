import unittest
from API.parser.FileLoader import load_csv_file

class FileLoaderTestCase(unittest.TestCase):
    """File Loader test case"""

    def setUp(self):
        """Test variables"""
        self.nonexistent_csv_file_path = "API/parser/nonexistent_file.csv"

    def test_load_csv_file_nonexistent(self):
        """Given that a file does not exist, assert that load_csv_file returns None"""
        res = load_csv_file(self.nonexistent_csv_file_path)
        self.assertEqual(res, None)