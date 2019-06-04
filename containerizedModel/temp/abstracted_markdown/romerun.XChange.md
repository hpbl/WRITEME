## XChange

A Financial Exchange Library for Java

## Description

XChange is a library providing a simple and consistent API for interacting with a diverse set of financial security exchanges, including support for Bitcoin. 

A complete list of implemented exchanges, data providers and brokers can be found on our @abstr_hyperlink page. 

Usage is very simple: Create an Exchange instance, get the appropriate service, and request data.

## Example
    
    
    // Use the factory to get the version  @abstr_number  MtGox exchange API using default settings
    Exchange mtGox = ExchangeFactory.INSTANCE.createExchange("com.xeiam.xchange.mtgox.v @abstr_number .MtGoxExchange");
    
    // Interested in the public polling market data feed (no authentication)
    PollingMarketDataService marketDataService = mtGox.getPollingMarketDataService();
    
    // Get the latest ticker data showing BTC to USD
    Ticker ticker = marketDataService.getTicker(Currencies.BTC, Currencies.USD);
    
    System.out.println(ticker.toString());
    

All exchange implementations expose the same API, but you can also directly access the raw data.

Now go ahead and @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink .

## Features

  * MIT license
  * consistent API across all implemented exchanges
  * active development
  * very minimal @abstr_number rd party dependencies
  * modular components
  * polling and streaming capability



## More Info

Project Site: http://xeiam.com/xchange.jsp   
Example Code: http://xeiam.com/xchange_examplecode.jsp   
Change Log: http://xeiam.com/xchange_changelog.jsp   
Java Docs: http://xeiam.com/xchange/javadoc/index.html   
Sonar Code Quality: http://sonar.xeiam.com/   
Jenkins CI: http://ci.xeiam.com/ 

## Wiki

Home: https://github.com/timmolter/XChange/wiki   
Design Notes: https://github.com/timmolter/XChange/wiki/Design-Notes   
Milestones: https://github.com/timmolter/XChange/wiki/Milestones   
Exchange Support: https://github.com/timmolter/XChange/wiki/Exchange-support   
New Implementation Best Practices: https://github.com/timmolter/XChange/wiki/New-Implementation-Best-Practices

## Getting Started

### Non-Maven

Download Jars: http://xeiam.com/xchange.jsp

### Maven

The XChange release artifacts are hosted on Maven Central. 

For snapshots, add the following repository to your pom.xml file.
    
    
    <repository>
      <id>xchange-snapshot</id>
      <snapshots/>
      <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    </repository>
    

Add the following dependencies in your pom.xml file. You will need at least xchange-core. Add the additional dependencies for the exchange implementations you are interested in. There is example code for all the implementations in xchange-examples.
    
    
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-core</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-examples</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-mtgox</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-cavirtex</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-openexchangerates</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-btce</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-bitstamp</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
        <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-campbx</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    <dependency>
      <groupId>com.xeiam.xchange</groupId>
      <artifactId>xchange-bitcoincharts</artifactId>
      <version> @abstr_number . @abstr_number . @abstr_number </version>
    </dependency>
    

## Building

mvn clean package   
mvn javadoc:aggregate mvn clean integration-test -P run-integration-tests 

## Bugs

Please report any bugs or submit feature requests to @abstr_hyperlink .

## Contributing

If you'd like to submit a new implementation for another exchange, please take a look at @abstr_hyperlink first, as there are lots of time-saving tips! 

For more information such as a contributor list and a list of known projects depending on XChange, visit the @abstr_hyperlink . 

## Donations

@abstr_number dQktcAmU @abstr_number urXz @abstr_number tGk @abstr_number sbuiCqykm @abstr_number WLs @abstr_number 
