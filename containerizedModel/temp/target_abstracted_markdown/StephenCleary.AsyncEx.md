@abstr_image 

# AsyncEx

A helper library for async/await.

Note: This README is for AsyncEx v @abstr_number (the current version). For AsyncEx v @abstr_number , see @abstr_hyperlink .

Supports `netstandard @abstr_number . @abstr_number` (including .NET @abstr_number . @abstr_number , .NET Core @abstr_number . @abstr_number , Xamarin.iOS @abstr_number , Xamarin.Android @abstr_number , Mono @abstr_number . @abstr_number , and Universal Windows @abstr_number ).

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink 

Overview - Upgrade Guide

## Getting Started

Install the @abstr_hyperlink .

## AsyncLock

A lot of developers start using this library for `AsyncLock`, an async-compatible mutual exclusion mechanism. Using `AsyncLock` is straightforward:

```C# private readonly AsyncLock _mutex = new AsyncLock(); public async Task UseLockAsync() { // AsyncLock can be locked asynchronously using (await _mutex.LockAsync()) { // It's safe to await while the lock is held await Task.Delay(TimeSpan.FromSeconds( @abstr_number )); } } @abstr_code_section C# public async Task UseLockAsync() { // Attempt to take the lock only for @abstr_number seconds. var cts = new CancellationTokenSource(TimeSpan.FromSeconds( @abstr_number ));

// If the lock isn't available after @abstr_number seconds, this will // raise OperationCanceledException. using (await _mutex.LockAsync(cts.Token)) { await Task.Delay(TimeSpan.FromSeconds( @abstr_number )); } } @abstr_code_section C# public async Task UseLockAsync() { using (await _mutex.LockAsync()) { await Task.Delay(TimeSpan.FromSeconds( @abstr_number )); } }

public void UseLock() { using (_mutex.Lock()) { Thread.Sleep(TimeSpan.FromSeconds( @abstr_number )); } } ```

## Other Coordination Primitives

`AsyncLock` is just the beginning. The AsyncEx library contains a full suite of coordination primitives: `AsyncManualResetEvent`, `AsyncAutoResetEvent`, `AsyncConditionVariable`, `AsyncMonitor`, `AsyncSemaphore`, `AsyncCountdownEvent`, and `AsyncReaderWriterLock`.

## More Stuff

There's quite a few other helpful types; see the docs for full details

## Infrequently Asked Questions

### Older Platforms

@abstr_hyperlink supported .NET @abstr_number . @abstr_number , Windows Store @abstr_number . @abstr_number , Windows Phone Silverlight @abstr_number . @abstr_number , Windows Phone Applications @abstr_number . @abstr_number , and Silverlight @abstr_number . @abstr_number . Support for these platforms has been dropped with AsyncEx v @abstr_number .

AsyncEx v @abstr_number supported Windows Store @abstr_number . @abstr_number , Windows Phone Silverlight @abstr_number . @abstr_number , and Silverlight @abstr_number . @abstr_number . Support for these platforms has been dropped with AsyncEx v @abstr_number .
