@abstr_image 

@abstr_image @abstr_image @abstr_image @abstr_image @abstr_image 

# Alerts & Pickers

Advanced usage of native UIAlertController with TextField, TextView, DatePicker, PickerView, TableView, CollectionView and MapView.

### Features

  * [x] Custom pickers based on UITextField, UITextView, UIDatePicker, UIPickerView, UITableView, UICollectionView and MKMapView.
  * [x] Example using a Storyboard.
  * [x] Easy contentViewController placement.
  * [x] Attributed title label and message label.
  * [x] Button customization: image and title color.
  * [x] Understandable action button placement.
  * [x] Easy presentation.
  * [x] Pure Swift @abstr_number .



@abstr_image @abstr_image 

## Usage

@abstr_image @abstr_image 

  * New Alert

@abstr_code_section 

  * Set and styling title

@abstr_code_section 

  * Set and styling message

@abstr_code_section 

  * Add button with image

@abstr_code_section 

  * Show Alert

@abstr_code_section 




@abstr_image @abstr_image 

## Set Content ViewController

When setting your own custom `UIViewController` into `UIAlertController` keep in mind to set `prefferedContentSize.height` of the controller otherwise it will no effect. You can not set `prefferedContentSize.width`.

@abstr_code_section 

## Pickers

For UX better to use `.actionSheet` style in `UIAlertController` when set picker into `contentViewController`. If you like you can use `.alert` style as well, buy `.actionSheet` style is wider and User can see more as well as action button is placing at bottom that also more convenience for User to touch it.

**UITextField** In native UIAlertController you can only add `UITextField` to `.alert` style with default style and you can not change such properties as `.borderColor`, `.borderWidth`, `.frame.size` and so on. But if you make your own `UIViewController` with `UITextField`, it will solve all these problems.

## One TextField Picker

You can use both styles `.alert` and `.actionSheet` of `UIAlertController`.

@abstr_image @abstr_image 

@abstr_code_section 

## Two TextFields Picker

You can use both styles `.alert` and `.actionSheet` of `UIAlertController`.

@abstr_image @abstr_image 

@abstr_code_section 

## DatePicker

`UIDatePicker` does not look very much in `.alert` style.

@abstr_image @abstr_image 

@abstr_code_section 

## PickerView

Example how to use `UIPickerView` as `contentViewController` and change height of the `UIAlertController`.

@abstr_image @abstr_image 

@abstr_code_section 

## Locale Pickers

  * #### Country Picker



@abstr_image @abstr_image 

@abstr_code_section 

  * #### Phone Code Picker



@abstr_image @abstr_image 

@abstr_code_section 

  * #### Currency Picker



@abstr_image @abstr_image 

@abstr_code_section 

## Image Picker

@abstr_image @abstr_image 

  * Horizontal Image Picker with paging and single selection:

@abstr_code_section 

  * Vertical Image Picker w/o paging and with multiple selection:

@abstr_code_section 




## PhotoLibrary Picker

@abstr_image 

@abstr_code_section 

## ColorPicker

Example how to use UIViewController instantiated from Storyboard with Autolayout as `contentViewController` in the `UIAlertController`.

@abstr_image @abstr_image 

@abstr_code_section 

## Contacts Picker

@abstr_image @abstr_image 

@abstr_code_section 

## Location Picker

@abstr_image 

@abstr_code_section 

## Telegram Picker

@abstr_image 

@abstr_code_section 

## TextViewer

@abstr_image @abstr_image 

@abstr_code_section 

## Alerts vs. Action Sheets

There are some things to keep in mind when using `.actionSheet` and `.alert` styles:

  * Pickers better to use in `.actionSheet` style.
  * `UITextField` can be used in both styles.



## Installing

#### Manually

Download and drop `/Source` folder in your project.

## Requirements

  * Swift @abstr_number 
  * iOS @abstr_number or higher



## Authors

  * **Roman Volodko** \- @abstr_hyperlink 



## Communication

  * If you **found a bug** , open an issue.
  * If you **have a feature request** , open an issue.
  * If you **want to contribute** , submit a pull request.



## License

This project is licensed under the MIT License.
