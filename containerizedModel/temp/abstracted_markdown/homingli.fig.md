# Fig

@abstr_hyperlink 

Fast, isolated development environments using Docker.

Define your app's environment with Docker so it can be reproduced anywhere:
    
    
    FROM python: @abstr_number . @abstr_number 
    ADD . /code
    WORKDIR /code
    RUN pip install -r requirements.txt
    CMD python app.py
    

Define the services that make up your app so they can be run together in an isolated environment:

@abstr_code_section 

(No more installing Postgres on your laptop!)

Then type `fig up`, and Fig will start and run your entire app:

@abstr_image 

There are commands to:

  * start, stop and rebuild services
  * view the status of running services
  * tail running services' log output
  * run a one-off command on a service



## Installation and documentation

Full documentation is available on @abstr_hyperlink .
