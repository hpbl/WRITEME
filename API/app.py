from flask import Flask, jsonify
from provider import get_provider
from config import DEBUG

app = Flask(__name__)


@app.route('/')
def hello():
    return jsonify(DEBUG)


@app.route('/<language>')
def get_language_repos(language):
    language_query = f'language:{language}'
    sort = "stars"
    number_repos = 100

    provider = get_provider(DEBUG);
    formatted_json = provider.fetch_repositories(language_query, sort, number_repos)

    return jsonify(formatted_json)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=DEBUG)
