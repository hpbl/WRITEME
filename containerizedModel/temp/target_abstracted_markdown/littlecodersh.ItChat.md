# itchat

@abstr_hyperlink @abstr_image @abstr_image @abstr_hyperlink 

itchat是一个开源的微信个人号接口，使用python调用微信从未如此简单。

使用不到三十行的代码，你就可以完成一个能够处理所有信息的微信机器人。

当然，该api的使用远不止一个机器人，更多的功能等着你来发现，比如 @abstr_hyperlink 。

该接口与公众号接口 @abstr_hyperlink 共享类似的操作方式，学习一次掌握两个工具。

如今微信已经成为了个人社交的很大一部分，希望这个项目能够帮助你扩展你的个人的微信号、方便自己的生活。

## 安装

可以通过本命令安装itchat：

@abstr_code_section 

## 简单入门实例

有了itchat，如果你想要给文件传输助手发一条信息，只需要这样：

@abstr_code_section 

如果你想要回复发给自己的文本消息，只需要这样：

@abstr_code_section 

一些进阶应用可以在下面的开源机器人的源码和进阶应用中看到，或者你也可以阅览 @abstr_hyperlink 。

## 试一试

这是一个基于这一项目的 @abstr_hyperlink ，百闻不如一见，有兴趣可以尝试一下。

由于好友数量实在增长过快，自动通过好友验证的功能演示暂时关闭。

@abstr_image 

## 截屏

@abstr_image @abstr_image 

## 进阶应用

### 特殊的字典使用方式

通过打印itchat的用户以及注册消息的参数，可以发现这些值都是字典。

但实际上itchat精心构造了相应的消息、用户、群聊、公众号类。

其所有的键值都可以通过这一方式访问：

@abstr_code_section 

属性名为键值首字母小写后的内容。

@abstr_code_section 

### 各类型消息的注册

通过如下代码，微信已经可以就日常的各种信息进行获取与回复。

@abstr_code_section 

### 命令行二维码

通过以下命令可以在登陆的时候使用命令行显示二维码：

@abstr_code_section 

部分系统可能字幅宽度有出入，可以通过将enableCmdQR赋值为特定的倍数进行调整：

@abstr_code_section 

默认控制台背景色为暗色（黑色），若背景色为浅色（白色），可以将enableCmdQR赋值为负值：

@abstr_code_section 

### 退出程序后暂存登陆状态

通过如下命令登陆，即使程序关闭，一定时间内重新开启也可以不用重新扫码。

@abstr_code_section 

### 用户搜索

使用`search_friends`方法可以搜索用户，有四种搜索方式： @abstr_number . 仅获取自己的用户信息 @abstr_number . 获取特定`UserName`的用户信息 @abstr_number . 获取备注、微信号、昵称中的任何一项等于`name`键值的用户 @abstr_number . 获取备注、微信号、昵称分别等于相应键值的用户

其中三、四项可以一同使用，下面是示例程序：

@abstr_code_section 

关于公众号、群聊的获取与搜索在文档中有更加详细的介绍。

### 附件的下载与发送

itchat的附件下载方法存储在msg的Text键中。

发送的文件的文件名（图片给出的默认文件名）都存储在msg的FileName键中。

下载方法接受一个可用的位置参数（包括文件名），并将文件相应的存储。

@abstr_code_section 

如果你不需要下载到本地，仅想要读取二进制串进行进一步处理可以不传入参数，方法将会返回图片的二进制串。

@abstr_code_section 

### 用户多开

使用如下命令可以完成多开的操作：

@abstr_code_section 

### 退出及登陆完成后调用特定方法

登陆完成后的方法需要赋值在`loginCallback`中。

而退出后的方法需要赋值在`exitCallback`中。

@abstr_code_section 

若不设置loginCallback的值，则将会自动删除二维码图片并清空命令行显示。

## 常见问题与解答

Q: 如何通过这个包将自己的微信号变为控制器？

A: 有两种方式：发送、接受自己UserName的消息；发送接收文件传输助手（filehelper）的消息

Q: 为什么我发送信息的时候部分信息没有成功发出来？

A: 有些账号是天生无法给自己的账号发送信息的，建议使用`filehelper`代替。

## 作者

## 类似项目

## 问题和建议

如果有什么问题或者建议都可以在这个 @abstr_hyperlink 和我讨论

或者也可以在gitter上交流： @abstr_hyperlink 

当然也可以加入我们新建的QQ群讨论： @abstr_number , @abstr_number 
