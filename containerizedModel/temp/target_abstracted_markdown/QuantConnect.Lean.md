#  @abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

* * *

## Introduction

Lean Engine is an open-source algorithmic trading engine built for easy strategy research, backtesting and live trading. We integrate with common data providers and brokerages so you can quickly deploy algorithmic trading strategies.

The core of the LEAN Engine is written in C#; but it operates seamlessly on Linux, Mac and Windows operating systems. It supports algorithms written in Python @abstr_number . @abstr_number , C# or F#. Lean drives the web based algorithmic trading platform @abstr_hyperlink .

## QuantConnect is Hiring!

Join the team and solve some of the most difficult challenges in quantitative finance. If you are passionate about algorithmic trading we'd like to hear from you. The below roles are open in our Seattle, WA office. When applying, make sure to mention you came through GitHub:

  * @abstr_hyperlink : How can we educate @abstr_number k+ quants at scale? Strategize and create video content, documentation, interactive tutorials, and other content to empower the community.

  * @abstr_hyperlink : Work daily with a brilliant community of developers, scientists, mathematicians, and traders as you enable them to bring their strategies to life.

  * @abstr_hyperlink : If you are a recent or current graduate with a knack for quantitative finance, consider applying for an internship!




## System Overview

@abstr_image 

The Engine is broken into many modular pieces which can be extended without touching other files. The modules are configured in config.json as set "environments". Through these environments you can control LEAN to operate in the mode required. 

The most important plugins are:

  * **Result Processing** (IResultHandler)

> Handle all messages from the algorithmic trading engine. Decide what should be sent, and where the messages should go. The result processing system can send messages to a local GUI, or the web interface.

  * **Datafeed Sourcing** (IDataFeed)

> Connect and download data required for the algorithmic trading engine. For backtesting this sources files from the disk, for live trading it connects to a stream and generates the data objects.

  * **Transaction Processing** (ITransactionHandler)

> Process new order requests; either using the fill models provided by the algorithm, or with an actual brokerage. Send the processed orders back to the algorithm's portfolio to be filled.

  * **Realtime Event Management** (IRealtimeHandler)

> Generate real time events - such as end of day events. Trigger callbacks to real time event handlers. For backtesting this is mocked-up an works on simulated time. 

  * **Algorithm State Setup** (ISetupHandler)

> Configure the algorithm cash, portfolio and data requested. Initialize all state parameters required.




For more information on the system design and contributing please see the Lean Website Documentation.

## Installation Instructions

Download the zip file with the @abstr_hyperlink and unzip it to your favorite location.

Alternatively, install @abstr_hyperlink and clone the repo: @abstr_code_section 

### macOS

  * Install @abstr_hyperlink 
  * Open `QuantConnect.Lean.sln` in Visual Studio



Visual Studio will automatically start to restore the Nuget packages. If not, in the menu bar, click `Project > Restore NuGet Packages`.

  * In the menu bar, click `Run > Start Debugging`.



Alternatively, run the compiled `exe` file. First, in the menu bar, click `Build > Build All`, then: @abstr_code_section 

### Linux (Debian, Ubuntu)

  * Install @abstr_hyperlink : @abstr_code_section If you get this error on the last command:



**Unable to locate package referenceassemblies-pcl** ,

run the following command (it works on current version of Ubuntu - @abstr_number . @abstr_number ): @abstr_code_section 

@abstr_code_section \- Install Nuget @abstr_code_section \- Restore NuGet packages then compile: @abstr_code_section If you get: "Error initializing task Fsc: Not registered task Fsc." -> `sudo apt-get upgrade mono-complete`

If you get: "XX not found" -> Make sure Nuget ran successfully, and re-run if neccessary.

If you get other errors that lead to the failure of your building, please refer to the commands in "DockerfileLeanFoundation" file for help.

  * Run the compiled `exe` file: @abstr_code_section 
  * Interactive Brokers set up details



Make sure you fix the `ib-tws-dir` and `ib-controller-dir` fields in the `config.json` file with the actual paths to the TWS and the IBController folders respectively.

If after all you still receive connection refuse error, try changing the `ib-port` field in the `config.json` file from @abstr_number to @abstr_number to match the settings in your IBGateway/TWS.

### Windows

  * Install @abstr_hyperlink 
  * Open `QuantConnect.Lean.sln` in Visual Studio
  * Build the solution by clicking Build Menu -> Build Solution (this should trigger the Nuget package restore)
  * Press `F @abstr_number` to run



Nuget packages not being restored is the most common build issue. By default Visual Studio includes NuGet, if your installation of Visual Studio (or your IDE) cannot find DLL references, install @abstr_hyperlink , run nuget on the solution and re-build the Solution again. 

### Python Support

A full explanation of the Python installation process can be found in the @abstr_hyperlink project.

### R Support

  * Install R-base if you need to call R in your algorithm. For Linux users: @abstr_code_section For Windows and macOs users: Please visit the official @abstr_hyperlink to download R. 



### QuantConnect Visual Studio Plugin

For more information please see the QuantConnect Visual Studio Plugin @abstr_hyperlink 

## Issues and Feature Requests

Please submit bugs and feature requests as an issue to the @abstr_hyperlink . Before submitting an issue please read others to ensure it is not a duplicate.

## Mailing List ##

The mailing list for the project can be found on @abstr_hyperlink . Please use this to request assistance with your installations and setup questions.

## Contributors and Pull Requests

Contributions are warmly very welcomed but we ask you read the existing code to see how it is formatted, commented and ensure contributions match the existing style. All code submissions must include accompanying tests. Please see the @abstr_hyperlink .

All accepted pull requests will get a @abstr_number mo free Prime subscription on QuantConnect. Once your pull-request has been merged write to us at support@quantconnect.com with a link to your PR to claim your free live trading. QC < @abstr_number Open Source.

## Acknowledgements

The open sourcing of QuantConnect would not have been possible without the support of the Pioneers. The Pioneers formed the core @abstr_number early adopters of QuantConnect who subscribed and allowed us to launch the project into open source.

Ryan H, Pravin B, Jimmie B, Nick C, Sam C, Mattias S, Michael H, Mark M, Madhan, Paul R, Nik M, Scott Y, BinaryExecutor.com, Tadas T, Matt B, Binumon P, Zyron, Mike O, TC, Luigi, Lester Z, Andreas H, Eugene K, Hugo P, Robert N, Christofer O, Ramesh L, Nicholas S, Jonathan E, Marc R, Raghav N, Marcus, Hakan D, Sergey M, Peter McE, Jim M, INTJCapital.com, Richard E, Dominik, John L, H. Orlandella, Stephen L, Risto K, E.Subasi, Peter W, Hui Z, Ross F, Archibald @abstr_number , MooMooForex.com, Jae S, Eric S, Marco D, Jerome B, James B. Crocker, David Lypka, Edward T, Charlie Guse, Thomas D, Jordan I, Mark S, Bengt K, Marc D, Al C, Jan W, Ero C, Eranmn, Mitchell S, Helmuth V, Michael M, Jeremy P, PVS @abstr_number , Ross D, Sergey K, John Grover, Fahiz Y, George L.Z., Craig E, Sean S, Brad G, Dennis H, Camila C, Egor U, David T, Cameron W, Napoleon Hernandez, Keeshen A, Daniel E, Daniel H, M.Patterson, Asen K, Virgil J, Balazs Trader, Stan L, Con L, Will D, Scott K, Barry K, Pawel D, S Ray, Richard C, Peter L, Thomas L., Wang H, Oliver Lee, Christian L.
