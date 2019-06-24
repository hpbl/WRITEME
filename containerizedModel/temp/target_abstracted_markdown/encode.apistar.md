@abstr_image 

🛠 _The Web API toolkit._ 🛠 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

* * *

**Community:** https://discuss.apistar.org 🤔 💭 🤓 💬 😎

**Documentation:** https://docs.apistar.com 📘

**Requirements:** Python @abstr_number . @abstr_number +

* * *

API Star is a toolkit for working with OpenAPI or Swagger schemas. It allows you to:

  * Build API documentation, with a selection of available themes.
  * Validate API schema documents, and provide contextual errors.
  * Make API requests using the dynamic client library.



You can use it to build static documentation, integrate it within a Web framework, or use it as the client library for interacting with other APIs.

## Quickstart

Install API Star:

@abstr_code_section 

Let's take a look at some of the functionality the toolkit provides...

We'll start by creating an OpenAPI schema, `schema.yaml`:

@abstr_code_section 

Let's also create a configuration file `apistar.yml`:

@abstr_code_section 

We're now ready to start using the `apistar` command line tool.

We can validate our OpenAPI schema:

@abstr_code_section 

Or build developer documentation for our API:

@abstr_code_section 

We can also make API requests to the server referenced in the schema:

@abstr_code_section 

## Where did the server go?

With version @abstr_number . @abstr_number onwards the API Star project is being focused as a framework-agnositic suite of API tooling. The plan is to build out this functionality in a way that makes it appropriate for use either as a stand-alone tool, or together with a large range of frameworks.

The @abstr_number . @abstr_number branch remains available on GitHub, and can be installed from PyPI with `pip install apistar== @abstr_number . @abstr_number . @abstr_number`. Any further development of the API Star server would likely need to be against a fork of that, under a new maintainer.

If you're looking for a high-performance Python-based async framework, then I would instead recommend @abstr_hyperlink .

* * *

_API Star is @abstr_hyperlink code.  
Designed & built in Brighton, England._

@abstr_image 
