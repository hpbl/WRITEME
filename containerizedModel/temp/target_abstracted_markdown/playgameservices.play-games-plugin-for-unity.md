# Google Play Games plugin for Unity

_Copyright (c) @abstr_number Google Inc. All rights reserved._

The Google Play Games plugin for Unity® is an open-source project whose goal is to provide a plugin that allows game developers to integrate with the Google Play Games API from a game written in Unity®. However, this project is not in any way endorsed or supervised by Unity Technologies.

_Unity® is a trademark of Unity Technologies._

_iOS is a trademark of Apple, Inc._

## Overview

The Google Play Games plugin for Unity allows you to access the Google Play Games API through Unity's @abstr_hyperlink . The plugin provides support for the following features of the Google Play Games API:  


  * sign in
  * unlock/reveal/increment achievement
  * post score to leaderboard
  * cloud save read/write
  * show built-in achievement/leaderboards UI
  * events
  * video recording of gameplay
  * nearby connections
  * turn-based multiplayer
  * real-time multiplayer



__NOTICE__: This version of the plugin no longer supports iOS. Google Play games services for iOS is deprecated, and is not likely to function as expected. Do not use Google Play games services for iOS in new apps. See the @abstr_hyperlink blog post for more details.

Features:

  * easy GUI-oriented project setup (integrated into the Unity GUI)
  * no need to override/customize the player Activity
  * no need to override/customize AndroidManifest.xml



System requirements:

  * Unity® @abstr_number or above.

  * To deploy on Android:

    * Android SDK
    * Android v @abstr_number . @abstr_number or higher
    * Google Play Services library, version @abstr_number . @abstr_number or above



## Upgrading

If you have already integrated your project with a previous version of the plugin and wish to upgrade to a new version, please refer to the upgrade instructions.

## Configure Your Game

To use the plugin, you must first @abstr_hyperlink in the Google Play Developer Console. Follow the instructions on creating a client ID. Be particularly careful when entering your package name and your certificate fingerprints, since mistakes on those screens can be difficult to recover from.

If you intend to use real-time or turn-based multiplayer in your game, remember to activate those features in the Google Play Developer Console when creating your application instances.

### Copy the game resources from the console

Once you configure at least one resource (event, achievement, or leaderboard), copy the resource configuration from the Google Play Developer Console, and paste it into the setup configuration in Unity. To get the resources go to the Achievements tab, then click on "Get resources" on the bottom of the list.

@abstr_image 

Then click the "Android section".

@abstr_image 

Select all the contents of the resources window, and copy them to the clipboard.

### Paste the game resources into the plugin setup dialog

Back in Unity, open the setup dialog **Window > Google Play Games > Setup... > Android Setup**

@abstr_image 

  * **Enter the directory to save constants** \- Enter the folder for the constants file.
  * **Constants class name** \- this is the name of the C# class to create, including namespace.
  * **Resources Definition** \- paste the resource data from the Play Games console here.
  * **Web client ID** \- this is the client ID of the linked web app. It is only needed if you have a web-based backend for your game and need a server auth code to be exchanged for an access token by the backend server, or if you need an id token for the player to make other, non-game, API calls.



The setup process will configure your game with the client id and generate a C# class that contains constants for each of your resources.

## Setup Checklist

Make sure to do the following if they are relevant to your game:

@abstr_number . Add tester email addresses to the testing section of your game on the Play Games Console. @abstr_number . The SHA @abstr_number fingerprint used to create the linked Android app is from the keystore used to sign the Unity application.

## Add Achievements and Leaderboards

Add @abstr_hyperlink and @abstr_hyperlink to your game in the Google Play Developer Console. For each achievement and leaderboard you configure, make sure to note the corresponding **achievement ID** or **leaderboard ID** , as those will be needed when making the API calls. Achievement and leaderboard IDs are alphanumeric strings (e.g. "Cgkx @abstr_number eiuwi @abstr_number _AQ").

## Add Events

