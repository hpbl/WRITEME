TuShare

Tushare Pro版已发布，请访问新的官网了解和查询数据接口！ @abstr_hyperlink 

TuShare是实现对股票/期货等金融数据从 **数据采集** 、 **清洗加工** 到 **数据存储** 过程的工具，满足金融量化分析师和学习数据分析的人在数据获取方面的需求，它的特点是数据覆盖范围广，接口调用简单,响应快速。

@abstr_image 

欢迎关注扫描TuShare的微信公众号“挖地兔”，更多资源和信息与您分享。另外，由于tushare官网在重新设计和开发，最新接口的使用文档都会在挖地兔公众号发布，所以，请扫码关注，谢谢！

@abstr_image 

QQ交流群：

  * 一群（已满）： @abstr_number 
  * 二群（付费高级用户群，可获得更多支持及参与圈子活动）： @abstr_number 
  * 三群（免费）： @abstr_number 
  * 四群 (免费) ： @abstr_number 



# Dependencies

python @abstr_number .x/ @abstr_number .x 

@abstr_hyperlink 

# Installation

  * 方式 @abstr_number ：pip install tushare
  * 方式 @abstr_number ：python setup.py install
  * 方式 @abstr_number ：访问 @abstr_hyperlink 下载安装



# Upgrade
    
    
    pip install tushare --upgrade
    

# Quick Start

**Example @abstr_number .** 获取个股历史交易数据（包括均线数据）：
    
    
    import tushare as ts
    
    ts.get_hist_data(' @abstr_number ') #一次性获取全部数据
    另外，参考get_k_data函数
    

结果显示：

> 日期 ，开盘价， 最高价， 收盘价， 最低价， 成交量， 价格变动 ，涨跌幅， @abstr_number 日均价， @abstr_number 日均价， @abstr_number 日均价， @abstr_number 日均量， @abstr_number 日均量， @abstr_number 日均量，换手率
    
    
                 open    high   close     low     volume    p_change  ma @abstr_number  \
    date                                                                     
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number       @abstr_number . @abstr_number     @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number     - @abstr_number . @abstr_number     @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number     - @abstr_number . @abstr_number     @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number     - @abstr_number . @abstr_number     @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number     @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number       @abstr_number . @abstr_number     @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number     @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number     @abstr_number . @abstr_number  
    
                 ma @abstr_number     ma @abstr_number       v_ma @abstr_number      v_ma @abstr_number      v_ma @abstr_number      turnover  
    date                                                                  
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number      @abstr_number . @abstr_number       @abstr_number . @abstr_number
    

设定历史数据的时间： 
    
    
    ts.get_hist_data(' @abstr_number ',start=' @abstr_number - @abstr_number - @abstr_number ',end=' @abstr_number - @abstr_number - @abstr_number ')
    
                open    high   close     low    volume   p_change     ma @abstr_number     ma @abstr_number  \  
    date                                                                            
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number       @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number       @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number       @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number     - @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number     - @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    
                ma @abstr_number      v_ma @abstr_number     v_ma @abstr_number      v_ma @abstr_number      turnover  
    date                                                        
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number     @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number     @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number       @abstr_number . @abstr_number   
     @abstr_number - @abstr_number - @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number       @abstr_number . @abstr_number
    

**复权历史数据** 获取历史复权数据，分为前复权和后复权数据，接口提供股票上市以来所有历史数据，默认为前复权。如果不设定开始和结束日期，则返回近一年的复权数据，从性能上考虑，推荐设定开始日期和结束日期，而且最好不要超过一年以上，获取到数据后，请及时在本地存储。
    
    
    ts.get_h_data(' @abstr_number ') #前复权
    ts.get_h_data(' @abstr_number ',autype='hfq') #后复权
    ts.get_h_data(' @abstr_number ',autype=None) #不复权
    ts.get_h_data(' @abstr_number ',start=' @abstr_number - @abstr_number - @abstr_number ',end=' @abstr_number - @abstr_number - @abstr_number ') #两个日期之间的前复权数据
    

