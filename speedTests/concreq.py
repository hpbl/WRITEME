import time
import grequests

start = time.time()

#
urls = [
    'http://www.heroku.com',
    'http://python-tablib.org',
    'http://httpbin.org',
    'http://python-requests.org',
    'http://kennethreitz.com'
]

# def handleresponse(response, **kwargs):
#     return response.text

# async_list =[]

# for site in urls:
#     action_item = grequests.get(site, hooks={'response': handleresponse})
#     async_list.append(action_item)

# resp = grequests.map(async_list)
# # 

# Build a list of unsent requests
requests = (grequests.get(url) for url in urls)
# Send them all at once
results = grequests.map(requests)
texts = [r.text for r in results]
print(texts)


end = time. time()
print(f'took {end - start}s') 

# took 1.8422801494598389s