Events allow you to track user actions in your game and report on them with Analytics. Read more about how to configure and use Events on @abstr_hyperlink 

## Load Your Game Project

Next, load your game project into the Unity editor.

If you do not have a game project to work with, you can use the **Minimal** sample available in the **samples** directory. Using that sample will allow you to quickly test your setup and make sure you can access the API.

If you want to test a larger sample after you are familiar with the plugin, try the **CubicPilot** game. More information about building the samples can be found in the samples README file.

## Plugin Installation

To download the plugin, clone this Git repository into your file system (or download it as a ZIP file and unpack it). Then, look for the **unitypackage** file in the **current-build** directory:
    
    
    current-build/GooglePlayGamesPluginForUnity-X.YY.ZZ.unitypackage
    

To install the plugin, simply open your game project in Unity and import that file into your project's assets, as you would any other Unity package. This is accomplished through the **Assets > Import Package > Custom Package** menu item (you can also reach this menu it by right-clicking the **Assets** folder).

Next, make sure your current build platform is set to **Android**. From **File > Build Settings…** select **Android** and click **Switch Platform**. You should now see a new menu item was added under **Window > Google Play Games**. If you don't see the new menu items, refresh the assets by clicking **Assets > Refresh** and try again.

## Android Setup

Next, set up the path to your Android SDK installation in Unity. This is located in the preferences menu, under the **External Tools** section.

To configure your Unity game to run with Google Play Games on Android, first open the Android SDK manager and verify that you have downloaded the following packages. Depending on if you are using the SDK manager from Android Studio, or using the standalone SDK manager, the name of the components may be different. \- Google Play Services \- Android Support Library \- Local Maven repository for Support Libraries (Also known as Android Support Repository) \- Google Repository \- Android @abstr_number . @abstr_number (API @abstr_number ) (this does not affect the min SDK version).

Next, configure your game's package name. To do this, click **File > Build Settings**, select the **Android** platform and click **Player Settings** to show Unity's Player Settings window. In that window, look for the **Bundle Identifier** setting under **Other Settings**. Enter your package name there (for example _com.example.my.awesome.game_).

In order to sign in to Play Game Services, you need to sign your APK file, make sure that you are signing it with the correct certificate, that is, the one that corresponds to the SHA @abstr_number certificate fingerprint you entered in the Developer Console during the setup.

Next, click the **Window |Google Play Games|Setup - Android setup** menu item. This will display the Android setup screen.

Enter the Constants class name. This is the name of the fully qualified class that will be updated (or created) which contains the IDs of the game resources. The format of the name is .. For example, `AwesomeGame.GPGSIds`

Paste the resource definition data. This is the XML data from the Google Play Developer Console which contains the resource IDs as well as the Application ID for Android.

This data is found in the Google Play Developer Console by clicking "Get resources" on any of the resource pages (e.g. Achievements or Leaderboards), then clicking Android.

After pasting the data into the text area, click the **Setup** button.

**Note:** If you are using a web application or backend server with your game, you can link the web application to the game to enable getting the player's id token and/or email address. To do this, link a web application to the game in the Google Play Developer Console, and enter the client id for the web application into the setup dialog.

### Additional instructions on building for Android on Windows

If you are using Windows, you must make sure that your Java SDK installation can be accessed by Unity. To do this:

@abstr_number . Set the JAVA_HOME environment variable to your Java SDK installation path (for example, `C:\Program Files\Java\jdk @abstr_number . @abstr_number . @abstr_number _ @abstr_number`). @abstr_number . Add the Java SDK's `bin` folder to your `PATH` environment variable (for example, `C:\Program Files\Java\jdk @abstr_number . @abstr_number . @abstr_number _ @abstr_number \bin`) @abstr_number . Reboot.

**How to edit environment variables:** In Windows @abstr_number /XP/Vista/ @abstr_number , right-click **My Computer** , then **Properties** , then go to **Advanced System Properties** (or **System Properties** and then click the **Advanced** tab), then click **Environment Variables**. On Windows @abstr_number , press **Windows Key + W** and search for **environment variables** For more information, consult the documentation for your version of Windows.

