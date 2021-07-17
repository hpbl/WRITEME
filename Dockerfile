FROM python:3.8
MAINTAINER Hilton Pintor

#set envionment variables
# This prevents Python from writing out pyc files
ENV PYTHONDONTWRITEBYTECODE 1

# This keeps Python from buffering stdin/stdout
ENV PYTHONUNBUFFERED 1

ENV PYTHONPATH="$PYTHONPATH:/app"

#set work directory early so remaining paths can be relative
WORKDIR /app

# Adding requirements file to current directory
# just this file first to cache the pip install step when code changes
COPY requirements.txt ../requirements.txt

#install dependencies
RUN pip install -r ../requirements.txt
RUN python3 init.py

RUN mkdir -p /app/classifier/temp
RUN mkdir -p /app/classifier/temp/abstracted_markdown
RUN mkdir -p /app/classifier/temp/target_abstracted_markdown
RUN mkdir -p /app/classifier/log
RUN mkdir -p /app/classifier/output
RUN mkdir -p /app/classifier/input/clf_target_readmes
RUN mkdir -p /app/classifier/input/dev_and_eval_readmes

EXPOSE 5000

# start the flask webserver
CMD [ "python", "app.py"]