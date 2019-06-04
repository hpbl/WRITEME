@abstr_image 

# React Web @abstr_hyperlink @abstr_hyperlink 

> A framework for building web apps with React Native compatible API.

## Examples

@abstr_image 

### Web Examples

> Open with mobile device or emulate mobile in developer tools

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### Example Source

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Adding web to an existing React Native project

If you already have a React Native project and want to add web support, you need to execute the following commands in your existing project directory:

@abstr_number . Install `npm install react-web-cli -g` @abstr_number . Execute `react-web init <ExistedProjectDir>` to install stable npm version, or execute `react-web init --version git+https://github.com/taobaofed/react-web.git <ExistedProjectDir>` to install latest git version. That install `react-web` and `devDependencies` to your project and make a `web` directory with `webpack.config.js` file under your project @abstr_number . Register your app into a web platform. To do so, add the code from **Fix platform differences. @abstr_number . Should run application on web platform** to your index.ios.js file @abstr_number . Execute `react-web start` that starts the web dev server @abstr_number . Execute `react-web bundle` that builds the output

## Getting Started

### Install

@abstr_code_section 

### Add Webpack configuration

Inside your webpack configuration, alias the `react-native` package to the `react-web` package, then install and add @abstr_hyperlink plugin.

@abstr_code_section 

> See more detail of the `webpack.config.js` from @abstr_hyperlink 

#### What does HasteResolverPlugin do?

When using components of `react-web`, just `require('ReactActivityIndicator')`, and Webpack will build a bundle with `ActivityIndicator.web.js` for web platform.

`HasteResolverPlugin` will do the following for you:

@abstr_number . Walk over all components and check out the `@providesModule` info. @abstr_number . When webpack build bundle, it makes your components recognised rather than throwing an error. @abstr_number . It will help webpack build bundle with correct file depending on the tar* platform.

You can find something like `@providesModule ReactActivityIndicator` on `react-web` component's comment, yes, it's for `HasteResolverPlugin`.

### Require modules

#### The CommonJS way

@abstr_code_section 

This reference method looks like we're in the way of using the native react-native way:

Like the require module in Node.js, and through @abstr_hyperlink , allows some components to be referenced in the scope of the current file.

But in fact it is quite different in React Web. When `require('react-native')`, in the construction of the webpack will be renamed, equivalent to `require('react-web')`.

At the same time, this form of writing will put all the components into at one time, including `ReactAppRegistry` `ReactView` and so on, even some components the you did not use.

#### The Haste way

@abstr_code_section 

In this way, we load our components on demand, such as `ReactAppRegistry` or `ReactView` and so on.

Packaged components so that we no longer need to care about the differences between the platform.

As mentioned above, the HasteResolverPlugin plugin will help webpack to compile and package the code.

### Fix platform differences

@abstr_number . Native events without direct pageX/pageY on web platform @abstr_code_section 

@abstr_number . Should run application on web platform @abstr_code_section 

@abstr_number . Should care about fetch domain on web platform @abstr_code_section 

@abstr_number . Without some APIs like `LayoutAnimation` on web platform @abstr_code_section 

@abstr_number . Should manually specify the height of ScrollView @abstr_code_section 

### React Native compatible

#### Components

  * ActivityIndicatorIOS - ReactActivityIndicator
  * ActivityIndicator - ReactActivityIndicator
  * DatePickerIOS - ReactDatePicker _TODO_
  * DrawerLayoutAndroid - ReactDrawerLayout
  * Image - ReactImage
  * ListView - ReactListView
  * Modal - ReactModal
  * Navigator - ReactNavigator
  * PickerIOS ReactPicker
  * ProgressViewIOS - ReactProgressView
  * ScrollView - ReactScrollView
  * SegmentedControlIOS - ReactSegmentedControl
  * SliderIOS - ReactSlider
  * Switch - ReactSwitch
  * SwitchAndroid - ReactSwitch
  * SwitchIOS - ReactSwitch
  * RefreshControl - ReactRefreshControl
  * TabBarIOS - ReactTabBar
  * Text - ReactText
  * TextInput - ReactTextInput
  * ToastAndroid - ReactToast
  * Touchable - ReactTouchable
  * TouchableHighlight - ReactTouchableHighlight
  * TouchableOpacity - ReactTouchableOpacity
  * TouchableWithoutFeedback - ReactTouchableWithoutFeedback
  * View - ReactView
  * ViewPagerAndroid - ReactViewPager



#### APIs

  * Alert - ReactAlert
  * AlertIOS - ReactAlert
  * Animated - ReactAnimated
  * AppRegistry - ReactAppRegistry
  * AsyncStorage - ReactAsyncStorage
  * Dimensions - ReactDimensions
  * Easing - ReactEasing
  * InteractionManager - ReactInteractionManager
  * LayoutAnimation - ReactLayoutAnimation
  * PanResponder - ReactPanResponder
  * PixelRatio - ReactPixelRatio
  * StyleSheet - ReactStyleSheet



#### Plugins

  * NativeModules - ReactNativeModules
  * Platform - ReactPlatform
  * processColor - ReactProcessColor



## Scripts

  * Linting - **npm run lint** \- Must run it before commit.
  * Testing - **npm test** \- Run unit testing by jest.
  * Developing - **npm start** \- This will run a server at *localhost: @abstr_number * and use Hot Module Reloading.
  * Demo deployment - **npm run demo** \- Generate demo assets under _pages_ directory.



## License

React Web is BSD licensed.
