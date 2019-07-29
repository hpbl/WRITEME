## Mars

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

(中文版本请参看这里)

Mars is a cross-platform infrastructure component developed by WeChat Mobile Team. It is proved to be effective by billions of WeChat users.

@abstr_number . Cross platform, easy to deploy if you are developing multi-platform or multi-business application. @abstr_number . Suitable for small amount data transmission @abstr_number . Mobile platform friendly, low power and traffic consumption @abstr_number . A network solution fit for mobile application

@abstr_image 

  * comm: common library, including socket, thread, message queue, coroutine, etc.
  * Xlog: a reliable log component with high-performance.
  * SDT: a network detection component.
  * STN: a signaling network component, the major part of Mars.



## Samples

Start with sample usage @abstr_hyperlink .

## Getting started

Choose Android or iOS/OS X or Windows.

###  @abstr_hyperlink 

You can use either mars-wrapper or mars-core. We recommend you to use mars-wrapper when you just wanna build a sample or demo, while mars-core is preferred to be used in your APP.

#### mars-wrapper

Add dependencies by adding the following lines to your app/build.gradle.

@abstr_code_section 

**OR**

#### mars-core

Add dependencies by adding the following lines to your app/build.gradle.

@abstr_code_section **OR**

#### mars-xlog

If you just want to user xlog, add dependencies by adding the following lines to your app/build.gradle. note: xlog is included in mars-core and mars-wrapper. @abstr_code_section 

If you read here, make sure you have added dependencies of mars-wrapper, mars-core or mars-xlog.

#### Xlog Init

Initialize Xlog when your APP starts. Remember to use an exclusive folder to save the log files, no other files are acceptable in the folder since they would be removed by the cleansing function in Xlog automatically.

When multiple processes is used in your app, make sure that each process owns its exclusive log file.

@abstr_code_section 

Uninitialized Xlog when your app exits

@abstr_code_section 

#### STN Init

If you add dependencies of mars-core to your project, you need to initialize and release STN. Initialize STN before you use it

@abstr_code_section Firstly, you should call the setCallBack interface, and secondly, the Mars.init. Then, to initialize the Mars, there is to need to strictly follow the orders of the four commands. Finally, after Mars are initialized, onForeground and makesureLongLinkConnect can be called.

Destroy STN or exit your app:

@abstr_code_section 

#### Event Change

Network change:

@abstr_code_section 

* * *

If you add dependencies of mars-wrapper to your project, you just need initialize STN and no need uninitialized.

@abstr_code_section 

* * *

No matter which way of dependencies you used, you must pay attention to these.

The state (background or foreground) of the APP is changed:

@abstr_code_section 

The account of the APP is changed:

@abstr_code_section 

If you want to modify the encryption algorithm of Xlog, the packer/unpacker of longlink/shortlink, or you want to define the other components by yourself, refer @abstr_hyperlink 

###  @abstr_hyperlink 

Compile

@abstr_code_section 

or @abstr_code_section 

@abstr_number . Add mars.framework as a dependency of your project. @abstr_number . Rename files in mars/libraries/mars_android_sdk/jni with .rewriteme extension to .cc extension. @abstr_number . Add header files in mars/libraries/mars_android_sdk/jni and source files from step @abstr_number into your project.

#### Xlog Init

Initialize Xlog when your app starts. Remember to use an exclusive folder to save the log files, no other files are acceptable in the folder since they would be removed by the cleansing function in Xlog automatically.

@abstr_code_section 

Close xlog in function "applicationWillTerminate"

@abstr_code_section 

#### STN Init

Initialize STN before you use it:

@abstr_code_section 

Firstly, you should call the setCallBack interface, and secondly, the Mars.init. Then, to initialize the Mars, there is to need to strictly follow the orders of the four commands. Finally, after Mars are initialized, onForeground and makesureLongLinkConnect can be called.

If you want to destroy STN or exit App:

@abstr_code_section 

#### Event Change

When the App's state of background or foreground is changed:

@abstr_code_section 

Network change:

@abstr_code_section 

###  @abstr_hyperlink 

Install Visual Studio @abstr_number .

Compile @abstr_code_section 

@abstr_number . Add mars.lib as a dependency of your project. @abstr_number . Rename files in mars/libraries/mars_android_sdk/jni with .rewriteme extension to .cc extension. @abstr_number . Add header files in mars/libraries/mars_android_sdk/jni and source files from step @abstr_number into your project.

