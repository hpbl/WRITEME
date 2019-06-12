import csv
from typing import Optional, List
from collections import OrderedDict


def load_csv_file(file_path) -> Optional[List[OrderedDict]]:
    try:
        with open(file_path, mode='r', encoding='utf-8') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            return [row for row in csv_reader]

    except OSError:
        return None


def load_markdown_file(file_path) -> Optional[str]:
    try:
        with open(file_path, mode='r', encoding='utf-8') as markdown_file:
            file_content = markdown_file.read()
            return file_content

    except OSError:
        return None
