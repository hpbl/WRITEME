# UniRx - Reactive Extensions for Unity

Created by Yoshifumi Kawai(neuecc)

@abstr_hyperlink   
@abstr_hyperlink @abstr_hyperlink 

## What is UniRx?

UniRx (Reactive Extensions for Unity) is a reimplementation of the .NET Reactive Extensions. The Official Rx implementation is great but doesn't work on Unity and has issues with iOS IL @abstr_number CPP compatibility. This library fixes those issues and adds some specific utilities for Unity. Supported platforms are PC/Mac/Android/iOS/WebGL/WindowsStore/etc and the library.

UniRx is available on the Unity Asset Store (FREE) - http://u @abstr_number d.as/content/neuecc/uni-rx-reactive-extensions-for-unity/ @abstr_number tT

Blog for update info - https://medium.com/@neuecc

Support thread on the Unity Forums: Ask me any question - http://forum.unity @abstr_number d.com/threads/ @abstr_number -UniRx-Reactive-Extensions-for-Unity

Release Notes, see @abstr_hyperlink 

UniRx is Core Library (Port of Rx) + Platform Adaptor (MainThreadScheduler/FromCoroutine/etc) + Framework (ObservableTriggers/ReactiveProeperty/etc).

> Note: async/await integration(UniRx.Async) is separated to @abstr_hyperlink after ver. @abstr_number . @abstr_number .

## Why Rx?

Ordinarily, Network operations in Unity require the use of `WWW` and `Coroutine`. That said, using `Coroutine` is not good practice for asynchronous operations for the following (and other) reasons:

@abstr_number . Coroutines can't return any values, since its return type must be IEnumerator. @abstr_number . Coroutines can't handle exceptions, because yield return statements cannot be surrounded with a try-catch construction.

This kind of lack of composability causes operations to be close-coupled, which often results in huge monolithic IEnumerators.

Rx cures that kind of "asynchronous blues". Rx is a library for composing asynchronous and event-based programs using observable collections and LINQ-style query operators. 

The game loop (every Update, OnCollisionEnter, etc), sensor data (Kinect, Leap Motion, VR Input, etc.) are all types of events. Rx represents events as reactive sequences which are both easily composable and support time-based operations by using LINQ query operators.

Unity is generally single threaded but UniRx facilitates multithreading for joins, cancels, accessing GameObjects, etc.

UniRx helps UI programming with uGUI. All UI events (clicked, valuechanged, etc) can be converted to UniRx event streams. 

Unity supports async/await from @abstr_number with C# upgrades, UniRx family prjects provides more lightweight, more powerful async/await integration with Unity. Please see @abstr_hyperlink .

## Introduction

Great introduction to Rx article: @abstr_hyperlink .

The following code implements the double click detection example from the article in UniRx:

@abstr_code_section 

This example demonstrates the following features (in only five lines!):

  * The game loop (Update) as an event stream
  * Composable event streams
  * Merging self stream
  * Easy handling of time based operations 



## Network operations

Use ObservableWWW for asynchronous network operations. Its Get/Post functions return subscribable IObservables:

@abstr_code_section 

Rx is composable and cancelable. You can also query with LINQ expressions:

@abstr_code_section 

Use Observable.WhenAll for parallel requests:

@abstr_code_section 

Progress information is available:

@abstr_code_section 

Error handling:

@abstr_code_section 

## Using with IEnumerators (Coroutines)

IEnumerator (Coroutine) is Unity's primitive asynchronous tool. UniRx integrates coroutines and IObservables. You can write asynchronious code in coroutines, and orchestrate them using UniRx. This is best way to control asynchronous flow.

@abstr_code_section 

If in Unity @abstr_number . @abstr_number , you can use ToYieldInstruction for Observable to Coroutine.

@abstr_code_section Normally, we have to use callbacks when we require a coroutine to return a value. Observable.FromCoroutine can convert coroutines to cancellable IObservable[T] instead.

@abstr_code_section 

Here are some more examples. Next is a multiple OnNext pattern.

@abstr_code_section 

## Using for MultiThreading

@abstr_code_section 

## DefaultScheduler

UniRx's default time based operations (Interval, Timer, Buffer(timeSpan), etc) use `Scheduler.MainThread` as their scheduler. That means most operators (except for `Observable.Start`) work on a single thread, so ObserverOn isn't needed and thread safety measures can be ignored. This is differet from the standard RxNet implementation but better suited to the Unity environment. 

`Scheduler.MainThread` runs under Time.timeScale's influence. If you want to ignore the time scale, use `Scheduler.MainThreadIgnoreTimeScale` instead.