## Run the Project

If you are working with the **Minimal** sample, you should be able to build and run the project at this point. You will see a screen with an **Authenticate** button, and you should be able to sign in when you click it.

To build and run on Android, click **File > Build Settings**, select the **Android** platform, then **Switch to Platform** , then **Build and Run**.

## ISocialPlatform Compliance

The Google Play Games plugin implements Unity's @abstr_hyperlink , for compatibility with games that already use that interface when integrating with other platforms. However, some features are unique to Play Games and are offered as extensions to the standard social interface provided by Unity.

The standard API calls can be accessed through the **Social.Active** object, which is a reference to an **ISocialPlatform** interface. The non-standard Google Play Games extensions can be accessed by casting the **Social.Active** object to the **PlayGamesPlatform** class, where the additional methods are available.

## Nearby Connections Configuration

In order to use nearby connections, a service id which uniquely identifies the set of applications that can interact needs to be configured. This is done by clicking the **Window > Google Play Games > Nearby Connections setup...** menu item. This will display the nearby conections setup screen. On this screen enter the service ID you want to use. It should be something that identifies your application, and follows the same rules as the bundle id (for example: com.example.myawesomegame.nearby). Once you enter the id, press **Setup**.

To use nearby connections, the player does not need to be authenticated, and no Google Play Developer Console configuration is needed.

For detailed information on nearby connection usage, please refer to nearby connections.

## Configuration & Initialization Play Game Services

In order to save game progress, handle multiplayer invitations and turn notifications, or require access to a player's Google+ social graph, the default configuration needs to be replaced with a custom configuration. To do this use the **PlayGamesClientConfiguration**. If your game does not use these features, then there is no need to initialize the platform configuration. Once the instance is initialized, make it your default social platform by calling **PlayGamesPlatform.Activate** :

@abstr_code_section 

After activated, you can access the Play Games platform through **Social.Active**. You should only call **PlayGamesPlatform.Activate** once in your application. Making this call will not display anything on the screen and will not interact with the user in any way.

## Adding additional Scopes

You can add additional scopes to the authentication process by calling `PlayGamesClientConfiguration.Builder().AddOauthScope(scope)`.

__Note: adding additional scopes with most likely require user consent when starting your game__.

## Sign in

To sign in, call **Social.localUser.Authenticate** , which is part of the standard Unity social platform interface.

@abstr_code_section 

Authentication will show the required consent dialogs. If the user has already signed into the game in the past, this process will be silent and the user will not have to interact with any dialogs.

Note that you cannot make any games API calls (unlock achievements, post scores, etc) until you get a successful return value from **Authenticate** , so it is good practice to put up a standby screen until the callback is called, to make sure the user can't start playing the game until the authentication process completes.

## Player Statistics

The Player Stats API let you tailor game experiences to specific segments of players and different stages of the player lifecycle. You can build tailored experiences for each player segment based on how players are progressing, spending, and engaging. For example, you can use this API to take proactive actions to encourage a less active player to re-engage with your game, such as by displaying and promoting new in-game items when the player signs in.

The callback takes two parameters: @abstr_number . The result code less than or equal to zero is success. See @abstr_hyperlink for all values. @abstr_number . The PlayerStats object of type GooglePlayGames.PlayGamesLocalUser.PlayerStats

For more information see @abstr_hyperlink .

The player stats are available after authenticating:

@abstr_code_section 

## Setting popup gravity

You can set the gravity used by popups when showing game services elements such as achievement notificartions. The default is TOP. This can only be set after authentication. For example:

@abstr_code_section 

## Revealing/Unlocking an Achievement

To unlock an achievement, use the **Social.ReportProgress** method with a progress value of @abstr_number . @abstr_number f:

@abstr_code_section 

