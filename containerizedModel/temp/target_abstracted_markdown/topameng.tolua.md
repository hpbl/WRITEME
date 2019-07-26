## tolua

tolua# is a Unity lua static binder solution. the first solution that analyzes code by reflection and generates wrapper classes.  
It is a Unity plugin that greatly simplifies the integration of C# code with Lua. which can automatically generate the binding code to access Unity from Lua and map c# constants, variables, functions, properties, classes, and enums to Lua.  
tolua# grows up from cstolua. it's goal is to be a powerful development environment for Unity.  
Support unity @abstr_number . @abstr_number .x and Unity @abstr_number .x all(copy /Unity @abstr_number .x/Assets to /Assets)   
If you want to test examples(example @abstr_number is excluded)in mobile, first click menu Lua/Copy lua files to Resources. then build it   
如果你想在手机上测试例子(例子 @abstr_number 除外)，首先点击菜单Lua/Copy lua files to Resources， 之后再build.   


欢迎大家点星支持，谢谢^_^  
有bug 可以到QQ群 @abstr_number 反馈。 可以加讨论群:   
ulua&tolua技术交流群① @abstr_number (已满)   
ulua&tolua技术讨论群② @abstr_number (已满)   
tolua#技术讨论群④ @abstr_number (已满)  
tolua#技术群 @abstr_number   


# Library

**tolua_runtime**   
https://github.com/topameng/tolua_runtime   
**Debugger**   
https://github.com/topameng/Debugger   
**CString**   
https://github.com/topameng/CString   
**protoc-gen-lua**   
https://github.com/topameng/protoc-gen-lua   


# FrameWork and Demo

**LuaFrameWork**  
https://github.com/jarjin/LuaFramework_NGUI   
https://github.com/jarjin/LuaFramework_UGUI   
**XlsxToLua**  
https://github.com/zhangqi-ulua/XlsxToLua  
**UnityHello**  
https://github.com/woshihuo @abstr_number /UnityHello  
**UWA-ToLua**  
http://uwa-download.oss-cn-beijing.aliyuncs.com/plugins% @abstr_number FiOS% @abstr_number FUWA-iOS-ToLua.zip  


# Debugger

**EmmyLua**  
https://github.com/tangzx/IntelliJ-EmmyLua  
**unity_tolua-_zerobrane_api**  
https://github.com/LabOfHoward/unity_tolua-_zerobrane_api  


# Packages

**Basics** **Math** **Data Structures**  
luabitop Quaternion list  
struct Vector @abstr_number event  
int @abstr_number Vector @abstr_number slot  
Time Vector @abstr_number   
**Networking** Ray  
luasocket Color  
**Parsing** Bounds  
lpeg Mathf  
**Protol** Touch  
pblua RaycastHit  


# 特性

  * 自动生成绑定代码文件，非反射调用   

  * 大量内建基础类型支持，如枚举，委托，事件，Type, 数组，迭代器等   

  * 支持多种协同形式   

  * 支持所有unity内部类导出，支持委托类型导出   

  * 支持导出自定义，跳过某个空的基类，修改导出名称等   

  * 支持扩展函数自定义导出, 比如DoTween   

  * 支持值类型Nullable导出，包括Nullable<Vector @abstr_number >等   

  * 支持Lua中function转委托，可以区分需要不同委托的参数的重载函数   

  * 支持c# LuaFunction对象转委托，简化调用方式。 支持无GC的多参数调用形式   

  * 支持重载函数自动折叠, 如:Convert.ToUInt @abstr_number 只导出double参数的函数   

  * 支持重载函数自动排序, 如:参数个数相同, object参数执行级最低, 不会出现错误匹配情况   

  * 支持导出函数重命名, 可以分离导出某个重载函数(可以导出被折叠掉的函数)   

  * 支持使用编辑器类改写导出规则   

  * 支持this数组访问，索引为int可以通过[]访问，其他可使用.get_Item或者.this:get()访问数组成员   

  * 支持委托(事件)+-lua function。支持通过函数接口的Add和Remove委托操作   

  * 支持静态反射操作, 形式同c#   

  * 支持peer表，可在lua端扩展导出的userdata   

  * 支持自定义struct压入和读取，做到无GC，并且结构成员无类型限制, 参考例子 @abstr_number   

  * 支持preloading, 可以通过requie后绑定wrap文件   

  * 支持int @abstr_number , uint @abstr_number   

  * 大量的lua数学类型，如Quaternion, Vector @abstr_number , Mathf等
  * 包含第三方lua扩展，包括luasocket, struct, lpeg, utf @abstr_number , pb等库   

  * 当lua出现异常，能够同时捕获c#端和lua端堆栈，便于调试   

  * print信息，在编辑器点击日志, 能自动打开对应lua文件   

  * 支持unity所有版本   

  * **支持Lua hook C#相代码实现，一定程度上支持利用Lua代码修改C#端代码的bug** （ @abstr_hyperlink ）   




# 快速入门

在CustomSetting.cs中添加需要导出的类或者委托，类加入到customTypeList列表，委托加入到customDelegateList列表   
通过设置saveDir变量更改导出目录,默认生成在Assets/Source/Generate/下,点击菜单Lua->Generate All,生成绑定文件   
在LuaConst.cs中配置开发lua文件目录luaDir以及tolua lua文件目录toluaDir   
@abstr_code_section @abstr_code_section 这里是更多的示例。

# 关于反射

tolua# 不支持动态反射。动态反射对于重载函数有参数匹配问题，函数排序问题，ref,out 参数问题等等。  
tolua#提供的替换方法是:  
@abstr_number . preloading, 把你未来可能需要的类型添加到导出列表customTypeList，同时也添加到dynamicList列表中，这样导出后该类型并不会随binder注册到lua中，你可以通过 require "namespace.classname" 动态注册到lua中，对于非枚举类型tolua#系统也可以在第一次push该类型时动态载入，当然也可在过场动画、资源下载、登录、场景加载或者某个的函数中require这个类型。  
@abstr_number . 静态反射，参考例子 @abstr_number 。通过静态反射支持精确的函数参数匹配和类型检查。不会存在重载函数参数混乱匹配错误问题, 注意iOS必须配置好link.xml  


# Performance

| 平台 | 属性读写 | 重载函数 | Vector @abstr_number 构造 |GameObject构造|Vector @abstr_number 归一化|Slerp| | :-- | :-----------:|:---------:| :---------: |:-----------: |:----------: |:--: | | PC | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | | Android | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | | iOS | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number | @abstr_number . @abstr_number : @abstr_number . @abstr_number |

测试结果为C#:Lua. 环境不同会略有差异。可用数字倍率做参考  
PC: Intel(R) Core(TM) i @abstr_number - @abstr_number CPU@ @abstr_number . @abstr_number GHz + @abstr_number GB + @abstr_number 位win @abstr_number + Unity @abstr_number . @abstr_number . @abstr_number p @abstr_number   
Android: 中兴nubia z @abstr_number max(NX @abstr_number J) + Adnroid @abstr_number . @abstr_number . @abstr_number   
iOS(il @abstr_number cpp): IPhone @abstr_number Plus  
按照 @abstr_number . @abstr_number . @abstr_number . @abstr_number 版本更新了测试数据, u @abstr_number 相对u @abstr_number , 安卓上c#有了不小的提升  


# Examples

参考包内 @abstr_number - @abstr_number 例子

# About Lua

win, android ios using luajit @abstr_number . @abstr_number -beta @abstr_number . macos using luac @abstr_number . @abstr_number . @abstr_number (for u @abstr_number .x). 注意iOS未编译模拟器库，请用真机测试
