@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_image 

# Bogus for .NET: C#, F#, and VB.NET

## Project Description

Hello. I'm your host **@abstr_hyperlink** ( @abstr_hyperlink ). **Bogus** is a simple and sane fake data generator for **.NET** languages like **C#** , **F#** and **VB.NET**. **Bogus** is fundamentally a **C#** port of @abstr_hyperlink and inspired by @abstr_hyperlink 's syntax sugar.

**Bogus** will help you load databases, UI and apps with fake data for your testing needs. If you like **Bogus** star :star: the repository and show your friends! :smile: If you find **Bogus** useful consider supporting the project by purchasing a Bogus Premium license that gives you extra **Bogus** superpowers! :dizzy: :muscle: 

### Download & Install

**Nuget Package @abstr_hyperlink**

@abstr_code_section Minimum Requirements: _*.NET Standard @abstr_number . @abstr_number *_ or _*.NET Standard @abstr_number . @abstr_number *_ or _*.NET Framework @abstr_number . @abstr_number *_.

##### Projects That Use Bogus

  * @abstr_hyperlink @abstr_hyperlink 
  * @abstr_hyperlink @abstr_hyperlink 
  * @abstr_hyperlink @abstr_hyperlink 
  * @abstr_hyperlink @abstr_hyperlink 
  * **Microsoft Office Developer**
    * @abstr_hyperlink @abstr_hyperlink 
    * @abstr_hyperlink @abstr_hyperlink 



##### Featured In

  * @abstr_hyperlink 
  * **NuGet Must Haves - @abstr_hyperlink**
  * **@abstr_hyperlink** & **@abstr_hyperlink**
  * **@abstr_hyperlink**



##### Blog Posts

  * @abstr_hyperlink - @abstr_hyperlink 
  * @abstr_hyperlink - @abstr_hyperlink 
  * @abstr_hyperlink - @abstr_hyperlink 
  * Mark Timmings - @abstr_hyperlink 
  * @abstr_hyperlink 
  * Steve Leigh - @abstr_hyperlink 
  * Dominik Roszkowski - @abstr_hyperlink 
  * @abstr_hyperlink - @abstr_hyperlink 



##### The Crypto Tip Jar!

@abstr_hyperlink * :dog @abstr_number : **Dogecoin** : `D @abstr_number Y @abstr_number oaf @abstr_number cgcjp @abstr_number AgD @abstr_number sDWWLTXGGYx @abstr_number r @abstr_number`

## Usage

### The Great C# Example

@abstr_code_section 

#### Click here for F# and VB.NET examples!

### Locales

Since we're a port of **faker.js** , we support a whole bunch of different locales. Here's an example in Korean:

@abstr_code_section 

**Bogus** supports the following locales:

| Locale Code | Language | | Locale Code | Language | |:--------------:|:-----------------------:|-|:--------------:|:------------------------:| |`af_ZA`|South Africa (Afrikaans) ||`ge`|Georgian | |`ar`|Arabic ||`id_ID`|Indonesia | |`az`|Azerbaijani ||`it`|Italian | |`cz`|Czech ||`ja`|Japanese | |`de`|German ||`ko`|Korean | |`de_AT`|German (Austria) ||`lv`|Latvian | |`de_CH`|German (Switzerland) ||`nb_NO`|Norwegian | |`el`|Greek ||`nep`|Nepalese | |`en`|English ||`nl`|Dutch | |`en_AU`|Australia (English) ||`nl_BE`|Dutch (Belgium) | |`en_au_ocker`|Australia Ocker (English) ||`pl`|Polish | |`en_BORK`|Bork (English) ||`pt_BR`|Portuguese (Brazil) | |`en_CA`|Canada (English) ||`pt_PT`|Portuguese (Portugal) | |`en_GB`|Great Britain (English) ||`ro`|Romanian | |`en_IE`|Ireland (English) ||`ru`|Russian | |`en_IND`|India (English) ||`sk`|Slovakian | |`en_US`|United States (English) ||`sv`|Swedish | |`en_ZA`|South Africa (English) ||`tr`|Turkish | |`es`|Spanish ||`uk`|Ukrainian | |`es_MX`|Spanish Mexico ||`vi`|Vietnamese | |`fa`|Farsi ||`zh_CN`|Chinese | |`fr`|French ||`zh_TW`|Chinese (Taiwan) | |`fr_CA`|Canada (French) ||`zu_ZA`|South Africa (Zulu) | |`fr_CH`|French (Switzerland) ||||

**_Note:_** Some locales may not have a complete data set. For example, @abstr_hyperlink does not have a `lorem` data set, but @abstr_hyperlink has a `lorem` data set. **Bogus** will default to `en` if a _locale-specific_ data set is not found. To further illustrate the previous example, the missing `zh_CN:lorem` data set will default to the `en:lorem` data set.

If you'd like to help contribute new locales or update existing ones please see our @abstr_hyperlink wiki page for more info.

### Without Fluent Syntax

