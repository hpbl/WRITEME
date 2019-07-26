@abstr_image 

#  @abstr_hyperlink 

##  @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

## Introduction

**StockSharp** (shortly **S#** ) – are **free** programs for trading at any markets of the world (American, European, Asian, Russian, stocks, futures, options, Bitcoins, forex, etc.). You will be able to trade manually or automated trading (algorithmic trading robots, conventional or HFT).

**Available connections** : FIX/FAST, ITCH (LSE, NASDAQ), Blackwood/Fusion, BarChart, CQG, E*Trade, IQFeed, InteractiveBrokers, LMAX, MatLab, Oanda, FXCM, OpenECry, Rithmic, RSS, Sterling, BTCE, BitStamp, Bitfinex, Coinbase, Kraken, Poloniex, GDAX, Bittrex, Bithumb, HitBTC, OKCoin, Coincheck, Binance, Liqui, CEX.IO, Cryptopia, OKEx, BitMEX, YoBit, Livecoin, EXMO, Deribit, Huobi, KuCoin, BITEXBOOK, CoinExchange, QuantFEED and many other.

##  @abstr_hyperlink 

@abstr_image 

**S#.Designer** \- **free** universal algorithmic strategies application for easy strategy creation:: \- Visual designer to create strategies by mouse clicking \- Embedded C# editor \- Easy to create own indicators \- Build in debugger \- Connections to the multiple electronic boards and brokers \- All world platforms \- Schema sharing with own team

##  @abstr_hyperlink 

@abstr_image 

**S#.Data** \- **free** software to automatically load and store market data: \- Supports many sources \- High compression ratio \- Any data type \- Program access to stored data via API \- Export to csv, excel, xml or database \- Import from csv \- Scheduled tasks \- Auto-sync over the Internet between several running programs S#.Data

##  @abstr_hyperlink 

@abstr_image 

**Terminal** \- **free** trading charting application (trading terminal): \- Connections to the multiple electronic boards and brokers \- Trading from charts by clicking \- Arbitrary timeframes \- Volume, Tick, Range, P &F, Renko candles \- Cluster charts \- Box charts \- Volume Profile

##  @abstr_hyperlink 

@abstr_image 

**S#.Shell** \- the ready-made graphical framework with the ability to quickly change to your needs and with fully open source code in C#: \- Complete source code \- Support for all StockSharp platform connections \- Support for S#.Designer schemas \- Flexible user interface \- Strategy testing (statistics, equity, reports) \- Save and load strategy settings \- Launch strategies in parallel \- Detailed information on strategy performance \- Launch strategies on schedule

##  @abstr_hyperlink 

S#.API is a **free** C# library for programmers who use Visual Studio. S#.API lets you create any trading strategy, from long-timeframe positional strategies to high frequency strategies (HFT) with direct access to the exchange (DMA). @abstr_hyperlink 

### Strategy example

```C# public class SimpleStrategy : Strategy { [Display(Name = "CandleSeries", GroupName = "Base settings")] public CandleSeries CandleSeries { get; set; } public SimpleStrategy(){}
    
    
    protected override void OnStarted()
    {
        var connector = (Connector)Connector;
        connector.WhenCandlesFinished(CandleSeries).Do(CandlesFinished).Apply(this);
        connector.SubscribeCandles(CandleSeries);
        base.OnStarted();
    }
    
    private void CandlesFinished(Candle candle)
    {
        if (candle.OpenPrice < candle.ClosePrice && Position <=  @abstr_number )
        {
            RegisterOrder(this.BuyAtMarket(Volume + Math.Abs(Position)));
        }
        else if (candle.OpenPrice > candle.ClosePrice && Position >=  @abstr_number )
        {
            RegisterOrder(this.SellAtMarket(Volume + Math.Abs(Position)));
        }
    }
    

} ```

## Development stage

Current stage of all components - RELEASE_STAGES.md. Release notes - RELEASE_NOTES.md.

## License

StockSharp code is licensed under the Apache License @abstr_number . @abstr_number .
