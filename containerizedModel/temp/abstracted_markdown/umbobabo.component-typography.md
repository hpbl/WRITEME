# component-typography

Provides typography postCSS variables for other components to use.

# Variables we have around here

## `--fontfamily-display` and `--fontfamily-body`

By using `var(--fontfamily-display)` and `var(--fontfamily-body)`, respectively, you will get a serif (Milo), or a sans-serif font (Halifax), and their respective fallback fonts. By standardizing this we enable future changes to the main sans-serif and serif fonts of the website to be much simpler to perform, besides making it easier to provide font fallbacks.

## `text-size-step-X`

(Where X is a number from `- @abstr_number` to `@abstr_number`)

These variables contain a font-size in `em`s, incrementing in a @abstr_hyperlink (a Major Second scale, or @abstr_number . @abstr_number ). Use these to calculate values for `font-size`.

For example, `var(--text-size-step- @abstr_number )` is the value in `em`s for the font size in the second step of the modular scale.

## `--text-line-height-Y-on-step-X`

(Where X is a number from `- @abstr_number` to `@abstr_number`, and `Y` is one or two words `separated-by-dashes`)

These variables represent the line height for a combination of font weight, style and size.

Values for Y:

  * `body` \- Body text
  * `body-bold` \- Body text, in bold
  * `body-light` \- Body text, light
  * `display` \- Display text
  * `display-italic` \- Display text, italic



for example, `var(--text-line-height-body-bold-on-step- @abstr_number )` is the correct `line-height` value for body text in bold and in the @abstr_number th step of the modular scale.
