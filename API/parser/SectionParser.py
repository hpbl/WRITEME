import sys
import re
from typing import List
from API.parser.Section import Section


def parse_classified_sections(classified_sections_ordered_dicts):
    sections = []
    for ordered_dict in classified_sections_ordered_dicts:

        heading_markdown = ordered_dict['heading_markdown']
        heading_level_regex = re.compile(r"#*")

        heading_tags = re.match(heading_level_regex, heading_markdown).group()
        heading_level = len(heading_tags)

        heading_title = re.sub(heading_tags, '', heading_markdown).lstrip()

        section_codes = parse_section_codes(ordered_dict['section_code'])

        sections.append(
            Section(
                ordered_dict['file_id'],
                ordered_dict['section_id'],
                ordered_dict['local_readme_file'],
                heading_level,
                heading_title,
                section_codes
            )
        )
    return sections


def parse_section_codes(section_codes_string: str) -> List[int]:
    section_codes_list = section_codes_string.split(',')
    print(section_codes_list, file=sys.stderr)
    return [
        999 if code == '-' else
        998 if code == '' else
        int(code)
        for code in section_codes_list
    ]