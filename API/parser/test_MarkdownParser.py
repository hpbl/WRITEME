import unittest
from API.parser.MarkdownParser import generate_section_tree


class MarkdownParserTestCase(unittest.TestCase):
    markdown_string_content = """
# File Title
> impressive tagline
![header image](image/path.png)


## Section 2
READMEs are tight!

### Section 3 child
```
# cool usage example
print('hello, world!')
```


## Section 4
some great description
"""

    section_tree = [
        {
            'level': 1,
            'id': 'file-title',
            'name': 'File Title',
            'children': [
                {
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
                },
                {
                    'level': 2,
                    'id': 'section-4',
                    'name': "Section 4",
                    'children': []
                }
            ]
        }
    ]

    def test_generate_section_tree(self):
        """Given a markdown str, generate the sections tree"""
        generated_tree = generate_section_tree(self.markdown_string_content)
        self.assertEqual(generated_tree, self.section_tree)

    def test_generate_section_tree_empty(self):
        """"Given a empty markdown str, generate and empty tree"""
        generated_tree = generate_section_tree('')
        self.assertEqual(generated_tree, [])
