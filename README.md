# README-Assist-Tool
> Helping developers write README with data-driven insights.

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


## Folder Structure
- `API/`:
    - `config/`: Configuration scripts. Sets debug mode.
    - `provider/`: Data provider scripts. Fetches data from API or local mock.
    -  `app.py`: Initializes the server.
- `containerizedModel/`: Scripts related to the [classifier](https://github.com/hpbl/readmeclassifier).


## Tool Roadmap

### Back-end
- [x] Fetch top repos of language on GitHub.
- [ ] Fetch README from repos.
- [ ] Automatic classification of READMEs.
- [ ] Grouping of classified sections.
- [ ] Document API.
- [ ] Deploy.

### Front-end
- [x] Design lo-fi prototype.
- [ ] Design UI.
- [ ] Implement UI.
- [ ] Consume API.
- [ ] Secure Domain.
- [ ] Deploy.

### Research
- [ ] Write paper


## Contributors
- Hilton Pintor [@hpbl](mailto:hpbl@cin.ufpe.br).
- Lucas Figueiredo [@lsf](mailto:lsf@cin.ufpe.br).

Powered by [Voxar labs](cin.ufpe.br/~voxarlabs).