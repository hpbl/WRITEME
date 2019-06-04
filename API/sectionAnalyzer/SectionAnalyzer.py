from typing import Dict, List
from API.parser.Section import Section


def group_sections_by_level(sections: List[Section]) -> Dict[int, List[Section]]:
    grouped_sections = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
    }

    for section in sections:
        grouped_sections[section.heading_level].append(section)

    return grouped_sections