Notice that according to the expected behavior of @abstr_hyperlink , a progress of @abstr_number . @abstr_number f means revealing the achievement and a progress of @abstr_number . @abstr_number f means unlocking the achievement. Therefore, to reveal an achievement (that was previously hidden) without unlocking it, simply call Social.ReportProgress with a progress of @abstr_number . @abstr_number f.

## Incrementing an Achievement

If your achievement is incremental, the Play Games implementation of **Social.ReportProgress** will try to behave as closely as possible to the expected behavior according to Unity's social API, but may not be exact. For this reason, we recommend that you do not use Social.ReportProgress for incremental achievements. Instead, use the **PlayGamesPlatform.IncrementAchievement** method, which is a Play Games extension.

@abstr_code_section 

## Posting a Score to a Leaderboard

To post a score to a leaderboard, call **Social.ReportScore**.

@abstr_code_section 

To post a score and include a metadata tag use the Play Game Services instance directly:

@abstr_code_section 

Note that the platform and the server will automatically discard scores that are lower than the player's existing high score, so you can submit scores freely without any checks to test whether or not the score is greater than the player's existing score.

## Showing the Achievements UI

To show the built-in UI for all achievements, call **Social.ShowAchievementsUI**.

@abstr_code_section 

## Showing the Leaderboard UI

To show the built-in UI for all leaderboards, call **Social.ShowLeaderboardUI**.

@abstr_code_section 

If you wish to show a particular leaderboard instead of all leaderboards, you can pass a leaderboard ID to the method. This, however, is a Play Games extension, so the Social.Active object needs to be cast to a PlayGamesPlatform object first:

@abstr_code_section 

## Accessing Leaderboard data

There are @abstr_number methods to retrieving the leaderboard score data.

### Using Social.ILeaderboard

This method uses the ILeaderboard interface to define the scope and filters for getting the data. This approach allows you to configure: @abstr_number . The leaderboard Id @abstr_number . The collection (social or public) @abstr_number . The timeframe (daily, weekly, all-time) @abstr_number . The rank position to start retrieving scores. @abstr_number . The number of scores (the default is @abstr_number ). @abstr_number . Filter by user id.

If the from parameter is non-positive, then the results returned are player-centered, meaning the scores around the current player's score are returned.

Note: the play game services API only supports paging, so retrieving using a high 'from' position will have a performance impact.

@abstr_code_section 

### Using PlayGamesPlatform.LoadScores()

This method uses the PlayGamesPlatform directly. This approach provides additional flexibility and information when accessing the leaderboard data.

@abstr_code_section 

The parameters for LoadScores() are:

@abstr_number . leaderboardId @abstr_number . start position (top scores or player centered) @abstr_number . row count @abstr_number . leaderboard collection (social or public) @abstr_number . time span (daily, weekly, all-time) @abstr_number . callback accepting a LeaderboardScoreData object.

The `LeaderboardScoreData` class is used to return information back to the caller when loading scores. The members are: @abstr_number . Id - the leaderboard id @abstr_number . Valid - true if the returned data is valid (the call was successful) @abstr_number . Status - the ResponseStatus of the call @abstr_number . ApproximateCount - the approximate number of scores in the leaderboard @abstr_number . Title - the title of the leaderboard @abstr_number . PlayerScore - the score of the current player @abstr_number . Scores - the list of scores @abstr_number . PrevPageToken - a token that can be used to call `LoadMoreScores()` to get the previous page of scores. @abstr_number . NextPageToken - a token that can be used to call `LoadMoreScores()` to get the next page of scores.

@abstr_code_section 

### Getting player names

Each score has the userId of the player that made the score. You can use `Social.LoadUsers()` to load the player profile. Remember that the contents of the player profile are subject to privacy settings of the players.

@abstr_code_section 

## Recording Events

Incrementing an event is very simple, just call the following method:

@abstr_code_section This call is "fire and forget", it will handle batching and execution for you in the background.

## Saving Game State to the Cloud

For details on saved games concepts and APIs please refer to the @abstr_hyperlink .