## MonoBehaviour triggers

UniRx can handle MonoBehaviour events with `UniRx.Triggers`:

@abstr_code_section 

Supported triggers are listed in @abstr_hyperlink .

These can also be handled more easily by directly subscribing to observables returned by extension methods on Component/GameObject. These methods inject ObservableTrigger automaticaly (except for `ObservableEventTrigger` and `ObservableStateMachineTrigger`):

@abstr_code_section 

> Previous versions of UniRx provided `ObservableMonoBehaviour`. This is a legacy interface that is no longer supported. Please use UniRx.Triggers instead.

## Creating custom triggers

Converting to Observable is the best way to handle Unity events. If the standard triggers supplied by UniRx are not enough, you can create custom triggers. To demonstrate, here's a LongTap trigger for uGUI:

@abstr_code_section 

It can be used as easily as the standard triggers:

@abstr_code_section 

## Observable Lifecycle Management

When is OnCompleted called? Subscription lifecycle management is very important to consider when using UniRx. `ObservableTriggers` call OnCompleted when the GameObject they are attached to is destroyed. Other static generator methods (`Observable.Timer`, `Observable.EveryUpdate`, etc...) do not stop automatically, and their subscriptions should be managed manually.

Rx provides some helper methods, such as `IDisposable.AddTo` which allows you to dispose of several subscriptions at once:

@abstr_code_section 

If you want to automatically Dispose when a GameObjects is destroyed, use AddTo(GameObject/Component):

@abstr_code_section 

AddTo calls facilitate automatic Dispose. If you needs special OnCompleted handling in the pipeline, however, use `TakeWhile`, `TakeUntil`, `TakeUntilDestroy` and `TakeUntilDisable` instead:

@abstr_code_section 

If you handle events, `Repeat` is an important but dangerous method. It may cause an infinite loop, so handle with care:

@abstr_code_section 

UniRx provides an additional safe Repeat method. `RepeatSafe`: if contiguous "OnComplete" are called repeat stops. `RepeatUntilDestroy(gameObject/component)`, `RepeatUntilDisable(gameObject/component)` allows to stop when a target GameObject has been destroyed:

@abstr_code_section 

UniRx gurantees hot observable(FromEvent/Subject/ReactiveProperty/UnityUI.AsObservable..., there are like event) have unhandled exception durability. What is it? If subscribe in subcribe, does not detach event.

@abstr_code_section 

This behaviour is sometimes useful such as user event handling.

All class instances provide an `ObserveEveryValueChanged` method, which watches for changing values every frame:

@abstr_code_section 

It's very useful. If the watch target is a GameObject, it will stop observing when the target is destroyed, and call OnCompleted. If the watch target is a plain C# Object, OnCompleted will be called on GC.

## Converting Unity callbacks to IObservables

Use Subject (or AsyncSubject for asynchronious operations):

@abstr_code_section 

In Unity @abstr_number , `Application.RegisterLogCallback` was removed in favor of `Application.logMessageReceived`, so we can now simply use `Observable.FromEvent`.

@abstr_code_section 

## Stream Logger

@abstr_code_section 

## Debugging

`Debug` operator in `UniRx.Diagnostics` namespace helps debugging.

@abstr_code_section 

shows sequence element on `OnNext`, `OnError`, `OnCompleted`, `OnCancel`, `OnSubscribe` timing to Debug.Log. It enables only `#if DEBUG`.

## Unity-specific Extra Gems

@abstr_code_section 

## Framecount-based time operators

UniRx provides a few framecount-based time operators:

Method | \-------| EveryUpdate| EveryFixedUpdate| EveryEndOfFrame| EveryGameObjectUpdate| EveryLateUpdate| ObserveOnMainThread| NextFrame| IntervalFrame| TimerFrame| DelayFrame| SampleFrame| ThrottleFrame| ThrottleFirstFrame| TimeoutFrame| DelayFrameSubscription| FrameInterval| FrameTimeInterval| BatchFrame|

For example, delayed invoke once:

@abstr_code_section 

Every* Method's execution order is

@abstr_code_section 

