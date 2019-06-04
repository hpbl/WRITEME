_This project is a part of The @abstr_hyperlink Framework, which is a series of open source initiatives with a joint goal to help mobile game developers do more together. SOOMLA encourages better game design, economy modeling, social engagement, and faster development._

Haven't you ever wanted an in-app purchase one liner that looks like this ?!

@abstr_code_section 

## unity @abstr_number d-store

_SOOMLA's Store Module for Unity @abstr_number d_

**October @abstr_number th:** v @abstr_number . @abstr_number **Work in editor!** When you're in the Unity editor, data will be saved to PlayerPrefs.

**September @abstr_number th:** NonConsumableItem class was removed. To create a non-consumable item in your `IStoreAssets` implementation, use `LifeTimeVG` with `PurchaseType` of `PurchaseWithMarket`.

**October @abstr_number rd, @abstr_number :** iOS Server Side Verification is now implemented into unity @abstr_number d-store. The server is a complimentary server provided by @abstr_hyperlink to help you get your in-game purchases a bit more secured. This feature is not enabled by default. In order to enable Server Side verification go to the Soomla prefab and set **ios Server Side Verification - > true**.

  * More documentation and information in SOOMLA's @abstr_hyperlink 
  * For issues you can use the @abstr_hyperlink section or SOOMLA's @abstr_hyperlink 



unity @abstr_number d-store is the Unity @abstr_number d flavor of SOOMLA's Store Module.

## Economy Model

@abstr_image 

## Download

#### Pre baked unitypackages:

> If you're upgrading to v @abstr_number . @abstr_number .x make sure you take soomla-unity @abstr_number d-core again.

@abstr_hyperlink   
@abstr_hyperlink 

## Debugging

If you want to see full debug messages from android-store and ios-store you just need to check the box that says "Debug Messages" in the SOOMLA Settings. Unity debug messages will only be printed out if you build the project with _Development Build_ checked.

## Cloning

There are some necessary files in submodules lined with symbolic links. If you're cloning the project make sure you clone it with the `--recursive` flag.

@abstr_code_section 

## Getting Started

@abstr_number . Download the @abstr_hyperlink and @abstr_hyperlink unitypackages and double-click on them (first 'Core' then 'Store'). It'll import all the necessary files into your project. @abstr_number . Drag the "StoreEvents" and "CoreEvents" Prefabs from `../Assets/Soomla/Prefabs` into your scene. You should see it listed in the "Hierarchy" panel. [This step MUST be done for unity @abstr_number d-store to work properly] @abstr_number . On the menu bar click "Window -> Soomla -> Edit Settings" and change the value for "Soomla Secret" (also setup Public Key if you're building for Google Play): \- _Soomla Secret_ - is an encryption secret you provide that will be used to secure your data. (If you used versions before v @abstr_number . @abstr_number . @abstr_number this secret MUST be the same as Custom Secret)   
**Choose the secret wisely. You can't change them after you launch your game!** \- _Public Key_ - is the public key given to you from Google. (iOS doesn't have a public key). @abstr_number . Create your own implementation of _IStoreAssets_ in order to describe your specific game's assets ( @abstr_hyperlink ). Initialize _SoomlaStore_ with the class you just created:
    
    
     @abstr_code_section 
    
    > Initialize _SoomlaStore_ ONLY ONCE when your application loads.
    
    > Initialize _SoomlaStore_ in the "Start()" function of a 'MonoBehaviour' and **NOT** in the "Awake()" function. SOOMLA has its own 'MonoBehaviour' and it needs to be "Awakened" before you initialize.
    

@abstr_number . You'll need an event handler in order to be notified about in-app purchasing related events. refer to the @abstr_hyperlink section for more information.

And that's it ! You have storage and in-app purchasing capabilities... ALL-IN-ONE.

### Unity & Android

#### Starting IAB Service in background

If you have your own storefront implemented inside your game, it's recommended that you open the IAB Service in the background when the store opens and close it when the store is closed.

