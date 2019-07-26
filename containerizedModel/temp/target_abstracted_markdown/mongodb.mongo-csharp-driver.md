# ﻿MongoDB C# Driver

You can get the latest stable release from the @abstr_hyperlink or from our @abstr_hyperlink .

If you'd like to work with the bleeding edge, you can use our @abstr_hyperlink . Some packages on this feed are pre-release and, while they've passed all our tests, are not yet ready for production.

## Getting Started

### Untyped Documents

```C# using MongoDB.Bson; using MongoDB.Driver; @abstr_code_section 

### Typed Documents

```C# using MongoDB.Bson; using MongoDB.Driver; @abstr_code_section 

```C# var client = new MongoClient("mongodb://localhost: @abstr_number "); var database = client.GetDatabase("foo"); var collection = database.GetCollection("bar");

await collection.InsertOneAsync(new Person { Name = "Jack" });

var list = await collection.Find(x => x.Name == "Jack") .ToListAsync();

foreach(var person in list) { Console.WriteLine(person.Name); } ```

## Documentation

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Questions/Bug Reports

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



If you’ve identified a security vulnerability in a driver or any other MongoDB project, please report it according to the @abstr_hyperlink .

## Contributing

Please see our guidelines for contributing to the driver.

### Maintainers:

  * Vincent Kam vincent.kam@mongodb.com
  * Dmitry Lukyanov dmitry.lukyanov@mongodb.com
  * Katie Sadoff katie.sadoff@mongodb.com
  * Robert Stam robert@mongodb.com
  * Craig Wilson craig.wilson@mongodb.com



### Contributors:

  * Alexander Aramov https://github.com/alex @abstr_number 
  * Bar Arnon https://github.com/I @abstr_number arnon
  * Wan Bachtiar https://github.com/sindbach
  * Mark Benvenuto https://github.com/markbenvenuto
  * Ethan Celletti https://github.com/Gekctek
  * Bit Diffusion Limited code@bitdiff.com
  * Nima Boscarino https://github.com/NimaBoscarino
  * Oscar Bralo https://github.com/Oscarbralo
  * Alex Brown https://github.com/alexjamesbrown
  * Adam Avery Cole https://github.com/adamaverycole
  * Alex Dawes https://github.com/alexdawes
  * Justin Dearing zippy @abstr_number @gmail.com
  * Dan DeBilt dan.debilt@gmail.com
  * Teun Duynstee teun@duynstee.com
  * Einar Egilsson https://github.com/einaregilsson
  * Ken Egozi mail@kenegozi.com
  * Alexander Endris https://github.com/AlexEndris
  * Daniel Goldman daniel@stackwave.com
  * Simon Green simon@captaincodeman.com
  * James Hadwen james.hadwen@sociustec.com
  * Nuri Halperin https://github.com/nurih
  * Jacob Jewell jacobjewell@eflexsystems.com
  * Danny Kendrick https://github.com/dkendrick
  * Ruslan Khasanbaev https://github.com/flaksirus
  * Konstantin Khitrykh https://github.com/KonH
  * Brian Knight brianknight @abstr_number @gmail.com 
  * John Knoop https://github.com/johnknoop
  * Andrey Kondratyev https://github.com/byTimo
  * Anatoly Koperin https://github.com/ExM
  * Nik Kolev nkolev@gmail.com
  * Oleg Kosmakov https://github.com/kosmakoff
  * Maksim Krautsou https://github.com/MaKCbIMKo
  * Richard Kreuter richard@ @abstr_number gen.com
  * Daniel Lee https://github.com/dlee @abstr_number 
  * Kevin Lewis kevin.l.lewis@gmail.com
  * Dow Liu redforks@gmail.com
  * Chuck Lu https://github.com/chucklu
  * Alex Lyman mail.alex.lyman@gmail.com
  * John Murphy https://github.com/jsmurphy
  * Alexander Nagy optimiz @abstr_number @gmail.com
  * Sridhar Nanjundeswaran https://github.com/sridharn
  * Rich Quackenbush rich.quackenbush@captiveaire.com
  * Carl Reinke https://github.com/mindless @abstr_number 
  * Gian Maria Ricci https://github.com/alkampfergit
  * Andrew Rondeau github@andrewrondeau.com
  * Ed Rooth edward.rooth@wallstreetjapan.com
  * Sam @abstr_number https://github.com/Sam @abstr_number 
  * Sergey Shushlyapin https://github.com/sergeyshushlyapin
  * Alexey Skalozub pieceofsummer@gmail.com
  * Pete Smith roysvork@gmail.com
  * staywellandy https://github.com/staywellandy
  * Vyacheslav Stroy https://github.com/kreig
  * Testo test @abstr_number @doramail.com 
  * Zhmayev Yaroslav https://github.com/salaros
  * Aristarkh Zagorodnikov https://github.com/onyxmaster



If you have contributed and we have neglected to add you to this list please contact one of the maintainers to be added to the list (with apologies).
