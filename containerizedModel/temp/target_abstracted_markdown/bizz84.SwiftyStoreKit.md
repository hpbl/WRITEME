@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

SwiftyStoreKit is a lightweight In App Purchases framework for iOS @abstr_number . @abstr_number +, tvOS @abstr_number . @abstr_number + and macOS @abstr_number . @abstr_number +.

### Preview

@abstr_image 

### Note from the Author

I started @abstr_hyperlink , a YouTube video series on building apps with Flutter. Interested? @abstr_hyperlink .

### Like SwiftyStoreKit? Please consider @abstr_hyperlink .

## Content

  * Installation 
    * CocoaPods
    * Carthage
  * Features
  * Contributing
  * App startup 
    * Complete Transactions
  * Purchases 
    * Retrieve products info
    * Purchase a product (given a product id)
    * Purchase a product (given a SKProduct)
    * Handle purchases started on the App Store (iOS @abstr_number )
    * Restore previous purchases
    * Downloading content hosted with Apple
  * Receipt verification 
    * Retrieve local receipt (encrypted)
    * Fetch receipt (encrypted)
    * Verify Receipt
  * Verifying purchases and subscriptions 
    * Verify Purchase
    * Verify Subscription
    * Subscription Groups
  * Notes
  * Change Log
  * Sample Code
  * Essential Reading 
    * Troubleshooting
  * Video Tutorials
  * Payment flows: implementation details
  * Credits
  * Apps using SwiftyStoreKit
  * License



## Installation

### CocoaPods

SwiftyStoreKit can be installed as a @abstr_hyperlink and builds as a Swift framework. To install, include this in your Podfile.

@abstr_code_section Once installed, just `import SwiftyStoreKit` in your classes and you're good to go.

### Carthage

To integrate SwiftyStoreKit into your Xcode project using @abstr_hyperlink , specify it in your Cartfile:

@abstr_code_section 

**NOTE** : Please ensure that you have the @abstr_hyperlink Carthage installed.

## Features

  * Super easy to use block based API
  * Support for consumable, non-consumable in-app purchases
  * Support for free, auto-renewable and non-renewing subscriptions
  * Support for in-app purchases started in the App Store (iOS @abstr_number )
  * Remote receipt verification
  * Verify purchases, subscriptions, subscription groups
  * Downloading content hosted with Apple
  * iOS, tvOS and macOS compatible



## Contributing

#### Got issues / pull requests / want to contribute? Read here.

## App startup

### Complete Transactions

Apple recommends to register a transaction observer @abstr_hyperlink :

> Adding your app's observer at launch ensures that it will persist during all launches of your app, thus allowing your app to receive all the payment queue notifications.

SwiftyStoreKit supports this by calling `completeTransactions()` when the app starts:

@abstr_code_section 

If there are any pending transactions at this point, these will be reported by the completion block so that the app state and UI can be updated.

If there are no pending transactions, the completion block will **not** be called.

Note that `completeTransactions()` **should only be called once** in your code, in `application(:didFinishLaunchingWithOptions:)`.

## Purchases

### Retrieve products info

@abstr_code_section 

### Purchase a product (given a product id)

  * **Atomic** : to be used when the content is delivered immediately.

@abstr_code_section 

  * **Non-Atomic** : to be used when the content is delivered by the server.

@abstr_code_section 




### Purchase a product (given a SKProduct)

This is a variant of the method above that can be used to purchase a product when the corresponding `SKProduct` has already been retrieved with `retrieveProductsInfo`: 

@abstr_code_section 

Using this `purchaseProduct` method guarantees that only one network call is made to StoreKit to perform the purchase, as opposed to one call to get the product and another to perform the purchase.

### Handle purchases started on the App Store (iOS @abstr_number )

iOS @abstr_number adds a new delegate method on `SKPaymentTransactionObserver`:

@abstr_code_section 

From @abstr_hyperlink :

> This delegate method is called when the user has started an in-app purchase in the App Store, and is continuing the transaction in your app. Specifically, if your app is already installed, the method is called automatically. If your app is not yet installed when the user starts the in-app purchase in the App Store, the user gets a notification when the app installation is complete. This method is called when the user taps the notification. Otherwise, if the user opens the app manually, this method is called only if the app is opened soon after the purchase was started.

SwiftyStoreKit supports this with a new handler, called like this:

@abstr_code_section 