To enable support for saved games, the plugin must be initialized with saved games enabled by calling **PlayGamesPlatform.InitializeInstance** :

@abstr_code_section 

### Displaying saved games UI

The standard UI for selecting or creating a saved game entry is displayed by calling:

@abstr_code_section 

### Opening a saved game

In order to read or write data to a saved game, the saved game needs to be opened. Since the saved game state is cached locally on the device and saved to the cloud, it is possible to encounter conflicts in the state of the saved data. A conflict happens when a device attempts to save state to the cloud but the data currently on the cloud was written by a different device. These conflicts need to be resolved when opening the saved game data. There are @abstr_number open methods that handle conflict resolution, the first **OpenWithAutomaticConflictResolution** accepts a standard resolution strategy type and automatically resolves the conflicts. The other method, **OpenWithManualConflictResolution** accepts a callback method to allow the manual resolution of the conflict.

See __GooglePlayGames/BasicApi/SavedGame/ISavedGameClient.cs__ for more details on these methods.

@abstr_code_section 

### Writing a saved game

Once the saved game file is opened, it can be written to save the game state. This is done by calling **CommitUpdate**. There are four parameters to CommitUpdate:

@abstr_number . the saved game metadata passed to the callback passed to one of the Open calls. @abstr_number . the updates to make to the metadata. @abstr_number . the actual byte array of data @abstr_number . a callback to call when the commit is complete.

@abstr_code_section 

### Reading a saved game

Once the saved game file is opened, it can be read to load the game state. This is done by calling **ReadBinaryData**.

@abstr_code_section 

### Deleting a saved game

Once the saved game file is opened, it can be deleted. This is done by calling **Delete**.

@abstr_code_section 

## Retrieving server authentication codes

In order to access Google APIs on a backend web server on behalf of the current player, you need to get an authentication code from the client application and pass this to your web server application. This code can then be exchanged for an access token to make calls to the various APIs. For more details on this flow see: @abstr_hyperlink .

To get the Server Auth code: @abstr_number . Configure the web client Id of the web application linked to your game in the Play Game Console. @abstr_number . Call `PlayGamesClientConfiguration.Builder.RequestServerAuthCode(false)` when creating the configuration. @abstr_number . Call `PlayGamesPlatform.Instance.GetServerAuthCode()` once the player is authenticated. @abstr_number . Pass this code to your server application.

### Getting another server auth code after exchanging the first code

If your back end server interactions requires you to send a server auth code more than once per authenticated session, you can call `PlaPlayGamesPlatform.Instance.GetAnotherServerAuthCode(Action<string> callback)` This method requires the player to be aready authenticated and correctly configured to request server auth codes on this client. This method is implemented by calling Google Sign-in silently which returns a new server auth code when already signed in.

## Retrieving player's email

In order to access the player's email address: @abstr_number . Call `PlayGamesClientConfiguration.Builder.RequestEmail()` when creating the configuration. @abstr_number . Access the email property `((PlayGamesLocalUser) Social.localUser).Email` after the player is authenticated.

__Note:__ If all that is needed is a persistent unique identifier for the player, then you should use the player's id. This is a unique ID specific to that player and is the same value all the time.

@abstr_code_section 

## Retrieving player's ID Token

To get the player's OAuth ID token: @abstr_number . Call `PlayGamesClientConfiguration.Builder.RequestIdToken()` when creating the configuration. @abstr_number . Access the idtoken property `((PlayGamesLocalUser) Social.localUser).GetIdToken()` after the player is authenticated.

__Note:__ The ID Token can be used to identify the real player identity. As a result requesting the ID Token will cause a consent screen to be presented to the user during login.

## Loading Friends

To load the friends of the current player, you can use the ISocial framework. This call is asynchronous, so the friends need to be processed in the callback.

@abstr_code_section 

## Multiplayer

If you wish to integrate **turn-based multiplayer** in your game, refer to the Getting Started with Turn-Based Multiplayer.

If you wish to integrate **real-time multiplayer** in your game, refer to the Getting Started with Real-Time Multiplayer.

