

@abstr_image 

@abstr_hyperlink 

Humanizer meets all your .NET needs for manipulating and displaying strings, enums, dates, times, timespans, numbers and quantities. It is part of the @abstr_hyperlink , and operates under their @abstr_hyperlink . It is licensed under the @abstr_hyperlink (an OSI approved license).

@abstr_hyperlink 

### Table of contents

  * Install 
    * Specifying Languages (Optional)
    * Known Installation Issues
    * Use in ASP.NET @abstr_number .x MVC Views
  * Features 
    * Humanize String
    * Dehumanize String
    * Transform String
    * Truncate String
    * Format String
    * Humanize Enums
    * Dehumanize Enums
    * Humanize DateTime
    * Humanize TimeSpan
    * Humanize Collections
    * Inflector methods 
      * Pluralize
      * Singularize
      * Adding Words
      * ToQuantity
      * Ordinalize
      * Titleize
      * Pascalize
      * Camelize
      * Underscore
      * Dasherize & Hyphenate
      * Kebaberize 
    * Fluent date
    * Number to Numbers
    * Number to words
    * Number to ordinal words
    * DateTime to ordinal words
    * Roman numerals
    * Metric numerals
    * ByteSize
    * Heading to words
    * Tupleize
  * Mix this into your framework to simplify your life - 
  * How to contribute?
  * Continuous Integration from AppVeyor
  * Related Projects 
    * Humanizer ReSharper Annotations
    * PowerShell Humanizer
    * Humanizer JVM
    * Humanizer.JS
  * Main contributors
  * License
  * Icon



## Install

You can install Humanizer as @abstr_hyperlink : 

**XPROJ /`project.json`** : `Humanizer.xproj`

**English only** : `Humanizer.Core`

All languages: `Humanizer`

Humanizer is a .NET Standard Class Library with support for .NET Standard @abstr_number . @abstr_number + (.Net @abstr_number . @abstr_number +, Windows Phone @abstr_number , Win Store, and .NET Core).

Also Humanizer symbols are source indexed with @abstr_hyperlink and are included in the package so you can @abstr_hyperlink while debugging your code.

For pre-release builds, @abstr_hyperlink is available where you can pull down CI packages from the latest codebase. The feed URL is: 

  * `https://www.myget.org/F/humanizer/api/v @abstr_number` for VS @abstr_number +
  * `https://www.myget.org/F/humanizer/api/v @abstr_number /index.json` for VS @abstr_number +



_Note_ : Humanizer requires at least NuGet @abstr_hyperlink when on VS @abstr_number / @abstr_number and @abstr_number . @abstr_number + on VS @abstr_number .

### Specify Languages (Optional)

New in Humanizer @abstr_number . @abstr_number is the option to choose which localization packages you wish to use. You choose which packages based on what NuGet package(s) you install. By default, the main `Humanizer` @abstr_number . @abstr_number package installs all supported languages exactly like it does in @abstr_number .x. If you're not sure, then just use the main `Humanizer` package.

Here are the options:

  * **All languages** : use the main `Humanizer` package. This pulls in `Humanizer.Core` and all language packages.
  * **English** : use the `Humanizer.Core` package. Only the English language resources will be available
  * **Specific languages** : Use the language specific packages you'd like. For example for French, use `Humanizer.Core.fr`. You can include multiple languages by installing however many language packages you want. 



**XPROJ /`project.json`** : Due to a @abstr_hyperlink in the CLI tools, the main `Humanizer` package and it's language packages will fail to install. As temporary workaround, until that bug is fixed, use `Humanizer.xproj` instead. It contains all of the languages.

The detailed explanation for how this works is in the comments @abstr_hyperlink .

## Features

### Humanize String

`Humanize` string extensions allow you turn an otherwise computerized string into a more readable human-friendly one. The foundation of this was set in the @abstr_hyperlink where class names, method names and properties are turned into human readable sentences.

