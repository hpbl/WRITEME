##  @abstr_hyperlink - match command-line arguments to their help text

explainshell is a tool (with a web interface) capable of parsing man pages, extracting options and explain a given command-line by matching each argument to the relevant help text in the man page.

## How?

explainshell is built from the following components:

@abstr_number . man page reader which converts a given man page from raw format to html (manpage.py) @abstr_number . classifier which goes through every paragraph in the man page and classifies it as contains options or not (algo/classifier.py) @abstr_number . an options extractor that scans classified paragraphs and looks for options (options.py) @abstr_number . a storage backend that saves processed man pages to mongodb (store.py) @abstr_number . a matcher that walks the command's AST (parsed by @abstr_hyperlink ) and contextually matches each node to the relevant help text (matcher.py)

When querying explainshell, it:

@abstr_number . parses the query into an AST @abstr_number . visits interesting nodes in the AST, such as: \- command nodes - these nodes represent a simple command \- shell related nodes - these nodes represent something the shell interprets such as '|', '&&' @abstr_number . for every command node we check if we know how to explain the current program, and then go through the rest of the tokens, trying to match each one to the list of known options @abstr_number . returns a list of matches that are rendered with Flask

##  @abstr_hyperlink file

## Missing man pages

Right now explainshell.com contains the entire @abstr_hyperlink . It's not possible to directly add a missing man page to the live site (it might be in the future). Instead, submit a link @abstr_hyperlink and I'll add it.

## Running explainshell locally

To setup a working environment that lets you run the web interface locally, you'll need to:

```ShellSession $ pip install -r requirements.txt

# load classifier data, needs a mongodb

$ mongorestore dump/explainshell && mongorestore -d explainshell_tests dump/explainshell $ make tests

## ..............................................................................

Ran @abstr_number tests in @abstr_number . @abstr_number s

OK @abstr_code_section ShellSession $ PYTHONPATH=. python explainshell/manager.py --log info manpages/ @abstr_number /echo. @abstr_number .gz INFO:explainshell.store:creating store, db = 'explainshell_tests', host = 'mongodb://localhost' INFO:explainshell.algo.classifier:train on @abstr_number instances INFO:explainshell.manager:handling manpage echo (from /tmp/es/manpages/ @abstr_number /echo. @abstr_number .gz) INFO:explainshell.store:looking up manpage in mapping with src 'echo' INFO:explainshell.manpage:executing '/tmp/es/tools/w @abstr_number mman @abstr_number html.cgi local=% @abstr_number Ftmp% @abstr_number Fes% @abstr_number Fmanpages% @abstr_number F @abstr_number % @abstr_number Fecho. @abstr_number .gz' INFO:explainshell.algo.classifier:classified  ( @abstr_number . @abstr_number ) as an option paragraph INFO:explainshell.algo.classifier:classified  ( @abstr_number . @abstr_number ) as an option paragraph INFO:explainshell.algo.classifier:classified  ( @abstr_number . @abstr_number ) as an option paragraph INFO:explainshell.algo.classifier:classified  ( @abstr_number . @abstr_number ) as an option paragraph INFO:explainshell.algo.classifier:classified  ( @abstr_number . @abstr_number ) as an option paragraph INFO:explainshell.store:inserting mapping (alias) echo -> echo ( @abstr_number a @abstr_number fa @abstr_number b @abstr_number e @abstr_number fb @abstr_number df @abstr_number ) with score @abstr_number successfully added echo @abstr_code_section ShellSession $ make serve python runserver.py * Running on http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number / * Restarting with reloader @abstr_code_section ShellSession

# Build docker web and db containers

$ docker-compose build $ docker-compose up

# Copy dump over to container for than to import it.

$ docker cp dump/ explainshell_db_ @abstr_number :/tmp/dump

# Import classifiers

$ docker exec explainshell_db_ @abstr_number mongorestore /tmp/dump

# Import a man page

$ docker exec explainshell_web_ @abstr_number bash -c "PYTHONPATH=. python explainshell/manager.py --log info /usr/share/man/man @abstr_number /grep. @abstr_number .gz" ... successfully added grep. @abstr_number .gz

# Open browser at port @abstr_number

$ open http://localhost: @abstr_number 

# Restore test db to run tests

$ docker exec explainshell_db_ @abstr_number mongorestore -d explainshell_tests /tmp/dump/explainshell

$ docker exec explainshell_web_ @abstr_number make tests

## ..............................................................................

Ran @abstr_number tests in @abstr_number . @abstr_number s

OK ```
