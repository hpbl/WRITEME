FROM python:3.8
MAINTAINER Hilton Pintor

#set envionment variables
# This prevents Python from writing out pyc files
ENV PYTHONDONTWRITEBYTECODE 1

# This keeps Python from buffering stdin/stdout
ENV PYTHONUNBUFFERED 1

ENV PYTHONPATH="$PYTHONPATH:/app"

# run this before copying requirements for cache efficiency
RUN pip install --upgrade pip

#set work directory early so remaining paths can be relative
WORKDIR /app

# Adding requirements file to current directory
# just this file first to cache the pip install step when code changes
COPY requirements.txt .

#install dependencies
RUN pip install -r requirements.txt
CMD ["init.py"]

# copy code itself from context to image
COPY . .

EXPOSE 5000

# start the flask webserver
CMD [ "python", "app.py"]