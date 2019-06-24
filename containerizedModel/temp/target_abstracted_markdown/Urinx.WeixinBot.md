# WeixinBot @abstr_hyperlink @abstr_hyperlink @abstr_image 

网页版微信API，包含终端版微信及微信机器人

## Contents

  * Demo
  * Web Weixin Pipeline
  * Web Weixin API
  * Discussion Group
  * Recent Update



## Demo

为了确保能正常运行示例脚本，请安装所需的第三方包。

@abstr_code_section 

注：下面演示的图片与功能可能不是最新的，具体请看源码。

@abstr_image 

按照操作指示在手机微信上扫描二维码然后登录，你可以选择是否开启自动回复模式。

@abstr_image 

开启自动回复模式后，如果接收到的是文字消息就会自动回复，包括群消息。

@abstr_image 

名片，链接，动画表情和地址位置消息。

@abstr_image 

@abstr_image 

网页版上有的功能目前基本上都能支持。

## Web Weixin Pipeline

@abstr_code_section 

## Web Weixin API

### 登录

| API | 获取 UUID | | --- | --------- | | url | https://login.weixin.qq.com/jslogin | | method | POST | | data | URL Encode | | params | **appid** : `应用ID`   
**fun** : new `应用类型`   
**lang** : zh_CN `语言`   
**_** : `时间戳` |

返回数据(String): @abstr_code_section 

> 注：这里的appid就是在微信开放平台注册的应用的AppID。网页版微信有两个AppID，早期的是`wx @abstr_number c @abstr_number e @abstr_number c @abstr_number acffb`，在微信客户端上显示为应用名称为`Web微信`；现在用的是`wxeb @abstr_number ec @abstr_number dd @abstr_number aefa @abstr_number`，显示名称为`微信网页版`。

@abstr_image 

  


| API | 绑定登陆（webwxpushloginurl） | | --- | --------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxpushloginurl | | method | GET | | params | **uin** : xxx |

返回数据(String): @abstr_code_section   


| API | 生成二维码 | | --- | --------- | | url | https://login.weixin.qq.com/l/ `uuid` | | method | GET |   


| API | 二维码扫描登录 | | --- | --------- | | url | https://login.weixin.qq.com/cgi-bin/mmwebwx-bin/login | | method | GET | | params | **tip** : @abstr_number `未扫描` @abstr_number `已扫描`   
**uuid** : xxx   
**_** : `时间戳` |

返回数据(String): @abstr_code_section   


| API | webwxnewloginpage | | --- | --------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage | | method | GET | | params | **ticket** : xxx   
**uuid** : xxx   
**lang** : zh_CN `语言`   
**scan** : xxx   
**fun** : new |

返回数据(XML): @abstr_code_section   


### 微信初始化

| API | webwxinit | | --- | --------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxinit?pass_ticket=xxx&skey=xxx&r=xxx | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number | | params | {   
BaseRequest: {   
Uin: xxx,   
Sid: xxx,   
Skey: xxx,   
DeviceID: xxx,   
}   
} |

返回数据(JSON): @abstr_code_section   


| API | webwxstatusnotify | | --- | --------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxstatusnotify?lang=zh_CN&pass_ticket=xxx | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number | | params | {   
BaseRequest: { Uin: xxx, Sid: xxx, Skey: xxx, DeviceID: xxx },   
Code: @abstr_number ,   
FromUserName: `自己ID`,   
ToUserName: `自己ID`,   
ClientMsgId: `时间戳`   
} |

返回数据(JSON): @abstr_code_section   


### 获取联系人信息

| API | webwxgetcontact | | --- | --------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin//webwxgetcontact?pass_ticket=xxx&skey=xxx&r=xxx | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number |

返回数据(JSON): @abstr_code_section   


| API | webwxbatchgetcontact | | --- | --------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxbatchgetcontact?type=ex&r=xxx&pass_ticket=xxx | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number | | params | {   
BaseRequest: { Uin: xxx, Sid: xxx, Skey: xxx, DeviceID: xxx },   
Count: `群数量`,   
List: [   
{ UserName: `群ID`, EncryChatRoomId: "" },   
...   
],   
} |

返回数据(JSON)同上   
  


### 同步刷新

| API | synccheck | | --- | --------- | | protocol | https | | host | webpush.weixin.qq.com   
webpush.wx @abstr_number .qq.com   
webpush.wx @abstr_number .qq.com   
webpush.wx.qq.com   
webpush.web @abstr_number .wechat.com   
webpush.web.wechat.com | | path | /cgi-bin/mmwebwx-bin/synccheck | | method | GET | | data | URL Encode | | params | **r** : `时间戳`   
**sid** : xxx   
**uin** : xxx   
**skey** : xxx   
**deviceid** : xxx   
**synckey** : xxx   
**_** : `时间戳` |

返回数据(String): @abstr_code_section   


| API | webwxsync | | --- | --------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxsync?sid=xxx&skey=xxx&pass_ticket=xxx | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number | | params | {   
BaseRequest: { Uin: xxx, Sid: xxx, Skey: xxx, DeviceID: xxx },   
SyncKey: xxx,   
rr: `时间戳取反`   
} |

返回数据(JSON): @abstr_code_section   


### 消息接口

| API | webwxsendmsg | | --- | ------------ | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxsendmsg?pass_ticket=xxx | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number | | params | {   
BaseRequest: { Uin: xxx, Sid: xxx, Skey: xxx, DeviceID: xxx },   
Msg: {   
Type: @abstr_number `文字消息`,   
Content: `要发送的消息`,   
FromUserName: `自己ID`,   
ToUserName: `好友ID`,   
LocalID: `与clientMsgId相同`,   
ClientMsgId: `时间戳左移 @abstr_number 位随后补上 @abstr_number 位随机数`   
}   
} |