To test this in sandbox mode, open this URL in Safari:

@abstr_code_section 

More information on the @abstr_hyperlink ( @abstr_hyperlink shows the link above).

### Restore previous purchases

According to @abstr_hyperlink :

> In most cases, all your app needs to do is refresh its receipt and deliver the products in its receipt. The refreshed receipt contains a record of the user’s purchases in this app, on this device or any other device.
> 
> Restoring completed transactions creates a new transaction for every completed transaction the user made, essentially replaying history for your transaction queue observer.

See the **Receipt Verification** section below for how to restore previous purchases using the receipt.

This section shows how to restore completed transactions with the `restorePurchases` method instead. When successful, the method returns all non-consumable purchases, as well as all auto-renewable subscription purchases, **regardless of whether they are expired or not**.

  * **Atomic** : to be used when the content is delivered immediately.

@abstr_code_section 

  * **Non-Atomic** : to be used when the content is delivered by the server.

@abstr_code_section 




#### What does atomic / non-atomic mean?

When you purchase a product the following things happen:

  * A payment is added to the payment queue for your IAP.
  * When the payment has been processed with Apple, the payment queue is updated so that the appropriate transaction can be handled.
  * If the transaction state is **purchased** or **restored** , the app can unlock the functionality purchased by the user.
  * The app should call `finishTransaction(_:)` to complete the purchase.



This is what is @abstr_hyperlink :

> Your application should call `finishTransaction(_:)` only after it has successfully processed the transaction and unlocked the functionality purchased by the user.

  * A purchase is **atomic** when the app unlocks the functionality purchased by the user immediately and call `finishTransaction(_:)` at the same time. This is desirable if you're unlocking functionality that is already inside the app.

  * In cases when you need to make a request to your own server in order to unlock the functionality, you can use a **non-atomic** purchase instead.

  * **Note** : SwiftyStoreKit doesn't yet support downloading content hosted by Apple for non-consumable products. See @abstr_hyperlink .




SwiftyStoreKit provides three operations that can be performed **atomically** or **non-atomically** :

  * Making a purchase
  * Restoring purchases
  * Completing transactions on app launch



### Downloading content hosted with Apple

Quoting Apple Docs:

> When you create a product in iTunes Connect, you can associate one or more pieces of downloadable content with it. At runtime, when a product is purchased by a user, your app uses SKDownload objects to download the content from the App Store.
> 
> Your app never directly creates a SKDownload object. Instead, after a payment is processed, your app reads the transaction object’s downloads property to retrieve an array of SKDownload objects associated with the transaction.
> 
> To download the content, you queue a download object on the payment queue and wait for the content to be downloaded. After a download completes, read the download object’s contentURL property to get a URL to the downloaded content. Your app must process the downloaded file before completing the transaction. For example, it might copy the file into a directory whose contents are persistent. When all downloads are complete, you finish the transaction. After the transaction is finished, the download objects cannot be queued to the payment queue and any URLs to the downloaded content are invalid.

To start the downloads (this can be done in `purchaseProduct()`, `completeTransactions()` or `restorePurchases()`):

@abstr_code_section 

To check the updated downloads, setup a `updatedDownloadsHandler` block in your AppDelegate:

@abstr_code_section 

To control the state of the downloads, SwiftyStoreKit offers `start()`, `pause()`, `resume()`, `cancel()` methods.

## Receipt verification

According to @abstr_hyperlink :

> The app receipt contains a record of the user’s purchases, cryptographically signed by Apple. For more information, see @abstr_hyperlink .
> 
> Information about consumable products is added to the receipt when they’re paid for and remains in the receipt until you finish the transaction. After you finish the transaction, this information is removed the next time the receipt is updated—for example, the next time the user makes a purchase.
> 
> Information about all other kinds of purchases is added to the receipt when they’re paid for and remains in the receipt indefinitely.

When an app is first installed, the app receipt is missing.

As soon as a user completes a purchase or restores purchases, StoreKit creates and stores the receipt locally as a file, located by `Bundle.main.appStoreReceiptURL`.

### Retrieve local receipt (encrypted)

This helper can be used to retrieve the (encrypted) local receipt data:

@abstr_code_section 

However, the receipt file may be missing or outdated.

### Fetch receipt (encrypted)

Use this method to get the updated receipt:

@abstr_code_section 