**Example @abstr_number .** 一次性获取最近一个日交易日所有股票的交易数据（结果显示速度取决于网速）
    
    
    ts.get_today_all()
    

结果显示：

> 代码，名称，涨跌幅，现价，开盘价，最高价，最低价，最日收盘价，成交量，换手率
    
    
          code    name     changepercent  trade   open   high    low  settlement \  
     @abstr_number       @abstr_number   中矿资源          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   正业科技          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   国信证券          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   迦南科技          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   金盾股份          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   南威软件          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   信质电机          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   东方网力          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number   中国北车          @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number         @abstr_number . @abstr_number    
     @abstr_number       @abstr_number    大连港          @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number          @abstr_number . @abstr_number    
     @abstr_number      @abstr_number   冀东装备          @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number          @abstr_number . @abstr_number   
            volume       turnoverratio  
     @abstr_number          @abstr_number          @abstr_number . @abstr_number   
     @abstr_number           @abstr_number          @abstr_number . @abstr_number   
     @abstr_number         @abstr_number          @abstr_number . @abstr_number   
     @abstr_number           @abstr_number          @abstr_number . @abstr_number   
     @abstr_number          @abstr_number          @abstr_number . @abstr_number   
     @abstr_number         @abstr_number          @abstr_number . @abstr_number   
     @abstr_number         @abstr_number          @abstr_number . @abstr_number   
     @abstr_number         @abstr_number          @abstr_number . @abstr_number   
     @abstr_number       @abstr_number          @abstr_number . @abstr_number   
     @abstr_number       @abstr_number          @abstr_number . @abstr_number   
     @abstr_number       @abstr_number         @abstr_number . @abstr_number
    

**Example @abstr_number .** 获取历史分笔数据
    
    
    import tushare as ts
    
    df = ts.get_tick_data(' @abstr_number ',date=' @abstr_number - @abstr_number - @abstr_number ')
    df.head( @abstr_number )
    

结果显示：

> 成交时间、成交价格、价格变动，成交手、成交金额(元)，买卖类型
    
    
    Out[ @abstr_number ]: 
         time       price change  volume  amount  type
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number      --        @abstr_number      @abstr_number    卖盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number      --       @abstr_number     @abstr_number    卖盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number      --       @abstr_number     @abstr_number    卖盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number   - @abstr_number . @abstr_number       @abstr_number     @abstr_number    卖盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number         @abstr_number      @abstr_number    买盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number   - @abstr_number . @abstr_number         @abstr_number      @abstr_number    卖盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number      --        @abstr_number      @abstr_number    买盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number      --        @abstr_number      @abstr_number    买盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number     @abstr_number . @abstr_number         @abstr_number      @abstr_number    买盘
     @abstr_number      @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number   - @abstr_number . @abstr_number        @abstr_number     @abstr_number    卖盘
     @abstr_number     @abstr_number : @abstr_number : @abstr_number     @abstr_number . @abstr_number      --        @abstr_number      @abstr_number    买盘
    

**Example @abstr_number .** 获取实时交易数据(Realtime Quotes Data)
    
    
    df = ts.get_realtime_quotes(' @abstr_number ') #Single stock symbol
    df[['code','name','price','bid','ask','volume','amount','time']]
    

结果显示：

> 名称、开盘价、昨价、现价、最高、最低、买入价、卖出价、成交量、成交金额...more in docs
    
    
       code    name     price  bid    ask    volume   amount        time
     @abstr_number    @abstr_number   威孚高科   @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number . @abstr_number    @abstr_number    @abstr_number . @abstr_number    @abstr_number : @abstr_number : @abstr_number
    

请求多个股票方法（一次最好不要超过 @abstr_number 个）：
    
    
    ts.get_realtime_quotes([' @abstr_number ',' @abstr_number ',' @abstr_number ']) #symbols from a list
    ts.get_realtime_quotes(df['code'].tail( @abstr_number )) #from a Series
    

# 更多文档

@abstr_hyperlink 

@abstr_hyperlink 

## Change Logs

