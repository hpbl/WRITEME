# Seafile Android Client @abstr_hyperlink 

The application has been published onto the market for easy access:

@abstr_hyperlink @abstr_hyperlink 

## Contributors

See @abstr_hyperlink 

## Build the APK

  * Make sure you have installed the @abstr_hyperlink then:

  * cd into seadroid directory

  * Create `key.properties` file or simply rename `key.properties.example` and change configurations to match yours.

  * Create keystore file if you don't have one

@abstr_code_section 

  * Build with `./gradlew assembleRelease`



You will get `app/build/outputs/apk/seafile-${versionName}.apk` after the build finishes.

## Develop in Android Studio

### Prerequisites

  * Android Studio
  * OpenJDK @abstr_number / OracleJDK @abstr_number 



### Import project

  * Open Android Studio
  * Import project
  * Select seadroid directory
  * Choose import from gradle
  * Click next until import is completed



## Develop in IntelliJ/Eclipse

For those who are using maven build structures, checkout the project from @abstr_hyperlink branch.

## Internationalization

### Contribute your translation

Please submit translations via Transifex: https://www.transifex.com/haiwen/seadroid/

Steps:

@abstr_number . Create a free account on Transifex (https://www.transifex.com/). @abstr_number . Send a request to join the language translation. @abstr_number . After accepted by the project maintainer, then you can upload your file or translate online.
