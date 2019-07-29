@abstr_hyperlink @abstr_hyperlink @abstr_image 

@abstr_image 

### Introduction

Blackbird Bitcoin Arbitrage is a C++ trading system that does automatic long/short arbitrage between Bitcoin exchanges.

### How It Works

Bitcoin is still a new and inefficient market. Several Bitcoin exchanges exist around the world and the bid/ask prices they propose can be briefly different from an exchange to another. The purpose of Blackbird is to automatically profit from these temporary price differences while being market-neutral.

Here is a real example where an arbitrage opportunity exists between Bitstamp (long) and Bitfinex (short):

@abstr_image 

At the first vertical line, the spread between the exchanges is high so Blackbird buys Bitstamp and short sells Bitfinex. Then, when the spread closes (second vertical line), Blackbird exits the market by selling Bitstamp and buying Bitfinex back.

#### Advantages

Unlike other Bitcoin arbitrage systems, Blackbird doesn't sell but actually _short sells_ Bitcoin on the short exchange. This feature offers two important advantages:

@abstr_number . The strategy is always market-neutral: the Bitcoin market's moves (up or down) don't impact the strategy returns. This removes a huge risk from the strategy. The Bitcoin market could suddenly lose half its value that this won't make any difference in the strategy returns.

@abstr_number . The strategy doesn't need to transfer funds (USD or BTC) between Bitcoin exchanges. The buy/sell and sell/buy trading activities are done in parallel on two different exchanges, independently. Advantage: no need to deal with transfer latency issues.

More details about _short selling_ and _market neutrality_ can be found on @abstr_hyperlink .

### Disclaimer

__USE THE SOFTWARE AT YOUR OWN RISK. YOU ARE RESPONSIBLE FOR YOUR OWN MONEY. PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.__

__THE AUTHORS AND ALL AFFILIATES ASSUME NO RESPONSIBILITY FOR YOUR TRADING RESULTS.__

### Code Information

The trade results are stored in CSV files and the detailed activity is stored in log files. New files are created every time Blackbird is started.

It is possible to automatically stop Blackbird after the next trade has closed by creating, at any time, an empty file named _stop_after_notrade_.

Blackbird uses functions written by @abstr_hyperlink to encode and decode base @abstr_number .

### How To Test Blackbird

Please make sure that you understand the disclaimer above if you want to test Blackbird with real money, and start with a small amount of money.

__IMPORTANT: all your BTC accounts must be empty before starting Blackbird. Make sure that you only have USD on your accounts and no BTC.__

It is never entirely safe to just tell Blackbird to use, say, $ @abstr_number per exchange. You also need to only have $ @abstr_number available on each of your trading accounts as well as @abstr_number BTC. In this case, you are sure that even with a bug your maximum loss on an exchange won't be greater than $ @abstr_number no matter what.

Note: on Bitfinex, your money has to be available on the _Margin_ account.

#### Implemented Exchanges

| Exchange | Long | Short | Tested | Note | | -------- |:----:|:-----:|:------:| ---- | | @abstr_hyperlink | ✓ | ✓ | ✓ | | | @abstr_hyperlink | ✓ | | ✓ |their API now offers short selling: @abstr_hyperlink | | @abstr_hyperlink | ✓ | | ✓ | | | @abstr_hyperlink | ✓ | | ✓ | | | @abstr_hyperlink | ✓ | ✓ | | Validation in progress. Shorting is currently in testing | | @abstr_hyperlink | ✓ | | | New exchange from PR @abstr_hyperlink . **Might be a @abstr_hyperlink** | | @abstr_hyperlink | ✓ | | | | @abstr_hyperlink | ✓ | | | Validation in progress. Shorting is not currently supported. |

#### Potential Exchanges

| Exchange | Long | Short | Note | | -------- |:----:|:-----:| ---- | | @abstr_hyperlink | ✓ | ✓ | BTC/USD trading not supported, BTC/USDT margin trading not supported | | @abstr_hyperlink | ✓ | ✓ | Implementation in progress | | @abstr_hyperlink | ✓ | | | | @abstr_hyperlink | ✓ | | | | @abstr_hyperlink | ✓ | | Implementation in progress, BTC/USD not supported (coming soon.) | | @abstr_hyperlink | ✓ | | Implementation in progress, BTC/USD not supported |

