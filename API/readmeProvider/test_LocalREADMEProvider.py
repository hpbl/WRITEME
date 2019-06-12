import unittest
import shutil
import os
from API.readmeProvider.LocalREADMEProvider import LocalREADMEProvider


class LocalREADMEProviderTestCase(unittest.TestCase):
    first_markdown_string_content = """
# File Title
> impressive tagline
![header image](image/path.png)

## Section 4
some great description
"""

    second_markdown_string_content = """
## Section 2
READMEs are tight!
    
### Section 3 child
```
# cool usage example
print('hello, world!')
```
"""

    readmes_trees = [
        [{
            'level': 1,
            'id': 'file-title',
            'name': 'File Title',
            'children': [
                {
                    'level': 2,
                    'id': 'section-4',
                    'name': "Section 4",
                    'children': []
                }
            ]
        }],
        [{
            'level': 2,
            'id': 'section-2',
            'name': 'Section 2',
            'children': [
                {
                    'level': 3,
                    'id': 'section-3-child',
                    'name': 'Section 3 child',
                    'children': []
                }
            ]
        }]
    ]

    def setUp(self):
        self.provider = LocalREADMEProvider()
        self.readmes_folder = 'API/readmeProvider/testreadmes'

        os.mkdir(self.readmes_folder)

        with open(f'{self.readmes_folder}/1.md', mode='w') as markdown_file:
            markdown_file.write(self.first_markdown_string_content)

        with open(f'{self.readmes_folder}/2.md', mode='w') as markdown_file:
            markdown_file.write(self.second_markdown_string_content)

    def test_fetch_readmes_trees(self):
        res = self.provider.fetch_readmes_trees(self.readmes_folder)
        self.assertEqual(res, self.readmes_trees)

    def tearDown(self):
        shutil.rmtree(self.readmes_folder)
