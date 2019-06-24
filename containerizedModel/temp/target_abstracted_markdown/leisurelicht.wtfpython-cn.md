@abstr_image 

What the f*ck Python! 🐍

一些有趣且鲜为人知的 Python 特性.

@abstr_hyperlink | 中文 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Python, 是一个设计优美的解释型高级语言, 它提供了很多能让程序员感到舒适的功能特性. 但有的时候, Python 的一些输出结果对于初学者来说似乎并不是那么一目了然.

这个有趣的项目意在收集 Python 中那些难以理解和反人类直觉的例子以及鲜为人知的功能特性, 并尝试讨论这些现象背后真正的原理!

虽然下面的有些例子并不一定会让你觉得 WTFs, 但它们依然有可能会告诉你一些你所不知道的 Python 有趣特性. 我觉得这是一种学习编程语言内部原理的好办法, 而且我相信你也会从中获得乐趣!

如果您是一位经验比较丰富的 Python 程序员, 你可以尝试挑战看是否能一次就找到例子的正确答案. 你可能对其中的一些例子已经比较熟悉了, 那这也许能唤起你当年踩这些坑时的甜蜜回忆 :sweat_smile:

PS: 如果你不是第一次读了, 你可以在 @abstr_hyperlink 获取变动内容.

那么, 让我们开始吧...

# Table of Contents/目录

  * Table of Contents/目录
  * Structure of the Examples/示例结构
  * Usage/用法
  * 👀 Examples/示例 
    * Section: Strain your brain!/大脑运动! 
      * > Strings can be tricky sometimes/微妙的字符串 *
      * > Time for some hash brownies!/是时候来点蛋糕了!
      * > Return return everywhere!/到处返回！
      * > Deep down, we're all the same./本质上,我们都一样. *
      * > For what?/为什么?
      * > Evaluation time discrepancy/执行时机差异
      * > is is not what it is!/出人意料的is!
      * > A tic-tac-toe where X wins in the first attempt!/一蹴即至!
      * > The sticky output function/麻烦的输出
      * > is not ... is not is (not ...)/is not ... 不是 is (not ...)
      * > The surprising comma/意外的逗号
      * > Backslashes at the end of string/字符串末尾的反斜杠
      * > not knot!/别纠结!
      * > Half triple-quoted strings/三个引号
      * > Midnight time doesn't exist?/不存在的午夜?
      * > What's wrong with booleans?/布尔你咋了?
      * > Class attributes and instance attributes/类属性和实例属性
      * > yielding None/生成 None
      * > Mutating the immutable!/强人所难
      * > The disappearing variable from outer scope/消失的外部变量
      * > When True is actually False/真亦假
      * > From filled to None in one instruction.../从有到无...
      * > Subclass relationships/子类关系 *
      * > The mysterious key type conversion/神秘的键型转换 *
      * > Let's see if you can guess this?/看看你能否猜到这一点?
    * Section: Appearances are deceptive!/外表是靠不住的! 
      * > Skipping lines?/跳过一行?
      * > Teleportation/空间移动 *
      * > Well, something is fishy.../嗯, 有些可疑...
    * Section: Watch out for the landmines!/小心地雷! 
      * > Modifying a dictionary while iterating over it/迭代字典时的修改
      * > Stubborn del operator/坚强的 del *
      * > Deleting a list item while iterating/迭代列表时删除元素
      * > Loop variables leaking out!/循环变量泄漏!
      * > Beware of default mutable arguments!/当心默认的可变参数!
      * > Catching the Exceptions/捕获异常
      * > Same operands, different story!/同人不同命!
      * > The out of scope variable/外部作用域变量
      * > Be careful with chained operations/小心链式操作
      * > Name resolution ignoring class scope/忽略类作用域的名称解析
      * > Needle in a Haystack/大海捞针
    * Section: The Hidden treasures!/隐藏的宝藏! 
      * > Okay Python, Can you make me fly?/Python, 可否带我飞? *
      * > goto, but why?/goto, 但为什么? *
      * > Brace yourself!/做好思想准备 *
      * > Let's meet Friendly Language Uncle For Life/让生活更友好 *
      * > Even Python understands that love is complicated/连Python也知道爱是难言的 *
      * > Yes, it exists!/是的, 它存在!
      * > Inpinity/无限 *
      * > Mangling time!修饰时间! *
    * Section: Miscellaneous/杂项 
      * > += is faster/更快的 += 
      * > Let's make a giant string!/来做个巨大的字符串吧!
      * > Explicit typecast of strings/字符串的显式类型转换
      * > Minor Ones/小知识点
  * Contributing/贡献
  * Acknowledgements/致谢
  * 🎓 License/许可 
    * Help/帮助
    * Surprise your geeky pythonist friends?/想给你的极客朋友一个惊喜?
    * Need a pdf version?/需要来一份pdf版的?
    * Follow Commit/追踪Commit
    * @abstr_number .icu



