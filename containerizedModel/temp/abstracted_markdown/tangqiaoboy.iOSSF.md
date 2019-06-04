# SegmentFault

SegmentFault为开发者提供高效的解决问题平台，网址是：http://segmentfault.com/ 或 http://sf.gg/。 这个工程是SegmentFault的iOS客户端，完全开源。 架构不断进化ing

# 特点

SF iOS App使用URLManager，通过URL Scheme的方式管理ViewController，做到VC松耦合，不依赖。 使用Kache作为缓存控件，用来缓存网络数据。 以上两个控件是该项目自主研发，旨在打造轻量、好用的iOS开发控件。

# 开发

这个工程使用Submodule管理所有第三方控件。目录结构如下：

####  @abstr_hyperlink /SegmentFault/Support/

##### |__ @abstr_hyperlink 

##### |__ @abstr_hyperlink 

##### |__ @abstr_hyperlink （自主开发的缓存控件）

##### |__ @abstr_hyperlink 

##### |__ @abstr_hyperlink （自主开发的NavigationViewController，用URL Scheme管理ViewControllers）

建议你使用 @abstr_hyperlink 来管理工程。使用SourceTree Clone一个工程会自动加载Submodule。

如果你使用命令行Clone工程，请运行如下命令，加载Submodule

### # git clone https://github.com/gaosboy/iOSSF.git

@abstr_code_section 

### # cd iOSSF

### # git submodule init

@abstr_code_section 

### # git submodule update

@abstr_code_section 
