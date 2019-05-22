from flask import Flask, jsonify
from lib.Provider import fetch_repositories
from functools import reduce

app = Flask(__name__)

@app.route('/')
def hello():
    return 'hello'

def jsonResponses(responses, urls):
    json = {}
    json["repos"] = reduce(lambda accum, response: accum + response.json()["items"], responses, [])
    json["urls"] = urls
    return json


@app.route('/<language>')
def get_language_repos(language):
    language_query = f'language:{language}'
    sort = "stars"
    number_repos = 100

    (query_responses, urls) = fetch_repositories(language_query, sort, number_repos)

    formatted_json = jsonResponses(query_responses, urls)

    response = ''
    for repo in formatted_json['repos']:
        response += f'<li>{repo["html_url"]}</li>'
    response += ''

    return jsonify(response)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)