@abstr_image 

# Senparc.Weixin —— 微信 .NET SDK 

@abstr_hyperlink  @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

[English Version]

使用 Senparc.Weixin，您可以方便快速地开发微信全平台的应用（包括微信公众号、小程序、小游戏、企业号、开放平台、微信支付、JS-SDK、微信硬件/蓝牙，等等）。本项目的 Demo 同样适合初学者进行 .NET 编程学习。

目前 Senparc.Weixin 已经支持几乎所有微信平台模块和接口，并同时支持 @abstr_hyperlink 多种框架。

Senparc.Weixin SDK 是目前使用率最高的微信 .NET SDK，也是国内最受欢迎的 .NET 开源项目之一。

自 @abstr_number 年起立项 @abstr_number 年多来，我们一直保持着项目的持续更新，并将完整的源代码以及设计思想毫无保留地分享给大家，希望有更多的人可以从中受益，理解并传播开源的精神，一同助力中国开源事业！感恩一路上给我们提供帮助的朋友们！

如果你喜欢并希望我们继续优化这个项目，请给我们一个 ★Star ：)

## 公告

> :trophy: 《 @abstr_hyperlink 》公布，请注意查看并登记信息 :smile:

@abstr_image 

## 下文索引

  * 各模块类库
  * 私人定制你的微信项目 Sample
  * 资源
  * :book: Senparc 官方图书教程
  * :computer: Senparc 官方视频教程
  * 贡献代码
  * 如何使用.net core开发
  * 关注测试账号（SenparcRobot）
  * 项目文件夹说明（src文件夹下）
  * Demo 文件夹说明（Samples文件夹下）
  * Senparc.Weixin.MP.Sample中的关键代码说明 
    * /Controllers/WeixinController.cs
    * 如何处理微信公众账号请求
  * 使用Nuget安装到项目中
  * 如何开发小程序 
  * 如何部署
  * 各分支说明
  * 感谢贡献者
  * 捐助
  * Star 数量统计
  * License



本库包含了 .NET @abstr_number . @abstr_number /.NET Standard @abstr_number . @abstr_number /.NET Core 多个版本的源代码（核心逻辑完全一致）：

  * 使用 Visual Studio @abstr_number / @abstr_number 打开 Demo（支持所有版本）： @abstr_hyperlink 
  * 使用其他版本 Visual Studio 打开 Demo（仅支持 .NET @abstr_number . @abstr_number ）： @abstr_hyperlink 
  * 使用 Visual Studio @abstr_number SP @abstr_number 打开 Demo（仅支持 .NET @abstr_number . @abstr_number ）： @abstr_hyperlink 
  * 使用 Visual Studio @abstr_number / @abstr_number 打开命令行 Console Demo（.NET Core）： @abstr_hyperlink 



## 各模块类库

| # | 模块功能 | DLL | Nuget | 支持 .NET 版本 |---|----------------------------------------------------|-------------------------------------------------|---------------------------------------|-------------------------------------- | @abstr_number | 基础库 |Senparc.Weixin.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | 微信公众号 /  
JSSDK / 摇周边  
等等 |Senparc.Weixin.MP.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | @abstr_hyperlink |Senparc.Weixin.WxOpen.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | 微信支付 |Senparc.Weixin.TenPay.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | ASP.NET MVC 扩展  
.NET Framework +  
Core |Senparc.Weixin.MP.MVC.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | 微信企业号 |Senparc.Weixin.QY.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | 企业微信 |Senparc.Weixin.Work.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | 微信开放平台 |Senparc.Weixin.Open.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | Redis 分布式缓存 |Senparc.Weixin.Cache.  
Redis.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | Memcached   
分布式缓存 |Senparc.Weixin.Cache.  
Memcached.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image | @abstr_number | @abstr_hyperlink |Senparc.WebSocket.dll | @abstr_hyperlink   
@abstr_hyperlink | @abstr_image @abstr_image @abstr_image @abstr_image 

#### 图例

| @abstr_image | @abstr_image | @abstr_image | @abstr_image | |--|--|--|--| | .NET @abstr_number . @abstr_number | .NET @abstr_number . @abstr_number | .NET @abstr_number . @abstr_number | 同时兼容 .NET Standard @abstr_number . @abstr_number + 及 .NET Core @abstr_number . @abstr_number + |