返回数据(JSON): @abstr_code_section 

| API | webwxrevokemsg | | --- | ------------ | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxrevokemsg | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number | | params | {   
BaseRequest: { Uin: xxx, Sid: xxx, Skey: xxx, DeviceID: xxx },   
SvrMsgId: msg_id,   
ToUserName: user_id,   
ClientMsgId: local_msg_id   
} |

返回数据(JSON): @abstr_code_section 

#### 发送表情

| API | webwxsendmsgemotion | | --- | ------------ | | url | https://wx @abstr_number .qq.com/cgi-bin/mmwebwx-bin/webwxsendemoticon?fun=sys&f=json&pass_ticket=xxx | | method | POST | | data | JSON | | header | ContentType: application/json; charset=UTF- @abstr_number | | params | {   
BaseRequest: { Uin: xxx, Sid: xxx, Skey: xxx, DeviceID: xxx },   
Msg: {   
Type: @abstr_number `emoji消息`,   
EmojiFlag: @abstr_number ,   
MediaId: `表情上传后的媒体ID`,   
FromUserName: `自己ID`,   
ToUserName: `好友ID`,   
LocalID: `与clientMsgId相同`,   
ClientMsgId: `时间戳左移 @abstr_number 位随后补上 @abstr_number 位随机数`   
}   
} |

  


### 图片接口

| API | webwxgeticon | | --- | ------------ | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgeticon | | method | GET | | params | **seq** : `数字，可为空`   
**username** : `ID`   
**skey** : xxx |   


| API | webwxgetheadimg | | --- | --------------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetheadimg | | method | GET | | params | **seq** : `数字，可为空`   
**username** : `群ID`   
**skey** : xxx |   


| API | webwxgetmsgimg | | --- | --------------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetmsgimg | | method | GET | | params | **MsgID** : `消息ID`   
**type** : slave `略缩图` or `为空时加载原图`   
**skey** : xxx |   


### 多媒体接口

| API | webwxgetvideo | | --- | --------------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetvideo | | method | GET | | params | **msgid** : `消息ID`   
**skey** : xxx |   


| API | webwxgetvoice | | --- | --------------- | | url | https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetvoice | | method | GET | | params | **msgid** : `消息ID`   
**skey** : xxx |   


### 账号类型

| 类型 | 说明 | | :--: | --- | | 个人账号 | 以`@`开头，例如：`@xxx` | | 群聊 | 以`@@`开头，例如：`@@xxx` | | 公众号/服务号 | 以`@`开头，但其`VerifyFlag` & @abstr_number != @abstr_number   
  
`VerifyFlag`:   
一般个人公众号/服务号： @abstr_number   
一般企业的服务号： @abstr_number   
微信官方账号`微信团队`： @abstr_number | | 特殊账号 | 像文件传输助手之类的账号，有特殊的ID，目前已知的有：  
`filehelper`, `newsapp`, `fmessage`, `weibo`, `qqmail`, `tmessage`, `qmessage`, `qqsync`, `floatbottle`, `lbsapp`, `shakeapp`, `medianote`, `qqfriend`, `readerapp`, `blogapp`, `facebookapp`, `masssendapp`, `meishiapp`, `feedsapp`, `voip`, `blogappweixin`, `weixin`, `brandsessionholder`, `weixinreminder`, `officialaccounts`, `notification_messages`, `wxitil`, `userexperience_alarm`, `notification_messages` |   


### 消息类型

消息一般格式： @abstr_code_section   


| MsgType | 说明 | | ------- | --- | | @abstr_number | 文本消息 | | @abstr_number | 图片消息 | | @abstr_number | 语音消息 | | @abstr_number | 好友确认消息 | | @abstr_number | POSSIBLEFRIEND_MSG | | @abstr_number | 共享名片 | | @abstr_number | 视频消息 | | @abstr_number | 动画表情 | | @abstr_number | 位置消息 | | @abstr_number | 分享链接 | | @abstr_number | VOIPMSG | | @abstr_number | 微信初始化消息 | | @abstr_number | VOIPNOTIFY | | @abstr_number | VOIPINVITE | | @abstr_number | 小视频 | | @abstr_number | SYSNOTICE | | @abstr_number | 系统消息 | | @abstr_number | 撤回消息 |   


**微信初始化消息** @abstr_code_section 

**文本消息** @abstr_code_section 

**图片消息** @abstr_code_section 

**小视频消息** @abstr_code_section 

**地理位置消息** @abstr_code_section 

**名片消息** @abstr_code_section 

**语音消息** @abstr_code_section 

**动画表情** @abstr_code_section 

**普通链接或应用分享消息** @abstr_code_section 

**音乐链接消息** @abstr_code_section 

**群消息** @abstr_code_section 

**红包消息** @abstr_code_section 注：根据网页版的代码可以看到未来可能支持查看红包消息，但目前走的是系统消息，见下。

**系统消息** @abstr_code_section 

## Discussion Group

如果你希望和 WeixinBot 的其他开发者交流，或者有什么问题和建议，欢迎大家加入微信群【Youth fed the dog】一起讨论。扫描下面的二维码添加机器人为好友，并回复【Aidog】获取入群链接。

@abstr_image 

注：这个不是群的二维码，是机器人拉你入群，记得回复机器人【Aidog】哦~ （secret code: Aidog）

## Recent Update

  * association_login 目前网页版微信已经可以脱离扫码，但是依然需要在客户端进行确认登录。