```C# "PascalCaseInputStringIsTurnedIntoSentence".Humanize() => "Pascal case input string is turned into sentence"

"Underscored_input_string_is_turned_into_sentence".Humanize() => "Underscored input string is turned into sentence"

"Underscored_input_String_is_turned_INTO_sentence".Humanize() => "Underscored input String is turned INTO sentence" @abstr_code_section C# // acronyms are left intact "HTML".Humanize() => "HTML"

// any unbroken upper case string is treated as an acronym "HUMANIZER".Humanize() => "HUMANIZER" "HUMANIZER".Transform(To.LowerCase, To.TitleCase) => "Humanizer" @abstr_code_section C# "CanReturnTitleCase".Humanize(LetterCasing.Title) => "Can Return Title Case"

"Can_return_title_Case".Humanize(LetterCasing.Title) => "Can Return Title Case"

"CanReturnLowerCase".Humanize(LetterCasing.LowerCase) => "can return lower case"

"CanHumanizeIntoUpperCase".Humanize(LetterCasing.AllCaps) => "CAN HUMANIZE INTO UPPER CASE" @abstr_code_section C# "Pascal case input string is turned into sentence".Dehumanize() => "PascalCaseInputStringIsTurnedIntoSentence" @abstr_code_section C# string Transform(this string input, params IStringTransformer[] transformers) @abstr_code_section C# "Sentence casing".Transform(To.LowerCase) => "sentence casing" "Sentence casing".Transform(To.SentenceCase) => "Sentence casing" "Sentence casing".Transform(To.TitleCase) => "Sentence Casing" "Sentence casing".Transform(To.UpperCase) => "SENTENCE CASING" @abstr_code_section c# "Long text to truncate".Truncate( @abstr_number ) => "Long text…" @abstr_code_section c# "Long text to truncate".Truncate( @abstr_number , "---") => "Long te---" @abstr_code_section c# "Long text to truncate".Truncate( @abstr_number , Truncator.FixedLength) => "Long text…" "Long text to truncate".Truncate( @abstr_number , "---", Truncator.FixedLength) => "Long te---"

"Long text to truncate".Truncate( @abstr_number , Truncator.FixedNumberOfCharacters) => "Long t…" "Long text to truncate".Truncate( @abstr_number , "---", Truncator.FixedNumberOfCharacters) => "Lon---"

"Long text to truncate".Truncate( @abstr_number , Truncator.FixedNumberOfWords) => "Long text…" "Long text to truncate".Truncate( @abstr_number , "---", Truncator.FixedNumberOfWords) => "Long text---" @abstr_code_section c# "Long text to truncate".Truncate( @abstr_number , Truncator.FixedLength, TruncateFrom.Left) => "… truncate" "Long text to truncate".Truncate( @abstr_number , "---", Truncator.FixedLength, TruncateFrom.Left) => "---runcate"

"Long text to truncate".Truncate( @abstr_number , Truncator.FixedNumberOfCharacters, TruncateFrom.Left) => "…o truncate" "Long text to truncate".Truncate( @abstr_number , "---", Truncator.FixedNumberOfCharacters, TruncateFrom.Left) => "---ext to truncate"

"Long text to truncate".Truncate( @abstr_number , Truncator.FixedNumberOfWords, TruncateFrom.Left) => "…to truncate" "Long text to truncate".Truncate( @abstr_number , "---", Truncator.FixedNumberOfWords, TruncateFrom.Left) => "---to truncate" @abstr_code_section c# "To be formatted -> { @abstr_number }/{ @abstr_number }.".FormatWith( @abstr_number , "A") => "To be formatted -> @abstr_number /A." @abstr_code_section c# "{ @abstr_number :N @abstr_number }".FormatWith(new CultureInfo("ru-RU"), @abstr_number . @abstr_number ) => " @abstr_number @abstr_number , @abstr_number " @abstr_code_section C# public enum EnumUnderTest { [Description("Custom description")] MemberWithDescriptionAttribute, MemberWithoutDescriptionAttribute, ALLCAPITALS } @abstr_code_section C# // DescriptionAttribute is honored EnumUnderTest.MemberWithDescriptionAttribute.Humanize() => "Custom description"

// In the absence of Description attribute string.Humanizer kicks in EnumUnderTest.MemberWithoutDescriptionAttribute.Humanize() => "Member without description attribute"

// Of course you can still apply letter casing EnumUnderTest.MemberWithoutDescriptionAttribute.Humanize().Transform(To.TitleCase) => "Member Without Description Attribute" @abstr_code_section C# public enum EnumUnderTest { [Display(Description = "EnumUnderTest_Member", ResourceType = typeof(Project.Resources))] Member } @abstr_code_section C# EnumUnderTest.Member.Humanize() => "content" // from Project.Resources found under "EnumUnderTest_Member" resource key @abstr_code_section C# public static TTargetEnum DehumanizeTo(this string input) @abstr_code_section C# "Member without description attribute".DehumanizeTo() => EnumUnderTest.MemberWithoutDescriptionAttribute @abstr_code_section C# public static Enum DehumanizeTo(this string input, Type targetEnum, NoMatch onNoMatch = NoMatch.ThrowsException) @abstr_code_section C# "Member without description attribute".DehumanizeTo(typeof(EnumUnderTest)) => EnumUnderTest.MemberWithoutDescriptionAttribute @abstr_code_section C# DateTime.UtcNow.AddHours(- @abstr_number ).Humanize() => "yesterday" DateTime.UtcNow.AddHours(- @abstr_number ).Humanize() => " @abstr_number hours ago"

DateTime.UtcNow.AddHours( @abstr_number ).Humanize() => "tomorrow" DateTime.UtcNow.AddHours( @abstr_number ).Humanize() => " @abstr_number hours from now"

DateTimeOffset.UtcNow.AddHours( @abstr_number ).Humanize() => "an hour from now" @abstr_code_section C# public static string Humanize(this DateTime input, bool utcDate = true, DateTime? dateToCompareAgainst = null, CultureInfo culture = null) public static string Humanize(this DateTimeOffset input, DateTimeOffset? dateToCompareAgainst = null, CultureInfo culture = null) @abstr_code_section C# // In ar culture DateTime.UtcNow.AddDays(- @abstr_number ).Humanize() => "أمس" DateTime.UtcNow.AddDays(- @abstr_number ).Humanize() => "منذ يومين" DateTime.UtcNow.AddDays(- @abstr_number ).Humanize() => "منذ @abstr_number أيام" DateTime.UtcNow.AddDays(- @abstr_number ).Humanize() => "منذ @abstr_number يوم"

// In ru-RU culture DateTime.UtcNow.AddMinutes(- @abstr_number ).Humanize() => "минуту назад" DateTime.UtcNow.AddMinutes(- @abstr_number ).Humanize() => " @abstr_number минуты назад" DateTime.UtcNow.AddMinutes(- @abstr_number ).Humanize() => " @abstr_number минут назад" DateTime.UtcNow.AddMinutes(- @abstr_number ).Humanize() => " @abstr_number минуту назад" DateTime.UtcNow.AddMinutes(- @abstr_number ).Humanize() => " @abstr_number минуты назад" DateTime.UtcNow.AddMinutes(- @abstr_number ).Humanize() => " @abstr_number минут назад" @abstr_code_section C# Configurator.DateTimeHumanizeStrategy = new PrecisionDateTimeHumanizeStrategy(precision: . @abstr_number ); Configurator.DateTimeOffsetHumanizeStrategy = new PrecisionDateTimeOffsetHumanizeStrategy(precision: . @abstr_number ); // configure when humanizing DateTimeOffset @abstr_code_section C# @abstr_number seconds => @abstr_number seconds ago/from now @abstr_number seconds => one minute ago/from now @abstr_number seconds => one minute ago/from now @abstr_number seconds => two minutes ago/from now

@abstr_number days => a month ago/from now @abstr_code_section C# TimeSpan.FromMilliseconds( @abstr_number ).Humanize() => " @abstr_number millisecond" TimeSpan.FromMilliseconds( @abstr_number ).Humanize() => " @abstr_number milliseconds" TimeSpan.FromDays( @abstr_number ).Humanize() => " @abstr_number day" TimeSpan.FromDays( @abstr_number ).Humanize() => " @abstr_number weeks" @abstr_code_section C# TimeSpan.FromDays( @abstr_number ).Humanize(precision: @abstr_number ) => " @abstr_number day" // no difference when there is only one unit in the provided TimeSpan TimeSpan.FromDays( @abstr_number ).Humanize( @abstr_number ) => " @abstr_number weeks, @abstr_number days"

// the same TimeSpan value with different precision returns different results TimeSpan.FromMilliseconds( @abstr_number ).Humanize() => " @abstr_number weeks" TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number ) => " @abstr_number weeks, @abstr_number day, @abstr_number hour" TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number ) => " @abstr_number weeks, @abstr_number day, @abstr_number hour, @abstr_number seconds" TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number ) => " @abstr_number weeks, @abstr_number day, @abstr_number hour, @abstr_number seconds, @abstr_number milliseconds" @abstr_code_section C# TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number ) => " @abstr_number hour, @abstr_number seconds, @abstr_number millisecond" TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number , countEmptyUnits:true) => " @abstr_number hour, @abstr_number seconds" @abstr_code_section C# // in de-DE culture TimeSpan.FromDays( @abstr_number ).Humanize() => "Ein Tag" TimeSpan.FromDays( @abstr_number ).Humanize() => " @abstr_number Tage"

// in sk-SK culture TimeSpan.FromMilliseconds( @abstr_number ).Humanize() => " @abstr_number milisekunda" TimeSpan.FromMilliseconds( @abstr_number ).Humanize() => " @abstr_number milisekundy" TimeSpan.FromMilliseconds( @abstr_number ).Humanize() => " @abstr_number milisekúnd" @abstr_code_section C# TimeSpan.FromDays( @abstr_number ).Humanize(culture: "ru-RU") => "один день" @abstr_code_section C# TimeSpan.FromMilliseconds( @abstr_number ).Humanize(minUnit: TimeUnit.Second) => " @abstr_number minutes, @abstr_number seconds" // instead of @abstr_number minutes, @abstr_number seconds, @abstr_number milliseconds TimeSpan.FromHours( @abstr_number ).Humanize(minUnit: TimeUnit.Day) => " @abstr_number Day" //instead of @abstr_number Day, @abstr_number Hour @abstr_code_section C# TimeSpan.FromDays( @abstr_number ).Humanize(maxUnit: TimeUnit.Day) => " @abstr_number days" // instead of @abstr_number week TimeSpan.FromMilliseconds( @abstr_number ).Humanize(maxUnit: TimeUnit.Millisecond) => " @abstr_number milliseconds" // instead of @abstr_number seconds @abstr_code_section C# TimeSpan.FromDays( @abstr_number ).Humanize(maxUnit: TimeUnit.Year, precision: @abstr_number ) => " @abstr_number year, @abstr_number months, @abstr_number days" // One day further is @abstr_number year, @abstr_number month TimeSpan.FromDays( @abstr_number ).Humanize(maxUnit: TimeUnit.Year, precision: @abstr_number ) => " @abstr_number year, @abstr_number months, @abstr_number days" // This month has @abstr_number days and one day further is @abstr_number year, @abstr_number months @abstr_code_section C# TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number ) => " @abstr_number weeks, @abstr_number day, @abstr_number hour" @abstr_code_section C# TimeSpan.Zero.Humanize( @abstr_number ) => " @abstr_number milliseconds" TimeSpan.Zero.Humanize( @abstr_number , toWords: true) => "no time" TimeSpan.Zero.Humanize( @abstr_number , minUnit: Humanizer.Localisation.TimeUnit.Second) => " @abstr_number seconds" @abstr_code_section C# TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number , collectionSeparator: " - ") => " @abstr_number weeks - @abstr_number day - @abstr_number hour" ` @abstr_code_section C# // in en-US culture TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number , collectionSeparator: null) => " @abstr_number weeks, @abstr_number day, and @abstr_number hour"

