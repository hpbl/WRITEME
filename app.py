from flask import Flask, jsonify
from API.provider import get_provider
from API.config import DEBUG
from containerizedModel.script.classifier.load_target_sections import load_sections
from containerizedModel.script.classifier.classifier_classify_target import classify_sections
import sys


app = Flask(__name__)


@app.route('/')
def hello():
    # load_sections()
    classify_sections()
    style = 'color:cyan;background-color:pink'
    return f'<h1 style={style}>README Assist Tool</h1>'


@app.route('/<language>')
def get_language_repos(language):
    language_query = f'language:{language}'
    sort = "stars"
    number_repos = 100

    provider = get_provider(DEBUG)
    formatted_json = provider.fetch_repositories(language_query, sort, number_repos)

    names_readme_urls_tuples = [
        (repo['full_name'], provider.fetch_readme_url(repo['full_name']))
        for repo
        in formatted_json['repos']
    ]

    current_index = 1
    for (repo_full_name, download_url) in names_readme_urls_tuples:
        provider.download_readme(download_url, repo_full_name)
        print(f'saved file: {current_index}', file=sys.stderr)
        current_index += 1

    return jsonify(f'saved {current_index - 1} {language} READMEs')


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=DEBUG)
