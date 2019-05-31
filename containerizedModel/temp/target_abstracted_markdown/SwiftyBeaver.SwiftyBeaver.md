@abstr_hyperlink   
**Colorful** , flexible, **lightweight** logging for Swift @abstr_number , Swift @abstr_number  & **Swift @abstr_number**.  
Great for **development & release** with support for Console, File & cloud platforms.  
Log **during release** to the conveniently built-in SwiftyBeaver Platform, the **dedicated Mac App** & **Elasticsearch**!  
  
@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink   


@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink   


* * *

  


### During Development: Colored Logging to Xcode Console

@abstr_image 

@abstr_hyperlink about colored logging to Xcode @abstr_number Console with Swift @abstr_number , @abstr_number  & @abstr_number . For Swift @abstr_number . @abstr_number @abstr_hyperlink . **No need to hack Xcode @abstr_number anymore** to get color. You can even customize the log level word (ATTENTION instead of ERROR maybe?), the general amount of displayed data and if you want to use the 💜s or replace them with something else 😉

  


### During Development: Colored Logging to File

@abstr_image 

@abstr_hyperlink about logging to file which is great for Terminal.app fans or to store logs on disk.

  


### On Release: Encrypted Logging to SwiftyBeaver Platform

@abstr_image 

@abstr_hyperlink about logging to the SwiftyBeaver Platform **during release!**

  


### Browse, Search & Filter via Mac App

@abstr_image 

Conveniently access your logs during development & release with our @abstr_hyperlink .

  


### On Release: Enterprise-ready Logging to Your Elasticsearch & Kibana (on-premise)

@abstr_image 

@abstr_hyperlink about **legally compliant** , end-to-end encrypted logging to Elasticsearch with **SwiftyBeaver Enterprise**. Install via Docker or manual, fully-featured free trial included!

  


### Google Cloud & More

You can fully customize your log format, turn it into JSON, or create your own destinations. For example our @abstr_hyperlink is just another customized logging format which adds the powerful functionality of automatic server-side Swift logging when hosted on Google Cloud Platform.

  


* * *

  
  


## Installation

  * For _*Swift @abstr_number , @abstr_number & @abstr_number *_ install the latest SwiftyBeaver version
  * For _*Swift @abstr_number *_ install SwiftyBeaver @abstr_number . @abstr_number . @abstr_number 



  


### Carthage

You can use @abstr_hyperlink to install SwiftyBeaver by adding that to your Cartfile:

Swift @abstr_number , @abstr_number & @abstr_number : ``` Swift github "SwiftyBeaver/SwiftyBeaver" @abstr_code_section Swift github "SwiftyBeaver/SwiftyBeaver" ~> @abstr_number . @abstr_number @abstr_code_section Swift .package(url: "https://github.com/SwiftyBeaver/SwiftyBeaver.git", .upToNextMajor(from: " @abstr_number . @abstr_number . @abstr_number ")), @abstr_code_section Swift pod 'SwiftyBeaver' @abstr_code_section Ruby target 'MyProject' do use_frameworks!

# Pods for MyProject pod 'SwiftyBeaver', '~> @abstr_number . @abstr_number ' end

post_install do |installer| installer.pods_project.build_configurations.each do |config| # Configure Pod targets for Xcode @abstr_number with Swift @abstr_number . @abstr_number config.build_settings['SWIFT_VERSION'] = ' @abstr_number . @abstr_number ' end end @abstr_code_section Swift import SwiftyBeaver let log = SwiftyBeaver.self

@abstr_code_section Swift // add log destinations. at least one is needed! let console = ConsoleDestination() // log to Xcode Console let file = FileDestination() // log to default swiftybeaver.log file let cloud = SBPlatformDestination(appID: "foo", appSecret: "bar", encryptionKey: " @abstr_number ") // to cloud

// use custom format and set console output to short time, log level & message console.format = "$DHH:mm:ss$d $L $M" // or use this for JSON output: console.format = "$J"

// add the destinations to SwiftyBeaver log.addDestination(console) log.addDestination(file) log.addDestination(cloud)

// Now let’s log! log.verbose("not so important") // prio @abstr_number , VERBOSE in silver log.debug("something to debug") // prio @abstr_number , DEBUG in green log.info("a nice information") // prio @abstr_number , INFO in blue log.warning("oh no, that won’t be good") // prio @abstr_number , WARNING in yellow log.error("ouch, an error did occur!") // prio @abstr_number , ERROR in red

// log anything! log.verbose( @abstr_number ) log.info(- @abstr_number . @abstr_number ) log.warning(Date()) log.error(["I", "like", "logs!"]) log.error(["name": "Mr Beaver", "address": " @abstr_number Beaver Lodge"])

// optionally add context to a log message console.format = "$L: $M $X" log.debug("age", @abstr_number ) // "DEBUG: age @abstr_number " log.info("my data", context: [ @abstr_number , "a", @abstr_number ]) // "INFO: my data [ @abstr_number , \"a\", @abstr_number ]"

@abstr_code_section shell

# create docker image, build SwiftyBeaver and run unit tests

swift build --clean && docker build --rm -t swiftybeaver .

# optionally log into container to run Swift CLI and do more stuff

docker run --rm -it --privileged=true -v $PWD:/app swiftybeaver ```

Best: for the popular server-side Swift web framework @abstr_hyperlink you can use **@abstr_hyperlink** which makes server logging awesome again 🙌

  
  


## Documentation

**Getting Started:**

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



**Logging Destinations:**

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



**Advanced Topics:**

  * @abstr_hyperlink 
  * @abstr_hyperlink 



**Stay Informed:**

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



More destination & system documentation is coming soon!   
Get support via Github Issues, email and @abstr_hyperlink .

  
  


## License

SwiftyBeaver Framework is released under the @abstr_hyperlink .
