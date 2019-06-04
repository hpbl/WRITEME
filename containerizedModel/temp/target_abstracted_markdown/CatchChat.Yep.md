# Yep

A community where geniuses meet

https://soyep.com

@abstr_image 

# Yep: Project Introductory Guide

> Please build with the latest CocoaPods v @abstr_number . @abstr_number . @abstr_number and Xcode @abstr_number . @abstr_number .

## Intro

Yep is a nifty and lightweight social networking app, revolving around the theme of "Meeting Genius", enabling users to find experts or other learners of a particular domain.

The project's architecture is easy to understand, following the common software pattern MVC, separating UI, business logic and data model. Now, let's dive into the Yep project!

## Model

@abstr_hyperlink helps us a lot with data persistence. You can checkout the `Realm/Models.swift` file to learn how we add, modify, update or delete data in Realm database.

## UI(View & ViewController)

We use Storyboard to join different view controllers together. You can take a glance at the `Main.storyboard` file. Thanks to the **Storyboard References** feature, we break up storyboards into a set of smaller storyboards. Easy to maintain and handle `.storyboard` files under source control, right?

At the same time, you should notice that some views are `@IBDesignable`. You can use Interface Builder, drag the view out and observe changes.

## Activity

Without integrating WeChat or Weibo SDK, Yep uses @abstr_hyperlink with the native `UIActivityViewController`. See `Activities/WeChatActivity.swift`.

## Service

You can find all Services under `Services` directory. Our services are divided into following parts:

@abstr_number . User-related operation service (`YepService.swift`): Sign-in, phone verification @abstr_number . User operation service (`YepServiceSync.swift`): Skills, messages @abstr_number . Network requests service (`YepNetworking.swift`): Network requests, JSON parsing/serialization @abstr_number . Data download service (`YepDownloader.swift`): Audio, video downloading @abstr_number . Feeds (`FayeService.swift`) @abstr_number . Cloud storage service (`YepStorageService.swift`) @abstr_number . Audio and video service (`YepAudioService.swift`): Based on AVFoundation and AudioToolbox @abstr_number . Location service (`YepLocationService.swift`) @abstr_number . Social info service (`SocialWorkService.swift`): Get user's GitHub, Dribbble and Instagram info @abstr_number . Open Graph Service (`OpenGraphService.swift`): Get iBooks, App and Apple Music info

## Performance

In order to improve FPS rate, we do image caching (`Caches` folder).

Wants to learn more? View @abstr_hyperlink .

## Development

If you like to join us developing Yep, fork this repo and use git flow on `develop` branch to create a new branch for your developing. When you finish, send a pull request.

Please ensure each commit is minimized for code review.

Please stop using simulator's waterfall image as your avatar.

You can track our progress at @abstr_hyperlink .

## License

MIT

### 中文指南