@abstr_code_section 

Don't forget to close the Iab Service when your store is closed. You don't have to do this at all, this is just an optimization.

## What's next? In App Purchasing.

When we implemented modelV @abstr_number , we were thinking about ways that people buy things inside apps. We figured out many ways you can let your users purchase stuff in your game and we designed the new modelV @abstr_number to support @abstr_number of them: PurchaseWithMarket and PurchaseWithVirtualItem.

**PurchaseWithMarket** is a PurchaseType that allows users to purchase a VirtualItem with Google Play or the App Store.   
**PurchaseWithVirtualItem** is a PurchaseType that lets your users purchase a VirtualItem with a different VirtualItem. For Example: Buying @abstr_number Sword with @abstr_number Gems.

In order to define the way your various virtual items (Goods, Coins ...) are purchased, you'll need to create your implementation of IStoreAsset (the same one from step @abstr_number in the "Getting Started" above).

Here is an example:

Lets say you have a _VirtualCurrencyPack_ you call `TEN_COINS_PACK` and a _VirtualCurrency_ you call `COIN_CURRENCY`:

@abstr_code_section 

Now you can use _StoreInventory_ to buy your new VirtualCurrencyPack:

@abstr_code_section 

And that's it! unity @abstr_number d-store knows how to contact Google Play or the App Store for you and will redirect your users to their purchasing system to complete the transaction. Don't forget to subscribe to store events in order to get the notified of successful or failed purchases (see @abstr_hyperlink ).

## Storage & Meta-Data

When you initialize _SoomlaStore_, it automatically initializes two other classes: _StoreInventory_ and _StoreInfo_:   
* _StoreInventory_ is a convenience class to let you perform operations on VirtualCurrencies and VirtualGoods. Use it to fetch/change the balances of VirtualItems in your game (using their ItemIds!)   
* _StoreInfo_ is where all meta data information about your specific game can be retrieved. It is initialized with your implementation of `IStoreAssets` and you can use it to retrieve information about your specific game.

The on-device storage is encrypted and kept in a SQLite database. SOOMLA is preparing a cloud-based storage service that will allow this SQLite to be synced to a cloud-based repository that you'll define.

**Example Usages**

  * Get VirtualCurrency with itemId "currency_coin":

@abstr_code_section 

  * Give the user @abstr_number pieces of a virtual currency with itemId "currency_coin":

@abstr_code_section 

  * Take @abstr_number virtual goods with itemId "green_hat":

@abstr_code_section 

  * Get the current balance of green hats (virtual goods with itemId "green_hat"):

@abstr_code_section 




## Event Handling

SOOMLA lets you subscribe to store events, get notified and implement your own application specific behavior to those events.

> Your behavior is an addition to the default behavior implemented by SOOMLA. You don't replace SOOMLA's behavior.

The 'Events' class is where all event go through. To handle various events, just add your specific behavior to the delegates in the Events class.

For example, if you want to 'listen' to a MarketPurchase event:

@abstr_code_section 

**NOTE:** One thing you need to notice is that if you want to listen to OnSoomlaStoreInitialized event you have to set up the listener before you initialize SoomlaStore. So you'll need to do: `@abstr_code_section` before `@abstr_code_section`

## Contribution

SOOMLA appreciates code contributions! You are more than welcome to extend the capabilities of SOOMLA.

Fork -> Clone -> Implement -> Add documentation -> Test -> Pull-Request.

IMPORTANT: If you would like to contribute, please follow our @abstr_hyperlink . Clear, consistent comments will make our code easy to understand.

## SOOMLA, Elsewhere ...

  * @abstr_hyperlink 
  * @abstr_hyperlink 



@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## License

Apache License. Copyright (c) @abstr_number - @abstr_number SOOMLA. http://www.soom.la \+ http://opensource.org/licenses/Apache- @abstr_number . @abstr_number 
