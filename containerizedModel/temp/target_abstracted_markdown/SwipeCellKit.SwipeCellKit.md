# SwipeCellKit

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

_Swipeable UITableViewCell/UICollectionViewCell based on the stock Mail.app, implemented in Swift._

@abstr_image 

## About

A swipeable `UITableViewCell` or `UICollectionViewCell` with support for:

  * Left and right swipe actions
  * Action buttons with: _text only, text + image, image only_
  * Haptic Feedback
  * Customizable transitions: _Border, Drag, and Reveal_
  * Customizable action button behavior during swipe
  * Animated expansion when dragging past threshold
  * Customizable expansion animations
  * Support for both `UITableView` and `UICollectionView`
  * Accessibility



## Background

Check out my @abstr_hyperlink on how _SwipeCellKit_ came to be.

## Demo

### Transition Styles

The transition style describes how the action buttons are exposed during the swipe.

#### Border

@abstr_image 

#### Drag

@abstr_image 

#### Reveal

@abstr_image 

#### Customized

@abstr_image 

### Expansion Styles

The expansion style describes the behavior when the cell is swiped past a defined threshold.

#### None

@abstr_image 

#### Selection

@abstr_image 

#### Destructive

@abstr_image 

#### Customized

@abstr_image 

## Requirements

  * Swift @abstr_number . @abstr_number 
  * Xcode @abstr_number . @abstr_number +
  * iOS @abstr_number . @abstr_number +



## Installation

####  @abstr_hyperlink (recommended)

`@abstr_code_section`

####  @abstr_hyperlink 

`@abstr_code_section`

## Documentation

Read the @abstr_hyperlink . Generated with @abstr_hyperlink . Hosted by @abstr_hyperlink .

## Usage for UITableView

Set the `delegate` property on `SwipeTableViewCell`:

`@abstr_code_section`

Adopt the `SwipeTableViewCellDelegate` protocol:

`@abstr_code_section`

Optionally, you can implement the `editActionsOptionsForRowAt` method to customize the behavior of the swipe actions:

`@abstr_code_section`

## Usage for UICollectionView

Set the `delegate` property on `SwipeCollectionViewCell`:

`@abstr_code_section`

Adopt the `SwipeCollectionViewCellDelegate` protocol:

`@abstr_code_section`

Optionally, you can implement the `editActionsOptionsForItemAt` method to customize the behavior of the swipe actions:

`@abstr_code_section`

### Transitions

Three built-in transition styles are provided by `SwipeTransitionStyle`: 

  * .border: The visible action area is equally divide between all action buttons.
  * .drag: The visible action area is dragged, pinned to the cell, with each action button fully sized as it is exposed.
  * .reveal: The visible action area sits behind the cell, pinned to the edge of the table view, and is revealed as the cell is dragged aside.



See @abstr_hyperlink for more details on customizing button appearance as the swipe is performed.

#### Transition Delegate

Transition for a `SwipeAction` can be observered by setting a `SwipeActionTransitioning` on the `transitionDelegate` property. This allows you to observe what percentage is visible and access to the underlying `UIButton` for that `SwipeAction`. 

### Expansion

Four built-in expansion styles are provided by `SwipeExpansionStyle`: 

  * .selection
  * .destructive (like Mail.app)
  * .destructiveAfterFill (like Mailbox/Tweetbot)
  * .fill



Much effort has gone into making `SwipeExpansionStyle` extremely customizable. If these built-in styles do not meet your needs, see @abstr_hyperlink for more details on creating custom styles.

The built-in `.fill` expansion style requires manual action fulfillment. This means your action handler must call `SwipeAction.fulfill(style:)` at some point during or after invocation to resolve the fill expansion. The supplied `ExpansionFulfillmentStyle` allows you to delete or reset the cell at some later point (possibly after further user interaction).

The built-in `.destructive`, and `.destructiveAfterFill` expansion styles are configured to automatically perform row deletion when the action handler is invoked (automatic fulfillment). Your deletion behavior may require coordination with other row animations (eg. inside `beginUpdates` and `endUpdates`). In this case, you can easily create a custom `SwipeExpansionStyle` which requires manual fulfillment to trigger deletion:

`@abstr_code_section`

> **NOTE** : You must call `SwipeAction.fulfill(with style:)` at some point while/after your action handler is invoked to trigger deletion. Do not call `deleteRows` directly.

`@abstr_code_section`

## Advanced

See the @abstr_hyperlink for more details on customization.

## Credits

Maintained by @abstr_hyperlink .

## Showcase

We're interested in knowing @abstr_hyperlink in their app. Please submit a pull request to add your app! 

## License

`SwipeCellKit` is released under an @abstr_hyperlink . See `LICENSE` for details.

_Please provide attribution, it is greatly appreciated._