## Video Recording

If you wish to integrate the Play Games video capture functionality into your game, you can use the following features.

### Get Video Capture Capabilities

You can access the video capture capabilities of a device, including if the camera, mic, or write storage can be used, as well as the capture modes (save as a file or live stream) and quality levels (SD, HD, etc.).

@abstr_code_section 

### Launch the Video Capture Overlay

Before activating the video capture overlay, be sure to check that it can be launched with **IsCaptureSupported** and **IsCaptureAvailable**.

@abstr_code_section 

### Get the Current Video Capture State

When required, you can access the current state of the video capture overlay, including whether or not it is recording, and what mode and resolution it is recording in.

@abstr_code_section 

### Setup a Listener for Live Updates to the Capture State

To receive an update whenever the status of the video capture overlay changes, use **RegisterCaptureOverlayStateChangedListener**. Only one listener can be registered at a time, subsequent calls will replace the previous listener. The listener can be unregistered with **UnregisterCaptureOverlayStateChangedListener**.

@abstr_code_section 

The object passed to **RegisterCaptureOverlayStateChangedListener** must implement **CaptureOverlayStateListener** from **GooglePlayGames.BasicApi.Video**. The **OnCaptureOverlayStateChanged** in that object will be called when the state changes.

@abstr_code_section 

## Sign out

To sign the user out, use the **PlayGamesPlatform.SignOut** method.

@abstr_code_section 

After signing out, no further API calls can be made until the user authenticates again.

## Decreasing apk size

It is possible to decrease the size of the Play Games Services Unity Plugin by removing code for the Play Games Services features that your game doesn’t use by using Proguard. Proguard will remove the Play Games Unity plugin code for features that are not used in your game, so your game ships with only the code that is needed and minimizes the size impact of using Play Games Services.

Additionally, it is possible to reduce the size of the entire Unity project using Unity’s @abstr_hyperlink , which will compress your entire project. This can be used in conjunction with Proguard.

### Play Games Services Proguard configuration

@abstr_number . Go to `File > Build Settings > Player Settings` and click `Publishing Settings` section. Choose `Proguard` for `Minify > Release`. Then, enable `User Proguard File`. If you want the plugin to be proguarded for debug apks as well, you can choose `Proguard` for `Minify > Debug`. @abstr_number . Copy the content of the proguard configuration into `Assets/Plugins/Android/proguard-user.txt`.

## (Advanced) Using the Plugin Without Overriding the Default Social Platform

When you call `PlayGamesPlatform.Activate`, Google Play Games becomes your default social platform implementation, which means that static calls to methods in `Social` and `Social.Active` will be carried out by the Google Play Games plugin. This is the desired behavior for most games using the plugin.

However, if for some reason you wish to keep the default implementation accessible (for example, to use it to submit achievements and leaderboards to a different social platform), you can use the Google Play Games plugin without overriding the default one. To do this:

@abstr_number . Do not call `PlayGamesPlatform.Activate` @abstr_number . If `Xyz` is the name of a method you wish to call on the `Social` class, do not call `Social.Xyz`. Instead, call `PlayGamesPlatform.Instance.Xyz` @abstr_number . Do not use `Social.Active` when interacting with Google Play Games. Instead, use `PlayGamesPlatform.Instance`.

That way, you can even submit scores and achievements simultaneously to two or more social platforms: @abstr_code_section 

## Special Thanks

This section lists people who have contributed to this project by writing code, improving documentation or fixing bugs.

  * @abstr_hyperlink for figuring out that setting JAVA_HOME is necessary on Windows.
  * @abstr_hyperlink for fixing a bug with the parameter type of showErrorDialog on the support library.
  * @abstr_hyperlink for fixing an issue where OnAchievementsLoaded was not accepting an OPERATION_DEFERRED result code as a success.
  * @abstr_hyperlink for helping debug @abstr_hyperlink that caused API calls to be queued up rather than executed even when connected.


