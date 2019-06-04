# Django-Select @abstr_number @abstr_hyperlink 

This is a @abstr_hyperlink integration of @abstr_hyperlink .

The app includes Select @abstr_number driven Django Widgets and Form Fields.

# Installation

@abstr_number . Install `django_select @abstr_number`
    
    
        pip install django_select @abstr_number
    

@abstr_number . Add `django_select @abstr_number` to your `INSTALLED_APPS` in your project settings.

@abstr_number . When deploying on production server, run :-
    
    
        python manage.py collectstatic
    

@abstr_number . Add `django_select` to your urlconf if you use any 'Auto' fields.
    
    
        url(r'^select @abstr_number /', include('django_select @abstr_number .urls')),
    

# Documentation

Documentation available at http://django-select @abstr_number .readthedocs.org/.

# More details

More details can be found on my blog at - http://blog.applegrew.com/ @abstr_number / @abstr_number /django-select @abstr_number /.

# External Dependencies

  * Django - This is obvious.
  * jQuery - This is not included in the package since it is expected that in most scenarios this would already be available.
  * Memcached (python-memcached) - If you plan on running multiple python processes with `GENERATE_RANDOM_SELECT @abstr_number _ID` enabled, then you need to turn on `ENABLE_SELECT @abstr_number _MULTI_PROCESS_SUPPORT`. In that mode it is highly recommended that you use Memcached, to minimize DB hits.



# Example Application

Please see `testapp` application. This application is used to manually test the functionalities of this package. This also serves as a good example.

You need only Django @abstr_number . @abstr_number or above to run that. It might run on older versions but that is not tested.

# Special Thanks

  * Samuel Goldszmidt (@ouhouhsami) for reporting many fundamental issues with the code, because of which versions @abstr_number . @abstr_number and @abstr_number . @abstr_number . @abstr_number were released.



# Official Contributors

  * Johannes Hoppe (@codingjoe)



# Changelog Summary

### v @abstr_number . @abstr_number . @abstr_number

  * Now the package supports both Python @abstr_number and Python @abstr_number .
  * Django @abstr_number . @abstr_number support added.
  * Many bug fixes.



### v @abstr_number . @abstr_number . @abstr_number

  * Misc fixes and enhancements - @abstr_hyperlink , @abstr_hyperlink .



### v @abstr_number . @abstr_number . @abstr_number

  * Finally fixed performance issue @abstr_hyperlink (and issue @abstr_hyperlink ) in widgets when backing field is based on models and the field has an initial value.



### v @abstr_number . @abstr_number . @abstr_number

  * Updated Select @abstr_number to version @abstr_number . @abstr_number . @abstr_number . **Please note** , that if you need any of the Select @abstr_number locale files, then you need to download them yourself from http://ivaynberg.github.com/select @abstr_number / and add to your project.
  * Tagging support added. See @abstr_hyperlink in documentation.



### v @abstr_number . @abstr_number . @abstr_number

  * Updated Select @abstr_number to version @abstr_number . @abstr_number . @abstr_number . **Please note** , that if you need any of the Select @abstr_number locale files, then you need to download them yourself from http://ivaynberg.github.com/select @abstr_number / and add to your project.
  * Address isssue @abstr_hyperlink - Fix importerror under django @abstr_number . @abstr_number .
  * Fixed the way `setup.py` handles Unicode files while minifying them during package build.
  * Address isssue @abstr_hyperlink - MultipleSelect @abstr_number HiddenInput.render() should use mark_safe().
  * Address isssue @abstr_hyperlink - MultipleSelect @abstr_number HiddenInput returns bad has_changed value.



### v @abstr_number . @abstr_number . @abstr_number

  * Main version number bumped to bring your attention to the fact that the default Id generation scheme has now changed. Now Django Select @abstr_number will use hashed paths of fields to generate their Ids. The old scheme of generating random Ids are still there. You can enable that by setting `GENERATE_RANDOM_SELECT @abstr_number _ID` to `True`.



### v @abstr_number . @abstr_number . @abstr_number

  * Addressed issue @abstr_hyperlink .
  * Merged pull request @abstr_hyperlink .
  * Added `light` parameter to `import_django_select @abstr_number _js`, `import_django_select @abstr_number _css` and `import_django_select @abstr_number _js_css` template tags. Please see doc's "Getting Started", for more details.



