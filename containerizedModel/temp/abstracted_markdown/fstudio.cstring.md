# cstring 库

C 语言没有原生的 string 类型，这使得 string 的管理非常麻烦。cstring 是一个简单的 string 库，它主要解决以下几个问题：

  * 对于短字符串（小于 @abstr_number 字节），进行 string interning 。这可以在文本处理时节约不少内存。短 string 相当于 symbol 类型，对它做比较操作的代价可以减少到 O( @abstr_number ) 。
  * 对于临时字符串，如果长度不大（小于 @abstr_number 字节），尽可能的放在 stack 上，避免动态内存分配。
  * 支持常量字符串，对于常量短字符串只做一次 string interning 操作。
  * 使用引用计数管理相同的字符串，减少字符串的拷贝。
  * 短字符串，常量字符串，以及引用次数非常多（大于 @abstr_number K 次）的字符串可以不动态释放，简化生命期管理。
  * 惰性计算，以及缓存字符串的 hash 值，以方便实现 hashmap 。
  * 这个库是线程安全的。



# cstring_buffer

不要直接定义 cstring_buffer 类型，而应该用 CSTRING_BUFFER(var) 声明，它相当于声明了一个名为 var 的 cstring_buffer 对象。

cstring_buffer 位于栈上，通常不需要回收。但是在函数结束时，应该使用 CSTRING_CLOSE(var) 关闭它。

新声明的 cstring_buffer 对象是一个空字符串，可以用下面两个 api 修改它。

`C cstring cstring_cat(cstring_buffer sb, const char * str); cstring cstring_printf(cstring_buffer sb, const char * format, ...); @abstr_code_section C cstring cstring_grab(cstring s); void cstring_release(cstring s); @abstr_code_section C int cstring_equal(cstring a, cstring b); uint @abstr_number _t cstring_hash(cstring s); `

# literal

CSTRING_LITERAL(var, literal) 可以声明一个常量 cstring 。这里 literal 必须是一个 " 引起的字符串常量。
