FROM fnndsc/ubuntu-python3
MAINTAINER Hilton Pintor

#set envionment variables
# ENV PYTHONUNBUFFERED 1

# run this before copying requirements for cache efficiency
RUN pip install --upgrade pip

#set work directory early so remaining paths can be relative
WORKDIR /app

# Adding requirements file to current directory
# just this file first to cache the pip install step when code changes
COPY requirements.txt .

#install dependencies
RUN pip install -r requirements.txt
RUN python3 -c "import nltk; nltk.download('words')"

# copy code itself from context to image
COPY . .

# start the flask webserver
ENTRYPOINT ["python"]
CMD ["API/app.py"]