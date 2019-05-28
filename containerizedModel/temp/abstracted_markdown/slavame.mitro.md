# Mitro Password Manager

Mitro saves all your passwords, synchronizes them across all your devices, and lets you share them with others. It has extensions for Chrome, Firefox, and Safari, mobile apps for iOS and Android, and a server to perform the synchronization.

If you are a user, install it from the @abstr_hyperlink . If you have any questions, you can ask on the @abstr_hyperlink mailing list, or @abstr_hyperlink .

## Quick Start

@abstr_number . Install dependencies (see <code>browser-ext/README</code>, <code>mitro-core/README</code>) [node, npm, homebrew, java, ant] @abstr_number . Clone repository: `git clone https://github.com/mitro-co/mitro` @abstr_number . Install browser extension dependencies:
    
    
     @abstr_code_section
    

@abstr_number . Run the regression tests to ensure your source tree works:
    
    
     @abstr_code_section
    

@abstr_number . Look for "SUCCESS" on the last line. @abstr_number . Build the browser extension:
    
    
     @abstr_code_section
    

@abstr_number . To build Firefox, use `make firefox` and to build Safari use `make safari`.

The extensions will be in the `browser-ext/login/build` directory.

### setup and run emailer

To send device verification emails, we use `emailer/emailer @abstr_number .py`. Requirements: Postgres with the development libraries (Mac OS X: `brew install postgresql`). This script polls a table in the Postgres database to send email.

#### Configuration:

@abstr_number . `cd emailer` @abstr_number . `./build.sh` to set up Python virtualenv with dependencies @abstr_number . To run: `build/venv/bin/python emailer @abstr_number .py --enable_email --mandrill_api_key=api_key`
