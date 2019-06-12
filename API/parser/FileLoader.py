import csv
import os
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


def get_markdown_file_names(folder_path: str) -> List[str]:
    file_names = []

    for root, directories, files in os.walk(folder_path):
        for file in files:
            if '.md' in file:
                file_names.append(file)

    return file_names