提示： @abstr_image @abstr_image 最后一个稳定版 @abstr_hyperlink ，自 @abstr_number 年 @abstr_number 月 @abstr_number 日起停止更新。

## 功能支持

  * 已经支持大部分微信 @abstr_number .x API，包括微信支付、自定义菜单/个性化菜单、模板信息接口、素材上传接口、群发接口、多客服接口、支付接口、微小店接口、卡券接口、发票接口等等。
  * 已支持微信公众号、小程序、企业号、开放平台等各个模块。
  * 已经支持用户会话上下文（解决服务器无法使用 Session 处理用户信息的问题）。
  * 已经全面支持微信公众号、小程序、企业号（企业微信）、微信支付、开放平台的最新 API。
  * 已经支持分布式缓存及缓存策略扩展（默认支持：本地缓存、Redis、Memcached，可自由扩展）。



> 目前官方的 API 都已完美集成，除非有特殊说明，所有升级都会尽量确保向下兼容，所以已经发布的版本请放心使用或直接升级（覆盖）最新的 dll， @abstr_hyperlink ，建议使用 @abstr_hyperlink 进行更新。

## 私人定制你的微信项目 Sample

@abstr_number . 方法：登录 @abstr_hyperlink 下载 WeChatSampleBuilder 工具，并查看使用说明； @abstr_number . 打开 WeChatSampleBuilder.exe，在 `Source Peoject Path` 中选择克隆了本项目的本地文件夹（根目录），根据需要配置 Sample 项目类型、需要生成的类库 .NET 版本、所需使用的微信模块，以及支持缓存类型； @abstr_number . 点击 Build 按钮，即可在同级目录下看到 `OutputSample` 开头的文件夹，并自动打开解决方案！

@abstr_image 

## 资源

@abstr_number . 官网地址：http://weixin.senparc.com/ @abstr_number . 在线 Demo 地址：http://sdk.weixin.senparc.com/ @abstr_number . 微信开发系列教程：http://www.cnblogs.com/szw/p/weixin-course-index.html @abstr_number . 微信技术交流社区：http://weixin.senparc.com/QA @abstr_number . 自定义菜单在线编辑工具：http://sdk.weixin.senparc.com/Menu @abstr_number . 在线消息测试工具：http://sdk.weixin.senparc.com/SimulateTool @abstr_number . 缓存测试工具：http://sdk.weixin.senparc.com/Cache/Test @abstr_number . chm帮助文档下载：http://sdk.weixin.senparc.com/Document @abstr_number . 源代码及最新更新：https://github.com/JeffreySu/WeiXinMPSDK @abstr_number . 微信开发资源集合：https://github.com/JeffreySu/WeixinResource @abstr_number . 《微信开发深度解析》阅读辅助系统：https://book.weixin.senparc.com @abstr_number . 购买《微信开发深度解析》： @abstr_hyperlink @abstr_number . 《微信公众号 + 小程序快速开发》视频教程： @abstr_hyperlink 

  * 技术交流QQ群：



> @abstr_number 群（视频课程学员群）： @abstr_number   
>  @abstr_number 群（公众号）： @abstr_number   
>  @abstr_number 群（分布式缓存群）： @abstr_number   
>  @abstr_number 群（微信小程序）： @abstr_number   
>  @abstr_number 群（开放平台）： @abstr_number   
>  _`以下群已满：`_  
>  `@abstr_number 群： @abstr_number （已满）， @abstr_number 群： @abstr_number （已满）， @abstr_number 群： @abstr_number （已满）`  
>  `@abstr_number 群： @abstr_number （已满）， @abstr_number 群： @abstr_number （已满）， @abstr_number 群： @abstr_number （已满）`  
>  `@abstr_number 群： @abstr_number （已满）， @abstr_number 群： @abstr_number （已满）， @abstr_number 群： @abstr_number （已满）`  
>  `@abstr_number 群： @abstr_number （已满）， @abstr_number 群： @abstr_number （开放平台，已满）`

  * 业务联系QQ： @abstr_number 



如果这个项目对您有用，我们欢迎各方任何形式的捐助，也包括参与到项目代码更新或意见反馈中来。谢谢！

资金捐助： @abstr_hyperlink 

## Senparc 官方图书教程

@abstr_image 