### v @abstr_number . @abstr_number . @abstr_number

  * Updated Select @abstr_number to version @abstr_number . @abstr_number . @abstr_number .
  * Added multi-process support. ( @abstr_hyperlink ).
  * Addressed issue @abstr_hyperlink .
  * Addressed issue @abstr_hyperlink .
  * Addressed issue @abstr_hyperlink .
  * Addressed some typos.



### v @abstr_number . @abstr_number . @abstr_number

  * Fixed issue @abstr_hyperlink . Infact while fixing that I realised that heavy components do not need the help of cookies, infact due to a logic error in previous code the cookies were not being used anyway. Now Django Select @abstr_number does not use cookies etc.
  * Few more bugs fixed in `heav_data.js`.
  * Now production code will use minimized versions of js and css files.
  * Codes added in `setup.py` to automate the task of minimizing js and css files, using a web service.



### v @abstr_number . @abstr_number . @abstr_number

  * Merged pull request (issue @abstr_hyperlink ). Which allows the user to pass some extra data to Select @abstr_number clients-side component.
  * Updated License. The previous one was inadequently worded. Now this project use Apache @abstr_number . @abstr_number license.



### v @abstr_number . @abstr_number . @abstr_number

  * Manually merged changes from pull request (issue @abstr_hyperlink ).
  * Django Select @abstr_number widgets now allow passing of any Select @abstr_number Js options. Previously it used to allow only white-listed options. Now it will block only black-listed options. For example, Light Select @abstr_number widgets won't allow you to set `multiple` option, since it is an error to set them when Select @abstr_number Js is bound to `<select>` fields.



### v @abstr_number . @abstr_number . @abstr_number

  * Addressed enhancement issue @abstr_hyperlink .
  * Addressed enhancement issue @abstr_hyperlink .
  * Addressed performance issue @abstr_hyperlink .



### v @abstr_number . @abstr_number . @abstr_number

  * Fixed issue @abstr_hyperlink .



### v @abstr_number . @abstr_number . @abstr_number

  * Bumping up minor version since Select @abstr_number JS has been updated to version @abstr_number . @abstr_number . It seems Select @abstr_number JS now includes new higher resolution icons for @abstr_hyperlink .
  * Fixed an issue in `setup.py` because of which `templatetags` directory was not included in last PIP releases' tar file.



### v @abstr_number . @abstr_number . @abstr_number

  * Added `AUTO_RENDER_SELECT @abstr_number _STATICS` settings. This, when specified and set to `False` in `settings.py` then Django_Select @abstr_number widgets won't automatically include the required scripts and stylesheets. When this setting is `True` (default) then every Select @abstr_number field on the page will output `<script>` and `<link>` tags to include the required JS and CSS files. This is convinient but will output the same JS and CSS files multiple times if there are more than one Select @abstr_number fields on the page.
  * Added `django_select @abstr_number _tags` template tags to manually include the required JS and CSS files, when `AUTO_RENDER_SELECT @abstr_number _STATICS` is turned off.



### v @abstr_number . @abstr_number . @abstr_number

  * Revised the design of heavy fields. The previous design didn't quite make it easy to back heavy fields by big data sources. See `fields.HeavyChoiceField` class and its methods' docs for more info.
  * Updated docs.
  * Some more fixes for issue @abstr_hyperlink .
  * Updated Select @abstr_number JS to version @abstr_number . @abstr_number .



### v @abstr_number . @abstr_number

  * Added docs.
  * Some bug fixes. See issue @abstr_hyperlink .
  * `widgets.Select @abstr_number Mixin.__init__` now accepts `select @abstr_number _options` kwarg to override its `options` settings. Previously `attrs` were being used for this too. This means backward compatibility has been broken here. `attrs` will no longer override `options` values. **The major release version has been changed to @abstr_number , because of this backward incompatible change.**



### v @abstr_number . @abstr_number . @abstr_number

  * Auto id registration fixes.



### v @abstr_number . @abstr_number

  * Mostly major bug fixes in code and design. The changes were many, raising the possibility of backward incompatibility. However, the backward incompatibility would be subtle.

  * Auto fields (sub-classes of AutoViewFieldMixin) now accepts `auto_id` parameter. This can be used to provide custom id for the field. The default is 'module.field_class_name'. Ideally only the first instance of an auto field is registered. This parameter can be used to force registration of additional instances by passing a unique value.




# License

Copyright @abstr_number Nirupam Biswas

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at

@abstr_hyperlink 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
