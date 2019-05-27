@abstr_image 

@abstr_image @abstr_image @abstr_image @abstr_image @abstr_hyperlink @abstr_hyperlink 

★★ **Star me to follow the project!** ★★  
Created and maintaned by **Daniele Margutti** \- @abstr_hyperlink 

SwiftDate is the **definitive toolchain to manipulate and display dates and time zones** on all Apple platform and even on Linux and Swift Server Side frameworks like Vapor or Kitura.

Over @abstr_hyperlink on CocoaPods

### Features Highlights

From simple date manipulation to complex business logic SwiftDate maybe the right choice for your next project.

  * [x] **Easy Date Parsing** (custom formats, iso @abstr_number , rss  & many more)
  * [x] **Easy Date Formatting** even with colloquial formatter and @abstr_number + supported languages
  * [x] **Easy math operations with time units** (`@abstr_number .hours + @abstr_number .minutes`...)
  * [x] **Intuitive components extraction** (`day, hour, nearestHour, weekdayNameShort` etc.)
  * [x] **Derivated dates generation** (`nextWeek, nextMonth, nextWeekday, tomorrow`...)
  * [x] Over _* @abstr_number + fine grained date comparison_ * functions (`isToday, isTomorrow, isSameWeek, isNextYear`...)
  * [x] Swift @abstr_number 's **Codable Support**
  * [x] **Random dates** generation
  * [x] **Fine grained date enumeration** functions
  * [x] **Time period** support
  * [x] **Convert TimeIntervals** to other units (`@abstr_number .hours.toUnits(.minutes)`)



and of course...

  * **IT'S TESTED!**. As @abstr_number .x the project has @abstr_number % of code coverage (want help us? write some unit tests and make a PR)
  * **IT'S FULLY DOCUMENTED!** , both with a complete guide and with Jazzy!
  * **WE LOVE PLAYGROUND!** Check out our interative playground!



## Start with SwiftDate

The entire library is fully documented both via XCode method inspector and a complete markdown documentation you can found below.

  * → **Full Documentation**
  * → **Requirements, Install, License & More**
  * → **Upgrading from SwiftDate @abstr_number**



### Explore SwiftDate

From simple date manipulation to complex business logic SwiftDate maybe the right choice for your next project.

Let me show to you the main features of the library:

  * Date Parsing
  * Date Manipulation
  * Date Comparsion
  * Date Creation with Region (Timezone, Calendar & Locale)
  * Derivated Dates
  * Components Extraction
  * Switch between timezones/locale and calendars
  * Date Formatting
  * Relative Date Formatting (fully customizable!)
  * Codable Support
  * Time Periods



### @abstr_number . Date Parsing

SwiftDate can recognize all the major datetime formats automatically (ISO @abstr_number , RSS, Alt RSS, .NET, SQL, HTTP...) and you can also provide your own formats. Creating a new date has never been so easy!

@abstr_code_section 

### @abstr_number . Date Manipulation

Date can be manipulated by adding or removing time components using a natural language; time unit extraction is also easy and includes the support for timezone, calendar and locales!

Manipulation can be done with standard math operators and between dates, time intervals, date components and relevant time units!

@abstr_code_section 

### @abstr_number . Date Comparison

SwiftDate include an extensive set of comparison functions; you can compare two dates by granularity, check if a date is an particular day, range and pratically any other comparison you ever need.

Comparison is also available via standard math operators like (`>, >=, <, <=`).

@abstr_code_section 

### @abstr_number . Date Creation with Region (Timezone, Calendar & Locale)

You can create new dates from a string, time intervals or using date components. SwiftDate offers a wide set of functions to create and derivate your dates even with random generation!

@abstr_code_section 

### @abstr_number . Derivated Dates

Date can be also generated starting from other dates; SwiftDate includes an extensive set of functions to generate. Over @abstr_number different derivated dates can be created easily using `dateAt()` function.

@abstr_code_section 

### @abstr_number . Components Extraction

You can extract components directly from dates and it includes the right value expressed in date's region (the right timezone and set locale!).

@abstr_code_section 

### @abstr_number . Switch between timezones/locale and calendars

You can easily convert any date to another region (aka another calendar, locale or timezone) easily! New date contains all values expressed into the destination reason

@abstr_code_section 

### @abstr_number . Date Formatting

Date formatting is easy, you can specify your own format, locale or use any of the provided ones.

@abstr_code_section 

### @abstr_number . Relative Date Formatting (fully customizable!)

Relative formatting is all new in SwiftDate; it supports @abstr_number + languages with two different styles (`.default, .twitter`), @abstr_number flavours (`.long, .longTime, .longConvenient, .short, .shortTime, .shortConvenient, .narrow, .tiny, .quantify`) and all of them are customizable as you need. The extensible format allows you to provide your own translations and rules to override the default behaviour.

@abstr_code_section 

### @abstr_number . Codable Support

Both `DateInRegion` and `Region` fully support the new Swift's `Codable` protocol. This mean you can safely encode/decode them:

@abstr_code_section 

### @abstr_number . Time Periods

SwiftDate integrates the great Matthew York's @abstr_hyperlink module in order to support Time Periods.

See Time Periods section of the documentation.
