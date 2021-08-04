import sys
sys.path.append('../..')

import configparser
import logging
import sqlite3
from sqlite3 import Error
from containerizedModel.script.helper.helper2 import *
import sys
import os
import shutil
import pandas
from containerizedModel.script.helper.extractor import *


def load_sections(language=''):
    config = configparser.ConfigParser()
    config.read('containerizedModel/config/config.cfg')
    db_filename = config['DEFAULT']['db_filename']
    readme_file_dir = config['DEFAULT']['target_readme_file_dir']
    temp_abstracted_markdown_file_dir = config['DEFAULT']['temp_target_abstracted_markdown_file_dir']

    if language:
        readme_file_dir = f'{readme_file_dir}{language}/'
    
    log_filename = 'containerizedModel/log/load_target_sections.log'
    logging.basicConfig(handlers=[logging.FileHandler(log_filename, 'w+', 'utf-8')], level=20)
    logging.getLogger().addHandler(logging.StreamHandler())
    
    # Extract heading
    overview = extract_headings_from_files_in_directory(readme_file_dir, db_filename, 'target_section_overview')    
    
    filenames = retrieve_readme_filenames_from_db(db_filename, 'target_section_overview')
    delete_existing_section_content_data(temp_abstracted_markdown_file_dir, db_filename, 'target_section_content')
    abstract_out_markdown(filenames, readme_file_dir, temp_abstracted_markdown_file_dir)
    extract_section_from_abstracted_files_v2(temp_abstracted_markdown_file_dir, db_filename, 'target_section_overview','target_section_content')
    logging.info("Operation completed")


if __name__ == '__main__':
    load_sections()