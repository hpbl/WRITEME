# 爬虫IP代理池

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 
    
    
    ______                        ______             _
    | ___ \_                      | ___ \           | |
    | |_/ / \__ __   __  _ __   _ | |_/ /___   ___  | |
    |  __/|  _// _ \ \ \/ /| | | ||  __// _ \ / _ \ | |
    | |   | | | (_) | >  < \ |_| || |  | (_) | (_) || |___
    \_|   |_|  \___/ /_/\_\ \__  |\_|   \___/ \___/ \_____\
                           __ / /
                          /___ /
    

#####  @abstr_hyperlink 

  * 支持版本: @abstr_image @abstr_image 

  * 测试地址: http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number (单机勿压。感谢)




### 下载安装

  * 下载源码:

@abstr_code_section 

  * 安装依赖:

@abstr_code_section 

  * 配置Config/setting.py:

@abstr_code_section 

  * 启动:

@abstr_code_section 

  * 生产环境 Docker/docker-compose

@abstr_code_section 

  * 开发环境 Docker

@abstr_code_section 




### 使用

启动过几分钟后就能看到抓取到的代理IP，你可以直接到数据库中查看，推荐一个 @abstr_hyperlink 。

也可以通过api访问http:// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number 查看。

  * Api



| api | method | Description | arg| | ----| ---- | ---- | ----| | / | GET | api介绍 | None | | /get | GET | 随机获取一个代理 | None| | /get_all | GET | 获取所有代理 |None| | /get_status | GET | 查看代理数量 |None| | /delete | GET | 删除代理 |proxy=host:ip|

  * 爬虫使用

如果要在爬虫代码中使用的话， 可以将此api封装成函数直接使用，例如：

@abstr_code_section 




### 扩展代理

项目默认包含几个免费的代理获取方法，但是免费的毕竟质量不好，所以如果直接运行可能拿到的代理质量不理想。所以，提供了代理获取的扩展方法。

添加一个新的代理获取方法如下:

  * @abstr_number 、首先在 @abstr_hyperlink 类中添加你的获取代理的静态方法， 该方法需要以生成器(yield)形式返回`host:ip`格式的代理，例如:

@abstr_code_section 

  * @abstr_number 、添加好方法后，修改Config/setting.py文件中的`PROXY_GETTER`项：

在`PROXY_GETTER`下添加自定义的方法的名字:

@abstr_code_section 

`ProxyRefreshSchedule`会每隔一段时间抓取一次代理，下次抓取时会自动识别调用你定义的方法。




### 代理采集

目前实现的采集免费代理网站有(排名不分先后, 下面仅是对其发布的免费代理情况, 付费代理测评可以参考 @abstr_hyperlink ): 

| 厂商名称 | 状态 | 更新速度 | 可用率 | 是否被墙 | 地址 | | ----- | ---- | -------- | ------ | --------- | ----- | | 无忧代理 | 可用 | 几分钟一次 | * | 否 | @abstr_hyperlink | | @abstr_number 代理 | 可用 | 更新很慢 | * | 否 | @abstr_hyperlink | | 西刺代理 | 可用 | 几分钟一次 | * | 否 | @abstr_hyperlink | | 全网代理 | 可用 | 几分钟一次 | * | 否 | @abstr_hyperlink | | 训代理 | 已关闭免费代理 | * | * | 否 | @abstr_hyperlink | | 快代理 | 可用 |几分钟一次| * | 否 | @abstr_hyperlink | | 云代理 | 可用 |几分钟一次| * | 否 | @abstr_hyperlink | | IP海 | 可用 |几小时一次| * | 否 | @abstr_hyperlink | | 免费IP代理库 | 可用 |快| * | 否 | @abstr_hyperlink | | 中国IP地址 | 可用 |几分钟一次| * | 是 | @abstr_hyperlink | | Proxy List | 可用 |几分钟一次| * | 是 | @abstr_hyperlink | | ProxyList+ | 可用 |几分钟一次| * | 是 | @abstr_hyperlink |

如果还有其他好的免费代理网站, 可以在提交在 @abstr_hyperlink , 下次更新时会考虑在项目中支持。

### 问题反馈

任何问题欢迎在 @abstr_hyperlink 中反馈，如果没有账号可以去 我的 @abstr_hyperlink 中留言。

你的反馈会让此项目变得更加完美。

### 贡献代码

本项目仅作为基本的通用的代理池架构，不接收特有功能(当然,不限于特别好的idea)。

本项目依然不够完善，如果发现bug或有新的功能添加，请在 @abstr_hyperlink 中提交bug(或新功能)描述，在确认后提交你的代码。

这里感谢以下contributor的无私奉献：

@abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink 

### Release Notes

@abstr_hyperlink 