You can use **Bogus** without a fluent setup. The examples below highlight three alternative ways to use **Bogus** without a fluent syntax setup. @abstr_number . Using the `Faker` facade. @abstr_number . Using **DataSets** directly. @abstr_number . Using `Faker<T>` **inheritance**.

All three alternative styles of using **Bogus** produce the same `Order` result as demonstrated below: @abstr_code_section 

### Bogus API Support

  * **`Address`**
    * `ZipCode` \- Get a zipcode.
    * `City` \- Get a city name.
    * `StreetAddress` \- Get a street address.
    * `CityPrefix` \- Get a city prefix.
    * `CitySuffix` \- Get a city suffix.
    * `StreetName` \- Get a street name.
    * `BuildingNumber` \- Get a building number.
    * `StreetSuffix` \- Get a street suffix.
    * `SecondaryAddress` \- Get a secondary address like 'Apt. @abstr_number ' or 'Suite @abstr_number '.
    * `County` \- Get a county.
    * `Country` \- Get a country.
    * `FullAddress` \- Get a full address like Street, City, Country.
    * `CountryCode` \- Get a random ISO @abstr_number - @abstr_number country code.
    * `State` \- Get a random state state.
    * `StateAbbr` \- Get a state abbreviation.
    * `Latitude` \- Get a Latitude.
    * `Longitude` \- Get a Longitude.
    * `Direction` \- Generates a cardinal or ordinal direction. IE: Northwest, South, SW, E.
    * `CardinalDirection` \- Generates a cardinal direction. IE: North, South, E, W.
    * `OrdinalDirection` \- Generates an ordinal direction. IE: Northwest, Southeast, SW, NE.
  * **`Commerce`**
    * `Department` \- Get a random commerce department.
    * `Price` \- Get a random product price.
    * `Categories` \- Get random product categories.
    * `ProductName` \- Get a random product name.
    * `Color` \- Get a random color.
    * `Product` \- Get a random product.
    * `ProductAdjective` \- Random product adjective.
    * `ProductMaterial` \- Random product material.
    * `Ean @abstr_number` \- Get a random EAN- @abstr_number barcode number.
    * `Ean @abstr_number` \- Get a random EAN- @abstr_number barcode number.
  * **`Company`**
    * `CompanySuffix` \- Get a company suffix. "Inc" and "LLC" etc.
    * `CompanyName` \- Get a company name.
    * `CatchPhrase` \- Get a company catch phrase.
    * `Bs` \- Get a company BS phrase.
  * **`Database`**
    * `Column` \- Generates a column name.
    * `Type` \- Generates a column type.
    * `Collation` \- Generates a collation.
    * `Engine` \- Generates a storage engine.
  * **`Date`**
    * `Past` \- Get a `DateTime` in the past between `refDate` and `yearsToGoBack`.
    * `PastOffset` \- Get a `DateTimeOffset` in the past between `refDate` and `yearsToGoBack`.
    * `Soon` \- Get a `DateTime` that will happen soon.
    * `SoonOffset` \- Get a `DateTimeOffset` that will happen soon.
    * `Future` \- Get a `DateTime` in the future between `refDate` and `yearsToGoForward`.
    * `FutureOffset` \- Get a `DateTimeOffset` in the future between `refDate` and `yearsToGoForward`.
    * `Between` \- Get a random `DateTime` between `start` and `end`.
    * `BetweenOffset` \- Get a random `DateTimeOffset` between `start` and `end`.
    * `Recent` \- Get a random `DateTime` within the last few days.
    * `RecentOffset` \- Get a random `DateTimeOffset` within the last few days.
    * `Timespan` \- Get a random `TimeSpan`.
    * `Month` \- Get a random month
    * `Weekday` \- Get a random weekday
  * **`Finance`**
    * `Account` \- Get an account number. Default length is @abstr_number digits.
    * `AccountName` \- Get an account name. Like "savings", "checking", "Home Loan" etc..
    * `Amount` \- Get a random amount. Default @abstr_number - @abstr_number .
    * `TransactionType` \- Get a transaction type: "deposit", "withdrawal", "payment", or "invoice".
    * `Currency` \- Get a random currency.
    * `CreditCardNumber` \- Generate a random credit card number with valid Luhn checksum.
    * `CreditCardCvv` \- Generate a credit card CVV
    * `BitcoinAddress` \- Generates a random Bitcoin address.
    * `EthereumAddress` \- Generate a random Ethereum address.
    * `RoutingNumber` \- Generates an ABA routing number with valid check digit.
    * `Bic` \- Generates Bank Identifier Code (BIC) code.
    * `Iban` \- Generates an International Bank Account Number (IBAN).
  * **`Hacker`**
    * `Abbreviation` \- Returns an abbreviation.
    * `Adjective` \- Returns a adjective.
    * `Noun` \- Returns a noun.
    * `Verb` \- Returns a verb.
    * `IngVerb` \- Returns a verb ending with -ing.
    * `Phrase` \- Returns a phrase.
  * **`Images`**
    * `DataUri` \- Get a SVG data URI image with a specific width and height.
    * `PicsumUrl` \- Get an image from the https://picsum.photos service.
    * `LoremFlickrUrl` \- Get an image from https://loremflickr.com service.
    * `LoremPixelUrl` \- Creates an image URL with http://lorempixel.com. Note: This service is slow. Consider using PicsumUrl() as a faster alternative. 
      * `Abstract` \- Gets an abstract looking image.
      * `Animals` \- Gets an image of an animal.
      * `Business` \- Gets a business looking image.
      * `Cats` \- Gets a picture of a cat.
      * `City` \- Gets a city looking image.
      * `Food` \- Gets an image of food.
      * `Nightlife` \- Gets an image with city looking nightlife.
      * `Fashion` \- Gets an image in the fashion category.
      * `People` \- Gets an image of humans.
      * `Nature` \- Gets an image of nature.
      * `Sports` \- Gets an image related to sports.
      * `Technics` \- Get a technology related image.
      * `Transport` \- Get a transportation related image.
  * **`Internet`**
    * `Avatar` \- Generates a legit Internet URL avatar from twitter accounts.
    * `Email` \- Generates an email address.
    * `ExampleEmail` \- Generates an example email with @example.com.
    * `UserName` \- Generates user names.
    * `DomainName` \- Generates a random domain name.
    * `DomainWord` \- Generates a domain word used for domain names.
    * `DomainSuffix` \- Generates a domain name suffix like .com, .net, .org
    * `Ip` \- Gets a random IP address.
    * `Ipv @abstr_number` \- Generates a random IPv @abstr_number address.
    * `UserAgent` \- Generates a random user agent.
    * `Mac` \- Gets a random mac address.
    * `Password` \- Generates a random password.
    * `Color` \- Gets a random aesthetically pleasing color near the base RGB. See @abstr_hyperlink .
    * `Protocol` \- Returns a random protocol. HTTP or HTTPS.
    * `Url` \- Generates a random URL.
    * `UrlWithPath` \- Get a random URL with random path.
  * **`Lorem`**
    * `Word` \- Get a random lorem word.
    * `Words` \- Get some lorem words
    * `Letter` \- Get a character letter.
    * `Sentence` \- Get a random sentence of specific number of words.
    * `Sentences` \- Get some sentences.
    * `Paragraph` \- Get a paragraph.
    * `Paragraphs` \- Get a specified number of paragraphs.
    * `Text` \- Get random text on a random lorem methods.
    * `Lines` \- Get lines of lorem.
    * `Slug` \- Slugify lorem words.
  * **`Name`**
    * `FirstName` \- Get a first name. Getting a gender specific name is only supported on locales that support it.
    * `LastName` \- Get a last name. Getting a gender specific name is only supported on locales that support it.
    * `FullName` \- Get a full name, concatenation of calling FirstName and LastName.
    * `Prefix` \- Gets a random prefix for a name.
    * `Suffix` \- Gets a random suffix for a name.
    * `FindName` \- Gets a full name.
    * `JobTitle` \- Gets a random job title.
    * `JobDescriptor` \- Get a job description.
    * `JobArea` \- Get a job area expertise.
    * `JobType` \- Get a type of job.
  * **`Phone`**
    * `PhoneNumber` \- Get a phone number.
    * `PhoneNumberFormat` \- Gets a phone number based on the locale's phone_number.formats[] array index.
  * **`Rant`**
    * `Review` \- Generates a random user review.
    * `Reviews` \- Generate an array of random reviews.
  * **`System`**
    * `FileName` \- Get a random file name.
    * `DirectoryPath` \- Get a random directory path (Unix).
    * `FilePath` \- Get a random file path (Unix).
    * `MimeType` \- Get a random mime type
    * `CommonFileType` \- Returns a commonly used file type.
    * `CommonFileExt` \- Returns a commonly used file extension.
    * `FileType` \- Returns any file type available as mime-type.
    * `FileExt` \- Gets a random extension for the given mime type.
    * `Semver` \- Get a random semver version string.
    * `Version` \- Get a random `Version`.
    * `Exception` \- Get a random `Exception` with a fake stack trace.
    * `AndroidId` \- Get a random GCM registration ID.
    * `ApplePushToken` \- Get a random Apple Push Token
    * `BlackBerryPin` \- Get a random BlackBerry Device PIN
  * **`Vehicle`**
    * `Vin` \- Generate a vehicle identification number (VIN).
    * `Manufacturer` \- Get a vehicle manufacture name. IE: Toyota, Ford, Porsche.
    * `Model` \- Get a vehicle model. IE: Camry, Civic, Accord.
    * `Type` \- Get a vehicle type. IE: Minivan, SUV, Sedan.
    * `Fuel` \- Get a vehicle fuel type. IE: Electric, Gasoline, Diesel.
  * **`Random`/`Randomizer`**
    * `Number` \- Get an int from @abstr_number to max.
    * `Digits` \- Get a random sequence of digits.
    * `Even` \- Returns a random even number.
    * `Odd` \- Returns a random odd number.
    * `Double` \- Get a random double, between @abstr_number . @abstr_number and @abstr_number . @abstr_number .
    * `Decimal` \- Get a random decimal, between @abstr_number . @abstr_number and @abstr_number . @abstr_number .
    * `Float` \- Get a random float, between @abstr_number . @abstr_number and @abstr_number . @abstr_number .
    * `Byte` \- Generate a random byte between @abstr_number and @abstr_number .
    * `Bytes` \- Get a random sequence of bytes.
    * `SByte` \- Generate a random sbyte between - @abstr_number and @abstr_number .
    * `Int` \- Generate a random int between MinValue and MaxValue.
    * `UInt` \- Generate a random uint between MinValue and MaxValue.
    * `ULong` \- Generate a random ulong between - @abstr_number and @abstr_number .
    * `Long` \- Generate a random long between MinValue and MaxValue.
    * `Short` \- Generate a random short between MinValue and MaxValue.
    * `UShort` \- Generate a random ushort between MinValue and MaxValue.
    * `Char` \- Generate a random char between MinValue and MaxValue.
    * `Chars` \- Generate a random chars between MinValue and MaxValue.
    * `String` \- Get a string of characters of a specific length.
    * `String @abstr_number` \- Get a string of characters with a specific length drawing characters from `chars`.
    * `Hash` \- Return a random hex hash. Default @abstr_number characters, aka SHA- @abstr_number .
    * `Bool` \- Get a random boolean.
    * `ArrayElement<T>` \- Get a random array element.
    * `ArrayElement` \- Get a random array element.
    * `ArrayElements<T>` \- Get a random subset of an array.
    * `ListItem<T>` \- Get a random list item.
    * `ListItems<T>` \- Get a random subset of a List.
    * `CollectionItem<T>` \- Get a random collection item.
    * `ReplaceNumbers` \- Replaces symbols with numbers.
    * `ReplaceSymbols` \- Replaces each character instance in a string.
    * `Replace` \- Replaces symbols with numbers and letters. # = number, ? = letter, * = number or letter.
    * `ClampString` \- Clamps the length of a string between min and max characters.
    * `Enum<T>` \- Picks a random Enum of T. Works only with Enums.
    * `Shuffle<T>` \- Shuffles an IEnumerable source.
    * `Word` \- Returns a single word or phrase in English.
    * `Words` \- Gets some random words and phrases in English.
    * `WordsArray` \- Get a range of words in an array (English).
    * `Guid` \- Get a random GUID.
    * `Uuid` \- Get a random GUID. Alias for Randomizer.Guid().
    * `RandomLocale` \- Returns a random locale.
    * `AlphaNumeric` \- Returns a random set of alpha numeric characters @abstr_number - @abstr_number , a-z.
    * `Hexadecimal` \- Generates a random hexadecimal string.
    * `WeightedRandom<T>` \- Returns a selection of T[] based on a weighted distribution of probability.