> 由 Jeffrey Su 和盛派团队耗时 @abstr_number 年完成的微信开发图书已经出版，书名：《微信开发深度解析：公众号、小程序高效开发秘籍》，全书配套辅助阅读系统已经上线： @abstr_hyperlink 。  
>  欢迎购买正版图书： @abstr_hyperlink   
>  图书出版时的代码版本快照见分支 @abstr_hyperlink 。

## Senparc 官方视频教程

> 为了帮助大家更直观地了解微信开发细节，同时结合《微信开发深度解析》图书进行学习，我们成立“盛派课堂”小组，开设了微信开发视频课程，帮助大家从多个维度学习微信开发以及 .NET 开发过程中的诸多技巧。  
>  视频包含两大部分：  
>  @abstr_number . 微信开发基础技能  
>  @abstr_number . 公众号及小程序案例实战  
> 
> 
> 共计 @abstr_number 课时，配有番外篇。  
>  目前视频已经在网易云课堂上线，课程制作精良、内容充实，被选为“A”级课程， @abstr_hyperlink ， @abstr_hyperlink 。

### 关注测试账号体验功能（SenparcRobot）：

|盛派网络小助手公众号|盛派网络小助手小程序|BookHelper| |--|--|--| | @abstr_image | @abstr_image | @abstr_image |

## 如何使用.NET Core开发

> 当前分支包含了 .NET Framework @abstr_number . @abstr_number / @abstr_number . @abstr_number / @abstr_number . @abstr_number / @abstr_number . @abstr_number . @abstr_number 及 .NET Core @abstr_number . @abstr_number / @abstr_number . @abstr_number 的全版本代码。  
>  其中 .NET Framework @abstr_number . @abstr_number 的 Demo 位于 `/src/Senparc.Weixin.MP.Sample` 目录下，  
>  .NET Core @abstr_number . @abstr_number 的 Demo 位于 `/src/Senparc.Weixin.MP.Sample.vs @abstr_number` 目录下。  
>  注意：以上两个 Demo 所引用的 Senparc.Weixin SDK 库源代码是完全一致的，只是在编译运行的时候会根据条件自动选择输出版本。
> 
> 以下所有介绍以 .NET Framework @abstr_number . @abstr_number 版本为例。

## 贡献代码

> 如果需要使用或修改此项目的源代码，建议先Fork。也欢迎将您修改的通用版本Pull Request过来。

@abstr_number . Fork @abstr_number . 创建您的特性分支 (`git checkout -b my-new-feature`) @abstr_number . 提交您的改动 (`git commit -am 'Added some feature'`) @abstr_number . 将您的修改记录提交到远程 `git` 仓库 (`git push origin my-new-feature`) @abstr_number . 然后到 github 网站的该 `git` 远程仓库的 `my-new-feature` 分支下发起 Pull Request （请提交到 `Developer` 分支，不要直接提交到 `master` 分支）

## 项目文件夹说明（src文件夹下）

| 文件夹 | 说明 | |--------|--------| |Senparc.WebSocket|WebSocket 模块| |Senparc.Weixin.Cache |Senparc.Weixin.Cache.Memcached.dll 、 Senparc.Weixin.Cache.Redis.dll 等分布式缓存扩展方案| |Senparc.Weixin.MP.BuildOutPut |所有最新版本DLL发布文件夹| |Senparc.Weixin.MP.MvcExtension |Senparc.Weixin.MP.MvcExtension.dll源码，为 MVC 项目提供的扩展包 | |Senparc.Weixin.MP |Senparc.Weixin.MP.dll 微信公众账号SDK源代码| |Senparc.Weixin.Open |Senparc.Weixin.Open.dll 第三方开放平台SDK源代码| |Senparc.Weixin.QY |Senparc.Weixin.QY.dll 微信企业号SDK源代码| |Senparc.Weixin.Work |Senparc.Weixin.Work.dll 企业微信SDK源代码| |Senparc.Weixin.WxOpen |Senparc.Weixin.WxOpen.dll 微信小程序SDK源代码，包括小游戏| |Senparc.Weixin |所有Senparc.Weixin.[x].dll 基础类库源代码|

## Demo 文件夹说明（Samples文件夹下）

| 文件夹 | 说明 | |--------|--------| |Senparc.Weixin.MP.Sample |可以直接发布使用的Demo（.NET Framework @abstr_number . @abstr_number + ASP.NET MVC）| |Senparc.Weixin.MP.Sample.WebForms |可以直接发布使用的Demo（.NET Framework @abstr_number . @abstr_number + + ASP.NET WebForms）| |Senparc.Weixin.MP.Sample.vs @abstr_number |可以直接发布使用的Demo（.NET Core + MVC）| |Senparc.Weixin.MP.Sample.Consoles |命令行 Console Demo（.NET Core）|

