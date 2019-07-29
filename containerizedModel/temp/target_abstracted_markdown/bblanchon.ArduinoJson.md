@abstr_image 

* * *

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

ArduinoJson is a C++ JSON library for Arduino and IoT (Internet Of Things).

## Features

  * JSON decoding (comments are supported)
  * JSON encoding (with optional indentation)
  * MessagePack
  * Elegant API, easy to use
  * Fixed memory allocation (zero malloc)
  * No data duplication (zero copy)
  * Portable (written in C++ @abstr_number , can be used in any C++ project)
  * Self-contained (no external dependency)
  * Small footprint
  * Input and output streams
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Compatibility

ArduinoJson works on the following hardware:

  * @abstr_image Arduino boards: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink ...
  * @abstr_image Espressif chips: @abstr_hyperlink , @abstr_hyperlink 
  * @abstr_image WeMos boards: @abstr_hyperlink , @abstr_hyperlink , ...
  * @abstr_image RedBearLab boards: @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink ...
  * @abstr_image @abstr_hyperlink boards
  * @abstr_image Intel boards: Edison, Galileo...
  * @abstr_image Particle boards: @abstr_hyperlink , @abstr_hyperlink ...
  * @abstr_image Texas Instruments boards: @abstr_hyperlink ...



ArduinoJson compiles with zero warning on the following compilers, IDEs, and platforms:

  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 
  * @abstr_image @abstr_hyperlink 



## Quickstart

### Deserialization

Here is a program that parses a JSON document with ArduinoJson.

```c++ char json[] = "{\"sensor\":\"gps\",\"time\": @abstr_number ,\"data\":[ @abstr_number . @abstr_number , @abstr_number . @abstr_number ]}";

DynamicJsonDocument doc( @abstr_number ); deserializeJson(doc, json);

const char* sensor = doc["sensor"]; long time = doc["time"]; double latitude = doc["data"][ @abstr_number ]; double longitude = doc["data"][ @abstr_number ]; @abstr_code_section c++ DynamicJsonDocument doc( @abstr_number );

doc["sensor"] = "gps"; doc["time"] = @abstr_number ;

JsonArray data = doc.createNestedArray("data"); data.add( @abstr_number . @abstr_number ); data.add( @abstr_number . @abstr_number );

serializeJson(doc, Serial); // This prints: // {"sensor":"gps","time": @abstr_number ,"data":[ @abstr_number . @abstr_number , @abstr_number . @abstr_number ]} ```

See the @abstr_hyperlink 

## Documentation

The documentation is available on @abstr_hyperlink , here are some shortcuts:

  * The @abstr_hyperlink show how to use the library in various situations.
  * The @abstr_hyperlink contains the description of each class and function.
  * The @abstr_hyperlink has the answer to virtually every question.
  * The @abstr_hyperlink writes programs for you!



* * *

Do you like this library? Please @abstr_hyperlink !

What? You don't like it but you _love_ it? We don't take donations anymore, but @abstr_hyperlink , so you can help and learn at the same time!
