@abstr_image 

What the f*ck Python! 🐍

An interesting collection of surprising snippets and lesser-known Python features.

@abstr_hyperlink 

Translations: @abstr_hyperlink 

Python, being a beautifully designed high-level and interpreter-based programming language, provides us with many features for the programmer's comfort. But sometimes, the outcomes of a Python snippet may not seem obvious to a regular user at first sight.

Here is a fun project to collect such tricky & counter-intuitive examples and lesser-known features in Python, attempting to discuss what exactly is happening under the hood!

While some of the examples you see below may not be WTFs in the truest sense, but they'll reveal some of the interesting parts of Python that you might be unaware of. I find it a nice way to learn the internals of a programming language, and I think you'll find them interesting as well!

If you're an experienced Python programmer, you can take it as a challenge to get most of them right in first attempt. You may be already familiar with some of these examples, and I might be able to revive sweet old memories of yours being bitten by these gotchas :sweat_smile:

PS: If you're a returning reader, you can learn about the new modifications @abstr_hyperlink .

So, here we go...

# Table of Contents

  * Structure of the Examples
  * Usage
  * 👀 Examples 
    * Section: Strain your brain!
    * ▶ Strings can be tricky sometimes *
    * ▶ Time for some hash brownies!
    * ▶ Return return everywhere!
    * ▶ Deep down, we're all the same. *
    * ▶ For what?
    * ▶ Evaluation time discrepancy
    * ▶ is is not what it is!
    * ▶ A tic-tac-toe where X wins in the first attempt!
    * ▶ The sticky output function
    * ▶ is not ... is not is (not ...)
    * ▶ The surprising comma
    * ▶ Backslashes at the end of string
    * ▶ not knot!
    * ▶ Half triple-quoted strings
    * ▶ Midnight time doesn't exist?
    * ▶ What's wrong with booleans?
    * ▶ Class attributes and instance attributes
    * ▶ yielding None
    * ▶ Mutating the immutable!
    * ▶ The disappearing variable from outer scope
    * ▶ When True is actually False
    * ▶ From filled to None in one instruction...
    * ▶ Subclass relationships *
    * ▶ The mysterious key type conversion *
    * ▶ Let's see if you can guess this?
    * Section: Appearances are deceptive!
    * ▶ Skipping lines?
    * ▶ Teleportation *
    * ▶ Well, something is fishy...
    * Section: Watch out for the landmines!
    * ▶ Modifying a dictionary while iterating over it
    * ▶ Stubborn del operator *
    * ▶ Deleting a list item while iterating
    * ▶ Loop variables leaking out!
    * ▶ Beware of default mutable arguments!
    * ▶ Catching the Exceptions
    * ▶ Same operands, different story!
    * ▶ The out of scope variable
    * ▶ Be careful with chained operations
    * ▶ Name resolution ignoring class scope
    * ▶ Needle in a Haystack
    * Section: The Hidden treasures!
    * ▶ Okay Python, Can you make me fly? *
    * ▶ goto, but why? *
    * ▶ Brace yourself! *
    * ▶ Let's meet Friendly Language Uncle For Life *
    * ▶ Even Python understands that love is complicated *
    * ▶ Yes, it exists!
    * ▶ Inpinity *
    * ▶ Mangling time! *
    * Section: Miscellaneous
    * ▶ += is faster
    * ▶ Let's make a giant string!
    * ▶ Explicit typecast of strings
    * ▶ Minor Ones
  * Contributing
  * Acknowledgements
  * 🎓 License 
    * Help
    * Want to share wtfpython with friends?
    * Need a pdf version?



# Structure of the Examples

All the examples are structured like below:

> ### ▶ Some fancy Title *
> 
> The asterisk at the end of the title indicates the example was not present in the first release and has been recently added.
> 
> @abstr_code_section sh $ npm install -g wtfpython @abstr_code_section sh $ pip install wtfpython -U @abstr_code_section py
>
>> > a = "some_string" id(a) @abstr_number id("some" + "_" + "string") # Notice that both the ids are same. @abstr_number @abstr_code_section py a = "wtf" b = "wtf" a is b True
>>> 
>>> a = "wtf!" b = "wtf!" a is b False
>>> 
>>> a, b = "wtf!", "wtf!" a is b True @abstr_code_section py 'a' * @abstr_number is 'aaaaaaaaaaaaaaaaaaaa' True 'a' * @abstr_number is 'aaaaaaaaaaaaaaaaaaaaa' False @abstr_code_section py some_dict = {} some_dict[ @abstr_number . @abstr_number ] = "Ruby" some_dict[ @abstr_number . @abstr_number ] = "JavaScript" some_dict[ @abstr_number ] = "Python" @abstr_code_section py some_dict[ @abstr_number . @abstr_number ] "Ruby" some_dict[ @abstr_number . @abstr_number ] "Python" some_dict[ @abstr_number ] "Python" @abstr_code_section py @abstr_number == @abstr_number . @abstr_number True hash( @abstr_number ) == hash( @abstr_number . @abstr_number ) True @abstr_code_section py def some_func(): try: return 'from_try' finally: return 'from_finally' @abstr_code_section py some_func() 'from_finally' @abstr_code_section py class WTF: pass @abstr_code_section py WTF() == WTF() # two different instances can't be equal False WTF() is WTF() # identities are also different False hash(WTF()) == hash(WTF()) # hashes _should_ be different as well True id(WTF()) == id(WTF()) True @abstr_code_section py class WTF(object): def __init__(self): print("I") def __del__(self): print("D") @abstr_code_section py WTF() is WTF() I I D D False id(WTF()) == id(WTF()) I D I D True @abstr_code_section py some_string = "wtf" some_dict = {} for i, some_dict[i] in enumerate(some_string): pass @abstr_code_section py some_dict # An indexed dict is created. { @abstr_number : 'w', @abstr_number : 't', @abstr_number : 'f'} @abstr_code_section for_stmt: 'for' exprlist 'in' testlist ':' suite ['else' ':' suite] @abstr_code_section py for i in range( @abstr_number ): print(i) i = @abstr_number @abstr_code_section @abstr_number @abstr_number @abstr_number @abstr_number @abstr_code_section py i, some_dict[i] = ( @abstr_number , 'w') i, some_dict[i] = ( @abstr_number , 't') i, some_dict[i] = ( @abstr_number , 'f') some_dict @abstr_code_section py array = [ @abstr_number , @abstr_number , @abstr_number ] g = (x for x in array if array.count(x) > @abstr_number ) array = [ @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py print(list(g)) [ @abstr_number ] @abstr_code_section py array_ @abstr_number = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] g @abstr_number = (x for x in array_ @abstr_number ) array_ @abstr_number = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ]

array_ @abstr_number = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] g @abstr_number = (x for x in array_ @abstr_number ) array_ @abstr_number [:] = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py

