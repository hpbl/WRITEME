import csv
import re
from API.parser.Section import Section


def parse_classified_sections(classified_sections_ordered_dicts):
    sections = []
    for ordered_dict in classified_sections_ordered_dicts:

        heading_markdown = ordered_dict['heading_markdown']
        heading_level_regex = re.compile(r"#*")

        heading_tags = re.match(heading_level_regex, heading_markdown).group()
        heading_level = len(heading_tags)

        heading_title = re.sub(heading_tags, '', heading_markdown).lstrip()

        section_codes_string = ordered_dict['section_codes']
        if len(section_codes_string) > 1:
            section_codes = section_codes_string.split(',')
        else:
            section_codes = [section_codes_string]

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

