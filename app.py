from flask import Flask, jsonify
from API.dataProvider import get_provider
from API.sectionProvider import get_section_provider
from API.sectionAnalyzer.SectionAnalyzer import group_sections_by_level
from API.config import DEBUG
from containerizedModel.script.classifier.classifier_classify_target import classify_sections
from containerizedModel.script.loading.load_target_sections import load_sections
from API.model.MyJSONEncoder import MyJSONEncoder
from API.readmeProvider import get_readme_provider
from google.cloud import firestore
import json

# retrieving model file (joblib.load) requires this to work
import sys
sys.path.append('containerizedModel')


app = Flask(__name__)
app.json_encoder = MyJSONEncoder

db = firestore.Client()


@app.route('/')
def hello():
    style = 'color:cyan;background-color:pink'
    return f'<h1 style={style}>README Assist Tool</h1>' \
        f'<ul>' \
        f'<li>Access <a href="/sections">/sections</a> for sections JSON</li>' \
        f'<li>Access <a href="/sections/level">/sections/level</a> for sections (grouped by level) JSON</li>' \
        f'<li>Access <a href="/tree">/tree</a> for READMEs headings in tree format JSON</li>' \
        f'</ul>'


@app.route('/load')
def load():
    load_sections()
    return 'loaded sections'


@app.route('/classify')
def classify():
    classify_sections()
    return "classified readmes"


@app.route('/sections')
def sections():
    provider = get_section_provider()
    sections = provider.fetch_classified_sections('containerizedModel/output/output_section_codes.csv')
    return jsonify(sections)


@app.route('/sections/level')
def sections_by_level():
    provider = get_section_provider()
    sections = provider.fetch_classified_sections('containerizedModel/output/output_section_codes.csv')
    grouped_sections = group_sections_by_level(sections)
    return jsonify(grouped_sections)


@app.route('/tree')
def readme_trees():
    provider = get_readme_provider()
    trees = provider.fetch_readmes_trees('containerizedModel/input/clf_target_readmes')
    return jsonify(trees)


@app.route('/<language>')
def get_language_repos(language):
    language_query = f'language:{language}'
    sort = "stars"
    number_repos = 300

    provider = get_provider(DEBUG)
    formatted_json = provider.fetch_repositories(language_query, sort, number_repos)

    names_readme_urls_tuples = []
    for repo in formatted_json['repos']:
        repo_full_name = repo['full_name']
        download_url = provider.fetch_readme_url(repo_full_name)

        if download_url is not None:
            names_readme_urls_tuples.append((repo_full_name, download_url))

    current_index = 1
    for (repo_full_name, download_url) in names_readme_urls_tuples:
        provider.download_readme(download_url, repo_full_name)
        print(f'saved file: {current_index}', file=sys.stderr)
        current_index += 1

    return jsonify(f'saved {current_index - 1} {language} READMEs')


@app.route('/firebase/fetch')
def fetch_sections():
    users_ref = db.collection('languages').document('swift')
    if users_ref:
        return users_ref.get().to_dict()
    else:
        return "nada"


# @app.route('/firebase/save/trees/<language>')
# def save_trees(language):
#     with open(f'front-end/readme-assist-tool/src/common/languages/{language}_trees.json') as language_tree_file:
#         language_tree_json = json.load(language_tree_file)
#
#         # TODO: check if language should be sanitized
#         language_ref = db.collection('languages').document(language)
#         language_ref.set({'tree': language_tree_json})
#
#     return jsonify([language.to_dict() for language in db.collection('languages').get()])


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=DEBUG)