This method works as follows:

  * If `forceRefresh = false`, it returns the local receipt from file, or refreshes it if missing.
  * If `forceRefresh = true`, it always refreshes the receipt regardless.



**Notes**

  * If the local receipt is missing or `forceRefresh = true` when calling `fetchReceipt`, a network call is made to refresh it.
  * If the user is not logged to the App Store, StoreKit will present a popup asking to **Sign In to the iTunes Store**.
  * If the user enters valid credentials, the receipt will be refreshed.
  * If the user cancels, receipt refresh will fail with a **Cannot connect to iTunes Store** error.



If `fetchReceipt` is successful, it will return the **encrypted** receipt as a string. For this reason, a **validation** step is needed to get all the receipt fields in readable form. This can be done in various ways:

@abstr_number . Validate with Apple via the `AppleReceiptValidator` (see <code>verifyReceipt</code> below). @abstr_number . Perform local receipt validation (see @abstr_hyperlink ). @abstr_number . Post the receipt data and validate on server.

### Verify Receipt

Use this method to (optionally) refresh the receipt and perform validation in one step.

@abstr_code_section 

**Notes**

  * This method is based on `fetchReceipt`, and the same refresh logic discussed above applies. 
  * `AppleReceiptValidator` is a **reference implementation** that validates the receipt with Apple and results in a network call. _This is prone to man-in-the-middle attacks._
  * You should implement your secure logic by validating your receipt locally, or sending the encrypted receipt data and validating it in your server.
  * Local receipt validation is not implemented (see @abstr_hyperlink for details).
  * You can implement your own receipt validator by conforming to the `ReceiptValidator` protocol and passing it to `verifyReceipt`.



## Verifying purchases and subscriptions

Once you have retrieved the receipt using the `verifyReceipt` method, you can verify your purchases and subscriptions by product identifier.

Verifying multiple purchases and subscriptions in one call is not yet supported (see @abstr_hyperlink for more details).

If you need to verify multiple purchases / subscriptions, you can either:

  * manually parse the receipt dictionary returned by `verifyReceipt`
  * call `verifyPurchase` or `verifySubscription` multiple times with different product identifiers



### Verify Purchase

@abstr_code_section 

Note that for consumable products, the receipt will only include the information for a couple of minutes after the purchase.

### Verify Subscription

This can be used to check if a subscription was previously purchased, and whether it is still active or if it's expired.

From @abstr_hyperlink :

> keep a record of the date that each piece of content is published. Read the Original Purchase Date and Subscription Expiration Date field from each receipt entry to determine the start and end dates of the subscription.

When one or more subscriptions are found for a given product id, they are returned as a `ReceiptItem` array ordered by `expiryDate`, with the first one being the newest.

@abstr_code_section 

#### Auto-Renewable

@abstr_code_section 

#### Non-Renewing

@abstr_code_section 

**Notes**

  * The expiration dates are calculated against the receipt date. This is the date of the last successful call to `verifyReceipt`.
  * When purchasing subscriptions in sandbox mode, the expiry dates are set just minutes after the purchase date for testing purposes.



#### Purchasing and verifying a subscription

The `verifySubscription` method can be used together with the `purchaseProduct` method to purchase a subscription and check its expiration date, like so:

@abstr_code_section 

### Subscription Groups

From @abstr_hyperlink :

> A subscription group is a set of in-app purchases that you can create to provide users with a range of content offerings, service levels, or durations to best meet their needs. Users can only buy one subscription within a subscription group at a time. If users would want to buy more that one type of subscription — for example, to subscribe to more than one channel in a streaming app — you can put these in-app purchases in different subscription groups.

You can verify all subscriptions within the same group with the `verifySubscriptions` method:

@abstr_code_section 

## Notes

The framework provides a simple block based API with robust error handling on top of the existing StoreKit framework. It does **NOT** persist in app purchases data locally. It is up to clients to do this with a storage solution of choice (i.e. NSUserDefaults, CoreData, Keychain).

#### Swift @abstr_number .x / @abstr_number .x / @abstr_number .x / @abstr_number .x

| Language | Branch | Pod version | Xcode version | | --------- | ------ | ----------- | ------------- | | Swift @abstr_number .x | @abstr_hyperlink | >= @abstr_number . @abstr_number . @abstr_number | Xcode @abstr_number . @abstr_number or greater| | Swift @abstr_number .x | @abstr_hyperlink | >= @abstr_number . @abstr_number . @abstr_number | Xcode @abstr_number or greater| | Swift @abstr_number .x | @abstr_hyperlink | >= @abstr_number . @abstr_number .x | Xcode @abstr_number .x | | Swift @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_number . @abstr_number .x | Xcode @abstr_number , Xcode @abstr_number . @abstr_number .x | | Swift @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_number . @abstr_number .x | Xcode @abstr_number . @abstr_number .x |