If `DemoMode=true`, all the exchanges are shown in the log file.

If `DemoMode=false`, only the exchanges for which the credentials exist in _blackbird.conf_ are used.

#### Credentials

For each of your exchange accounts, you need to create the API authentication keys. This is usually done in the _Settings_ section of your accounts.

Then, you need to add your API keys into the file _blackbird.conf_. You need at least two exchanges and one of them should allow short selling. __Never__ share this file as it will contain your personal exchange credentials!

#### Blackbird Parameters

Parameter | Default Value | Description | ------------ | ------------------- | ------------- | | DemoMode | true | The demo mode will show the spreads but won't actually trade anything | | Leg @abstr_number | BTC | The first leg of the traded pair. This leg is hedged against market risk | | Leg @abstr_number | USD | The second leg of the traded pair. This leg is __not__ hedged against market risk | | UseFullExposure | false | When true, all the `Leg @abstr_number` exposure available on your accounts will be used. Otherwise, the amount defined by `TestedExposure` will be used. Note: the cash used for a trade will be the minimum of the two exchanges, minus @abstr_number . @abstr_number % as a small margin: if there is $ @abstr_number , @abstr_number on the first account and $ @abstr_number , @abstr_number on the second one, $ @abstr_number will be used for each exchange, i.e. $ @abstr_number , @abstr_number - ( @abstr_number % * $ @abstr_number , @abstr_number ). The exposure is $ @abstr_number , @abstr_number | | TestedExposure | @abstr_number | If UseFullExposure is false, that parameter defines the USD amount that will be used. The minimum has to be $ @abstr_number otherwise some exchanges might reject the orders | | MaxExposure | @abstr_number , @abstr_number | Maximum exposure per exchange. If the limit is $ @abstr_number , @abstr_number then Blackbird won't send any order larger than that on each exchange | | MaxLength | @abstr_number , @abstr_number , @abstr_number | The maximum length of a trade in number of iterations. If this value is reached then Blackbird will exit the market regardless of the spread. Warning: with this value, the system can exit with a loss so It's recommended to use a large value. The default is @abstr_number days with GapSec at @abstr_number seconds | | DebugMaxIteration | @abstr_number , @abstr_number , @abstr_number | The maximum number of iteration. Once DebugMaxIteration is reached Blackbird is terminated with return= @abstr_number . Useful for troubleshooting the software | | Verbose | true | Write the bid/ask and then spreads to the log file at every iteration. The log file size will be larger but it will show how Blackbird analyses the spreads | | Interval | @abstr_number sec. | Timelapse in seconds of an iteration. By default, the quotes download and the spreads analysis for all the exchanges are done every @abstr_number seconds | | SpreadEntry | @abstr_number . @abstr_number | The spread threshold above which the trailing spreads are generated to capture an arbitrage opportunity | | SpreadTarget | @abstr_number . @abstr_number | This is the targeted profit. It represents the net profit and takes the exchange fees into account. If SpreadEntry is at @abstr_number . @abstr_number % and trades are generated at that level on two exchanges with @abstr_number . @abstr_number % fees each, Blackbird will set the exit threshold at - @abstr_number . @abstr_number % ( @abstr_number . @abstr_number % spread entry - @abstr_number x @abstr_number . @abstr_number % fees - @abstr_number . @abstr_number % target = - @abstr_number . @abstr_number %) | | PriceDeltaLimit | @abstr_number . @abstr_number | The maximum difference between the target limit price and the computed limit price of an order. That is the price generated by looking at the current liquidity in the order books. If the difference is greater than PriceDeltaLimit then no trades will be generated because there is not enough liquidity (risk of slippage) | | TrailingSpreadLim | @abstr_number . @abstr_number | The limit under which the trailing spread is generated. If the current spread is above SpreadTarget and at @abstr_number . @abstr_number %, then by default, the trailing spread will be generated at @abstr_number . @abstr_number % | | TrailingSpreadCount | @abstr_number | The number of times the spread must be between SpreadTarget and the trailing spread before sending the orders to the market | | OrderBookFactor | @abstr_number . @abstr_number | In order to be executed as fast as possible and avoid slippage, Blackbird checks the liquidity in the order books of the exchanges and makes sure there are at least @abstr_number . @abstr_number times the needed liquidity before executing the order | | UseVolatility | false | If true, display the spreads volatility information in the log file. This is not used for the moment and only displayed as information | | VolatilityPeriod | @abstr_number | The period length of the volatility in number of iterations. This is not used for the moment and only displayed as information | | SendEmail | false | When true, an e-mail will be sent every time an arbitrage trade is completed, with information such as the names of the exchanges and the trade return | | DBFile | 'blackbird.db' | SQLite @abstr_number database file to use for storing the bid/ask information of the exchanges for reference. Blackbird will create this file if it doesn't already exist |