# Structure of the Examples/示例结构

所有示例的结构都如下所示:

> ### > 一个精选的标题 *
> 
> 标题末尾的星号表示该示例在第一版中不存在，是最近添加的.
> 
> @abstr_code_section sh $ npm install -g wtfpython @abstr_code_section sh $ pip install wtfpython -U @abstr_code_section py
>
>> > a = "some_string" id(a) @abstr_number id("some" + "_" + "string") # 注意两个的id值是相同的. @abstr_number @abstr_code_section py a = "wtf" b = "wtf" a is b True
>>> 
>>> a = "wtf!" b = "wtf!" a is b False
>>> 
>>> a, b = "wtf!", "wtf!" a is b # 仅适用于 @abstr_number . @abstr_number 版本以下, @abstr_number . @abstr_number 以后的返回结果为False. True @abstr_code_section py 'a' * @abstr_number is 'aaaaaaaaaaaaaaaaaaaa' True 'a' * @abstr_number is 'aaaaaaaaaaaaaaaaaaaaa' False @abstr_code_section py some_dict = {} some_dict[ @abstr_number . @abstr_number ] = "Ruby" some_dict[ @abstr_number . @abstr_number ] = "JavaScript" some_dict[ @abstr_number ] = "Python" @abstr_code_section py some_dict[ @abstr_number . @abstr_number ] "Ruby" some_dict[ @abstr_number . @abstr_number ] "Python" some_dict[ @abstr_number ] "Python" @abstr_code_section py @abstr_number == @abstr_number . @abstr_number True hash( @abstr_number ) == hash( @abstr_number . @abstr_number ) True @abstr_code_section py def some_func(): try: return 'from_try' finally: return 'from_finally' @abstr_code_section py some_func() 'from_finally' @abstr_code_section py class WTF: pass @abstr_code_section py WTF() == WTF() # 两个不同的对象应该不相等 False WTF() is WTF() # 也不相同 False hash(WTF()) == hash(WTF()) # 哈希值也应该不同 True id(WTF()) == id(WTF()) True @abstr_code_section py class WTF(object): def __init__(self): print("I") def __del__(self): print("D") @abstr_code_section py WTF() is WTF() I I D D False id(WTF()) == id(WTF()) I D I D True @abstr_code_section py some_string = "wtf" some_dict = {} for i, some_dict[i] in enumerate(some_string): pass @abstr_code_section py some_dict # 创建了索引字典. { @abstr_number : 'w', @abstr_number : 't', @abstr_number : 'f'} @abstr_code_section for_stmt: 'for' exprlist 'in' testlist ':' suite ['else' ':' suite] @abstr_code_section py for i in range( @abstr_number ): print(i) i = @abstr_number @abstr_code_section @abstr_number @abstr_number @abstr_number @abstr_number @abstr_code_section py i, some_dict[i] = ( @abstr_number , 'w') i, some_dict[i] = ( @abstr_number , 't') i, some_dict[i] = ( @abstr_number , 'f') some_dict @abstr_code_section py array = [ @abstr_number , @abstr_number , @abstr_number ] g = (x for x in array if array.count(x) > @abstr_number ) array = [ @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py print(list(g)) [ @abstr_number ] @abstr_code_section py array_ @abstr_number = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] g @abstr_number = (x for x in array_ @abstr_number ) array_ @abstr_number = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ]

array_ @abstr_number = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] g @abstr_number = (x for x in array_ @abstr_number ) array_ @abstr_number [:] = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py

