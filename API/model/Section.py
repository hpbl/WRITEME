class Section():
    def __init__(self, file_id, section_id, readme_file_name, heading_level, title, section_codes):
        self.file_id = file_id
        self.section_id = section_id
        self.readme_file_name = readme_file_name
        self.heading_level = heading_level
        self.title = title
        self.section_codes = section_codes

    def __eq__(self, other):
        return (self.file_id, self.section_id, self.readme_file_name, self.heading_level, self.title, self.section_codes) == (other.file_id, other.section_id, other.readme_file_name, other.heading_level, other.title, other.section_codes)

    def to_json(self):
        return {
            'file_id': self.file_id,
            'section_id': self.section_id,
            'readme_file_name': self.readme_file_name,
            'heading_level': self.heading_level,
            'title': self.title,
            'section_codes': self.section_codes,
        }
