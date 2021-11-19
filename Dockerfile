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
COPY init.py .

#install dependencies
RUN pip install -r requirements.txt
RUN python3 init.py

# Supervisor conf
ADD .docker/app/supervisord/* /etc/supervisord/

# copy code itself from context to image
COPY . .

# init supervisor
RUN sed -i -e 's/\r$//' /app/.docker/app/init.sh
RUN ls -la /app/.docker/app/init.sh
RUN chmod +x /app/.docker/app/init.sh
RUN ls -la /app/.docker/app/init.sh

EXPOSE 5000

ENTRYPOINT ["sh", "/app/.docker/app/init.sh"]