> > > print(list(g @abstr_number )) [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ]
>>> 
>>> print(list(g @abstr_number )) [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a = @abstr_number b = @abstr_number a is b True
>>> 
>>> a = @abstr_number b = @abstr_number a is b False
>>> 
>>> a = @abstr_number ; b = @abstr_number a is b True @abstr_code_section py [] == [] True [] is [] # 这两个空列表位于不同的内存地址. False @abstr_code_section py id( @abstr_number ) @abstr_number a = @abstr_number b = @abstr_number id(a) @abstr_number id(b) @abstr_number id( @abstr_number ) @abstr_number x = @abstr_number y = @abstr_number id(x) @abstr_number id(y) @abstr_number @abstr_code_section py a, b = @abstr_number , @abstr_number id(a) @abstr_number id(b) @abstr_number a = @abstr_number b = @abstr_number id(a) @abstr_number id(b) @abstr_number @abstr_code_section py
>>> 
>>> # 我们先初始化一个变量row

row = [""]* @abstr_number #row i['', '', '']

# 并创建一个变量board

board = [row]* @abstr_number @abstr_code_section py

> > > board [['', '', ''], ['', '', ''], ['', '', '']] board[ @abstr_number ] ['', '', ''] board[ @abstr_number ][ @abstr_number ] '' board[ @abstr_number ][ @abstr_number ] = "X" board [['X', '', ''], ['X', '', ''], ['X', '', '']] @abstr_code_section py board = [['']* @abstr_number for _ in range( @abstr_number )] board[ @abstr_number ][ @abstr_number ] = "X" board [['X', '', ''], ['', '', ''], ['', '', '']] @abstr_code_section py funcs = [] results = [] for x in range( @abstr_number ): def some_func(): return x funcs.append(some_func) results.append(some_func()) # 注意这里函数被执行了

funcs_results = [func() for func in funcs] @abstr_code_section py

> > > results [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] funcs_results [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py powers_of_x = [lambda x: x _*i for i in range( @abstr_number )] [f( @abstr_number ) for f in powers_of_x] [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py funcs = [] for x in range( @abstr_number ): def some_func(x=x): return x funcs.append(some_func) @abstr_code_section py funcs_results = [func() for func in funcs] funcs_results [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py 'something' is not None True 'something' is (not None) False @abstr_code_section py def f(x, y,): ... print(x, y) ... def g(x= @abstr_number , y= @abstr_number ,): ... print(x, y) ... def h(x, *_ kwargs,): File "", line @abstr_number def h(x, _*kwargs,): ^ SyntaxError: invalid syntax def h(_ args,): File "", line @abstr_number def h(*args,): ^ SyntaxError: invalid syntax @abstr_code_section print("\ C:\") \ C:\ print(r"\ C:") \ C: print(r"\ C:\")
    
    
    File "<stdin>", line  @abstr_number 
      print(r"\ C:\")
                     ^
    

SyntaxError: EOL while scanning string literal @abstr_code_section py

> > > print(repr(r"wt\"f")) 'wt\"f' @abstr_code_section py x = True y = False @abstr_code_section py not x == y True x == not y File "", line @abstr_number x == not y ^ SyntaxError: invalid syntax @abstr_code_section py print('wtfpython''') wtfpython print("wtfpython""") wtfpython
>>> 
>>> # 下面的语句会抛出 `SyntaxError` 异常
>>> 
>>> # print('''wtfpython')
>>> 
>>> # print("""wtfpython")
>>> 
>>> @abstr_code_section print("wtf" "python") wtfpython print("wtf" "") # or "wtf""" wtf @abstr_code_section py from datetime import datetime

midnight = datetime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) midnight_time = midnight.time()

noon = datetime( @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ) noon_time = noon.time()

if midnight_time: print("Time at midnight is", midnight_time)

if noon_time: print("Time at noon is", noon_time) @abstr_code_section sh ('Time at noon is', datetime.time( @abstr_number , @abstr_number )) @abstr_code_section py

# 一个简单的例子, 统计下面可迭代对象中的布尔型值的个数和整型值的个数

mixed_list = [False, @abstr_number . @abstr_number , "some_string", @abstr_number , True, [], False] integers_found_so_far = @abstr_number booleans_found_so_far = @abstr_number 

for item in mixed_list: if isinstance(item, int): integers_found_so_far += @abstr_number elif isinstance(item, bool): booleans_found_so_far += @abstr_number @abstr_code_section py

> > > integers_found_so_far @abstr_number booleans_found_so_far @abstr_number @abstr_code_section py another_dict = {} another_dict[True] = "JavaScript" another_dict[ @abstr_number ] = "Ruby" another_dict[ @abstr_number . @abstr_number ] = "Python" @abstr_code_section py another_dict[True] "Python" @abstr_code_section py some_bool = True "wtf" _some_bool 'wtf' some_bool = False "wtf"_ some_bool '' @abstr_code_section py isinstance(True, int) True isinstance(False, int) True @abstr_code_section py True == @abstr_number == @abstr_number . @abstr_number and False == @abstr_number == @abstr_number . @abstr_number True @abstr_code_section py class A: x = @abstr_number 

class B(A): pass

class C(A): pass @abstr_code_section py

> > > A.x, B.x, C.x ( @abstr_number , @abstr_number , @abstr_number ) B.x = @abstr_number A.x, B.x, C.x ( @abstr_number , @abstr_number , @abstr_number ) A.x = @abstr_number A.x, B.x, C.x ( @abstr_number , @abstr_number , @abstr_number ) a = A() a.x, A.x ( @abstr_number , @abstr_number ) a.x += @abstr_number a.x, A.x ( @abstr_number , @abstr_number ) @abstr_code_section py class SomeClass: some_var = @abstr_number some_list = [ @abstr_number ] another_list = [ @abstr_number ] def __init__(self, x): self.some_var = x + @abstr_number self.some_list = self.some_list + [x] self.another_list += [x] @abstr_code_section py some_obj = SomeClass( @abstr_number ) some_obj.some_list [ @abstr_number , @abstr_number ] some_obj.another_list [ @abstr_number , @abstr_number ] another_obj = SomeClass( @abstr_number ) another_obj.some_list [ @abstr_number , @abstr_number ] another_obj.another_list [ @abstr_number , @abstr_number , @abstr_number ] another_obj.another_list is SomeClass.another_list True another_obj.another_list is some_obj.another_list True @abstr_code_section py some_iterable = ('a', 'b')

def some_func(val): return "something" @abstr_code_section py

> > > [x for x in some_iterable] ['a', 'b'] [(yield x) for x in some_iterable]  at @abstr_number x @abstr_number f @abstr_number b @abstr_number a @abstr_number ad @abstr_number > list([(yield x) for x in some_iterable]) ['a', 'b'] list((yield x) for x in some_iterable) ['a', None, 'b', None] list(some_func((yield x)) for x in some_iterable) ['a', 'something', 'b', 'something'] @abstr_code_section py some_tuple = ("A", "tuple", "with", "values") another_tuple = ([ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ]) @abstr_code_section py some_tuple[ @abstr_number ] = "change this" TypeError: 'tuple' object does not support item assignment another_tuple[ @abstr_number ].append( @abstr_number ) # 这里不出现错误 another_tuple ([ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number , @abstr_number ]) another_tuple[ @abstr_number ] += [ @abstr_number , @abstr_number ] TypeError: 'tuple' object does not support item assignment another_tuple ([ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ]) @abstr_code_section py e = @abstr_number try: raise Exception() except Exception as e: pass @abstr_code_section py print(e)
>>> 
>>> # prints nothing

@abstr_code_section py

> > > print(e) NameError: name 'e' is not defined @abstr_code_section py except E as N: foo @abstr_code_section py except E as N: try: foo finally: del N @abstr_code_section py def f(x): del(x) print(x)
    
    
     x =  @abstr_number 
     y = [ @abstr_number ,  @abstr_number ,  @abstr_number ]
      @abstr_code_section py
     >>>f(x)
     UnboundLocalError: local variable 'x' referenced before assignment
     >>>f(y)
     UnboundLocalError: local variable 'x' referenced before assignment
     >>> x
      @abstr_number 
     >>> y
     [ @abstr_number ,  @abstr_number ,  @abstr_number ]
      @abstr_code_section py
    >>> e
    Exception()
    >>> print e
    # 没有打印任何内容!
     @abstr_code_section py
    

True = False if True == False: print("I've lost faith in truth!") @abstr_code_section I've lost faith in truth! @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] some_dict = { "key_ @abstr_number ": @abstr_number , "key_ @abstr_number ": @abstr_number , "key_ @abstr_number ": @abstr_number }

some_list = some_list.append( @abstr_number ) some_dict = some_dict.update({"key_ @abstr_number ": @abstr_number }) @abstr_code_section py

> > > print(some_list) None print(some_dict) None @abstr_code_section py from collections import Hashable issubclass(list, object) True issubclass(object, Hashable) True issubclass(list, Hashable) False @abstr_code_section py class SomeClass(str): pass

some_dict = {'s': @abstr_number } @abstr_code_section py

> > > type(list(some_dict.keys())[ @abstr_number ]) str s = SomeClass('s') some_dict[s] = @abstr_number some_dict # 预期: 两个不同的键值对 {'s': @abstr_number } type(list(some_dict.keys())[ @abstr_number ]) str @abstr_code_section py class SomeClass(str): def __eq__(self, other): return ( type(self) is SomeClass and type(other) is SomeClass and super().__eq__(other) )
    
    
    # 当我们自定义 __eq__ 方法时, Python 不会再自动继承 __hash__ 方法
    # 所以我们也需要定义它
    __hash__ = str.__hash__
    

some_dict = {'s': @abstr_number } @abstr_code_section py

> > > s = SomeClass('s') some_dict[s] = @abstr_number some_dict {'s': @abstr_number , 's': @abstr_number } keys = list(some_dict.keys()) type(keys[ @abstr_number ]), type(keys[ @abstr_number ]) (__main__.SomeClass, str) @abstr_code_section py a, b = a[b] = {}, @abstr_number @abstr_code_section py a { @abstr_number : ({...}, @abstr_number )} @abstr_code_section (target_list "=")+ (expression_list | yield_expression) @abstr_code_section py some_list = some_list[ @abstr_number ] = [ @abstr_number ] some_list [[...]] some_list[ @abstr_number ] [[...]] some_list is some_list[ @abstr_number ] True some_list[ @abstr_number ][ @abstr_number ][ @abstr_number ][ @abstr_number ][ @abstr_number ][ @abstr_number ] == some_list True @abstr_code_section py a, b = {}, @abstr_number a[b] = a, b @abstr_code_section py a[b][ @abstr_number ] is a True @abstr_code_section py value = @abstr_number valuе = @abstr_number value @abstr_number @abstr_code_section py ord('е') # 西里尔语的 'e' (Ye) @abstr_number ord('e') # 拉丁语的 'e', 用于英文并使用标准键盘输入 @abstr_number 'е' == 'e' False
>>> 
>>> value = @abstr_number # 拉丁语 e valuе = @abstr_number # 西里尔语 'e', Python @abstr_number .x 的解释器在这会抛出 `SyntaxError` 异常 value @abstr_number @abstr_code_section py import numpy as np

def energy_send(x): # 初始化一个 numpy 数组 np.array([float(x)])

def energy_receive(): # 返回一个空的 numpy 数组 return np.empty((), dtype=np.float).tolist() @abstr_code_section py

> > > energy_send( @abstr_number . @abstr_number ) energy_receive() @abstr_number . @abstr_number @abstr_code_section py def square(x): """ 一个通过加法计算平方的简单函数. """ sum_so_far = @abstr_number for counter in range(x): sum_so_far = sum_so_far + x return sum_so_far @abstr_code_section py square( @abstr_number ) @abstr_number @abstr_code_section py TabError: inconsistent use of tabs and spaces in indentation @abstr_code_section py x = { @abstr_number : None}

for i in x: del x[i] x[i+ @abstr_number ] = None print(i) @abstr_code_section @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_code_section py class SomeClass: def __del__(self): print("Deleted!") @abstr_code_section py

> > > x = SomeClass() y = x del x # 这里应该会输出 "Deleted!" del y Deleted! @abstr_code_section py x = SomeClass() y = x del x y # 检查一下y是否存在 <__main__.someclass __main__.someclass="" a="" at="" del="" deleted="" f="" fc="" globals="" instance="" list_="" none="" py="" x="" y=""> 

for idx, item in enumerate(list_ @abstr_number ): del item

for idx, item in enumerate(list_ @abstr_number ): list_ @abstr_number .remove(item)

for idx, item in enumerate(list_ @abstr_number [:]): list_ @abstr_number .remove(item)

for idx, item in enumerate(list_ @abstr_number ): list_ @abstr_number .pop(idx) @abstr_code_section py

> > > list_ @abstr_number [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] list_ @abstr_number [ @abstr_number , @abstr_number ] list_ @abstr_number [] list_ @abstr_number [ @abstr_number , @abstr_number ] @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] id(some_list) @abstr_number id(some_list[:]) # 注意python为切片列表创建了新对象. @abstr_number @abstr_code_section py for x in range( @abstr_number ): if x == @abstr_number : print(x, ': for x inside loop') print(x, ': x in global') @abstr_code_section py @abstr_number : for x inside loop @abstr_number : x in global @abstr_code_section py
>>> 
>>> # 这次我们先初始化x

x = - @abstr_number for x in range( @abstr_number ): if x == @abstr_number : print(x, ': for x inside loop') print(x, ': x in global') @abstr_code_section py @abstr_number : for x inside loop @abstr_number : x in global @abstr_code_section x = @abstr_number print([x for x in range( @abstr_number )]) print(x, ': x in global') @abstr_code_section [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] ( @abstr_number , ': x in global') @abstr_code_section [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_number : x in global @abstr_code_section py def some_func(default_arg=[]): default_arg.append("some_string") return default_arg @abstr_code_section py

> > > some_func() ['some_string'] some_func() ['some_string', 'some_string'] some_func([]) ['some_string'] some_func() ['some_string', 'some_string', 'some_string'] @abstr_code_section py def some_func(default_arg=[]): default_arg.append("some_string") return default_arg @abstr_code_section py some_func.__defaults__ # 这里会显示函数的默认参数的值 ([],) some_func() some_func.__defaults__ (['some_string'],) some_func() some_func.__defaults__ (['some_string', 'some_string'],) some_func([]) some_func.__defaults__ (['some_string', 'some_string'],) @abstr_code_section py def some_func(default_arg=None): if not default_arg: default_arg = [] default_arg.append("some_string") return default_arg @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] try: # 这里会抛出异常 `IndexError` print(some_list[ @abstr_number ]) except IndexError, ValueError: print("Caught!")

try: # 这里会抛出异常 `ValueError` some_list.remove( @abstr_number ) except IndexError, ValueError: print("Caught again!") @abstr_code_section py Caught!

ValueError: list.remove(x): x not in list @abstr_code_section py File "", line @abstr_number except IndexError, ValueError: ^ SyntaxError: invalid syntax @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] try: # 这里会抛出异常 `ValueError` some_list.remove( @abstr_number ) except (IndexError, ValueError), e: print("Caught again!") print(e) @abstr_code_section Caught again! list.remove(x): x not in list @abstr_code_section py File "", line @abstr_number except (IndexError, ValueError), e: ^ IndentationError: unindent does not match any outer indentation level @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] try: some_list.remove( @abstr_number )

except (IndexError, ValueError) as e: print("Caught again!") print(e) @abstr_code_section Caught again! list.remove(x): x not in list @abstr_code_section py a = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b = a a = a + [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py

> > > a [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b = a a += [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a = @abstr_number def some_func(): return a

def another_func(): a += @abstr_number return a @abstr_code_section py

> > > some_func() @abstr_number another_func() UnboundLocalError: local variable 'a' referenced before assignment @abstr_code_section py def another_func() global a a += @abstr_number return a @abstr_code_section py another_func() @abstr_number @abstr_code_section py (False == False) in [False] # 可以理解 False False == (False in [False]) # 可以理解 False False == False in [False] # 为毛? True
>>> 
>>> True is False == False False False is False is False True
>>> 
>>> @abstr_number > @abstr_number < @abstr_number True ( @abstr_number > @abstr_number ) < @abstr_number False @abstr_number > ( @abstr_number < @abstr_number ) False @abstr_code_section py int(True) @abstr_number True + @abstr_number # 与这个例子无关，只是好玩 @abstr_number @abstr_code_section py x = @abstr_number class SomeClass: x = @abstr_number y = (x for i in range( @abstr_number )) @abstr_code_section py list(SomeClass.y)[ @abstr_number ] @abstr_number @abstr_code_section py x = @abstr_number class SomeClass: x = @abstr_number y = [x for i in range( @abstr_number )] @abstr_code_section py SomeClass.y[ @abstr_number ] @abstr_number @abstr_code_section py SomeClass.y[ @abstr_number ] @abstr_number @abstr_code_section py x, y = ( @abstr_number , @abstr_number ) if True else None, None @abstr_code_section x, y # 期望的结果是 ( @abstr_number , @abstr_number ) (( @abstr_number , @abstr_number ), None) @abstr_code_section py t = ('one', 'two') for i in t: print(i)

t = ('one') for i in t: print(i)

t = () print(t) @abstr_code_section py one two o n e tuple() @abstr_code_section py import antigravity @abstr_code_section py from goto import goto, label for i in range( @abstr_number ): for j in range( @abstr_number ): for k in range( @abstr_number ): print("I'm trapped, please rescue!") if k == @abstr_number : goto .breakout # 从多重循环中跳出 label .breakout print("Freedom!") @abstr_code_section py I'm trapped, please rescue! I'm trapped, please rescue! Freedom! @abstr_code_section py from __future__ import braces @abstr_code_section py File "some_file.py", line @abstr_number from __future__ import braces SyntaxError: not a chance @abstr_code_section py

> > > from __future__ import barry_as_FLUFL "Ruby" != "Python" # 这里没什么疑问 File "some_file.py", line @abstr_number "Ruby" != "Python" ^ SyntaxError: invalid syntax
>>> 
>>> "Ruby" <> "Python" True @abstr_code_section py import this @abstr_code_section The Zen of Python, by Tim Peters

Beautiful is better than ugly. 优美胜于丑陋（Python 以编写优美的代码为目标） Explicit is better than implicit. 明了胜于晦涩（优美的代码应当是明了的，命名规范，风格相似） Simple is better than complex. 简洁胜于复杂（优美的代码应当是简洁的，不要有复杂的内部实现） Complex is better than complicated. 复杂胜于凌乱（如果复杂不可避免，那代码间也不能有难懂的关系，要保持接口简洁） Flat is better than nested. 扁平胜于嵌套（优美的代码应当是扁平的，不能有太多的嵌套） Sparse is better than dense. 间隔胜于紧凑（优美的代码有适当的间隔，不要奢望一行代码解决问题） Readability counts. 可读性很重要（优美的代码一定是可读的） Special cases aren't special enough to break the rules. 没有特例特殊到需要违背这些规则（这些规则至高无上） Although practicality beats purity. 尽管我们更倾向于实用性 Errors should never pass silently. 不要安静的包容所有错误 Unless explicitly silenced. 除非你确定需要这样做（精准地捕获异常，不写 except:pass 风格的代码） In the face of ambiguity, refuse the temptation to guess. 拒绝诱惑你去猜测的暧昧事物 There should be one-- and preferably only one --obvious way to do it. 而是尽量找一种，最好是唯一一种明显的解决方案（如果不确定，就用穷举法） Although that way may not be obvious at first unless you're Dutch. 虽然这并不容易，因为你不是 Python 之父（这里的 Dutch 是指 Guido ） Now is better than never. 现在行动好过永远不行动 Although never is often better than _right_ now. 尽管不行动要好过鲁莽行动 If the implementation is hard to explain, it's a bad idea. 如果你无法向人描述你的方案，那肯定不是一个好方案； If the implementation is easy to explain, it may be a good idea. 如果你能轻松向人描述你的方案，那也许会是一个好方案（方案测评标准） Namespaces are one honking great idea -- let's do more of those! 命名空间是一种绝妙的理念，我们应当多加利用（倡导与号召） @abstr_code_section py

> > > love = this this is love True love is True False love is False False love is not True or False True love is not True or False; love is love # 爱是难言的 True @abstr_code_section py def does_exists_num(l, to_find): for num in l: if num == to_find: print("Exists!") break else: print("Does not exist") @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] does_exists_num(some_list, @abstr_number ) Exists! does_exists_num(some_list, - @abstr_number ) Does not exist @abstr_code_section py try: pass except: print("Exception occurred!!!") else: print("Try block executed successfully...") @abstr_code_section py Try block executed successfully... @abstr_code_section py infinity = float('infinity') hash(infinity) @abstr_number hash(float('-inf')) \- @abstr_number @abstr_code_section py class Yo(object): def __init__(self): self.__honey = True self.bitch = True @abstr_code_section py Yo().bitch True Yo().__honey AttributeError: 'Yo' object has no attribute '__honey' Yo()._Yo__honey True @abstr_code_section py
>>> 
>>> # 用 "+" 连接三个字符串:
>>> 
>>> timeit.timeit("s @abstr_number = s @abstr_number + s @abstr_number + s @abstr_number ", setup="s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ", number= @abstr_number ) @abstr_number . @abstr_number 
>>> 
>>> # 用 "+=" 连接三个字符串:
>>> 
>>> timeit.timeit("s @abstr_number += s @abstr_number + s @abstr_number ", setup="s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ", number= @abstr_number ) @abstr_number . @abstr_number @abstr_code_section py def add_string_with_plus(iters): s = "" for i in range(iters): s += "xyz" assert len(s) == @abstr_number *iters

def add_bytes_with_plus(iters): s = b"" for i in range(iters): s += b"xyz" assert len(s) == @abstr_number *iters

def add_string_with_format(iters): fs = "{}" _iters s = fs.format(_ (["xyz"]*iters)) assert len(s) == @abstr_number *iters

def add_string_with_join(iters): l = [] for i in range(iters): l.append("xyz") s = "".join(l) assert len(s) == @abstr_number *iters

def convert_list_to_string(l, iters): s = "".join(l) assert len(s) == @abstr_number *iters @abstr_code_section py

> > > timeit(add_string_with_plus( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop timeit(add_bytes_with_plus( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop timeit(add_string_with_format( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop timeit(add_string_with_join( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop l = ["xyz"]* @abstr_number timeit(convert_list_to_string(l, @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop @abstr_code_section py timeit(add_string_with_plus( @abstr_number )) # 执行时间线性增加 @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop timeit(add_bytes_with_plus( @abstr_number )) # 二次增加 @abstr_number loops, best of @abstr_number : @abstr_number ms per loop timeit(add_string_with_format( @abstr_number )) # 线性增加 @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop timeit(add_string_with_join( @abstr_number )) # 线性增加 @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop l = ["xyz"]* @abstr_number timeit(convert_list_to_string(l, @abstr_number )) # 线性增加 @abstr_number loops, best of @abstr_number : @abstr_number µs per loop @abstr_code_section py def add_string_with_plus(iters): s = "" for i in range(iters): s = s + "x" + "y" + "z" assert len(s) == @abstr_number *iters
>>> 
>>> timeit(add_string_with_plus( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop timeit(add_string_with_plus( @abstr_number )) # 执行时间二次增加 @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number s per loop @abstr_code_section py a = float('inf') b = float('nan') c = float('-iNf') # 这些字符串不区分大小写 d = float('nan') @abstr_code_section py a inf b nan c -inf float('some_other_string') ValueError: could not convert string to float: some_other_string a == -c #inf==inf True None == None # None==None True b == d #但是 nan!=nan False @abstr_number /a @abstr_number . @abstr_number a/a nan @abstr_number + b nan @abstr_code_section py a = @abstr_number a @abstr_number ++a @abstr_number \--a @abstr_number @abstr_code_section py import dis exec(""" def f(): """ + """ """.join(["X"+str(x)+"=" + str(x) for x in range( @abstr_number )]))
    
    
     f()
    
     print(dis.dis(f))
      @abstr_code_section py
    

> > > some_list = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] some_list[ @abstr_number :] [] @abstr_code_section py def count(s, sub): result = @abstr_number for i in range(len(s) + @abstr_number - len(sub)): result += (s[i:i + len(sub)] == sub) return result ``` 这个行为是由于空子串(`''`)与原始字符串中长度为 @abstr_number 的切片相匹配导致的.

* * *

# Contributing/贡献

欢迎各种补丁! 详情请看 @abstr_hyperlink .(译: 这是给原库提贡献的要求模版)

你可以通过新建 @abstr_hyperlink 或者在上 @abstr_hyperlink 与我们进行讨论.

(译: 如果你想对这个翻译项目提供帮助, 请看 @abstr_hyperlink )

# Acknowledgements/致谢

这个系列最初的想法和设计灵感来自于 Denys Dovhan 的项目 @abstr_hyperlink . 社区的强大支持让它成长为现在的模样.

#### Some nice Links!/一些不错的资源

  * https://www.youtube.com/watch?v=sH @abstr_number XF @abstr_number pKKmk
  * https://www.reddit.com/r/Python/comments/ @abstr_number cu @abstr_number ej/what_are_some_wtf_things_about_python
  * https://sopython.com/wiki/Common_Gotchas_In_Python
  * https://stackoverflow.com/questions/ @abstr_number /python- @abstr_number -x-gotchas-and-landmines
  * https://stackoverflow.com/questions/ @abstr_number /common-pitfalls-in-python
  * https://www.python.org/doc/humor/
  * https://www.codementor.io/satwikkansal/python-practices-for-efficient-code-performance-memory-and-usability-aze @abstr_number oiq @abstr_number 



# 🎓 License/许可

@abstr_hyperlink 

© @abstr_hyperlink 

## Help/帮助

如果您有任何想法或建议，欢迎分享.

## Surprise your geeky pythonist friends?/想给你的极客朋友一个惊喜?

您可以使用这些快链向 Twitter 和 Linkedin 上的朋友推荐 wtfpython,

@abstr_hyperlink | @abstr_hyperlink 

## Need a pdf version?/需要来一份pdf版的?

我收到一些想要pdf版本的需求. 你可以快速在 @abstr_hyperlink 获得.

## Follow Commit/追踪Commit

这是中文版 fork 时所处的原库 Commit, 当原库更新时我会跟随更新.

@abstr_hyperlink 

## @abstr_number .icu

@abstr_hyperlink 