#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * Pro版增加期货数据
  * Pro版增加A股周/月数据
  * Pro版增加通用行情pro_bar接口股票/基金/期货/数据货币行情的支持，同时支持股票的复权行情



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 增加通用行情pro_bar接口
  * 优化set_token功能



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 发布Pro版第一稿
  * 发布Pro网站， @abstr_hyperlink 



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增可转债数据
  * 增加长连接关闭函数
  * 修复部分bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增bar接口，支持更稳定的股票、ETF、期货期权、港股、中概股等品种
  * 新增tick接口，支持以上品种的成交数据
  * 新增沪深港通每日资金流向数据
  * 修复了部分bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增数据货币行情数据接口,同时支持火币、okcoin、中国比特币
  * 部分bug修复



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增分红送股数据（包含历史）
  * 新增get_day_all接口
  * 新增BDI接口



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增期货行情数据 @abstr_number 个接口，感谢debugo贡献代码
  * 修复部分bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * get_today_all接口数据补齐
  * forecast_data mac下编码问题修复



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * get_today_all接口提速
  * 版本累积更新



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增十大股东和十大流通股接口 top @abstr_number _holders
  * 新增全球实时指数列表接口 global_realtime
  * 修复部分bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 修正get_k_databug
  * 修正实盘交易登录问题



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增全新行情数据接口get_k_data(请关注tushare公众号“挖地兔”后查看历史文章《全新的免费行情数据接口》)
  * 修复程序和文档bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增实盘交易接口
  * 修复bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增申万行业分类get_industry_classified(standard='sw')
  * 新增交易日历trade_cal()
  * 修复bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增电影票房数据
  * 修复部分bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增sina大单数据
  * 修改当日分笔bug
  * 深市融资融券数据修复



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增期权隐含波动率数据
  * 修复指数成份及权重接口问题



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 沪深 @abstr_number 成份股和权重接口问题修复
  * 其它bug的修复



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 部分代码修正



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增‘龙虎榜’模块 @abstr_number . 每日龙虎榜列表 @abstr_number . 个股上榜统计 @abstr_number . 营业部上榜统计 @abstr_number . 龙虎榜机构席位追踪 @abstr_number . 龙虎榜机构席位成交明细

  * 修改get_h_data数据类型为float

  * 修改get_index接口遗漏的open列
  * 合并GitHub上提交的bug修复



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增大盘指数实时行情列表
  * 新增大盘指数历史行情数据（全部）
  * 新增终止上市公司列表（退市）
  * 新增暂停上市公司列表
  * 修正融资融券明细无日期的缺陷
  * 修正get_h_data部分bug



#  @abstr_number . @abstr_number . @abstr_number 

  * 新增沪市融资融券列表
  * 新增沪市融资融券明细列表
  * 新增深市融资融券列表
  * 新增深市融资融券明细列表
  * 修正复权数据数据源出现null造成异常问题（对大约 @abstr_number 个股票有影响）



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 完成python @abstr_number .x和python @abstr_number .x兼容性支持
  * 部分算法优化和代码重构
  * 新增中证 @abstr_number 成份股
  * 新增当日分笔交易明细
  * 修正分配预案（高送转）bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增“新浪股吧”消息和热度
  * 新增新股上市数据
  * 修正“基本面”模块中数据重复的问题
  * 修正历史数据缺少一列column（数据来源问题）的bug



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 新增历史复权数据接口
  * 新增即时滚动新闻、信息地雷数据
  * 新增沪深 @abstr_number 指数成股份及动态权重、
  * 新增上证 @abstr_number 指数成份股
  * 修改历史行情数据类型为float



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 增加分类数据
  * 增加数据存储示例



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 增加了重点指数的历史和实时行情
  * 更新docs



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 增加基本面数据接口
  * 发布一版使用手册，开通 @abstr_hyperlink 网站



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 增加实时交易数据的获取
  * Done for crawling Realtime Quotes data



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 增加tick数据的获取



#  @abstr_number . @abstr_number . @abstr_number @abstr_number / @abstr_number / @abstr_number 

  * 创建第一个版本
  * 实现个股历史数据的获取


