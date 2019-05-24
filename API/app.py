from flask import Flask, jsonify
from provider import get_provider
from config import DEBUG

app = Flask(__name__)


@app.route('/')
def hello():
    return jsonify(f'debug mode: {DEBUG}')


@app.route('/<language>')
def get_language_repos(language):
    language_query = f'language:{language}'
    sort = "stars"
    number_repos = 100

    provider = get_provider(DEBUG)
    formatted_json = provider.fetch_repositories(language_query, sort, number_repos)

    readme_urls = [provider.fetch_readme_url(repo['full_name']) for repo in formatted_json['repos']]

    return jsonify(readme_urls)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=DEBUG)
