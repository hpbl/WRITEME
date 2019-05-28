## `xact` is a recipe for handling transactions sensibly in Django applications on PostgreSQL.

**Note** : As of Django @abstr_number . @abstr_number , the functionality of `xact` will be merged into the Django core as the @abstr_hyperlink . Code that uses `xact` should be able to be migrated to `atomic` with just a search-and-replace. `atomic` works on databases other than PostgreSQL, is thread-safe, and has other nice features; switch to it when you can!

The goals are:

  * Database operations that do not modify the database aren't wrapped in a transactions at all.
  * Database operations that modify the database are wrapped in a transactions.
  * We have a lot of fine-grained control over sections that modify the databse vs those that don't.



The bits of the recipe are:

  * Use the @abstr_hyperlink in your database configuration.
  * _Do not_ use the @abstr_hyperlink .
  * Wrap the sections of code which modify the database in the `xact()` decorator / context manager below, using it like you would the @abstr_hyperlink decorator.
  * Profit!



The quick reasons behind each step:

  * Turning on autocommit prevents @abstr_hyperlink from automatically starting a new transaction on the first database operation on each connection; this means that the transaction only starts when we want it to.
  * Similarly, the transaction middleware will set the connection state to "managed," which will defeat the autocommit option above, so we leave it out.
  * The `xact()` decorator will set up the connection so that a transaction _is_ started in the relevant block, which is what we want for database-modifying operations.



This recipe a few other nice features:

  * `xact()` operates like `commit_on_success()`, in that it will issue a rollback if an exception escapes from the block or function it is wrapping.
  * `xact()` ignores the dirty flag on the Django connection. Since we're deliberately wrapping stuff that modifies the database with it, the chance of it being dirty is near @abstr_number %, and a commit on a transaction that did not modify the database is no more expensive in PostgreSQL than a rollback. It also means you can do @abstr_hyperlink inside an `xact()` block without the @abstr_hyperlink of forgetting to call `set_dirty`.
  * Like the built-in Django transaction decorators, it can be used either as a decorator or as a context manager with the `with` statement.
  * `xact()` can be nested, giving us nested transactions! If it sees that there is already a transaction open when it starts a new block, it will use a @abstr_hyperlink to set up a nested transaction block. (PostgreSQL does not have nested transactions as such, but you can use savepoints to get @abstr_number . @abstr_number % of the way there.)
  * By not wrapping operations that do not modify the database, we get better behavior when using @abstr_hyperlink (more on that in a future post).
  * `xact()` works around an @abstr_hyperlink in Django's transaction handling on psycopg @abstr_number .



`xact()` also supports the `using` parameter for @abstr_hyperlink .

`Rollback` is a supplied exception class designed for situations in which you want to trigger an exception to cause a rollback, but do not want that exception to propagate beyond the scope of the `xact` block. `xact` will perform the rollback, then swallow the exception.

Of course, a few caveats:

  * `xact()` requires the `postgresql_psycopg @abstr_number` backend, and PostgreSQL @abstr_number . @abstr_number or higher. It's possible it can be hacked to work on other backends that support savepoints.
  * `xact()` works just the way you want if it is nested _inside_ a `commit_on_success()` block (it will properly create a savepoint insted of a new transaction). However, a `commit_on_success()` block nested inside of `xact()` will commit or rollback the entire transaction, somewhat defeating the outer `xact()`. To the extent possible, use only `xact()` in code you write.
  * Be sure you catch exceptions _outside of_ the `xact()` block; otherwise, the automatic rollback will be defeated. Allow the exception to escape the `xact()` block, and then catch it. (Of course, if the intention is to always commit and to defeat the rollback, by all means catch the exception inside the block.)



To use, just drop the source (one class definition, one function) into a file somewhere in your Django project (such as the omni-present `utils` application every Django project seems to have), and include it. 

Examples:
    
    
    from utils.transaction import xact
    
    @xact
    def my_view_function @abstr_number (request):
       # Everything here will be in a transaction.
       # It'll roll back if an exception escapes, commits otherwise.
    
    def my_view_function @abstr_number (request):
       # This stuff won't be in a transaction, so don't modify the database here.
       with xact():
          # This stuff will be, and will commit on normal completion, roll back on a exception
    
    def my_view_function @abstr_number (request):
       with xact():
          # Modify the database here (let's call it "part  @abstr_number ").
          try:
             with xact():
                # Let's call this "part  @abstr_number ."
                # This stuff will be in its own savepoint, and can commit or
                # roll back without losing the whole transaction.
          except:
             # Part  @abstr_number  will be rolled back, but part  @abstr_number  will still be available to
             # be committed or rolled back.  Of course, if an exception
             # inside the "part  @abstr_number " block is not caught, both part  @abstr_number  and
             # part  @abstr_number  will be rolled back.
    
