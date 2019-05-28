# visual studio code

@abstr_hyperlink （以下简称vsc）最近更新到了 @abstr_number . @abstr_number . @abstr_number 版本，新加的一些特性都很nice。多了几个配色方案（流行的monokai配色也有了，虽然效果并不好），也支持自定义安装目录了。最让我感动的是对jsx文件做了语法高亮，写react的时候再也不是一片黑色了。

今天来了兴致，推荐一下，希望有更多的同学来使用这个编辑器。

## 介绍

vsc的宣传语是：
    
    
     一个运行于 Mac OS X、Windows和 Linux 之上的，针对于编写现代 Web 和云应用的跨平台源代码编辑器。
    

按它说的，vsc特别适合来作为前端开发编辑器。

内置html开发神器emmet(zencoding),对css及其相关编译型语言Less和Sass都有很好的支持。

当然，最nice的还是写js代码了，这也是我接下来要着重介绍的功能。

## 特性

  * Free但不开源
  * Build（构建）和 debug（调试） 现代web和云应用(尤其是JavaScript、TypeScript、C#、ASP.NET v @abstr_number 和 Nodejs)
  * 跨平台支持Linux, Mac OSX, and Windows
  * 支持语法自动补全，智能提示
  * 内置html开发神器emmet
  * 速度非常快
  * 支持多主题（配色方案）



## 安装

从 https://code.visualstudio.com/ 下载对应平台的安装文件，安装即可。

如果是mac系统，加简单的命令行

@abstr_code_section 

当前目录打开vsc编辑器

@abstr_code_section 

## 功能区说明

@abstr_image 

功能区 @abstr_number ： @abstr_number 大主菜单

@abstr_number . Explore @abstr_number . Search @abstr_number . Git @abstr_number . Debug

功能区 @abstr_number ：二级菜单

点击每个主菜单都会显示对应的二级菜单，比如Explore就是打开的目录，具体在后面讲解

功能区 @abstr_number ：编辑区

我们最常用的编码区

@abstr_image 

功能区 @abstr_number ：信息显示区

当前git信息，格式，字符编码等

@abstr_image 

@abstr_code_section 

  * master代表当前git分支是master分支
  * @abstr_number ↓ 代表远端repo没有本地的代码信息
  * @abstr_number ↑ 代表本地有 @abstr_number 个提交需要push到服务器



点击此处，会弹出

@abstr_code_section 

切换分支,很贴心

@abstr_image 

语法校验，哪里出错，哪里有警告点击一下此处就都能看到，但不是完全准，算仅供参考吧

@abstr_image 

  * Ln = line 第几行
  * Col = column 第几列
  * UTF- @abstr_number 是字符编码
  * LF 是换行方式，点击即可切换。 选项说明 
    * @abstr_number ）LF是line feed的缩写，中文意思是换行 
    * @abstr_number ）CRLF 是carriagereturnlinefeed的缩写。中文意思是回车换行。
  * Markdown 代表当前根据后缀识别的语言，用于语法高亮渲染
  * ☺ 是意见反馈



## 主菜单说明

### Explore

这个菜单主要是对文件夹和文件的管理

这里有 @abstr_number 个概念

@abstr_number . WORKING FILES @abstr_number . DIR

DIR很好理解，就是你当前打开的文件夹

working files是已打开的所有文件，如果此时点击右上角的分屏按钮，可以把文件放到对应的编辑区里。

打开文件夹在菜单里，快捷键command + o

### Search

@abstr_image 

### Git

@abstr_image 

下面给出一些git学习资料（如果熟悉，自动跳过）

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Debug

使用方法也很简单,步骤如下：

  * 打开要调试的文件，按f @abstr_number ,编辑器会生成一个launch.json
  * 修改launch.json相关内容，主要是name和program字段，改成和你项目对应的
  * 点击编辑器左侧长得像蜘蛛的那个按钮
  * 点击左上角DEBUG后面的按钮，启动调试
  * 打断点，尽情调试（只要你会chrome调试，一模一样）



@abstr_image 

## 实例

通过创建express项目构建，调试来演示vsc的具体用法

### 创建express项目

@abstr_code_section 

测试express项目是正常的。

说明：如果是自己的项目，需要自己构建git版本控制的，faq里有具体说明。

### 修改launch.json的内容

输入command + t快速定位文件：.vscode/launch.json

修改launch.json的内容

@abstr_code_section 

核心内容

@abstr_code_section 

program是要执行的express的入口。

这里的helloworld是项目，所以找到/bin/www目录即可。

### 点击调试按钮

@abstr_image 

会弹出一个窗口，执行如下命令

@abstr_code_section 

其实node-inspector也是这个原理的。

### 增加断点

@abstr_image 

### 此时访问

@abstr_code_section 

### 进入调试界面

@abstr_image 

和chrome的调试是一样的。

点击 @abstr_number ）处按钮，打开控制台，配合调试，在控制台里查看对应的变量值

另外值得说明的是二级菜单里 @abstr_number 个部分

  * a）variables变量
  * b）watch观察
  * c）call stack 调用栈
  * d）break points 断点



它和chrome的调试也是一样的，此处就不多讲了。

### 更多

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## 自动补全(智能提示)

因为之前微软推出了typescript语言，结合tsd文件，用visual studio写typescript代码是相当爽的，智能提示的功能非常nb。

这个功能理所应当也被vsc继承了。

vsc的自动补全用的是tsd。

TSD is a package manager to search and install TypeScript definition files directly from the community driven DefinitelyTyped repository.

https://github.com/DefinitelyTyped/tsd

目前主流的前端类库/框架，包括node.js及其模块/框架都有相应的tsd文件，可以去 @abstr_hyperlink 上找一下。

那么就可以安装tsd之后，使用

@abstr_code_section 

此时看一下当前目录，下面的express.d.ts文件即是具体提示用的。

@abstr_code_section 

在代码编辑区里，输入CTRL+SPACE就可以有提示了。

@abstr_image 

目前node.d.ts版本还是 @abstr_number . @abstr_number . @abstr_number ，和node v @abstr_number 的api差不了多少

## 自定义快捷键

### 查看快捷键

@abstr_code_section 

对应的快捷键是`shift + command + p`

敲完后，输入`tri`

@abstr_image 

### 修改快捷键

但是CTRL+SPACE在我的电脑里已经占用了，所以还是需要修改一下的，见下图

打开快捷键配置

@abstr_image 

修改如下

@abstr_image 

即把

@abstr_code_section 

改成

@abstr_code_section 

此时，就是输入SHIFT+SPACE就可以有提示了

### 快捷键配置原理

原理说明：我们可以看到 @abstr_number 个配置文件，一个是不能修改的，另一个是空的，后面的会把前面的覆盖

这其实和 @abstr_hyperlink 原理是类似的

@abstr_code_section 

把options里的覆盖$.fn.tab.defaults。

## 快捷键(默认)

  * 自动补全 command + SPACE
  * 快速打开文件 command + o
  * 快速定位文件 command + p
  * 分割编辑窗口 command + \ 
  * 关闭当前窗口 command + w
  * 隐藏二级菜单 command + b
  * 放大 command + =
  * 缩小 command + -
  * 插入表情 ctrl + command + space



搜索

  * 当前文档里搜索 command + -
  * 所有文档里搜索 shift + command + -



## 语音控制

fn fn

待测

## 自定义主题

打开主题配置

@abstr_image 

选一个自己喜欢的主题吧

@abstr_image 

## html开发神器emmet（Zen coding）

举个简单例子，在index.html里

输入link，然后tab键，就会生成下面的代码

@abstr_code_section 

连续输入类和id，比如p.bar#foo，会自动生成： 

@abstr_code_section 

输入h @abstr_number {foo}和a[href=#]，就可以自动生成如下代码：

@abstr_code_section 

写html代码足够快了，享受吧，更多用法见 

  * http://www.iteye.com/news/ @abstr_number 
  * http://docs.emmet.io/



## Node API 查看

在写node.js代码的时候，有时会忘记某个模块中有哪些方法及其用法，经常要去官网翻一下api文档。

这里介绍下怎么使用vsc来搞定这一问题。

@abstr_number . 打开vsc控制台（Help > Toggle Developer Tools > Console） @abstr_number . 在控制台写代码，查询模块方法。

过程如下图：

@abstr_image 

vsc是用atom-shell(现在叫electron)写的，这玩意和node-webkit（现在叫nw.js）一样，都是把node.js和chrome结合起来的工具，所以可以这么使用。

不过vsc使用到的node.js模块并不多，比如引用util和vm等会报错，用node-webkit就不会这样。

## 缓存文件

按照一般app的设计，都是主应用，和用户目录下的缓存文件，把用户自定义的或使用生成的文件都放到缓存文件目录里。鉴于此，我们来找找code.app的缓存文件，或许能发现点有用的东西

### 缓存目录详情

目录是 `/Users/sang/Library/Application Support/Code`

@abstr_code_section 

这些文件我们能看懂的就尽量看，看不懂的也无所谓，如果想深度了解里面的机制，还是有必要看看的。

### storage.json

storage.json是code.app的核心配置文件，就像npm里的package.json一样。

看一下具体内容

@abstr_code_section 

说明

  * updateChannel 应该检查版本更新的设置
  * windowUIState 界面状态，还记得分割编辑窗口吧？
  * openedPathsList 应该是File -> Open Recent里的内容
  * theme 用户配色方案
  * folderPickerWorkingDir 执行command + o 打开的目录
  * lastActiveOpenedPath 最后打开的目录（这个目录是我执行vsc直接打开的）



为什么要了解它呢？

如果你理解了上面的配置起什么作用，那么你是不是可以干很多坏事儿呢？比如

  * 备份
  * 可视化
  * 其他hack



剩下的自己发挥吧

### 当前用户配置

上面的目录结构基本都可以看懂，对应当前用户来说

@abstr_code_section 

### 用户快捷键

比如快捷键

@abstr_code_section 

是不是和我们之前配置的一样?

### 用户调试加载的文件

@abstr_code_section 

和上面的是一样的，就不打印了。如果想每次都定义一下的话，可以自己修改，以后对当前用户就是全局的了

### snippets

User/snippets是snippets存放位置，比如javascript的定义

见

@abstr_code_section 

### 自定义snippet

@abstr_code_section 

说明：

  * "Print to console" 是智能提示显示的
  * "prefix" 是用户输入的字母，比如本例中输入log自动提示
  * 当用户触发此snippet的时候，会按照"body"里代码生成
  * $ @abstr_number 代表光标位置



自己按照上面的方法定义自己的snippets，可以提高很多工作效率哦

下面看一下如何在代码中使用snippet，如图

@abstr_image 

## 庖丁解牛code.app

  * electron 打包成可执行文件
  * 使用了一些atom模块、第三方模块



app的安装目录是 `/Applications/Visual\ Studio\ Code.app`,右键show package content，然后一层一层的找里面的内容就可以了

@abstr_code_section 

下面我们来看一下里面的内容

@abstr_code_section 

### 依赖的模块

@abstr_code_section 

### 插件

@abstr_code_section 

很多人抱怨，vsc没有提供插件机制，想想还是笑笑吧，机制已经很健全了，开放只是早晚的事儿。

### out目录

out是一个比较有趣的目录，所有代码都是混淆过的，但可以从其文件名和目录名称看出一些东西

@abstr_code_section 

bootstrap.js是启动的脚本

默认支持的语言

  * annotatedLanguage
  * csharp
  * css
  * handlebars
  * html
  * javascript
  * json
  * less
  * markdown
  * php
  * plaintext
  * razor
  * sass
  * typescript
  * vsxml



vs/base/browser/ui/是界面里用的svg图，如果想自定义界面可以自行修改

vs/base/node/terminateProcess.sh写的不错

@abstr_code_section 

/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/editor/css是编辑器vs-theme.css样式

/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/workbench/browser/css是workbench的vs-theme.css样式

### ThirdPartyNotices.txt

看看它依赖的第三方开源模块

@abstr_code_section 

注意一下里面atom相关的模块

### package.json

@abstr_code_section 

## FAQ

### 如何添加git地址？

vsc其实不管你的git初始化的，只要你当前是git管理的，它的git部分才有用。

也就是说git需要自己处理。

比如

@abstr_code_section 

如果要切换分支，可以用checkout命令

@abstr_code_section 

如果是已有分支就

@abstr_code_section 

### 怎么让语法检查器支持es @abstr_number 的语法呢？

要支持es @abstr_number 的话，需要在项目下建一个jsconfig.json，内容为

@abstr_code_section 

嫌麻烦的话可以安装下@hellopao 写的模块 @abstr_hyperlink ，通过命令行来生成该文件

@abstr_code_section 

### 图片没有路径选择提示么？

目前还没有，需要等

## 结语

vsc和其他编辑器（sublime text,atom,webstorm等）相比，某些方面还存在很多问题。对于一个前端工程师来说，它已经足够好了。

推荐使用~

## TODO

  * @abstr_number . @abstr_number . @abstr_number 
  * VS Code v @abstr_number . @abstr_number . @abstr_number (October @abstr_number ) https://code.visualstudio.com/updates#VSCode



### markdown preview

@abstr_number . @abstr_number +开始增加了markdown预览功能，试用了一下，还是非常不错得

@abstr_image 

上面的命令，可以翻译一下

  * 新建split窗口
  * 讲当前markdown切换到预览模式

@abstr_code_section 



