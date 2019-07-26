@abstr_hyperlink @abstr_hyperlink 

# react-native-linear-gradient

A `<LinearGradient>` component for react-native, as seen in @abstr_hyperlink .

## Add it to your project

First, install it with `npm install react-native-linear-gradient --save`

Then you can try to link the project automatically:

`$ react-native link react-native-linear-gradient`

or do it manually as described below:

### iOS

  * Run `npm install react-native-linear-gradient --save`



Then either:

##### Cocoapods

add the following line to your Podfile:

@abstr_code_section 

or:

##### Manually

@abstr_number . Open your project in XCode, right click on `Libraries` and click `Add Files to "Your Project Name"` Look under `node_modules/react-native-linear-gradient` and add `BVLinearGradient.xcodeproj`. @abstr_hyperlink @abstr_hyperlink . @abstr_number . Add `libBVLinearGradient.a` to `Build Phases -> Link Binary With Libraries` @abstr_hyperlink @abstr_hyperlink . @abstr_number . Click on `BVLinearGradient.xcodeproj` in `Libraries` and go the `Build Settings` tab. Double click the text to the right of `Header Search Paths` and verify that it has `$(SRCROOT)/../react-native/React` \- if it isn't, then add it. This is so XCode is able to find the headers that the `BVLinearGradient` source files are referring to by pointing to the header files installed within the `react-native` `node_modules` directory. @abstr_hyperlink .

Then:

  * Whenever you want to use it within React code now you can: `import LinearGradient from 'react-native-linear-gradient';`



**If you're having trouble, you can point your`package.json` at github to see if the issue has been fixed. Simply change the dependency**

`"react-native-linear-gradient": "react-native-community/react-native-linear-gradient",`

**to get the data right from github instead of npm and then`npm install`**

For instance the podspec file does not contain the right data (author attributes etc..) in npm while it does in the github repo.

#### Android

  * Run `npm install react-native-linear-gradient --save`



Then:

@abstr_number . in `android/settings.gradle` @abstr_code_section 

@abstr_number . in `android/app/build.gradle` add: @abstr_code_section 

@abstr_number . and finally, in `android/app/src/main/java/com/{YOUR_APP_NAME}/MainActivity.java` for react-native < @abstr_number . @abstr_number , or `android/app/src/main/java/com/{YOUR_APP_NAME}/MainApplication.java` for react-native >= @abstr_number . @abstr_number add: @abstr_code_section 

### Windows (WPF)

@abstr_number . in `windows/MyApp.sln` Add -> Existing Project: `node_modules/react-native-linear-gradient/windows/LinearGradientWPF/LinearGradientWPF.csproj`

@abstr_number . in `windows/MyApp/MyAppWPF/MyAppWPF.csproj` Add -> Reference -> LinearGradientWPF

@abstr_number . in `windows/MyApp/MyAppWPF/AppReactPage.cs` add: `using LinearGradient;` and @abstr_code_section 

## Examples

### Simple

The following code will produce something like this:

@abstr_image 

@abstr_code_section 

### Horizontal gradient

Using the styles from above, set `start` and `end` like this to make the gradient go from left to right, instead of from top to bottom:

@abstr_code_section 

### Text gradient (iOS)

On iOS you can use the `MaskedViewIOS` to display text with a gradient. The trick here is to render the text twice; once for the mask, and once to let the gradient have the correct size (hence the `opacity: @abstr_number`):

@abstr_code_section 

### Additional props

In addition to regular `View` props, you can also provide additional props to customize your gradient look:

#### colors

An array of at least two color values that represent gradient colors. Example: `['red', 'blue']` sets gradient from red to blue.

#### start

An optional object of the following type: `{ x: number, y: number }`. Coordinates declare the position that the gradient starts at, as a fraction of the overall size of the gradient, starting from the top left corner. Example: `{ x: @abstr_number . @abstr_number , y: @abstr_number . @abstr_number }` means that the gradient will start @abstr_number % from the top and @abstr_number % from the left.

#### end

Same as start, but for the end of the gradient.

#### locations

An optional array of numbers defining the location of each gradient color stop, mapping to the color with the same index in `colors` prop. Example: `[ @abstr_number . @abstr_number , @abstr_number . @abstr_number , @abstr_number ]` means that first color will take @abstr_number % - @abstr_number %, second color will take @abstr_number % - @abstr_number % and finally third color will occupy @abstr_number % - @abstr_number %.

@abstr_code_section 

@abstr_image 

#### useAngle / angle / angleCenter

You may want to achieve an angled gradient effect, similar to those in image editors like Photoshop.   
One issue is that you have to calculate the angle based on the view's size, which only happens asynchronously and will cause unwanted flickr.

In order to do that correctly you can set `{ useAngle: true, angle: @abstr_number , angleCenter: { x: @abstr_number . @abstr_number , y: @abstr_number . @abstr_number } }`, to achieve a gradient with a @abstr_number degrees angle, with its center positioned in the view's exact center.

`useAngle` is used to turn on/off angle based calculation (as opposed to `start`/`end`).   
`angle` is the angle in degrees.   
`angleCenter` is the center point of the angle (will control the weight and stretch of the gradient like it does in photoshop.

### Updating the values for fun

Check out @abstr_hyperlink (`git clone` this project, cd into it, npm install, open in XCode and run) to see how this is done:

@abstr_image 

_This gif was created using @abstr_hyperlink - a great piece of free OSS_

### An example app

You can see this component in action in @abstr_hyperlink .

### Other platforms

  * Web: @abstr_hyperlink 



### License

License is MIT