// in de-DE culture TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number , collectionSeparator: null) => " @abstr_number Wochen, Ein Tag und Eine Stunde" @abstr_code_section C# TimeSpan.FromMilliseconds( @abstr_number ).Humanize( @abstr_number , toWords: true) => "two weeks, one day, one hour" ` @abstr_code_section C# class SomeClass { public string SomeString; public int SomeInt; public override string ToString() { return "Specific String"; } }

string FormatSomeClass(SomeClass sc) { return string.Format("SomeObject #{ @abstr_number } - { @abstr_number }", sc.SomeInt, sc.SomeString); }

var collection = new List { new SomeClass { SomeInt = @abstr_number , SomeString = "One" }, new SomeClass { SomeInt = @abstr_number , SomeString = "Two" }, new SomeClass { SomeInt = @abstr_number , SomeString = "Three" } };

collection.Humanize() // "Specific String, Specific String, and Specific String" collection.Humanize("or") // "Specific String, Specific String, or Specific String" collection.Humanize(FormatSomeClass) // "SomeObject # @abstr_number - One, SomeObject # @abstr_number - Two, and SomeObject # @abstr_number - Three" collection.Humanize(sc => sc.SomeInt.Ordinalize(), "or") // " @abstr_number st, @abstr_number nd, or @abstr_number rd" @abstr_code_section C# "Man".Pluralize() => "Men" "string".Pluralize() => "strings" @abstr_code_section C# "Men".Pluralize(inputIsKnownToBeSingular: false) => "Men" "Man".Pluralize(inputIsKnownToBeSingular: false) => "Men" "string".Pluralize(inputIsKnownToBeSingular: false) => "strings" @abstr_code_section C# "Men".Singularize() => "Man" "strings".Singularize() => "string" @abstr_code_section C# "Men".Singularize(inputIsKnownToBePlural: false) => "Man" "Man".Singularize(inputIsKnownToBePlural: false) => "Man" "strings".Singularize(inputIsKnownToBePlural: false) => "string" @abstr_code_section C# // Adds a word to the vocabulary which cannot easily be pluralized/singularized by RegEx. // Will match both "salesperson" and "person". Vocabularies.Default.AddIrregular("person", "people");

