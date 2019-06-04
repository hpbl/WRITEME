@abstr_hyperlink 

# mas-cli

A simple command line interface for the Mac App Store. Designed for scripting and automation.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## 📲 Install

### 🍺 Homebrew

@abstr_hyperlink is the preferred way to install:

@abstr_code_section 

### ☎️ Older macOS Versions

macOS @abstr_number . @abstr_number (High Sierra) is required to install mas from the core Homebrew formula. We provide a @abstr_hyperlink with pre-built bottles for all macOS versions since @abstr_number . @abstr_number .

#### 😴 TL;DR

Just run this command:

@abstr_code_section 

### 🐙 GitHub Releases

Alternatively, binaries are available in the @abstr_hyperlink 

## 🤳🏻 Usage

Each application in the Mac App Store has a product identifier which is also used for mas-cli commands. Using `mas list` will show all installed applications and their product identifiers.

@abstr_code_section 

It is possible to search for applications by name using `mas search` which will search the Mac App Store and return matching identifiers. Include the `--price` flag to include prices in the result.

@abstr_code_section 

To install or update an application simply run `mas install` with an application identifier:

@abstr_code_section 

If you want to install the first result that the `search` command returns, use the `lucky` command.

@abstr_code_section 

> Please note that this command will not allow you to install (or even purchase) an app for the first time: it must already be in the Purchased tab of the App Store.

Use `mas outdated` to list all applications with pending updates.

@abstr_code_section 

> `mas` is only able to install/update applications that are listed in the Mac App Store itself. Use [`softwareupdate( @abstr_number )`] utility for downloading system updates (like iTunes, Xcode Command Line Tools, etc)

To install all pending updates run `mas upgrade`.

@abstr_code_section 

Updates can be performed selectively by providing the app identifier(s) to `mas upgrade`

@abstr_code_section 

### 🚏📥 Sign-in

To sign into the Mac App Store for the first time run `mas signin`.

@abstr_code_section 

> ⚠️ Due to breaking changes in the underlying API that mas uses to interact with the Mac App Store, the `signin` command has been temporarily disabled on macOS @abstr_number . @abstr_number + ⛔. For more information on this issue, see @abstr_hyperlink .

If you experience issues signing in this way, you can ask to signin using a graphical dialog (provided by Mac App Store application):

@abstr_code_section 

You can also embed your password in the command.

@abstr_code_section 

Use `mas signout` to sign out from the Mac App Store.

## 🍺 Homebrew integration

`mas` is integrated with [homebrew-bundle]. If `mas` is installed, and you run `brew bundle dump`, then your Mac App Store apps will be included in the Brewfile created. See the [homebrew-bundle] docs for more details.

## 💥 When something doesn't work

If you see the error "This redownload is not available for this Apple ID either because it was bought by a different user of the item was refunded or cancelled.", it's probably because you haven't installed the app through the App Store yet. See @abstr_hyperlink .

If `mas` doesn't work for you as expected (e.g. you can't update/download apps), run `mas reset` and try again. If the issue persists, please @abstr_hyperlink ! All your feedback is much appreciated ✨

## 📺 Using `tmux`

`mas` operates via the same system services as the Mac App Store. These exist as separate processes with communication through XPC. As a result of this, `mas` experiences similar problems as the pasteboard when running inside `tmux`. A @abstr_hyperlink to fix pasteboard behaviour which also works for `mas`.

You should consider configuring `tmux` to use the wrapper but if you do not wish to do this it can be used on a one-off basis as follows:

@abstr_code_section 

## ℹ️ Build from source

You can now build from Xcode by opening `mas-cli.xcodeproj`, or from the Terminal:

@abstr_code_section 

Build output can be found in the `build/` directory within the project.

## ✅ Tests

The tests in this project are a recent work-in-progress. Since Xcode does not officially support tests for command-line tool targets, all logic is part of the MasKit target with tests in MasKitTests. Tests are written using [Quick].

## 📄 License

mas-cli was created by @abstr_hyperlink . Code is under the MIT license.
