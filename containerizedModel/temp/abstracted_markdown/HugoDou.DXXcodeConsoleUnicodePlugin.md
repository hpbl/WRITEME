# DXXcodeConsoleUnicodePlugin

## Plugins upgrade for new Xcode

@abstr_hyperlink 

转换 Xcode 控制台中一些不可阅读的字符。

比如：

Error Domain=kCFErrorDomainCFNetwork Code= @abstr_number "\u @abstr_number e @abstr_number e\u @abstr_number b @abstr_number \u @abstr_number web \u @abstr_number ee @abstr_number \u @abstr_number \u @abstr_number d\u @abstr_number a @abstr_number \u @abstr_number (HTTPS) \u @abstr_number a\u @abstr_number fe @abstr_number \u @abstr_number f @abstr_number \u @abstr_number fa\u @abstr_number b @abstr_number \u @abstr_number ee\u @abstr_number \u @abstr_number " UserInfo= @abstr_number x @abstr_number e @abstr_number e @abstr_number {_kCFStreamErrorCodeKey=- @abstr_number , NSErrorFailingURLStringKey=https://api.leancloud.cn/ @abstr_number . @abstr_number /batch/save, NSErrorFailingURLKey=https://api.leancloud.cn/ @abstr_number . @abstr_number /batch/save, NSLocalizedDescription=\u @abstr_number e @abstr_number e\u @abstr_number b @abstr_number \u @abstr_number web \u @abstr_number ee @abstr_number \u @abstr_number \u @abstr_number d\u @abstr_number a @abstr_number \u @abstr_number (HTTPS) \u @abstr_number a\u @abstr_number fe @abstr_number \u @abstr_number f @abstr_number \u @abstr_number fa\u @abstr_number b @abstr_number \u @abstr_number ee\u @abstr_number \u @abstr_number , _kCFStreamErrorDomainKey= @abstr_number , NSLocalizedRecoverySuggestion=\u @abstr_number bf @abstr_number \u @abstr_number c @abstr_number \u @abstr_number e @abstr_number \u @abstr_number a @abstr_number \u @abstr_number \u @abstr_number ee @abstr_number \u @abstr_number \u @abstr_number bbe\u @abstr_number f @abstr_number e\u @abstr_number \u @abstr_number \u @abstr_number \u @abstr_number b @abstr_number \u @abstr_number ee\u @abstr_number \u @abstr_number \u @abstr_number e @abstr_number e\u @abstr_number a @abstr_number \uff @abstr_number c\u @abstr_number bf @abstr_number \u @abstr_number \u @abstr_number cfb\u @abstr_number a @abstr_number \u @abstr_number \u @abstr_number cfb\u @abstr_number edf\u @abstr_number ba @abstr_number \u @abstr_number \u @abstr_number \u @abstr_number }

转换到：

Error Domain=kCFErrorDomainCFNetwork Code= @abstr_number "与安全 web 代理服务器 (HTTPS) 通信时出现问题。" UserInfo= @abstr_number x @abstr_number e @abstr_number e @abstr_number {_kCFStreamErrorCodeKey=- @abstr_number , NSErrorFailingURLStringKey=https://api.leancloud.cn/ @abstr_number . @abstr_number /batch/save, NSErrorFailingURLKey=https://api.leancloud.cn/ @abstr_number . @abstr_number /batch/save, NSLocalizedDescription=与安全 web 代理服务器 (HTTPS) 通信时出现问题。, _kCFStreamErrorDomainKey= @abstr_number , NSLocalizedRecoverySuggestion=请检查您的代理设置。有关此问题的帮助，请联系您的系统管理员。}

# 使用方法：

两种：

@abstr_number .快捷键 option+c 会转换当前 **剪贴板** 中的内容并用一个对话框把转换后的内容显示出来。

@abstr_number .在 Xcode 的 **Edit** 菜单中勾选 **ConvertUnicodeInConsole** ，然后 console 中再出现 _\u @abstr_number e @abstr_number e_ 时，就会自动转换成 _与_ 显示。