#### API Extension Methods

  * **`using Bogus.Extensions.Brazil;`**
    * `Bogus.Person.Cpf()` \- Cadastro de Pessoas Físicas
    * `Bogus.DataSets.Company.Cnpj()` \- Cadastro Nacional da Pessoa Jurídica
  * **`using Bogus.Extensions.Canada;`**
    * `Bogus.Person.Sin()` \- Social Insurance Number for Canada
  * **`using Bogus.Extensions.Denmark;`**
    * `Bogus.Person.Cpr()` \- Danish Personal Identification number
  * **`using Bogus.Extensions.Finland;`**
    * `Bogus.Person.Henkilötunnus()` \- Finnish Henkilötunnus
  * **`using Bogus.Extensions.Italy;`**
    * `Bogus.Person.CodiceFiscale()` \- Codice Fiscale
    * `Bogus.DataSets.Finance.CodiceFiscale()` \- Codice Fiscale
  * **`using Bogus.Extensions.Portugal;`**
    * `Bogus.Person.Nif()` \- Número de Identificação Fiscal (NIF)
    * `Bogus.DataSets.Company.Nipc()` \- Número de Identificação de Pessoa Colectiva (NIPC)
  * **`using Bogus.Extensions.UnitedKingdom;`**
    * `Bogus.DataSets.Finance.SortCode()` \- Banking Sort Code
    * `Bogus.DataSets.Finance.Nino()` \- National Insurance Number
    * `Bogus.DataSets.Vehicle.GbRegistrationPlate()` \- GB Vehicle Registration Plate
  * **`using Bogus.Extensions.UnitedStates;`**
    * `Bogus.Person.Ssn()` \- Social Security Number
    * `Bogus.DataSets.Company.Ein()` \- Employer Identification Number
  * **`using Bogus.Distributions.Gaussian;`**
    * `Randomizer.GaussianInt()` \- Generate an `int` based on a specific normal distribution.
    * `Randomizer.GaussianFloat()` \- Generate a `float` based on a specific normal distribution.
    * `Randomizer.GaussianDouble()` \- Generate a `double` based on a specific normal distribution.
    * `Randomizer.GaussianDecimal()` \- Generate a `decimal` based on a specific normal distribution.