// To only match "person" and not "salesperson" you would pass false for the 'matchEnding' parameter. Vocabularies.Default.AddIrregular("person", "people", matchEnding: false);

// Adds an uncountable word to the vocabulary. Will be ignored when plurality is changed: Vocabularies.Default.AddUncountable("fish");

// Adds a rule to the vocabulary that does not follow trivial rules for pluralization: Vocabularies.Default.AddPlural("bus", "buses");

// Adds a rule to the vocabulary that does not follow trivial rules for singularization // (will match both "vertices" -> "vertex" and "indices" -> "index"): Vocabularies.Default.AddSingular("(vert|ind)ices$", "$ @abstr_number ex");

@abstr_code_section C# "case".ToQuantity( @abstr_number ) => " @abstr_number cases" "case".ToQuantity( @abstr_number ) => " @abstr_number case" "case".ToQuantity( @abstr_number ) => " @abstr_number cases" "man".ToQuantity( @abstr_number ) => " @abstr_number men" "man".ToQuantity( @abstr_number ) => " @abstr_number man" "man".ToQuantity( @abstr_number ) => " @abstr_number men" @abstr_code_section C# "men".ToQuantity( @abstr_number ) => " @abstr_number men" "process".ToQuantity( @abstr_number ) => " @abstr_number processes" "process".ToQuantity( @abstr_number ) => " @abstr_number process" "processes".ToQuantity( @abstr_number ) => " @abstr_number processes" "processes".ToQuantity( @abstr_number ) => " @abstr_number process" @abstr_code_section C# "case".ToQuantity( @abstr_number , ShowQuantityAs.Words) => "five cases" "case".ToQuantity( @abstr_number , ShowQuantityAs.None) => "cases" @abstr_code_section C# "dollar".ToQuantity( @abstr_number , "C @abstr_number ", new CultureInfo("en-US")) => "$ @abstr_number dollars" "dollar".ToQuantity( @abstr_number , "C @abstr_number ", new CultureInfo("en-US")) => "$ @abstr_number . @abstr_number dollars" "cases".ToQuantity( @abstr_number , "N @abstr_number ") => " @abstr_number , @abstr_number cases" @abstr_code_section C# @abstr_number .Ordinalize() => " @abstr_number st" @abstr_number .Ordinalize() => " @abstr_number th" @abstr_code_section C# // for Brazilian Portuguese locale @abstr_number .Ordinalize(GrammaticalGender.Masculine) => " @abstr_number º" @abstr_number .Ordinalize(GrammaticalGender.Feminine) => " @abstr_number ª" @abstr_number .Ordinalize(GrammaticalGender.Neuter) => " @abstr_number º" " @abstr_number ".Ordinalize(GrammaticalGender.Masculine) => " @abstr_number º" " @abstr_number ".Ordinalize(GrammaticalGender.Feminine) => " @abstr_number ª" " @abstr_number ".Ordinalize(GrammaticalGender.Neuter) => " @abstr_number º" @abstr_code_section C# "some_title for something".Pascalize() => "SomeTitleForSomething" @abstr_code_section C# "some_title for something".Camelize() => "someTitleForSomething" @abstr_code_section C# "SomeTitle".Underscore() => "some_title" @abstr_code_section C# "some_title".Dasherize() => "some-title" "some_title".Hyphenate() => "some-title" @abstr_code_section C# "SomeText".Kebaberize() => "some-text" @abstr_code_section C# @abstr_number .Milliseconds() => TimeSpan.FromMilliseconds( @abstr_number ) @abstr_number .Seconds() => TimeSpan.FromSeconds( @abstr_number ) @abstr_number .Minutes() => TimeSpan.FromMinutes( @abstr_number ) @abstr_number .Hours() => TimeSpan.FromHours( @abstr_number ) @abstr_number .Days() => TimeSpan.FromDays( @abstr_number ) @abstr_number .Weeks() => TimeSpan.FromDays( @abstr_number ) @abstr_code_section C# DateTime.Now.AddDays( @abstr_number ).AddHours( @abstr_number ).AddMinutes(- @abstr_number ) @abstr_code_section C# DateTime.Now + @abstr_number .Days() + @abstr_number .Hours() - @abstr_number .Minutes() @abstr_code_section C# In.TheYear( @abstr_number ) // Returns the first of January of @abstr_number In.January // Returns @abstr_number st of January of the current year In.FebruaryOf( @abstr_number ) // Returns @abstr_number st of February of @abstr_number 