EveryGameObjectUpdate invoke from same frame if caller is called before MainThreadDispatcher.Update(I recommend MainThreadDispatcher called first than others(ScriptExecutionOrder makes - @abstr_number )   
EveryLateUpdate, EveryEndOfFrame invoke from same frame.   
EveryUpdate, invoke from next frame. 

## MicroCoroutine

MicroCoroutine is memory efficient and fast coroutine worker. This implemantation is based on @abstr_hyperlink , avoid managed-unmanaged overhead so gets @abstr_number x faster iteration. MicroCoroutine is automaticaly used on Framecount-based time operators and ObserveEveryValueChanged.

If you want to use MicroCoroutine instead of standard unity coroutine, use `MainThreadDispatcher.StartUpdateMicroCoroutine` or `Observable.FromMicroCoroutine`.

@abstr_code_section 

@abstr_image 

MicroCoroutine's limitation, only supports `yield return null` and update timing is determined start method(`StartUpdateMicroCoroutine`, `StartFixedUpdateMicroCoroutine`, `StartEndOfFrameMicroCoroutine`). 

If you combine with other IObservable, you can check completed property like isDone.

@abstr_code_section 

## uGUI Integration

UniRx can handle `UnityEvent`s easily. Use `UnityEvent.AsObservable` to subscribe to events:

@abstr_code_section 

Treating Events as Observables enables declarative UI programming. 

@abstr_code_section 

For more on reactive UI programming please consult Sample @abstr_number , Sample @abstr_number and the ReactiveProperty section below. 

## ReactiveProperty, ReactiveCollection

Game data often requires notification. Should we use properties and events (callbacks)? That's often too complex. UniRx provides ReactiveProperty, a lightweight property broker.

@abstr_code_section 

You can combine ReactiveProperties, ReactiveCollections and observables returned by UnityEvent.AsObservable. All UI elements are observable.

Generic ReactiveProperties are not serializable or inspecatble in the Unity editor, but UniRx provides specialized subclasses of ReactiveProperty that are. These include classes such as Int/LongReactiveProperty, Float/DoubleReactiveProperty, StringReactiveProperty, BoolReactiveProperty and more (Browse them here: @abstr_hyperlink ). All are fully editable in the inspector. For custom Enum ReactiveProperty, it's easy to write a custom inspectable ReactiveProperty[T].

If you needs `[Multiline]` or `[Range]` attach to ReactiveProperty, you can use `MultilineReactivePropertyAttribute` and `RangeReactivePropertyAttribute` instead of `Multiline` and `Range`.

The provided derived InpsectableReactiveProperties are displayed in the inspector naturally and notify when their value is changed even when it is changed in the inspector.

@abstr_image 

This functionality is provided by @abstr_hyperlink . You can supply your own custom specialized ReactiveProperties by inheriting from it:

@abstr_code_section 

If a ReactiveProperty value is only updated within a stream, you can make it read only by using from `ReadOnlyReactiveProperty`.

@abstr_code_section 

## Model-View-(Reactive)Presenter Pattern

UniRx makes it possible to implement the MVP(MVRP) Pattern.

@abstr_image 

Why should we use MVP instead of MVVM? Unity doesn't provide a UI binding mechanism and creating a binding layer is too complex and loss and affects performance. Still, Views need updating. Presenters are aware of their view's components and can update them. Although there is no real binding, Observables enables subscription to notification, which can act much like the real thing. This pattern is called a Reactive Presenter: 

@abstr_code_section 

A View is a scene, that is a Unity hierarchy. Views are associated with Presenters by the Unity Engine on initialize. The XxxAsObservable methods make creating event signals simple, without any overhead. SubscribeToText and SubscribeToInteractable are simple binding-like helpers. These may be simple tools, but they are very powerful. They feel natural in the Unity environment and provide high performance and a clean architecture.

@abstr_image 

V -> RP -> M -> RP -> V completely connected in a reactive way. UniRx provides all of the adaptor methods and classes, but other MVVM(or MV*) frameworks can be used instead. UniRx/ReactiveProperty is only simple toolkit. 

GUI programming also benefits from ObservableTriggers. ObservableTriggers convert Unity events to Observables, so the MV(R)P pattern can be composed using them. For example, `ObservableEventTrigger` converts uGUI events to Observable:

@abstr_code_section 

## (Obsolete)PresenterBase

> Note: PresenterBase works enough, but too complex.   
>  You can use simple `Initialize` method and call parent to child, it works for most scenario.   
>  So I don't recommend using `PresenterBase`, sorry. 

## ReactiveCommand, AsyncReactiveCommand

ReactiveCommand abstraction of button command with boolean interactable.

@abstr_code_section 

AsyncReactiveCommand is a variation of ReactiveCommand that `CanExecute`(in many cases bind to button's interactable) is changed to false until asynchronous execution was finished. 

@abstr_code_section 

`AsyncReactiveCommand` has three constructor.

  * `()` \- CanExecute is changed to false until async execution finished
  * `(IObservable<bool> canExecuteSource)` \- Mixed with empty, CanExecute becomes true when canExecuteSource send to true and does not executing 
  * `(IReactiveProperty<bool> sharedCanExecute)` \- share execution status between multiple AsyncReactiveCommands, if one AsyncReactiveCommand is executing, other AsyncReactiveCommands(with same sharedCanExecute property) becomes CanExecute false until async execution finished

@abstr_code_section 




## MessageBroker, AsyncMessageBroker

MessageBroker is Rx based in-memory pubsub system filtered by type.

@abstr_code_section 

AsyncMessageBroker is variation of MessageBroker, can await Publish call.

@abstr_code_section 

## UniRx.Toolkit

`UniRx.Toolkit` includes serveral Rx-ish tools. Currently includes `ObjectPool` and `AsyncObjectPool`. It can `Rent`, `Return` and `PreloadAsync` for fill pool before rent operation.

@abstr_code_section 

## Visual Studio Analyzer

For Visual Studio @abstr_number users, a custom analyzer, UniRxAnalyzer, is provided. It can, for example, detect when streams aren't subscribed to.

@abstr_image 

@abstr_image 

`ObservableWWW` doesn't fire until it's subscribed to, so the analyzer warns about incorrect usage. It can be downloaded from NuGet.

  * Install-Package @abstr_hyperlink 



Please submit new analyzer ideas on GitHub Issues!

## Samples

See @abstr_hyperlink 

The samples demonstrate how to do resource management (Sample @abstr_number _EventHandling), what is the MainThreadDispatcher, among other things.

## Windows Store/Phone App (NETFX_CORE)

Some interfaces, such as `UniRx.IObservable<T>` and `System.IObservable<T>`, cause conflicts when submitting to the Windows Store App. Therefore, when using NETFX_CORE, please refrain from using such constructs as `UniRx.IObservable<T>` and refer to the UniRx components by their short name, without adding the namespace. This solves the conflicts.

## DLL Separation

If you want to pre-build UniRx, you can build own dll. clone project and open `UniRx.sln`, you can see `UniRx`, it is fullset separated project of UniRx. You should define compile symbol like `UNITY;UNITY_ @abstr_number _ @abstr_number _OR_NEWER;UNITY_ @abstr_number _ @abstr_number _ @abstr_number ;UNITY_ @abstr_number _ @abstr_number ;UNITY_ @abstr_number ;` \+ `UNITY_EDITOR`, `UNITY_IPHONE` or other platform symbol. We can not provides pre-build binary to release page, asset store because compile symbol is different each other.

## Reference

  * @abstr_hyperlink 



UniRx API documents.

  * @abstr_hyperlink 



The home of ReactiveX. @abstr_hyperlink , @abstr_hyperlink are illustrated with graphical marble diagrams, there makes easy to understand. And UniRx is official @abstr_hyperlink .

  * @abstr_hyperlink 



A great online tutorial and eBook.

  * @abstr_hyperlink 



Many videos, slides and documents for Rx.NET.

  * @abstr_hyperlink 
    * @abstr_hyperlink 



Intro slide by @abstr_hyperlink 

  * @abstr_hyperlink 
    * @abstr_hyperlink 



Intro slide and sample game by @abstr_hyperlink 

  * @abstr_hyperlink 



How to integrate with PlayFab API

## Help & Contribute

Support thread on the Unity forum. Ask me any question - @abstr_hyperlink 

Become a backer, Sponsored, one time donation are welcome, we're using @abstr_hyperlink 

We welcome any contributions, be they bug reports, requests or pull request.   
Please consult and submit your reports or requests on GitHub issues.   
Source code is available in `Assets/Plugins/UniRx/Scripts`. 

## Author's other Unity + LINQ Assets

@abstr_hyperlink is a group of GameObject extensions for Unity that allows traversing the hierarchy and appending GameObject to it like LINQ to XML. It's free and opensource on GitHub.

@abstr_image 

## Author Info

Yoshifumi Kawai(a.k.a. neuecc) is a software developer in Japan.   
Currently founded consulting company @abstr_hyperlink   
He is awarding Microsoft MVP for Visual C# since @abstr_number . 

Blog: https://medium.com/@neuecc (English)   
Blog: http://neue.cc/ (Japanese)   
Twitter: https://twitter.com/neuecc (Japanese)

## License

This library is under the MIT License.

Some code is borrowed from @abstr_hyperlink and @abstr_hyperlink .