#### Amazing Community Extensions

  * @abstr_hyperlink ( @abstr_hyperlink ) by @abstr_hyperlink - Extends **Bogus** by adding automatic `.RuleFor()` creation and population capabilities.
  * @abstr_hyperlink ( @abstr_hyperlink ) by @abstr_hyperlink - Extends **Bogus** with list of naughty strings which have a high probability of causing issues when used as user-input data. Examples: 
    * `.SQLInjection()` \- Strings which can cause a SQL injection if inputs are not sanitized.
    * `.ScriptInjection()` \- Strings which attempt to invoke a benign script injection; shows vulnerability to XSS.
    * `.iOSVulnerabilities()` \- Strings which crashed iMessage in various versions of iOS. 
    * `.KnownCVEsandVulnerabilities()` \- Strings that test for known vulnerabilities.
    * `.ServerCodeInjection()` \- Strings which can cause user to run code on server as a privileged user.
    * and more!
  * @abstr_hyperlink ( @abstr_hyperlink ) by @abstr_hyperlink - The Waffle Generator produces of text which, on first glance, looks like real, ponderous, prose; replete with clichés.
  * @abstr_hyperlink ( @abstr_hyperlink ) by @abstr_hyperlink - Adds support for @abstr_hyperlink to **Bogus**. 
  * @abstr_hyperlink ( @abstr_hyperlink ) by @abstr_hyperlink - Wrapper around @abstr_hyperlink . Examples: 
    * `.Country().Name()` \- Random country name.
    * `.Country().CurrencyCode()` \- Random currency code.
    * `.Australia().Capital()` \- Country capital.
    * `.Country().Iceland().PostCode()` \- Random country post code.
  * @abstr_hyperlink ( @abstr_hyperlink ) by @abstr_hyperlink - Wrapper around Australian Electoral Commission (AEC) data (https://www.aec.gov.au/). Examples: 
    * `.AustralianElectorates().Electorate()` \- Random electorate.
    * `.AustralianElectorates().Name()` \- Random electorate name.
    * `.AustralianElectorates().CurrentMember()` \- Random current electorate member for parliament.
    * `.AustralianElectorates().CurrentMemberName()` \- Random name of current a electorate member for parliament.
    * `.AustralianElectorates().Member()` \- Random electorate member for parliament.
    * `.AustralianElectorates().MemberName()` \- Random name of a electorate member for parliament.



## Bogus Premium Extensions!

@abstr_image **Bogus Premium** [ @abstr_hyperlink ] by @abstr_hyperlink   
You can help support the **Bogus** open source project by purchasing a @abstr_hyperlink license! With an active premium license you'll be supporting this cool open-source project. You'll also gain new superpowers that extended **Bogus** with new features and exclusive data sets! Check 'em out below!

  * **Premium:** @abstr_hyperlink ( @abstr_hyperlink ) - Save time using this handy Roslyn analyzer to generate and detect missing `.RuleFor()` rules at development & compile time! This tool is included with the @abstr_hyperlink license! @abstr_image 
  * **Premium:** @abstr_hyperlink ( @abstr_hyperlink ) - A dataset that contains real geographical information for places and things. Create fake GPS points and paths. Helpful for creating geodesic data for location-based aware apps. 
    * **`Location`**
    * `Altitude` \- Generate a random altitude, in meters. Default max height is @abstr_number m (Mount Everest). Heights are always positive.
    * `AreaCircle` \- Get a latitude and longitude within a specific radius in meters.
    * `Depth` \- Generate a random depth, in meters. Default max depth is - @abstr_number m (Mariana Trench). Depths are always negative.
    * `Geohash` \- Generates a random Geohash. @abstr_hyperlink .
  * **Premium:** @abstr_hyperlink ( @abstr_hyperlink ) - A data set for the Healthcare industry. Generate fake medical records, injuries, diagnosis, drugs, dosages, human anatomy, and ICD- @abstr_number medical codes. Especially helpful in HIPAA regulated environments! 
    * **`Drugs`**
    * `Administration` \- Get how a drug should be administered. IE: oral, nasal, injection.
    * `Dosage` \- Get a drug dosage with MG units
    * `DosageAmount` \- Get a drug dosage.
    * `DosageForm` \- Get the form of a drug. IE: tablet, capsule, gel.
    * `Ingredient` \- Get a drug ingredient. IE: folic acid, magnesium hydroxide, ibuprofen.
    * `Vitamin` \- Get a random vitamin.
    * **`Human`**
    * `BloodType` \- Get a random blood type. Ex: A+, OB
    * `BodyPartExternal` \- Get an external body part name. IE: Head, Arm, Leg.
    * `BodyPartInternal` \- Get an internal body part name. IE: Bladder, Lung, Heart.
    * `BodyRegion` \- Get a human body region. IE: Head and Neck, Thorax.
    * `BodySystem` \- Get a human body system. IE: Digestive, Nervous, Circulatory.
    * `Diagnosis` \- Shortcut to Icd @abstr_number .DiagnosisLongDescription".
    * `InfectiousDisease` \- Get an infectious disease. IE: Chickenpox, Polio, Zika Fever.
    * `Pain` \- Get a human pain. Ex: Chest pain, Headache, Toothache.
    * `Plasma` \- Get a random plasma type. Ex: O, A, B, AB
    * `Procedure` \- Shortcut to Icd @abstr_number .ProcedureLongDescription.
    * **`Icd @abstr_number`**
    * `DiagnosisCode` \- Get a ICD @abstr_number diagnosis code.
    * `DiagnosisEntry` \- Get a medical diagnosis.
    * `DiagnosisLongDescription` \- Get a medical diagnosis description. IE: Meningitis due to coxsackie virus.
    * `DiagnosisShortDescription` \- Get a short description of a medical diagnosis.
    * `ProcedureCode` \- Get a ICD @abstr_number procedure code.
    * `ProcedureEntry` \- Get a medical procedure.
    * `ProcedureLongDescription` \- Get a medical procedure description.
    * `ProcedureShortDescription` \- Get a short description of a medical procedure.
    * **`Icd @abstr_number`**
    * `DiagnosisCode` \- Get a ICD @abstr_number diagnosis code.
    * `DiagnosisEntry` \- Get a medical diagnosis.
    * `DiagnosisLongDescription` \- Get a medical diagnosis description. IE: Meningitis due to coxsackie virus.
    * `DiagnosisShortDescription` \- Get a short description of a medical diagnosis.
    * `ProcedureCode` \- Get a ICD @abstr_number procedure code.
    * `ProcedureEntry` \- Get a medical procedure.
    * `ProcedureLongDescription` \- Get a medical procedure description.
    * `ProcedureShortDescription` \- Get a short description of a medical procedure.
    * **`Medical`**
    * `Hospital` \- Get a random hospital.
    * `HospitalCity` \- Get a hospital city.
    * `HospitalName` \- Get a random hospital name. IE: UCLA Medical Center
    * `HospitalState` \- Get a hospital state.
    * `HospitalStreetAddress` \- Get a hospital street address.
    * `HospitalZipCode` \- Get a hospital ZipCode.
    * `Phrase` \- Get a random medical phrase.
    * `Word` \- Get a medical word.
  * **Premium:** @abstr_hyperlink ( @abstr_hyperlink )- A dataset for the Entertainment industry. 
    * **`Movies`**
    * `ActorName` \- Get a famous actor. IE: Keanu Reeves, Liam Neeson, and Natalie Portman.
    * `MovieCollection` \- Get a random movie collection. IE: Star Wars Collection, Indiana Jones Collection.
    * `MovieOverview` \- Get a random movie overview
    * `MovieReleaseDate` \- Get a random movie release date.
    * `MovieTagline` \- Get a random movie tagline.
    * `MovieTitle` \- Get a random movie title
    * `Production` \- Get a production company.
    * **`Tv`**
    * `ActorName` \- Get a famous actor. IE: Keanu Reeves, Liam Neeson, and Natalie Portman.
    * `Network` \- Get a random TV network. IE: BBC, ABC, NBC, FOX.
    * `Production` \- Get a production company
    * `Series` \- Get a name of a TV series. IE: Rick and Morty, Silicon Valley, The Walking Dead
  * **Premium:** @abstr_hyperlink ( @abstr_hyperlink ) - A dataset that contains historical texts in the public domain. Create fake sentences from famous speeches, classic books, and law 
    * **`Literature`**
    * `CommonSense` \- Text from "Common Sense, by Thomas Paine ( @abstr_number )"
    * `JfkSpeech` \- Text from "JFK's Inaugural Address"
    * `Knowledge` \- Text from "A Treatise Concerning the Principles of Human knowledge, by George Berkeley ( @abstr_number )"



* * *

### Helper Methods

The features shown below come standard with the @abstr_hyperlink NuGet package.

#### Person

If you want to generate a `Person` with context relevant properties like an email that looks like it belongs to someone with the same first/last name, create a person!

@abstr_code_section 

#### Replace

Replace a formatted string with random numbers `#`, letters `?`, or `*` random number or letter: @abstr_code_section 

#### Parse Handlebars

You can also parse strings in the following format: @abstr_code_section The name of a dataset is determined using `DataCategory` attribute or class name otherwise. (i.e `PhoneNumber` dataset in handlebars expression should be named as `phone_number`)

You can pass parameters to methods using braces:

@abstr_code_section 

#### Implicit and Explicit Type Conversion

You can also use implicit type conversion to make your code look cleaner without having to explicitly call `Faker<T>.Generate()`.

@abstr_code_section 

#### Bulk Rules

Sometimes writing `.RuleFor(x => x.Prop, ...)` can get repetitive, use the `.Rules((f, t) => {...})` shortcut to specify rules in bulk as shown below:

@abstr_code_section 

**_Note_** : When using the bulk `.Rules(...)` action, `StrictMode` cannot be set to `true` since individual properties of type `T` cannot be independently checked to ensure each property has a rule.

### Using `Enumerable.Range()` and LINQ

The `Enumerable.Range()` and LINQ are a great supplement when creating data with **Bogus**. Here's how to generate a simple list of email addresses:

@abstr_code_section 

## Advanced Topics, Guidance, and Best Practices

### Determinism

Determinism is a first class concept in **Bogus**. **Bogus** goes to great lengths so developers can generate the same sequence of data over multiple program executions. **Bogus** has two strategies of setting up deterministic behavior:

@abstr_number . **Global Seed** determinism through the `Randomizer.Seed` **global static** property.   
**_Pros:_** Easy to get deterministic data setup quickly.   
**_Cons:_** Code changes can impact other data values. Not so good for unit tests.

@abstr_number . **Local Seed** determinism through instance **properties** and **methods**. Specifically,   
* The `Faker<T>.UseSeed(int)` **method**.   
* The `.Random` **property** on the `Faker` facade and **DataSets**.
    
    
    ***Pros:*** Code changes can be isolated with minimal impact on determinism. Good for unit tests.    
    ***Cons:*** Requires some forethought in design.
    

When **Local Seed** determinism is used to set a seed value, the **global static** source of randomness is ignored. This has some interesting implications as described below.

#### Using Global Seed determinism

The easiest way to get deterministic data values over multiple executions of a program is to set the `Randomizer.Seed` property as demonstrated below:

@abstr_code_section | OrderId | Item | Quantity | |:---------:|:--------:|:----------:| | @abstr_number | Fish | @abstr_number | | @abstr_number | Chair | @abstr_number | | @abstr_number | Gloves | @abstr_number | | @abstr_number | Shirt | @abstr_number | | @abstr_number | Hat | @abstr_number |

Re-running the code above with `@abstr_number` as a global static seed value will produce the same table of data over and over again.

Next, add a new `Description` property to the `Order` class along with a new `.RuleFor(o => o.Description, ..)` rule and see the data changes: @abstr_code_section | OrderId | Item | Description | Quantity | |---------|----------|-------------|----------| | @abstr_number | Fish | Fantastic | :triangular_flag_on_post: @abstr_number | | @abstr_number | :triangular_flag_on_post: Keyboard | :triangular_flag_on_post: Gorgeous | :triangular_flag_on_post: @abstr_number | | @abstr_number | :triangular_flag_on_post: Shirt | :triangular_flag_on_post: Handcrafted | :triangular_flag_on_post: @abstr_number | | @abstr_number | :triangular_flag_on_post: Tuna | :triangular_flag_on_post: Small | :triangular_flag_on_post: @abstr_number | | @abstr_number | :triangular_flag_on_post: Table | :triangular_flag_on_post: Awesome | :triangular_flag_on_post: @abstr_number |

A couple of observations: * `Order @abstr_number : Item` value `Fish` remained the same. * `Order @abstr_number : Quantity` changed from `@abstr_number` to `@abstr_number`. * `Order @abstr_number : Item` has changed from a `Chair` to a `Keyboard`.

In fact, every data value with a :triangular_flag_on_post: icon has changed. This is due to the newly added property which has the effect of shifting the entire global static pseudo-random sequence off by + @abstr_number . This rippling effect can be a problem if unit tests are expecting data values to remain the same. The following section below shows how we can improve the situation.

#### Using Local Seed determinism

Making use of the `Faker<T>.UseSeed(int)` method can help limit the impact of POCO schema changes on deterministic data values that span across an entire run. Consider the following code that uses a seed value for each instance of a POCO object: @abstr_code_section | OrderId | Item | Quantity | |:---------:|:--------:|:----------:| | @abstr_number | Bike | @abstr_number | | @abstr_number | Cheese | @abstr_number | | @abstr_number | Gloves | @abstr_number | | @abstr_number | Bacon | @abstr_number | | @abstr_number | Pants | @abstr_number |

Next, adding the `Description` property to the `Order` class and examining the output:

@abstr_code_section 

| OrderId | Item | Description | Quantity | |---------|--------|-------------|----------| | @abstr_number | Bike | Ergonomic | :triangular_flag_on_post: @abstr_number | | @abstr_number | Cheese | Fantastic | :triangular_flag_on_post: @abstr_number | | @abstr_number | Gloves | Handcrafted | :triangular_flag_on_post: @abstr_number | | @abstr_number | Bacon | Tasty | :triangular_flag_on_post: @abstr_number | | @abstr_number | Pants | Gorgeous | :triangular_flag_on_post: @abstr_number |

Progress! This time only the `Quantity` data values with the :triangular_flag_on_post: icon have changed. The `Item` column remained the same before and after the new addition of the `Description` property.

We can further prevent the `Quantity` data values from changing by moving the `RuleFor(o => o.Description,...)` rule line to the end of the `Faker<Order>` declaration as shown below:

@abstr_code_section ` | OrderId | Item | Quantity | Description | |:---------:|:--------:|:----------:|:-------------:| | @abstr_number | Bike | @abstr_number | Practical | | @abstr_number | Cheese | @abstr_number | Rustic | | @abstr_number | Gloves | @abstr_number | Refined | | @abstr_number | Bacon | @abstr_number | Awesome | | @abstr_number | Pants | @abstr_number | Gorgeous |

Much success! : @abstr_number : :tada: The `Item` and `Quantity` values remain unchanged! The new `Description` property is added to the POCO object without any impact to other deterministic data values.

As a best practice, to achieve maximum deterministic behavior and unit test robustness with **Bogus** :

  * :heavy_check_mark: Add new `RuleFor` rules last in `Faker<T>` declarations. 
  * :heavy_check_mark: Avoid changing existing rules. 
  * :heavy_check_mark: Always use `Faker<T>.UseSeed(int)` to avoid using the global static seed as a source for randomness. 
  * :heavy_check_mark: When possible assert that a value exists, not the literal value itself. In other words, @abstr_code_section 



* * *

The `Faker` facade and individual **DataSets** can also be prepared to use **local seeds** as well. The following shows how to set up the `Faker` facade and **DataSets** to use local seeds:

@abstr_code_section 

The `.Random` property can be set multiple times without any ill effects. 

#### Versioning can effect determinism

Updating to new versions of **Bogus** on NuGet can effect determinism too. For example, when **Bogus** updates locales from **faker.js** or issues bug fixes, sometimes deterministic sequences can change. Changes to deterministic outputs are usually highlighted in the @abstr_hyperlink . Changes to deterministic outputs is also considered a breaking change. **Bogus** generally follows semantic versioning rules. For example:

| Version | Description | |---------|-------------| | **Bogus** v @abstr_number . @abstr_number . _* @abstr_number *_ | Initial version. | | **Bogus** v @abstr_number . @abstr_number . _* @abstr_number *_ | No change to deterministic outputs or breaking changes. Possible bug fixes  & improvements. | | **Bogus** v _* @abstr_number *_. @abstr_number . @abstr_number | Deterministic outputs may have changed or may include other breaking changes. |

As a general rule of thumb,

  * :heavy_check_mark: For maximum stability for unit tests, stay within the same major versions of **Bogus**. 
  * :heavy_check_mark: For those wanting to stay up to date, assert that a value exists, not a literal value itself. In other words, @abstr_code_section 



## F# and VB.NET Examples

#### The Fabulous F# Examples

  * Using the `Faker` facade with immutable **F#** record types:

@abstr_code_section 

  * Using the `Faker<T>` class with immutable **F#** record types:

@abstr_code_section 

  * Using the `Faker<T>` class with mutable classes in **F#** :

@abstr_code_section 




#### The Very Basic VB.NET Example

@abstr_code_section 

## Building From Source

The following section is only useful for people looking to contribute to **Bogus** or make custom modifications to **Bogus**. This section includes information about building **Bogus** from source code and is not required to operate or run **Bogus** in **.NET** applications.

The minimum requirements to build **Bogus** from source code are as follows: * **Windows @abstr_number _* or later. * @abstr_hyperlink_** Git for Windows **`v @abstr_number . @abstr_number . @abstr_number` or later. * @abstr_hyperlink **.NET Core SDK* `SDK v @abstr_number . @abstr_number . @abstr_number` or later.

#### Build Instructions

  * Download the source code.
  * Open command prompt and run `build.cmd`: 
    * `build clean` \- cleans sources and files.
    * `build resotre` \- restores all project references.
    * `build dnx` \- the main dotnet build task.
    * `build zip` \- creates a nice zip file with debug and release binaries.
    * `build nuget` \- builds **NuGet** packages.
    * `build test` \- runs all unit tests. 



Upon a successful build, the following folders will be created: * `\__compile` \- binary output folder for the compiler. * `\__package` \- output folder for zip and **NuGet** packages. * `\__test` \- test results folder.

#### Build Environment Variables

  * `set FORCE_VERSION= @abstr_number . @abstr_number . @abstr_number`   
If `FORCE_VERSION` environment variable is set with a semantic version number (eg: `x.y.z`), the build tasks will use the `FORCE_VERSION` to produce builds with the exact version number. Useful for testing out-of-band custom builds. However, it is not possible to reproduce exact binary equivalents of released **NuGet** packages because packages release on **NuGet** contain assemblies that are digitally signed with assembly signing enabled. The public does not have access to the signing key. 



#### Rebundling Locales

If you wish to re-bundle the latest **faker.js** locales, you'll need to first:

@abstr_number . `git submodule init` @abstr_number . `git submodule update` @abstr_number . Ensure, @abstr_hyperlink and `gulp` are properly installed. @abstr_number . `cd Source\Builder` @abstr_number . `npm install` to install required dev dependencies. @abstr_number . `gulp import.locales` to regenerate locales in `Source\Bogus\data`. @abstr_number . In solution explorer add any new locales not already included as an `EmbeddedResource`. @abstr_number . Finally, run `build.cmd`.

### License

  * @abstr_hyperlink 



## Contributors

Created by @abstr_hyperlink .

@abstr_hyperlink made possible by Matthew Bergman & Marak Squires.

A big thanks to GitHub and all contributors:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