#### Xlog Init

Initialize Xlog when your app starts. Remember to use an exclusive folder to save the log files, no other files are acceptable in the folder since they would be removed by the cleansing function in Xlog automatically.

@abstr_code_section 

Uninitialized xlog before your app exits

@abstr_code_section 

#### STN Init

Initialize STN before you use it:

@abstr_code_section 

Firstly, you should call the setCalBack interface, and secondly, the Mars.init. Then, to initialize the Mars, there is to need to strictly follow the orders of the four commands. Finally, after Mars are initialized, onForeground and makesureLongLinkConnect can be called.

If you want to destroy STN or exit App:

@abstr_code_section 

## Support

Any problem?

@abstr_number . Learn more from @abstr_hyperlink . @abstr_number . Read the @abstr_hyperlink . @abstr_number . Read the @abstr_hyperlink or @abstr_hyperlink for help. @abstr_number . Contact us for help.

## Contributing

For more information about contributing issues or pull requests, see our @abstr_hyperlink .

## License

Mars is under the MIT license. See the @abstr_hyperlink file for details.

* * *

## Mars

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Mars 是微信官方的跨平台跨业务的终端基础组件。

@abstr_image 

  * comm：可以独立使用的公共库，包括 socket、线程、消息队列、协程等；
  * xlog：高可靠性高性能的运行期日志组件；
  * SDT： 网络诊断组件；
  * STN： 信令分发网络模块，也是 Mars 最主要的部分。



## Samples

sample 的使用请参考 @abstr_hyperlink 。

## Getting started

接入 Android 或者 iOS/OS X 或者 Windows 。

###  @abstr_hyperlink 

gradle 接入我们提供了两种接入方式：mars-wrapper 或者 mars-core。如果你只是想做个 sample 推荐使用 mars-wrapper，可以快速开发；但是如果你想把 mars 用到你的 app 中的话，推荐使用 mars-core，可定制性更高。

#### mars-wrapper

在 app/build.gradle 中添加 mars-wrapper 的依赖：

@abstr_code_section 

**或者**

#### mars-core

在 app/build.gradle 中添加 mars-core 的依赖：

@abstr_code_section **或者**

#### mars-xlog

如果只想使用 xlog,可以只加 xlog 的依赖(mars-core,mars-wrapper 中都已经包括 xlog)： @abstr_code_section 接着往下操作之前，请先确保你已经添加了 mars-wrapper 或者 mars-core 或者 mars-xlog 的依赖

#### Xlog Init

在程序启动加载 Xlog 后紧接着初始化 Xlog。但要注意如果你的程序使用了多进程，不要把多个进程的日志输出到同一个文件中，保证每个进程独享一个日志文件。而且保存 log 的目录请使用单独的目录，不要存放任何其他文件防止被 xlog 自动清理功能误删。

@abstr_code_section 

程序退出时关闭日志：

@abstr_code_section 

#### STN Init

如果你是把 mars-core 作为依赖加入到你的项目中的话，你需要显式的初始化和反初始化 STN

在使用 STN 之前进行初始化

@abstr_code_section 

