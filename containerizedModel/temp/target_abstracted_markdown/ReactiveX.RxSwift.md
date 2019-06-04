#  @abstr_image RxSwift: ReactiveX for Swift

@abstr_hyperlink @abstr_image @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

Rx is a @abstr_hyperlink expressed through `Observable<Element>` interface.

This is a Swift version of @abstr_hyperlink .

It tries to port as many concepts from the original version as possible, but some concepts were adapted for more pleasant and performant integration with iOS/macOS environment.

Cross platform documentation can be found on @abstr_hyperlink .

Like the original Rx, its intention is to enable easy composition of asynchronous operations and event/data streams.

KVO observing, async operations and streams are all unified under abstraction of sequence. This is the reason why Rx is so simple, elegant and powerful.

## I came here because I want to ...

###### ... understand

  * why use rx?
  * the basics, getting started with RxSwift
  * traits - what are `Single`, `Completable`, `Maybe`, `Driver`, and `ControlProperty` ... and why do they exist?
  * testing
  * tips and common errors
  * debugging
  * the math behind Rx
  * what are hot and cold observable sequences?



###### ... install

  * Integrate RxSwift/RxCocoa with my app. Installation Guide



###### ... hack around

  * with the example app. Running Example App
  * with operators in playgrounds. Playgrounds



###### ... interact

  * All of this is great, but it would be nice to talk with other people using RxSwift and exchange experiences.   
@abstr_hyperlink 
  * Report a problem using the library. Open an Issue With Bug Template
  * Request a new feature. Open an Issue With Feature Request Template
  * Help out Check out contribution guide



###### ... compare

  * with other libraries.



###### ... understand the structure

RxSwift comprises five separate components depending on eachother in the following way:

@abstr_code_section 

  * **RxSwift** : The core of RxSwift, providing the Rx standard as (mostly) defined by @abstr_hyperlink . It has no other dependencies.
  * **RxCocoa** : Provides Cocoa-specific capabilities for general iOS/macOS/watchOS & tvOS app development, such as Binders, Traits, and much more. It depends on both `RxSwift` and `RxRelay`.
  * **RxRelay** : Provides `PublishRelay` and `BehaviorRelay`, two @abstr_hyperlink . It depends on `RxSwift`. 
  * **RxTest** and **RxBlocking** : Provides testing capabilities for Rx-based systems. It depends on `RxSwift`.



###### ... find compatible

  * libraries from @abstr_hyperlink .
  * @abstr_hyperlink .



###### ... see the broader vision

  * Does this exist for Android? @abstr_hyperlink 
  * Where is all of this going, what is the future, what about reactive architectures, how do you design entire apps this way? @abstr_hyperlink - this is javascript, but @abstr_hyperlink is javascript version of Rx.



## Usage

Here's an example | In Action  
---|---  
Define search for GitHub repositories ... |  @abstr_image   
      
    
    let searchResults = searchBar.rx.text.orEmpty
        .throttle(.milliseconds( @abstr_number ), scheduler: MainScheduler.instance)
        .distinctUntilChanged()
        .flatMapLatest { query -> Observable<[Repository]> in
            if query.isEmpty {
                return .just([])
            }
            return searchGitHub(query)
                .catchErrorJustReturn([])
        }
        .observeOn(MainScheduler.instance)  
  
... then bind the results to your tableview  
      
    
    searchResults
        .bind(to: tableView.rx.items(cellIdentifier: "Cell")) {
            (index, repository: Repository, cell) in
            cell.textLabel?.text = repository.name
            cell.detailTextLabel?.text = repository.url
        }
        .disposed(by: disposeBag)  
  
## Requirements

  * Xcode @abstr_number . @abstr_number 
  * Swift @abstr_number . @abstr_number 



For Xcode @abstr_number . @abstr_number and below, @abstr_hyperlink .

## Installation

Rx doesn't contain any external dependencies.

These are currently the supported options:

### Manual

Open Rx.xcworkspace, choose `RxExample` and hit run. This method will build everything and run the sample app

###  @abstr_hyperlink 

@abstr_code_section 

Replace `YOUR_TARGET_NAME` and then, in the `Podfile` directory, type:

@abstr_code_section 

###  @abstr_hyperlink 

Officially supported: Carthage @abstr_number . @abstr_number and up.

Add this to `Cartfile`

@abstr_code_section 

@abstr_code_section 

#### Carthage as a Static Library

Carthage defaults to building RxSwift as a Dynamic Library. 

If you wish to build RxSwift as a Static Library using Carthage you may use the script below to manually modify the framework type before building with Carthage:

@abstr_code_section 

###  @abstr_hyperlink 

Create a `Package.swift` file.

@abstr_code_section 

@abstr_code_section 

To build or test a module with RxTest dependency, set `TEST= @abstr_number`.

@abstr_code_section 

### Manually using git submodules

  * Add RxSwift as a submodule

@abstr_code_section 

  * Drag `Rx.xcodeproj` into Project Navigator

  * Go to `Project > Targets > Build Phases > Link Binary With Libraries`, click `+` and select `RxSwift-[Platform]` and `RxCocoa-[Platform]` targets



## References

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (Chinese 🇨🇳)
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


