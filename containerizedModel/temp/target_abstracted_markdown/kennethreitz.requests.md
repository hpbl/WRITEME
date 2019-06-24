# Requests: HTTP for Humans™

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Requests is the only _Non-GMO_ HTTP library for Python, safe for human consumption.

@abstr_image 

Behold, the power of Requests:

``` {.sourceCode .python}

> > > import requests r = requests.get('https://api.github.com/user', auth=('user', 'pass')) r.status_code @abstr_number r.headers['content-type'] 'application/json; charset=utf @abstr_number ' r.encoding 'utf- @abstr_number ' r.text u'{"type":"User"...' r.json() {u'disk_usage': @abstr_number , u'private_gists': @abstr_number , ...} @abstr_code_section {.sourceCode .bash} $ pipenv install requests ✨🍰✨ ```

Satisfaction guaranteed.

## Documentation

Fantastic documentation is available at @abstr_hyperlink , for a limited time only.

## How to Contribute

@abstr_number . Become more familiar with the project by reading our @abstr_hyperlink and our @abstr_hyperlink . @abstr_number . Check for open issues or open a fresh issue to start a discussion around a feature idea or a bug. There is a @abstr_hyperlink tag for issues that should be ideal for people who are not very familiar with the codebase yet. @abstr_number . Fork @abstr_hyperlink on GitHub to start making your changes to the **master** branch (or branch off of it). @abstr_number . Write a test which shows that the bug was fixed or that the feature works as expected. @abstr_number . Send a @abstr_hyperlink and bug the maintainer until it gets merged and published. :) Make sure to add yourself to @abstr_hyperlink .