> > > print(list(g @abstr_number )) [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ]
>>> 
>>> print(list(g @abstr_number )) [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a = @abstr_number b = @abstr_number a is b True
>>> 
>>> a = @abstr_number b = @abstr_number a is b False
>>> 
>>> a = @abstr_number ; b = @abstr_number a is b True @abstr_code_section py [] == [] True [] is [] # These are two empty lists at two different memory locations. False @abstr_code_section py id( @abstr_number ) @abstr_number a = @abstr_number b = @abstr_number id(a) @abstr_number id(b) @abstr_number id( @abstr_number ) @abstr_number x = @abstr_number y = @abstr_number id(x) @abstr_number id(y) @abstr_number @abstr_code_section py a, b = @abstr_number , @abstr_number id(a) @abstr_number id(b) @abstr_number a = @abstr_number b = @abstr_number id(a) @abstr_number id(b) @abstr_number @abstr_code_section py
>>> 
>>> # Let's initialize a row

row = [""]* @abstr_number #row i['', '', '']

# Let's make a board

board = [row]* @abstr_number @abstr_code_section py

> > > board [['', '', ''], ['', '', ''], ['', '', '']] board[ @abstr_number ] ['', '', ''] board[ @abstr_number ][ @abstr_number ] '' board[ @abstr_number ][ @abstr_number ] = "X" board [['X', '', ''], ['X', '', ''], ['X', '', '']] @abstr_code_section py board = [['']* @abstr_number for _ in range( @abstr_number )] board[ @abstr_number ][ @abstr_number ] = "X" board [['X', '', ''], ['', '', ''], ['', '', '']] @abstr_code_section py funcs = [] results = [] for x in range( @abstr_number ): def some_func(): return x funcs.append(some_func) results.append(some_func()) # note the function call here

funcs_results = [func() for func in funcs] @abstr_code_section py

> > > results [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] funcs_results [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py powers_of_x = [lambda x: x _*i for i in range( @abstr_number )] [f( @abstr_number ) for f in powers_of_x] [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py funcs = [] for x in range( @abstr_number ): def some_func(x=x): return x funcs.append(some_func) @abstr_code_section py funcs_results = [func() for func in funcs] funcs_results [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py 'something' is not None True 'something' is (not None) False @abstr_code_section py def f(x, y,): ... print(x, y) ... def g(x= @abstr_number , y= @abstr_number ,): ... print(x, y) ... def h(x, *_ kwargs,): File "", line @abstr_number def h(x, _*kwargs,): ^ SyntaxError: invalid syntax def h(_ args,): File "", line @abstr_number def h(*args,): ^ SyntaxError: invalid syntax @abstr_code_section print("\ C:\") \ C:\ print(r"\ C:") \ C: print(r"\ C:\")
    
    
    File "<stdin>", line  @abstr_number 
      print(r"\ C:\")
                     ^
    

SyntaxError: EOL while scanning string literal @abstr_code_section py

> > > print(repr(r"wt\"f")) 'wt\"f' @abstr_code_section py x = True y = False @abstr_code_section py not x == y True x == not y File "", line @abstr_number x == not y ^ SyntaxError: invalid syntax @abstr_code_section py print('wtfpython''') wtfpython print("wtfpython""") wtfpython
>>> 
>>> # The following statements raise `SyntaxError`
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

# A simple example to count the number of boolean and

# integers in an iterable of mixed data types.

mixed_list = [False, @abstr_number . @abstr_number , "some_string", @abstr_number , True, [], False] integers_found_so_far = @abstr_number booleans_found_so_far = @abstr_number 

for item in mixed_list: if isinstance(item, int): integers_found_so_far += @abstr_number elif isinstance(item, bool): booleans_found_so_far += @abstr_number @abstr_code_section py

> > > integers_found_so_far @abstr_number booleans_found_so_far @abstr_number @abstr_code_section py another_dict = {} another_dict[True] = "JavaScript" another_dict[ @abstr_number ] = "Ruby" another_dict[ @abstr_number . @abstr_number ] = "Python" @abstr_code_section py another_dict[True] "Python" @abstr_code_section py some_bool = True "wtf" _some_bool 'wtf' some_bool = False "wtf"_ some_bool '' @abstr_code_section py isinstance(True, int) True isinstance(False, int) True @abstr_code_section py True == @abstr_number == @abstr_number . @abstr_number and False == @abstr_number == @abstr_number . @abstr_number True @abstr_code_section py class A: x = @abstr_number 

class B(A): pass

class C(A): pass @abstr_code_section py

> > > A.x, B.x, C.x ( @abstr_number , @abstr_number , @abstr_number ) B.x = @abstr_number A.x, B.x, C.x ( @abstr_number , @abstr_number , @abstr_number ) A.x = @abstr_number A.x, B.x, C.x ( @abstr_number , @abstr_number , @abstr_number ) a = A() a.x, A.x ( @abstr_number , @abstr_number ) a.x += @abstr_number a.x, A.x ( @abstr_number , @abstr_number ) @abstr_code_section py class SomeClass: some_var = @abstr_number some_list = [ @abstr_number ] another_list = [ @abstr_number ] def __init__(self, x): self.some_var = x + @abstr_number self.some_list = self.some_list + [x] self.another_list += [x] @abstr_code_section py some_obj = SomeClass( @abstr_number ) some_obj.some_list [ @abstr_number , @abstr_number ] some_obj.another_list [ @abstr_number , @abstr_number ] another_obj = SomeClass( @abstr_number ) another_obj.some_list [ @abstr_number , @abstr_number ] another_obj.another_list [ @abstr_number , @abstr_number , @abstr_number ] another_obj.another_list is SomeClass.another_list True another_obj.another_list is some_obj.another_list True @abstr_code_section py some_iterable = ('a', 'b')

def some_func(val): return "something" @abstr_code_section py

> > > [x for x in some_iterable] ['a', 'b'] [(yield x) for x in some_iterable]  at @abstr_number x @abstr_number f @abstr_number b @abstr_number a @abstr_number ad @abstr_number > list([(yield x) for x in some_iterable]) ['a', 'b'] list((yield x) for x in some_iterable) ['a', None, 'b', None] list(some_func((yield x)) for x in some_iterable) ['a', 'something', 'b', 'something'] @abstr_code_section py some_tuple = ("A", "tuple", "with", "values") another_tuple = ([ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ]) @abstr_code_section py some_tuple[ @abstr_number ] = "change this" TypeError: 'tuple' object does not support item assignment another_tuple[ @abstr_number ].append( @abstr_number ) #This throws no error another_tuple ([ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number , @abstr_number ]) another_tuple[ @abstr_number ] += [ @abstr_number , @abstr_number ] TypeError: 'tuple' object does not support item assignment another_tuple ([ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number ], [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ]) @abstr_code_section py e = @abstr_number try: raise Exception() except Exception as e: pass @abstr_code_section py print(e)
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
    # Nothing is printed!
     @abstr_code_section py
    

True = False if True == False: print("I've lost faith in truth!") @abstr_code_section I've lost faith in truth! @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] some_dict = { "key_ @abstr_number ": @abstr_number , "key_ @abstr_number ": @abstr_number , "key_ @abstr_number ": @abstr_number }

some_list = some_list.append( @abstr_number ) some_dict = some_dict.update({"key_ @abstr_number ": @abstr_number }) @abstr_code_section py

> > > print(some_list) None print(some_dict) None @abstr_code_section py from collections import Hashable issubclass(list, object) True issubclass(object, Hashable) True issubclass(list, Hashable) False @abstr_code_section py class SomeClass(str): pass

some_dict = {'s': @abstr_number } @abstr_code_section py

> > > type(list(some_dict.keys())[ @abstr_number ]) str s = SomeClass('s') some_dict[s] = @abstr_number some_dict # expected: Two different keys-value pairs {'s': @abstr_number } type(list(some_dict.keys())[ @abstr_number ]) str @abstr_code_section py class SomeClass(str): def __eq__(self, other): return ( type(self) is SomeClass and type(other) is SomeClass and super().__eq__(other) )
    
    
    # When we define a custom __eq__, Python stops automatically inheriting the
    # __hash__ method, so we need to define it as well
    __hash__ = str.__hash__
    

some_dict = {'s': @abstr_number } @abstr_code_section py

> > > s = SomeClass('s') some_dict[s] = @abstr_number some_dict {'s': @abstr_number , 's': @abstr_number } keys = list(some_dict.keys()) type(keys[ @abstr_number ]), type(keys[ @abstr_number ]) (__main__.SomeClass, str) @abstr_code_section py a, b = a[b] = {}, @abstr_number @abstr_code_section py a { @abstr_number : ({...}, @abstr_number )} @abstr_code_section (target_list "=")+ (expression_list | yield_expression) @abstr_code_section py some_list = some_list[ @abstr_number ] = [ @abstr_number ] some_list [[...]] some_list[ @abstr_number ] [[...]] some_list is some_list[ @abstr_number ] True some_list[ @abstr_number ][ @abstr_number ][ @abstr_number ][ @abstr_number ][ @abstr_number ][ @abstr_number ] == some_list True @abstr_code_section py a, b = {}, @abstr_number a[b] = a, b @abstr_code_section py a[b][ @abstr_number ] is a True @abstr_code_section py value = @abstr_number valuе = @abstr_number value @abstr_number @abstr_code_section py ord('е') # cyrillic 'e' (Ye) @abstr_number ord('e') # latin 'e', as used in English and typed using standard keyboard @abstr_number 'е' == 'e' False
>>> 
>>> value = @abstr_number # latin e valuе = @abstr_number # cyrillic 'e', Python @abstr_number .x interpreter would raise a `SyntaxError` here value @abstr_number @abstr_code_section py import numpy as np

def energy_send(x): # Initializing a numpy array np.array([float(x)])

def energy_receive(): # Return an empty numpy array return np.empty((), dtype=np.float).tolist() @abstr_code_section py

> > > energy_send( @abstr_number . @abstr_number ) energy_receive() @abstr_number . @abstr_number @abstr_code_section py def square(x): """ A simple function to calculate the square of a number by addition. """ sum_so_far = @abstr_number for counter in range(x): sum_so_far = sum_so_far + x return sum_so_far @abstr_code_section py square( @abstr_number ) @abstr_number @abstr_code_section py TabError: inconsistent use of tabs and spaces in indentation @abstr_code_section py x = { @abstr_number : None}

for i in x: del x[i] x[i+ @abstr_number ] = None print(i) @abstr_code_section @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_number @abstr_code_section py class SomeClass: def __del__(self): print("Deleted!") @abstr_code_section py

> > > x = SomeClass() y = x del x # this should print "Deleted!" del y Deleted! @abstr_code_section py x = SomeClass() y = x del x y # check if y exists <__main__.someclass __main__.someclass="" a="" all="" and="" at="" check="" confirm="" del="" deleted="" didn="" f="" fc="" global="" globals="" instance="" it="" let="" like="" list_="" none="" oh="" our="" previously="" print="" py="" should="" this="" variables="" x="" y=""> 

for idx, item in enumerate(list_ @abstr_number ): del item

for idx, item in enumerate(list_ @abstr_number ): list_ @abstr_number .remove(item)

for idx, item in enumerate(list_ @abstr_number [:]): list_ @abstr_number .remove(item)

for idx, item in enumerate(list_ @abstr_number ): list_ @abstr_number .pop(idx) @abstr_code_section py

> > > list_ @abstr_number [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] list_ @abstr_number [ @abstr_number , @abstr_number ] list_ @abstr_number [] list_ @abstr_number [ @abstr_number , @abstr_number ] @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] id(some_list) @abstr_number id(some_list[:]) # Notice that python creates new object for sliced list. @abstr_number @abstr_code_section py for x in range( @abstr_number ): if x == @abstr_number : print(x, ': for x inside loop') print(x, ': x in global') @abstr_code_section py @abstr_number : for x inside loop @abstr_number : x in global @abstr_code_section py
>>> 
>>> # This time let's initialize x first

x = - @abstr_number for x in range( @abstr_number ): if x == @abstr_number : print(x, ': for x inside loop') print(x, ': x in global') @abstr_code_section py @abstr_number : for x inside loop @abstr_number : x in global @abstr_code_section x = @abstr_number print([x for x in range( @abstr_number )]) print(x, ': x in global') @abstr_code_section [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] ( @abstr_number , ': x in global') @abstr_code_section [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_number : x in global @abstr_code_section py def some_func(default_arg=[]): default_arg.append("some_string") return default_arg @abstr_code_section py

> > > some_func() ['some_string'] some_func() ['some_string', 'some_string'] some_func([]) ['some_string'] some_func() ['some_string', 'some_string', 'some_string'] @abstr_code_section py def some_func(default_arg=[]): default_arg.append("some_string") return default_arg @abstr_code_section py some_func.__defaults__ #This will show the default argument values for the function ([],) some_func() some_func.__defaults__ (['some_string'],) some_func() some_func.__defaults__ (['some_string', 'some_string'],) some_func([]) some_func.__defaults__ (['some_string', 'some_string'],) @abstr_code_section py def some_func(default_arg=None): if not default_arg: default_arg = [] default_arg.append("some_string") return default_arg @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] try: # This should raise an `IndexError` print(some_list[ @abstr_number ]) except IndexError, ValueError: print("Caught!")

try: # This should raise a `ValueError` some_list.remove( @abstr_number ) except IndexError, ValueError: print("Caught again!") @abstr_code_section py Caught!

ValueError: list.remove(x): x not in list @abstr_code_section py File "", line @abstr_number except IndexError, ValueError: ^ SyntaxError: invalid syntax @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] try: # This should raise a `ValueError` some_list.remove( @abstr_number ) except (IndexError, ValueError), e: print("Caught again!") print(e) @abstr_code_section Caught again! list.remove(x): x not in list @abstr_code_section py File "", line @abstr_number except (IndexError, ValueError), e: ^ IndentationError: unindent does not match any outer indentation level @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number ] try: some_list.remove( @abstr_number )

except (IndexError, ValueError) as e: print("Caught again!") print(e) @abstr_code_section Caught again! list.remove(x): x not in list @abstr_code_section py a = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b = a a = a + [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py

> > > a [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b = a a += [ @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] b [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] @abstr_code_section py a = @abstr_number def some_func(): return a

def another_func(): a += @abstr_number return a @abstr_code_section py

> > > some_func() @abstr_number another_func() UnboundLocalError: local variable 'a' referenced before assignment @abstr_code_section py def another_func() global a a += @abstr_number return a @abstr_code_section py another_func() @abstr_number @abstr_code_section py (False == False) in [False] # makes sense False False == (False in [False]) # makes sense False False == False in [False] # now what? True
>>> 
>>> True is False == False False False is False is False True
>>> 
>>> @abstr_number > @abstr_number < @abstr_number True ( @abstr_number > @abstr_number ) < @abstr_number False @abstr_number > ( @abstr_number < @abstr_number ) False @abstr_code_section py int(True) @abstr_number True + @abstr_number #not relevant for this example, but just for fun @abstr_number @abstr_code_section py x = @abstr_number class SomeClass: x = @abstr_number y = (x for i in range( @abstr_number )) @abstr_code_section py list(SomeClass.y)[ @abstr_number ] @abstr_number @abstr_code_section py x = @abstr_number class SomeClass: x = @abstr_number y = [x for i in range( @abstr_number )] @abstr_code_section py SomeClass.y[ @abstr_number ] @abstr_number @abstr_code_section py SomeClass.y[ @abstr_number ] @abstr_number @abstr_code_section py x, y = ( @abstr_number , @abstr_number ) if True else None, None @abstr_code_section x, y # expected ( @abstr_number , @abstr_number ) (( @abstr_number , @abstr_number ), None) @abstr_code_section py t = ('one', 'two') for i in t: print(i)

t = ('one') for i in t: print(i)

t = () print(t) @abstr_code_section py one two o n e tuple() @abstr_code_section py import antigravity @abstr_code_section py from goto import goto, label for i in range( @abstr_number ): for j in range( @abstr_number ): for k in range( @abstr_number ): print("I'm trapped, please rescue!") if k == @abstr_number : goto .breakout # breaking out from a deeply nested loop label .breakout print("Freedom!") @abstr_code_section py I'm trapped, please rescue! I'm trapped, please rescue! Freedom! @abstr_code_section py from __future__ import braces @abstr_code_section py File "some_file.py", line @abstr_number from __future__ import braces SyntaxError: not a chance @abstr_code_section py

> > > from __future__ import barry_as_FLUFL "Ruby" != "Python" # there's no doubt about it File "some_file.py", line @abstr_number "Ruby" != "Python" ^ SyntaxError: invalid syntax
>>> 
>>> "Ruby" <> "Python" True @abstr_code_section py import this @abstr_code_section The Zen of Python, by Tim Peters

Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated. Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules. Although practicality beats purity. Errors should never pass silently. Unless explicitly silenced. In the face of ambiguity, refuse the temptation to guess. There should be one-- and preferably only one --obvious way to do it. Although that way may not be obvious at first unless you're Dutch. Now is better than never. Although never is often better than _right_ now. If the implementation is hard to explain, it's a bad idea. If the implementation is easy to explain, it may be a good idea. Namespaces are one honking great idea -- let's do more of those! @abstr_code_section py

> > > love = this this is love True love is True False love is False False love is not True or False True love is not True or False; love is love # Love is complicated True @abstr_code_section py def does_exists_num(l, to_find): for num in l: if num == to_find: print("Exists!") break else: print("Does not exist") @abstr_code_section py some_list = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] does_exists_num(some_list, @abstr_number ) Exists! does_exists_num(some_list, - @abstr_number ) Does not exist @abstr_code_section py try: pass except: print("Exception occurred!!!") else: print("Try block executed successfully...") @abstr_code_section py Try block executed successfully... @abstr_code_section py infinity = float('infinity') hash(infinity) @abstr_number hash(float('-inf')) \- @abstr_number @abstr_code_section py class Yo(object): def __init__(self): self.__honey = True self.bitch = True @abstr_code_section py Yo().bitch True Yo().__honey AttributeError: 'Yo' object has no attribute '__honey' Yo()._Yo__honey True @abstr_code_section py
>>> 
>>> # using "+", three strings:
>>> 
>>> timeit.timeit("s @abstr_number = s @abstr_number + s @abstr_number + s @abstr_number ", setup="s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ", number= @abstr_number ) @abstr_number . @abstr_number 
>>> 
>>> # using "+=", three strings:
>>> 
>>> timeit.timeit("s @abstr_number += s @abstr_number + s @abstr_number ", setup="s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ; s @abstr_number = ' ' * @abstr_number ", number= @abstr_number ) @abstr_number . @abstr_number @abstr_code_section py def add_string_with_plus(iters): s = "" for i in range(iters): s += "xyz" assert len(s) == @abstr_number *iters

def add_bytes_with_plus(iters): s = b"" for i in range(iters): s += b"xyz" assert len(s) == @abstr_number *iters

def add_string_with_format(iters): fs = "{}" _iters s = fs.format(_ (["xyz"]*iters)) assert len(s) == @abstr_number *iters

def add_string_with_join(iters): l = [] for i in range(iters): l.append("xyz") s = "".join(l) assert len(s) == @abstr_number *iters

def convert_list_to_string(l, iters): s = "".join(l) assert len(s) == @abstr_number *iters @abstr_code_section py

> > > timeit(add_string_with_plus( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop timeit(add_bytes_with_plus( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop timeit(add_string_with_format( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop timeit(add_string_with_join( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop l = ["xyz"]* @abstr_number timeit(convert_list_to_string(l, @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number µs per loop @abstr_code_section py timeit(add_string_with_plus( @abstr_number )) # Linear increase in execution time @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop timeit(add_bytes_with_plus( @abstr_number )) # Quadratic increase @abstr_number loops, best of @abstr_number : @abstr_number ms per loop timeit(add_string_with_format( @abstr_number )) # Linear increase @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop timeit(add_string_with_join( @abstr_number )) # Linear increase @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop l = ["xyz"]* @abstr_number timeit(convert_list_to_string(l, @abstr_number )) # Linear increase @abstr_number loops, best of @abstr_number : @abstr_number µs per loop @abstr_code_section py def add_string_with_plus(iters): s = "" for i in range(iters): s = s + "x" + "y" + "z" assert len(s) == @abstr_number *iters
>>> 
>>> timeit(add_string_with_plus( @abstr_number )) @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number ms per loop timeit(add_string_with_plus( @abstr_number )) # Quadratic increase in execution time @abstr_number loops, best of @abstr_number : @abstr_number . @abstr_number s per loop @abstr_code_section py a = float('inf') b = float('nan') c = float('-iNf') #These strings are case-insensitive d = float('nan') @abstr_code_section py a inf b nan c -inf float('some_other_string') ValueError: could not convert string to float: some_other_string a == -c #inf==inf True None == None # None==None True b == d #but nan!=nan False @abstr_number /a @abstr_number . @abstr_number a/a nan @abstr_number + b nan @abstr_code_section py a = @abstr_number a @abstr_number ++a @abstr_number \--a @abstr_number @abstr_code_section py import dis exec(""" def f(): """ + """ """.join(["X"+str(x)+"=" + str(x) for x in range( @abstr_number )]))
    
    
     f()
    
     print(dis.dis(f))
      @abstr_code_section py
    

> > > some_list = [ @abstr_number , @abstr_number , @abstr_number , @abstr_number , @abstr_number ] some_list[ @abstr_number :] [] @abstr_code_section py def count(s, sub): result = @abstr_number for i in range(len(s) + @abstr_number - len(sub)): result += (s[i:i + len(sub)] == sub) return result ``` The behavior is due to the matching of empty substring(`''`) with slices of length @abstr_number in the original string.

* * *

# Contributing

All patches are Welcome! Please see CONTRIBUTING.md for further details.

For discussions, you can either create a new @abstr_hyperlink or ping on the Gitter @abstr_hyperlink 

# Acknowledgements

The idea and design for this collection were initially inspired by Denys Dovhan's awesome project @abstr_hyperlink . The overwhelming support by the community gave it the shape it is in right now.

#### Some nice Links!

  * https://www.youtube.com/watch?v=sH @abstr_number XF @abstr_number pKKmk
  * https://www.reddit.com/r/Python/comments/ @abstr_number cu @abstr_number ej/what_are_some_wtf_things_about_python
  * https://sopython.com/wiki/Common_Gotchas_In_Python
  * https://stackoverflow.com/questions/ @abstr_number /python- @abstr_number -x-gotchas-and-landmines
  * https://stackoverflow.com/questions/ @abstr_number /common-pitfalls-in-python
  * https://www.python.org/doc/humor/
  * https://www.codementor.io/satwikkansal/python-practices-for-efficient-code-performance-memory-and-usability-aze @abstr_number oiq @abstr_number 



# 🎓 License

@abstr_hyperlink 

© @abstr_hyperlink 

## Help

If you have any wtfs, ideas or suggestions, please share.

## Surprise your geeky pythonist friends?

You can use these quick links to recommend wtfpython to your friends,

@abstr_hyperlink | @abstr_hyperlink 

## Need a pdf version?

I've received a few requests for the pdf version of wtfpython. You can add your details @abstr_hyperlink to get the pdf as soon as it is finished.