初始化顺序不一定要严格遵守上述代码的顺序，但在初始化时首先要调用 setCallBack 接口 (callback 文件的编写可以参考 demo)，再调用 Mars.init，最后再调用 onForeground 和 makesureLongLinkConnect，中间顺序可以随意更改。 **注意：STN 默认是后台，所以初始化 STN 后需要主动调用一次** ```BaseEvent.onForeground(true) @abstr_code_section java Mars.onDestroy(); @abstr_code_section java BaseEvent.onNetworkChange() @abstr_code_section java MarsServiceProxy.init(this, getMainLooper(),null); @abstr_code_section java BaseEvent.onForeground(boolean); @abstr_code_section java StnLogic.reset(); @abstr_code_section python build_ios.py @abstr_code_section python python build_osx.py @abstr_code_section cpp NSString* logPath = [[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex: @abstr_number ] stringByAppendingString:@"/log"];

// set do not backup for logpath const char* attrName = "com.apple.MobileBackup"; u_int @abstr_number _t attrValue = @abstr_number ; setxattr([logPath UTF @abstr_number String], attrName, &attrValue, sizeof(attrValue), @abstr_number , @abstr_number );

// init xlogger

# if DEBUG

xlogger_SetLevel(kLevelDebug); appender_set_console_log(true);

# else

xlogger_SetLevel(kLevelInfo); appender_set_console_log(false);

# endif

appender_open(kAppednerAsync, [logPath UTF @abstr_number String], "Test", @abstr_number , ""); @abstr_code_section cpp appender_close(); @abstr_code_section objc \- (void)setCallBack { mars::stn::SetCallback(mars::stn::StnCallBack::Instance()); mars::app::SetCallback(mars::app::AppCallBack::Instance()); }

  * (void) createMars { mars::baseevent::OnCreate(); }

  * (void)setClientVersion:(UInt @abstr_number )clientVersion { mars::stn::SetClientVersion(clientVersion); }

  * (void)setShortLinkDebugIP:(NSString *)IP port:(const unsigned short)port { std::string ipAddress([IP UTF @abstr_number String]); mars::stn::SetShortlinkSvrAddr(port, ipAddress); }

  * (void)setShortLinkPort:(const unsigned short)port { mars::stn::SetShortlinkSvrAddr(port); }

  * (void)setLongLinkAddress:(NSString *)string port:(const unsigned short)port debugIP:(NSString *)IP { std::string ipAddress([string UTF @abstr_number String]); std::string debugIP([IP UTF @abstr_number String]); std::vector ports; ports.push_back(port); mars::stn::SetLonglinkSvrAddr(ipAddress,ports,debugIP); }

  * (void)setLongLinkAddress:(NSString *)string port:(const unsigned short)port { std::string ipAddress([string UTF @abstr_number String]); std::vector ports; ports.push_back(port); mars::stn::SetLonglinkSvrAddr(ipAddress,ports); }

  * (void)reportEvent_OnForeground:(BOOL)isForeground { mars::baseevent::OnForeground(isForground); }

  * (void)makesureLongLinkConnect { mars::stn::MakesureLonglinkConnected(); } @abstr_code_section objc

  * (void)destroyMars { mars::baseevent::OnDestroy(); } @abstr_code_section objc
  * (void)reportEvent_OnForeground:(BOOL)isForeground { mars::baseevent::OnForeground(isForeground); } @abstr_code_section objc
  * (void)reportEvent_OnNetworkChange { mars::baseevent::OnNetworkChange(); } @abstr_code_section python python build_windows.py @abstr_code_section cpp std::string logPath = ""; //use your log path std::string pubKey = ""; //use you pubkey for log encrypt



// init xlog

# if DEBUG

xlogger_SetLevel(kLevelDebug); appender_set_console_log(true);

# else

xlogger_SetLevel(kLevelInfo); appender_set_console_log(false);

# endif

appender_open(kAppednerAsync, logPath.c_str(), "Test", @abstr_number , pubKey.c_str()); @abstr_code_section cpp appender_close(); @abstr_code_section cpp void setShortLinkDebugIP(const std::string& _ip, unsigned short _port) { mars::stn::SetShortlinkSvrAddr(_port, _ip); } void setShortLinkPort(unsigned short _port) { mars::stn::SetShortlinkSvrAddr(_port, ""); } void setLongLinkAddress(const std::string& _ip, unsigned short _port, const std::string& _debug_ip) { vector ports; ports.push_back(_port); mars::stn::SetLonglinkSvrAddr(_ip, ports, _debug_ip); }

void Init() { mars::stn::SetCallback(mars::stn::StnCallBack::Instance()); mars::app::SetCallback(mars::app::AppCallBack::Instance()); mars::baseevent::OnCreate();
    
    
    //todo
    //mars::stn::SetClientVersion(version);
    //setShortLinkDebugIP(...)
    //setLongLinkAddress(...)
    
    mars::baseevent::OnForeground(true);
    mars::stn::MakesureLonglinkConnected();
    

} @abstr_code_section cpp mars::baseevent::OnDestroy(); ```

## Support

还有其他问题？

@abstr_number . 参看 @abstr_hyperlink ； @abstr_number . 阅读 @abstr_hyperlink ； @abstr_number . 阅读 @abstr_hyperlink 或者 @abstr_hyperlink ； @abstr_number . 联系我们。

## Contributing

关于 Mars 分支管理、issue 以及 pr 规范，请阅读 @abstr_hyperlink 。

## License

Mars 使用的 MIT 协议，详细请参考 @abstr_hyperlink 。