#### Getting and building the software

You need the following libraries: @abstr_hyperlink , @abstr_hyperlink (v @abstr_number . @abstr_number minimum), @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink . Usually this is what you need to install:

@abstr_code_section 

Download the source from GitHub with:
    
    
    mkdir blackbird
    cd blackbird
    git clone --recursive  git://github.com/butor/blackbird.git .
    

Alternatively, if you already have the existing source tree use:
    
    
    git submodule update --init
    

to sync the submodules.

Once you have downloaded the source code, build Blackbird by typing:
    
    
    cmake -B./build -H. -DCMAKE_BUILD_TYPE=Debug
    

or
    
    
    cmake -B./build -H. -DCMAKE_BUILD_TYPE=Release
    

then
    
    
    cmake --build ./build -- install
    

If all goes well this produces a Blackbird executable in the project directory.

#### Ubuntu (Amazon EC @abstr_number compatible)

@abstr_number . Run the following commands:

@abstr_code_section 

@abstr_number . Run the software, by typing:

@abstr_code_section 

#### Docker

@abstr_number . Download and install Docker (with Docker Compose) @abstr_hyperlink .

@abstr_number . Download the source from GitHub with @abstr_code_section Alternatively, if you already have the existing source tree use: @abstr_code_section 

@abstr_number . Build the container:

@abstr_code_section 

@abstr_number . Spin up the entire stack with docker-compose (OSX/Linux):

@abstr_code_section 

#### Mac OS X

@abstr_number . Install @abstr_hyperlink 

@abstr_number . Run the following commands:

@abstr_code_section 

@abstr_number . Run the software, by typing:

@abstr_code_section 

#### Understanding and debugging the software

Step-through debugging is a helpful method to understand how any software application works. Various scripts and metadata files are included alongside the source code to facilitate building the application so you can use GDB and VisualStudio Code to debug the application while it executes in a Docker container.

Once you have successfully launched Blackbird following the instructions in the "Docker" section, you need to do the following:

@abstr_number . @abstr_hyperlink 

@abstr_number . @abstr_hyperlink 

@abstr_number . You need to have GDB installed on your machine (this is described in the "Debugging" section of @abstr_hyperlink ). 

@abstr_number . From VS Code, File > Open Workspace... and select the "blackbird" workspace (this is in the root directory of your blackbird clone; the one you created this during "Download source code" step) 

@abstr_number . Press F @abstr_number to start the debugger. This will build and launch the Docker container, Blackbird w/ debug symbols, and a GDB Server running Blackbird on the Docker container. Since there is a delay between when the Docker container gets launched and the GDB Server is running, you may need to start the debugger a few times before it attaches to the GDB server. (If you can figure out how to create a "pause" between when the container launches and VS Code attempts to attach to GDB Server, that will fix it).

### Contact

  * If you found a bug, please open a new @abstr_hyperlink with the label _bug_
  * If you have a general question or have troubles running Blackbird, you can open a new @abstr_hyperlink with the label _question_ or _help wanted_
  * For anything else you can contact the author at julien.hamilton@gmail.com



### Log Output Example

This is what the log file looks like when Blackbird is started:

@abstr_code_section 