In.One.Second // DateTime.UtcNow.AddSeconds( @abstr_number ); In.Two.SecondsFrom(DateTime dateTime) In.Three.Minutes // With corresponding From method In.Three.Hours // With corresponding From method In.Three.Days // With corresponding From method In.Three.Weeks // With corresponding From method In.Three.Months // With corresponding From method In.Three.Years // With corresponding From method

On.January.The @abstr_number th // Returns @abstr_number th of January of the current year On.February.The( @abstr_number ) // Returns @abstr_number th of Feb of the current year @abstr_code_section C# var someDateTime = new DateTime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number );

// Returns new DateTime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) changing the year to @abstr_number someDateTime.In( @abstr_number )

// Returns new DateTime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) changing the hour to @abstr_number : @abstr_number : @abstr_number . @abstr_number someDateTime.At( @abstr_number )

// Returns new DateTime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) changing the time to @abstr_number : @abstr_number : @abstr_number . @abstr_number someDateTime.At( @abstr_number , @abstr_number , @abstr_number )

// Returns new DateTime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) changing the time to @abstr_number : @abstr_number : @abstr_number . @abstr_number someDateTime.AtNoon()

// Returns new DateTime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) changing the time to @abstr_number : @abstr_number : @abstr_number . @abstr_number someDateTime.AtMidnight() @abstr_code_section C# @abstr_number . @abstr_number .Billions() => @abstr_number @abstr_number .Hundreds().Thousands() => @abstr_number @abstr_code_section C# @abstr_number .ToWords() => "one" @abstr_number .ToWords() => "ten" @abstr_number .ToWords() => "eleven" @abstr_number .ToWords() => "one hundred and twenty-two" @abstr_number .ToWords() => "three thousand five hundred and one" @abstr_code_section C# // for Russian locale @abstr_number .ToWords(GrammaticalGender.Masculine) => "один" @abstr_number .ToWords(GrammaticalGender.Feminine) => "одна" @abstr_number .ToWords(GrammaticalGender.Neuter) => "одно" @abstr_code_section 