## Change Log

See the @abstr_hyperlink .

## Sample Code

The project includes demo apps @abstr_hyperlink @abstr_hyperlink showing how to use SwiftyStoreKit. Note that the pre-registered in app purchases in the demo apps are for illustration purposes only and may not work as iTunes Connect may invalidate them.

## Essential Reading

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink (also see @abstr_hyperlink )
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink : includes info on duration of subscriptions in sandbox mode
  * @abstr_hyperlink 



I have also written about building SwiftyStoreKit on Medium:

  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Troubleshooting

  * @abstr_hyperlink 
  * @abstr_hyperlink : Checklist of common mistakes
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Video Tutorials

#### Jared Davidson: In App Purchases! (Swift @abstr_number in Xcode : Swifty Store Kit)

@abstr_hyperlink 

####  @abstr_hyperlink : Ultimate In-app Purchases Guide

@abstr_hyperlink 

## Payment flows: implementation details

In order to make a purchase, two operations are needed:

  * Perform a `SKProductRequest` to obtain the `SKProduct` corresponding to the product identifier.

  * Submit the payment and listen for updated transactions on the `SKPaymentQueue`.




The framework takes care of caching SKProducts so that future requests for the same `SKProduct` don't need to perform a new `SKProductRequest`.

#### Payment queue

The following list outlines how requests are processed by SwiftyStoreKit.

  * `SKPaymentQueue` is used to queue payments or restore purchases requests.
  * Payments are processed serially and in-order and require user interaction.
  * Restore purchases requests don't require user interaction and can jump ahead of the queue.
  * `SKPaymentQueue` rejects multiple restore purchases calls.
  * Failed transactions only ever belong to queued payment requests.
  * `restoreCompletedTransactionsFailedWithError` is always called when a restore purchases request fails.
  * `paymentQueueRestoreCompletedTransactionsFinished` is always called following @abstr_number or more update transactions when a restore purchases request succeeds.
  * A complete transactions handler is require to catch any transactions that are updated when the app is not running.
  * Registering a complete transactions handler when the app launches ensures that any pending transactions can be cleared.
  * If a complete transactions handler is missing, pending transactions can be mis-attributed to any new incoming payments or restore purchases.



The order in which transaction updates are processed is:

@abstr_number . payments (transactionState: `.purchased` and `.failed` for matching product identifiers) @abstr_number . restore purchases (transactionState: `.restored`, or `restoreCompletedTransactionsFailedWithError`, or `paymentQueueRestoreCompletedTransactionsFinished`) @abstr_number . complete transactions (transactionState: `.purchased`, `.failed`, `.restored`, `.deferred`)

Any transactions where state is `.purchasing` are ignored.

See @abstr_hyperlink for full details about how the payment flows have been implemented.

## Credits

Many thanks to @abstr_hyperlink for adding macOS support and receipt verification.

## Apps using SwiftyStoreKit

It would be great to showcase apps using SwiftyStoreKit here. Pull requests welcome :)

  * @abstr_hyperlink - Countdown the days until your next vacation, deadline, or event
  * @abstr_hyperlink - Acne analysis and treatment
  * @abstr_hyperlink - Image Color Picker
  * @abstr_hyperlink - Space shooter game
  * @abstr_hyperlink - Automatically upload images and save Markdown links
  * @abstr_hyperlink - Perfect for editing /etc/hosts
  * @abstr_hyperlink - Calorie counter
  * @abstr_hyperlink - iMessage game, featured by Apple
  * @abstr_hyperlink - Alternative music player app
  * @abstr_hyperlink - Language learning app
  * @abstr_hyperlink - Colorado Ski Report
  * @abstr_hyperlink - Interactive hiking map & planner
  * @abstr_hyperlink - The app for Texas Longhorns athletics fans
  * @abstr_hyperlink - Your dim sum companion



A full list of apps is published @abstr_hyperlink .

## License

Copyright (c) @abstr_number - @abstr_number Andrea Bizzotto bizz @abstr_number @gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
