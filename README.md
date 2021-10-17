# WRITEME
> Helping developers write README with data-driven insights.

[![Python 3.6](https://img.shields.io/badge/python-3.6-blue.svg)](https://www.python.org/downloads/release/python-360/)
<a href="http://flask.pocoo.org/"><img
   src="http://flask.pocoo.org/static/badges/made-with-flask-s.png"
   border="0"
   alt="made with Flask"
   title="made with Flask">
</a>

This project started as my graduation project. It was built with open-source in mind, so feel free to contribute, all help is welcome.

The tool consists of a web interface where developers can obtain recommendations of sections, based on research and the most popular open-source repositories, for the READMEs they are writing.


## Why
Writing a README that is effective is a problem for many developers. There isn't a official guide on how to write a README, only a bunch of opinionated blog posts.

Recent (as of 2019) research has started to analyse the content and structure of README files by mining open-source repositories on GitHub, and so obtaining a general data-driven idea of what should be expected of this sort of file.

Our tool takes advantage of these researches and builds a GUI on top of them, adding information specific to the type of project that is being documented, so the developer can have recommendations of how READMEs for this kind of project are documented today.

## Running
This tool was built using Python 3.5 and [Flask](http://flask.pocoo.org/).

Everything is inside a docker container for ease of environment configuration.

1. Install and run [Docker](https://www.docker.com/products/docker-desktop).
2. Clone the repo.
3. Run on terminal:
    ````bash
    docker-compose up
    ````
4. The API should be live on http://0.0.0.0:5000/

### Front-end
Currently the front-end is not properly integrated with the back-end, but it can stand-alone for Swift READMEs. Check [README](./front-end/readme-assist-tool/README.md) for instructions.

## Testing
Tests are currently on the same module as the files they test. Their names start with `test_TestedFile`, where `TestedFile` is the file being tested.

1. Run on terminal to open the container's shell:
    ```bash
    docker-compose run --entrypoint sh backend
    ```
2. Run on shell to run all tests:
    ````bash
    python -m unittest
    ````

## Endpoints
Currently the API is static, it only serves pre-fetched Swift READMEs. The following endpoints are available:
- To access the classified sections JSON: `/sections`
- To access the classified sections JSON, grouped by heading level: `/sections/level`
- To access every README in tree format: `/tree`


## Folder Structure
- `API/`:
    - `config/`: Configuration scripts. Sets debug mode.
    - `dataProvider/`: Data provider scripts. Fetches data from API or local mock.
    - `model/`: Model classes.
    - `parser`: Parsing and loading of CSV and Markdown files.
    - `sectionAnalyzer`: Sections grouping and analysis.
    - `sectionProvider`: Provides sections (currently from CSV file)
    - `readmeProvider`: Provides readmes in tree format (currently from local .md files)
- `containerizedModel/`: Scripts related to the [classifier](https://github.com/hpbl/readmeclassifier).
- `speedTests`: Tests regarding parallel requests.
-  `app.py`: Initializes the server.



## Tool Roadmap

### Back-end
- [x] Fetch top repos of language on GitHub.
- [x] Fetch README from repos.
- [x] Automatic classification of READMEs.
- [x] Grouping of classified sections.
- [ ] Document API.
- [ ] Deploy.

### Front-end
- [x] Design lo-fi prototype.
- [ ] Design UI.
- [ ] Implement UI.
- [x] Consume API.
- [ ] Secure Domain.
- [ ] Deploy.

### Research
- [ ] Write paper


## Contributors
- Hilton Pintor [@hpbl](mailto:hpbl@cin.ufpe.br).
- Lucas Figueiredo [@lsf](mailto:lsf@cin.ufpe.br).
- Ricardo Barioni [@rrb](mailto:rrb@cin.ufpe.br).

Powered by [Voxar labs](https://cin.ufpe.br/~voxarlabs).