Obviously this only applies to some cultures. For others passing gender in doesn't make any difference in the result.

Also, culture to use can be specified explicitly. If it is not, current thread's current UI culture is used. Here's an example:

```C# @abstr_number .ToWords(new CultureInfo("en")) => "eleven" @abstr_number .ToWords(GrammaticalGender.Masculine, new CultureInfo("ru")) => "один" @abstr_code_section C# @abstr_number .ToOrdinalWords() => "zeroth" @abstr_number .ToOrdinalWords() => "first" @abstr_number .ToOrdinalWords() => "second" @abstr_number .ToOrdinalWords() => "eighth" @abstr_number .ToOrdinalWords() => "tenth" @abstr_number .ToOrdinalWords() => "eleventh" @abstr_number .ToOrdinalWords() => "twelfth" @abstr_number .ToOrdinalWords() => "twentieth" @abstr_number .ToOrdinalWords() => "twenty first" @abstr_number .ToOrdinalWords() => "hundred and twenty first" @abstr_code_section C# // for Brazilian Portuguese locale @abstr_number .ToOrdinalWords(GrammaticalGender.Masculine) => "primeiro" @abstr_number .ToOrdinalWords(GrammaticalGender.Feminine) => "primeira" @abstr_number .ToOrdinalWords(GrammaticalGender.Neuter) => "primeiro" @abstr_number .ToOrdinalWords(GrammaticalGender.Masculine) => "segundo" @abstr_number .ToOrdinalWords(GrammaticalGender.Feminine) => "segunda" @abstr_number .ToOrdinalWords(GrammaticalGender.Neuter) => "segundo" @abstr_code_section 

Obviously this only applies to some cultures. For others passing gender in doesn't make any difference in the result.

Also, culture to use can be specified explicitly. If it is not, current thread's current UI culture is used. Here's an example:

```C# @abstr_number .ToOrdinalWords(new CultureInfo("en-US")) => "tenth" @abstr_number .ToOrdinalWords(GrammaticalGender.Masculine, new CulureInfo("pt-BR")) => "primeiro" @abstr_code_section C# // for English UK locale new DateTime( @abstr_number , @abstr_number , @abstr_number ).ToOrdinalWords() => " @abstr_number st January @abstr_number " new DateTime( @abstr_number , @abstr_number , @abstr_number ).ToOrdinalWords() => " @abstr_number th February @abstr_number " new DateTime( @abstr_number , @abstr_number , @abstr_number ).ToOrdinalWords() => " @abstr_number nd March @abstr_number " // for English US locale new DateTime( @abstr_number , @abstr_number , @abstr_number ).ToOrdinalWords() => "January @abstr_number st, @abstr_number " new DateTime( @abstr_number , @abstr_number , @abstr_number ).ToOrdinalWords() => "February @abstr_number th, @abstr_number " new DateTime( @abstr_number , @abstr_number , @abstr_number ).ToOrdinalWords() => "March @abstr_number nd, @abstr_number " @abstr_code_section C# @abstr_code_section C# @abstr_number .ToRoman() => "I" @abstr_number .ToRoman() => "II" @abstr_number .ToRoman() => "III" @abstr_number .ToRoman() => "IV" @abstr_number .ToRoman() => "V" @abstr_number .ToRoman() => "VI" @abstr_number .ToRoman() => "VII" @abstr_number .ToRoman() => "VIII" @abstr_number .ToRoman() => "IX" @abstr_number .ToRoman() => "X" @abstr_code_section C# "I".FromRoman() => @abstr_number "II".FromRoman() => @abstr_number "III".FromRoman() => @abstr_number "IV".FromRoman() => @abstr_number "V".FromRoman() => @abstr_number @abstr_code_section C# @abstr_number d.ToMetric() => " @abstr_number " @abstr_number d.ToMetric() => " @abstr_number . @abstr_number k" @abstr_number . @abstr_number d.ToMetric() => " @abstr_number m" @abstr_code_section C# @abstr_number d.ToMetric() => " @abstr_number " @abstr_number d.ToMetric() => " @abstr_number . @abstr_number k" @abstr_number . @abstr_number d.ToMetric() => " @abstr_number m"

" @abstr_number ".FromMetric() => @abstr_number " @abstr_number . @abstr_number k".FromMetric() => @abstr_number " @abstr_number m".FromMetric() => @abstr_number . @abstr_number @abstr_code_section c# var fileSize = ( @abstr_number ).Kilobytes();

