from flask import Flask, jsonify, Response
import logging
from API.dataProvider import get_provider
from API.sectionProvider import get_section_provider
from API.sectionAnalyzer.SectionAnalyzer import group_sections_by_level
from API.config import DEBUG
from containerizedModel.script.classifier.classifier_classify_target import classify_sections
from containerizedModel.script.loading.load_target_sections import load_sections
from API.model.MyJSONEncoder import MyJSONEncoder
from API.readmeProvider import get_readme_provider
from rq import Queue
from redis import Redis

# retrieving model file (joblib.load) requires this to work
import sys

sys.path.append('containerizedModel')

app = Flask(__name__)
app.json_encoder = MyJSONEncoder
q = Queue('high', connection=Redis(host='redis_service'))



@app.route('/')
def hello():
    style = 'color:cyan;background-color:pink'
    return f'<h1 style={style}>README Assist Tool</h1>' \
           f'<ul>' \
           f'<li>Access <a href="/sections">/sections</a> for sections JSON</li>' \
           f'<li>Access <a href="/sections/level">/sections/level</a> for sections (grouped by level) JSON</li>' \
           f'<li>Access <a href="/tree">/tree</a> for READMEs headings in tree format JSON</li>' \
           f'</ul>'


@app.route('/load/<language>')
def load(language=''):
    load_sections(language.lower())
    return 'loaded sections'


@app.route('/classify/<language>')
def classify(language=''):
    classify_sections(language.lower())
    return "classified readmes"


@app.route('/sections/<language>')
def sections(language=''):
    provider = get_section_provider()
    sections = provider.fetch_classified_sections(f'containerizedModel/output/output_section_codes_{language}.csv')
    return jsonify(sections)


@app.route('/sections/level/<language>')
def sections_by_level(language=''):
    provider = get_section_provider()
    sections = provider.fetch_classified_sections(f'containerizedModel/output/output_section_codes_{language}.csv')
    grouped_sections = group_sections_by_level(sections)
    return jsonify(grouped_sections)


@app.route('/tree/<language>')
def readme_trees(language=''):
    provider = get_readme_provider()
    trees = provider.fetch_readmes_trees(f'containerizedModel/input/clf_target_readmes/{language.lower()}')
    return jsonify(trees)


@app.route('/repos/<language>')
def get_language_repos(language=''):
    provider = get_provider(DEBUG)
    saved_readmes = provider.get_language_repos(language.lower())
    return jsonify(f'saved {saved_readmes} {language} READMEs')


@app.route('/<language>')
def generate(language):
    with app.app_context():
        provider = get_provider(DEBUG)
        q.enqueue(provider.generate, args=(language.lower(),), job_timeout=900)
        res = Response('Job enqueued successfully', status=200)
        res.headers['Access-Control-Allow-Origin'] = '*'
        return res



@app.route('/files/<data_type>/<language>')
def get_sections_object(data_type, language):
    try:
        provider = get_provider(DEBUG)
        response = jsonify(provider.get_json_file(language.lower(), data_type))
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response
    except ValueError as err:
        response = Response("{'error': 'Data not found'}", status=404, mimetype='application/json')
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=DEBUG)
