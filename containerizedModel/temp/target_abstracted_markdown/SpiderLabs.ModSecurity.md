@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Libmodsecurity is one component of the ModSecurity v @abstr_number project. The library codebase serves as an interface to ModSecurity Connectors taking in web traffic and applying traditional ModSecurity processing. In general, it provides the capability to load/interpret rules written in the ModSecurity SecRules format and apply them to HTTP content provided by your application via Connectors.

If you are looking for ModSecurity for Apache (aka ModSecurity v @abstr_number .x), it is still under maintenence and available: @abstr_hyperlink .

### What is the difference between this project and the old ModSecurity (v @abstr_number .x.x)?

  * All Apache dependences have been removed
  * Higher performance
  * New features
  * New architecture



Libmodsecurity is a complete rewrite of the ModSecurity platform. When it was first devised the ModSecurity project started as just an Apache module. Over time the project has been extended, due to popular demand, to support other platforms including (but not limited to) Nginx and IIS. In order to provide for the growing demand for additional platform support, it has became necessary to remove the Apache dependencies underlying this project, making it more platform independent.

As a result of this goal we have rearchitechted Libmodsecurity such that it is no longer dependent on the Apache web server (both at compilation and during runtime). One side effect of this is that across all platforms users can expect increased performance. Additionally, we have taken this opprotunity to lay the groundwork for some new features that users have been long seeking. For example we are looking to nativly support auditlogs in the JSON format, along with a host of other functionality in future versions.

### It is no longer just a module.

The 'ModSecurity' branch no longer contains the traditional module logic (for Nginx, Apache, and IIS) that has traditionally been packaged all togerher. Instead, this branch only contains the library portion (libmodsecurity) for this project. This library is consumed by what we have termed 'Connectors' these connectors will interface with your webserver and provide the library with a common format that it undersands. Each of these connectors is maintained as a seperate GitHub project. For instance, the Nginx connector is supplied by the ModSecurity-nginx project (https://github.com/SpiderLabs/ModSecurity-nginx).

Keeping these connectors seperated allows each project to be have different release cycles, issues and development trees. Addtionally, it means that when you install ModSecurity v @abstr_number you only get exactly what you need, no extras you won't be using.

# Compilation

Before starting the compilation process, make sure that you have all the dependencies in place. Read the subsection “Dependencies” for further information.

After the compilation make sure that there are no issues on your build/platform. We strongly recommend the utilization of the unit tests and regression tests. These test utilities are located under the subfolder ‘tests’.

As a dynamic library, don’t forget that libmodsecurity must be installed to a location (folder) where you OS will be looking for dynamic libraries.

### Unix (Linux, MacOS, FreeBSD, …)

On unix the project uses autotools to help the compilation process.

@abstr_code_section 

Details on distribution specific builds can be found in our Wiki: @abstr_hyperlink 

### Windows

Windows build is not ready yet.

## Dependencies

This library is written in C++ using the C++ @abstr_number standards. It also uses Flex and Yacc to produce the “Sec Rules Language” parser. Other, manditory dependencies include YAJL, as ModSecurity uses JSON for producing logs and its testing framework, libpcre (not yet manditory) for processing regular expressions in SecRules, and libXML @abstr_number (not yet manditory) which is used for parsing XML requests.

All others dependencies are related to operators specified within SecRules or configuration directives and may not be required for compilation. A short list of such dependencies is as follows:

  * libinjection is needed for the operator @detectXSS and @detectSQL
  * curl is needed for the directive SecRemoteRules.



If those libraries are missing ModSecurity will be compiled without the support for the operator @detectXSS and the configuration directive SecRemoteRules.

# Library documentation

The library documentation is written within the code in Doxygen format. To generate this documentation, please use the doxygen utility with the provided configuration file, “doxygen.cfg”, located with the "doc/" subfolder. This will generate HTML formatted documentation including usage examples.

# Library utilization

The library provides a C++ and C interface. Some resources are currently only available via the C++ interface, for instance, the capability to create custom logging mechanism (see the regression test to check for how those logging mechanism works). The objective is to have both APIs (C, C++) providing the same functionality, if you find an aspect of the API that is missing via a perticular interface, please open an issue.

Inside the subfolder examples, there are simple examples on how to use the API. Below some are illustrated:

### Simple example using C++

```c++ using ModSecurity::ModSecurity; using ModSecurity::Rules; using ModSecurity::Transaction;

ModSecurity *modsec; ModSecurity::Rules *rules;

modsec = new ModSecurity();

rules = new Rules();

rules->loadFromUri(rules_file);

Transaction *modsecTransaction = new Transaction(modsec, rules);

modsecTransaction->processConnection(" @abstr_number . @abstr_number . @abstr_number . @abstr_number "); if (modsecTransaction->intervention()) { std::cout << "There is an intervention" << std::endl; } @abstr_code_section c

# include "modsecurity/modsecurity.h"

# include "modsecurity/transaction.h"

char main_rule_uri[] = "basic_rules.conf";

int main (int argc, char **argv) { ModSecurity *modsec = NULL; Transaction *transaction = NULL; Rules *rules = NULL;
    
    
    modsec = msc_init();
    
    rules = msc_create_rules_set();
    msc_rules_add_file(rules, main_rule_uri);
    
    transaction = msc_new_transaction(modsec, rules);
    
    msc_process_connection(transaction, " @abstr_number . @abstr_number . @abstr_number . @abstr_number ");
    msc_process_uri(transaction, "http://www.modsecurity.org/test?key @abstr_number =value @abstr_number &key @abstr_number =value @abstr_number &key @abstr_number =value @abstr_number &test=args&test=test");
    msc_process_request_headers(transaction);
    msc_process_request_body(transaction);
    msc_process_response_headers(transaction);
    msc_process_response_body(transaction);
    
    return  @abstr_number ;
    

}

@abstr_code_section $ cd /path/to/modsecurity-nginx $ egrep -Rin "TODO|FIXME" -R * @abstr_code_section shell $ cd /path/to/your/ModSecurity $ git submodule foreach git pull $ cd test $ ./regression-tests $ ./unit-tests @abstr_code_section shell $ export CFLAGS="-g -O @abstr_number " $ ./build.sh $ ./configure $ make $ sudo make install ```

## Reporting Issues

If you are facing a configuration issue or something is not working as you expected to be, please use the ModSecurity user’s mailing list. Issues on GitHub are also welcomed, but we prefer to have user ask questions on the mailing list first so that you can reach an entire community. Also don’t forget to look for existing issues before open a new one.

If you are going to open a new issue on GitHub, don’t forget to tell us the version of your libmodsecurity and the version of a specific connector if there is one.

### Security issue

Please do not make public any security issue. Contact us at: security@modsecurity.org reporting the issue. Once the problem is fixed your credit will be given.

## Feature request

We are open to discussing any new feature request with the community via the mailing lists. You can alternativly, feel free to open GitHub issues requesting new features. Before opening a new issue, please check if there is one already opened on the same topic.

## Bindings

The libModSecurity design allows the integration with bindings. There is an effort to avoid brake the API [binary] compatibility to make an easy integration with possible bindings. Currently, there are two notable projects maintained by the community: * Python - https://github.com/actions-security/pymodsecurity * Varnish - https://github.com/xdecock/vmod-modsecurity

## Packing

Having our packages in distros on time is a desire that we have, so let us know if there is anything we can do to facilitate your work as a packager.
