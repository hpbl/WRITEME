from typing import List, Dict
import markdown


def generate_section_tree(markdown_content: str) -> List[Dict]:
    md = markdown.Markdown(extensions=['toc', 'markdown.extensions.fenced_code'])
    html = md.convert(markdown_content)
    return md.toc_tokens
