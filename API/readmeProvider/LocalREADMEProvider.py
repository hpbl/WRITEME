from typing import Dict, List
from API.parser.FileLoader import load_markdown_file, get_markdown_file_names
from API.parser.MarkdownParser import generate_section_tree
from API.readmeProvider.AbstractREADMEProvider import AbstractREADMEProvider


class LocalREADMEProvider(AbstractREADMEProvider):
    def fetch_readmes_trees(self, url) -> List[List[Dict]]:
        markdown_file_names = get_markdown_file_names(url)
        markdown_trees = {
            file_name: generate_section_tree(load_markdown_file(f'{url}/{file_name}'))
            for file_name
            in markdown_file_names
        }

        return markdown_trees