## Senparc.Weixin.MP.Sample中的关键代码说明

> 注：这是MVC项目，WebForms项目见对应Demo中的Weixin.aspx。

### /Controllers/WeixinController.cs

下面的Token需要和微信公众平台后台设置的Token同步，如果经常更换建议写入Web.config等配置文件（实际使用过程中两列建议使用数字+英文大小写改写Token，Token一旦被破解，微信请求将很容易被伪造！）： ```C# public readonly string Token = "weixin"; @abstr_code_section C# ///  /// 微信后台验证地址（使用Get），微信后台的“接口配置信息”的Url填写如：http://weixin.senparc.com/weixin ///  [HttpGet] [ActionName("Index")] public ActionResult Get(PostModel postModel, string echostr) { if (CheckSignature.Check(postModel.Signature, postModel.Timestamp, postModel.Nonce, Token)) { return Content(echostr); //返回随机字符串则表示验证通过 } else { return Content("failed:" + postModel.Signature + "," \+ MP.CheckSignature.GetSignature(postModel.Timestamp, postModel.Nonce, Token) + "。" + "如果你在浏览器中看到这句话，说明此地址可以被作为微信公众账号后台的Url，请注意保持Token一致。"); } } @abstr_code_section C# ///  /// 用户发送消息后，微信平台自动Post一个请求到这里，并等待响应XML ///  [HttpPost] [ActionName("Index")] public ActionResult Post(PostModel postModel) { if (!CheckSignature.Check(postModel.Signature, postModel.Timestamp, postModel.Nonce, Token)) { return Content("参数错误！"); } ... } @abstr_code_section C# [HttpPost] [ActionName("Index")] public ActionResult Post(PostModel postModel) { if (!CheckSignature.Check(postModel.Signature, postModel.Timestamp, postModel.Nonce, Token)) { return Content("参数错误！"); }
    
    
    postModel.Token = Token;
    postModel.EncodingAESKey = EncodingAESKey;//根据自己后台的设置保持一致
    postModel.AppId = AppId;//根据自己后台的设置保持一致
    
    var messageHandler = new CustomMessageHandler(Request.InputStream, postModel);//接收消息（第一步）
    
    messageHandler.Execute();//执行微信处理过程（第二步）
    
    return new FixWeixinBugWeixinResult(messageHandler);//返回（第三步）
    

} @abstr_code_section C# using System; using System.IO; using Senparc.Weixin.MP.MessageHandlers; using Senparc.Weixin.MP.Entities;

namespace Senparc.Weixin.MP.Sample.CustomerMessageHandler { public class CustomMessageHandler : MessageHandler { public public CustomMessageHandler(Stream inputStream, PostModel postModel, int maxRecordCount = @abstr_number ) : base(inputStream, postModel, maxRecordCount) {
    
    
        }
    
        public override IResponseMessageBase DefaultResponseMessage(IRequestMessageBase requestMessage)
        {
            //ResponseMessageText也可以是News等其他类型
            var responseMessage = CreateResponseMessage<ResponseMessageText>();
            responseMessage.Content = "这条消息来自DefaultResponseMessage。";
            return responseMessage;
        }
    
        public override IResponseMessageBase OnTextRequest(RequestMessageText requestMessage)
        {
            //...
        }
    
        public override IResponseMessageBase OnVoiceRequest(RequestMessageVoice requestMessage)
        {
            //...
        }
    
        //更多没有重写的OnXX方法，将默认返回DefaultResponseMessage中的结果。
        ....
    }
    

} @abstr_code_section C# public override IResponseMessageBase OnTextRequest(RequestMessageText requestMessage) { //TODO:这里的逻辑可以交给Service处理具体信息，参考OnLocationRequest方法或/Service/LocationSercice.cs var responseMessage = CreateResponseMessage(); responseMessage.Content = string.Format("您刚才发送了文字信息：{ @abstr_number }", requestMessage.Content); return responseMessage; } @abstr_code_section Copyright @abstr_number Jeffrey Su & Suzhou Senparc Network Technology Co.,Ltd.

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. ``` Detail: https://github.com/JeffreySu/WeiXinMPSDK/blob/master/license.md
