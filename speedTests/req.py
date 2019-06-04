import time
import requests as rq

start = time.time()

#
urls = [
    'http://www.heroku.com',
    'http://python-tablib.org',
    'http://httpbin.org',
    'http://python-requests.org',
    'http://kennethreitz.com'
]

content = []

for url in urls:
    content.append(rq.get(url).text)

print(content)
# 


end = time. time()
print(f'took {end - start}s') 

# took 5.430248975753784s