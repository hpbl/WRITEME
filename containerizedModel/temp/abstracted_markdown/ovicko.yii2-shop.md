# Yii @abstr_number shop example project

This is example project implementing a shop created to help people learn Yii @abstr_number . @abstr_number . It was created during @abstr_number hours workshop performed in Ekaterinburg, Russia. The idea was to show how to deal with Gii, grids, filtering and other Yii @abstr_number . @abstr_number usage. It is by no means a complete shop script. It may contain bugs, shortcuts etc.

There are slides from the workshop in Russian: http://slides.rmcreative.ru/ @abstr_number /yii @abstr_number -master/

It is built on top of advanced template which includes three tiers: front end, back end, and console, each of which is a separate Yii application.

## DIRECTORY STRUCTURE

@abstr_code_section 

## REQUIREMENTS

The minimum requirement by this application template that your Web server supports PHP @abstr_number . @abstr_number . @abstr_number .

## INSTALLATION

### Install via Composer

If you do not have @abstr_hyperlink , you may install it by following the instructions at @abstr_hyperlink .

You can then install the application using the following command:

~~~ git clone https://github.com/samdark/yii @abstr_number -shop.git composer self-update composer global require "fxp/composer-asset-plugin:~ @abstr_number . @abstr_number . @abstr_number " cd yii @abstr_number -shop composer install ~~~

## GETTING STARTED

After you install the application, you have to conduct the following steps to initialize the installed application. You only need to do these once for all.

@abstr_number . Run command `init` to initialize the application with a specific environment. @abstr_number . Create a new database and adjust the `components['db']` configuration in `common/config/main-local.php` accordingly. @abstr_number . Apply migrations with console command `yii migrate`. This will create tables needed for the application to work. @abstr_number . Set document roots of your Web server:

  * for frontend `/path/to/yii @abstr_number shop/frontend/web/` and using the URL `http://shop.local/`
  * for backend `/path/to/yii @abstr_number shop/backend/web/` and using the URL `http://admin.shop.local/`



To login into the application, you need to first sign up, with any of your email address, username and password. Then, you can login into the application with same email address and password at any time.