fileSize.Bits => @abstr_number fileSize.Bytes => @abstr_number fileSize.Kilobytes => @abstr_number fileSize.Megabytes => @abstr_number . @abstr_number fileSize.Gigabytes => @abstr_number . @abstr_number e- @abstr_number fileSize.Terabytes => @abstr_number . @abstr_number e- @abstr_number @abstr_code_section C# @abstr_number .Bits(); @abstr_number .Bytes(); ( @abstr_number . @abstr_number ).Kilobytes(); ( @abstr_number . @abstr_number ).Megabytes(); ( @abstr_number . @abstr_number ).Gigabytes(); ( @abstr_number . @abstr_number ).Terabytes(); @abstr_code_section C# var total = ( @abstr_number ).Gigabytes() + ( @abstr_number ).Megabytes() - ( @abstr_number . @abstr_number ).Gigabytes(); total.Subtract(( @abstr_number ).Kilobytes()).Add(( @abstr_number ).Megabytes()); @abstr_code_section C# var maxFileSize = ( @abstr_number ).Kilobytes();

maxFileSize.LargestWholeNumberSymbol; // "KB" maxFileSize.LargestWholeNumberValue; // @abstr_number @abstr_code_section C# @abstr_number .Bits().ToString(); // @abstr_number b @abstr_number .Bits().ToString(); // @abstr_number B (. @abstr_number ).Kilobytes().Humanize(); // @abstr_number B ( @abstr_number ).Kilobytes().ToString(); // @abstr_number KB ( @abstr_number ).Kilobytes().Humanize(); // @abstr_number MB (. @abstr_number ).Gigabytes().Humanize(); // @abstr_number MB ( @abstr_number ).Gigabytes().ToString(); // @abstr_number TB @abstr_code_section C# var b = ( @abstr_number . @abstr_number ).Kilobytes();

// Default number format is #.## b.ToString("KB"); // @abstr_number . @abstr_number KB b.Humanize("MB"); // . @abstr_number MB b.Humanize("b"); // @abstr_number b

// Default symbol is the largest metric prefix value >= @abstr_number b.ToString("#.#"); // @abstr_number . @abstr_number KB

// All valid values of double.ToString(string format) are acceptable b.ToString(" @abstr_number . @abstr_number "); // @abstr_number . @abstr_number KB b.Humanize(" @abstr_number . @abstr_number "); // @abstr_number . @abstr_number KB

// You can include number format and symbols b.ToString("#.#### MB"); // . @abstr_number MB b.Humanize(" @abstr_number . @abstr_number GB"); // @abstr_number GB b.Humanize("#.## B"); // @abstr_number . @abstr_number B @abstr_code_section C# @abstr_number .Bits().ToFullWords(); // @abstr_number bits @abstr_number .Bits().ToFullWords(); // @abstr_number byte (. @abstr_number ).Kilobytes().ToFullWords(); // @abstr_number bytes ( @abstr_number ).Kilobytes().ToFullWords(); // @abstr_number kilobytes ( @abstr_number ).Kilobytes().ToFullWords(); // @abstr_number megabyte (. @abstr_number ).Gigabytes().ToFullWords(); // @abstr_number megabytes ( @abstr_number ).Gigabytes().ToFullWords(); // @abstr_number terabyte @abstr_code_section C# ByteSize output; ByteSize.TryParse(" @abstr_number . @abstr_number mb", out output);

// Invalid ByteSize.Parse(" @abstr_number . @abstr_number b"); // Can't have partial bits

// Valid ByteSize.Parse(" @abstr_number b"); ByteSize.Parse(" @abstr_number . @abstr_number B"); ByteSize.Parse(" @abstr_number . @abstr_number KB"); ByteSize.Parse(" @abstr_number . @abstr_number kB "); // Spaces are trimmed ByteSize.Parse(" @abstr_number . @abstr_number kb"); ByteSize.Parse(" @abstr_number . @abstr_number MB"); ByteSize.Parse(" @abstr_number . @abstr_number mB"); ByteSize.Parse(" @abstr_number . @abstr_number mb"); ByteSize.Parse(" @abstr_number . @abstr_number GB"); ByteSize.Parse(" @abstr_number . @abstr_number gB"); ByteSize.Parse(" @abstr_number . @abstr_number gb"); ByteSize.Parse(" @abstr_number . @abstr_number TB"); ByteSize.Parse(" @abstr_number . @abstr_number tB"); ByteSize.Parse(" @abstr_number . @abstr_number tb"); @abstr_code_section C# var size = ByteSize.FromMegabytes( @abstr_number ); var measurementInterval = TimeSpan.FromSeconds( @abstr_number );

var text = size.Per(measurementInterval).Humanize(); // @abstr_number MB/s

text = size.Per(measurementInterval).Humanize(TimeUnit.Minute); // @abstr_number MB/min

