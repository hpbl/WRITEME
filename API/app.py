from flask import Flask, jsonify
from lib.Provider import fetch_repositories
from lib.MockProvider import fetch_repositories as mock_fetch_repositories


app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello!'


@app.route('/<language>')
def get_language_repos(language):
    language_query = f'language:{language}'
    sort = "stars"
    number_repos = 100

    formatted_json = mock_fetch_repositories(language_query, sort, number_repos)

    return jsonify(formatted_json)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)