text = size.Per(measurementInterval).Humanize(TimeUnit.Hour); // @abstr_number . @abstr_number GB/hour @abstr_code_section C# @abstr_number .Bytes().Per( @abstr_number .Seconds()).Humanize("#.##"); // @abstr_number . @abstr_number GB/s @abstr_code_section C# @abstr_number .ToHeading(); // north @abstr_number .ToHeading(); // north @abstr_code_section C# @abstr_number .ToHeading(true); // S @abstr_number .ToHeading(true); // N @abstr_code_section C# @abstr_number .ToHeadingArrow(); // → @abstr_number .ToHeadingArrow(); // ↙ @abstr_code_section C# "S".FromShortHeading(); // @abstr_number "SW".FromShortHeading(); // @abstr_number @abstr_code_section C# @abstr_number .Tupleize(); // single @abstr_number .Tupleize(); // triple @abstr_number .Tupleize(); // centuple @abstr_code_section C# using System; using System.Collections.Generic; using System.ComponentModel; using System.ComponentModel.DataAnnotations; using System.Linq; using System.Web.Mvc; using Humanizer;

namespace YourApp { public class HumanizerMetadataProvider : DataAnnotationsModelMetadataProvider { protected override ModelMetadata CreateMetadata( IEnumerable attributes, Type containerType, Func modelAccessor, Type modelType, string propertyName) { var propertyAttributes = attributes.ToList(); var modelMetadata = base.CreateMetadata(propertyAttributes, containerType, modelAccessor, modelType, propertyName);
    
    
            if (IsTransformRequired(modelMetadata, propertyAttributes))
                modelMetadata.DisplayName = modelMetadata.PropertyName.Humanize();
    
            return modelMetadata;
        }
    
        private static bool IsTransformRequired(ModelMetadata modelMetadata, IList<Attribute> propertyAttributes)
        {
            if (string.IsNullOrEmpty(modelMetadata.PropertyName))
                return false;
    
            if (propertyAttributes.OfType<DisplayNameAttribute>().Any())
                return false;
    
            if (propertyAttributes.OfType<DisplayAttribute>().Any())
                return false;
    
            return true;
        }
    }
    

} @abstr_code_section C# ModelMetadataProviders.Current = new HumanizerMetadataProvider(); @abstr_code_section C# public class RegisterModel { [Display(Name = "User name")] public string UserName { get; set; }
    
    
    [Display(Name = "Email address")]
    public string EmailAddress { get; set; }
    
    [Display(Name = "Confirm password")]
    public string ConfirmPassword { get; set; }
    

} @abstr_code_section C# public class RegisterModel { public string UserName { get; set; } public string EmailAddress { get; set; } public string ConfirmPassword { get; set; } } @abstr_code_section C# modelMetadata.DisplayName = modelMetadata.PropertyName.Humanize().Transform(To.TitleCase); ```

## Known installation issues and workarounds

Due to a @abstr_hyperlink in the CLI tools, the main `Humanizer` package and it's language packages will fail to install. As temporary workaround, until that bug is fixed, use `Humanizer.xproj` instead. It contains all of the languages.

## Use in ASP.NET @abstr_number .x MVC Views

Humanizer is a Portable Class Library. There is currently @abstr_hyperlink if you try to use PCL's in an MVC view since the MVC views do not share the same build system as the regular project. You must specify all references in the `web.config` file, including ones the project system normally automatically adds. 

If you encounter errors saying that you must add a reference to either `System.Runtime` or `System.Globalization`, this applies to you. The solution is to add the contract references to your `web.config` as listed @abstr_hyperlink . Note that this applies to any PCL you use in an MVC view, not just Humanizer.

## How to contribute?

Please see @abstr_hyperlink .

## Continuous Integration from AppVeyor

Humanizer project is built & tested continuously by AppVeyor (more details @abstr_hyperlink ). That applies to pull requests too. Shortly after you submit a PR you can check the build and test status notification on your PR. Feel free to jump in and @abstr_hyperlink some green PRs!

The current build status on the CI server is @abstr_hyperlink 

## Related projects

Below is a list of related open source projects:

### Humanizer ReSharper Annotations

If you use ReSharper, annotations for Humanizer are available in the @abstr_hyperlink , which you can obtain via the ReSharper Extension Manager. These annotations do not yet cover the entire library, but @abstr_hyperlink .

### PowerShell Humanizer

@abstr_hyperlink is a PowerShell module that wraps Humanizer.

### Humanizer JVM

@abstr_hyperlink is an adaptation of the Humanizer framework for .Net which is made for the jvm and is written in Kotlin. Humanizer.jvm meets all your jvm needs for manipulating and displaying strings, enums, dates, times, timespans, numbers and quantities.

### Humanizer.JS

@abstr_hyperlink is a TypeScript port of the Humanizer framework.

## Main contributors

  * Mehdi Khalili ( @abstr_hyperlink )
  * Oren Novotny ( @abstr_hyperlink )
  * Alexander I. Zaytsev ( @abstr_hyperlink )
  * Max Malook ( @abstr_hyperlink )



## License

Humanizer is released under the MIT License. See the @abstr_hyperlink file for details.

## Icon

Icon created by @abstr_hyperlink 
