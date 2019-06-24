# Inter

Inter is a typeface specially designed for user interfaces with focus on high legibility of small-to-medium sized text on computer screens.

The family features a tall x-height to aid in readability of mixed-case and lower-case text. Several OpenType features are provided as well, like contextual alternates that adjusts punctuation depending on the shape of surrounding glyphs, slashed zero for when you need to disambiguate " @abstr_number " from "o", tabular numbers, etc.

@abstr_hyperlink 

###  @abstr_hyperlink 

After downloading the zip from above:

@abstr_number . Double-click the downloaded zip file to unpack or open it. @abstr_number . Follow the instructions in "install-mac.txt" or "install-win.txt", depending on what operating system you're using.

## Design

Inter is similar to Roboto, San Francisco, Akkurat, Asap, Lucida Grande and other "UI" and "Text" typefaces. Some trade-offs were made in order to make this typeface work really well at small sizes:

  * Currently not suitable for very large sizes because of some small-scale glyph optimizations (like "pits" and "traps") that help rasterization at small sizes but stand out and interfere at large sizes.
  * Rasterized at sizes below @abstr_number px, some stems—like the horizontal center of "E", "F", or vertical center of "m"—are drawn with two semi-opaque pixels instead of one solid. This is because we "prioritize" (optimize for) higher-density rasterizations. If we move these stems to an off-center position—so that they can be drawn sharply at e.g. @abstr_number px—text will be less legible at higher resolutions.



Current font styles:

| Name | Weight class | -------------------- | ---------------- | Thin | @abstr_number | Thin Italic | @abstr_number | Extra Light | @abstr_number | Extra Light Italic | @abstr_number | Light | @abstr_number | Light Italic | @abstr_number | Regular | @abstr_number | Italic | @abstr_number | Medium | @abstr_number | Medium Italic | @abstr_number | Semi Bold | @abstr_number | Semi Bold Italic | @abstr_number | Bold | @abstr_number | Bold Italic | @abstr_number | Extra Bold | @abstr_number | Extra Bold Italic | @abstr_number | Black | @abstr_number | Black Italic | @abstr_number 

Inter also ships as a variable font.

### Font metrics

This font was originally designed to work at a specific size: @abstr_number px. Thus, the Units per @abstr_hyperlink (UPM) is defined in such a way that a power-of-two multiple of one EM unit ends up at an integer value compared to a pixel. Most fonts are designed with a UPM of either @abstr_number or @abstr_number . Because of this we picked a value that is as high as possible but also as close as possible to one of those common values (since it's reasonable to assume that some layout engines and rasterizers are optimized for those value magnitudes.) We ended up picking a UPM of @abstr_number which equates to exactly @abstr_number units per pixel when rasterized for size @abstr_number pt at @abstr_number x scale. This also means that when rasterized at power-of-two scales (like @abstr_number x and @abstr_number x) the number of EM units corresponding to a pixel is an integer ( @abstr_number units for @abstr_number x, @abstr_number for @abstr_number x, and so on.)

However, as the project progressed and the typeface was put into use, it quickly became clear that for anything longer than a short word, it was actually hard to read the almost monotonically-spaced letters.

A second major revision was created where the previously-strict rule of geometry being even multiples of @abstr_number was relaxed and now the rule is "try to stick with @abstr_number x, if you can't, stick with @abstr_number x and if you can't do that either, never go below @abstr_number x." This means that Inter is now much more variable in pace than it used to be, making it work better at higher resolutions and work much better in longer text, but losing some contrast and sharpness at small sizes.

@abstr_image 

The glyphs are designed based on this "plan"; most stems and lines will be positioned at EM units that are even multiples of @abstr_number , and in a few cases they are at even multiples of @abstr_number or as low as @abstr_number .

Metrics:

  * UPM: @abstr_number 
  * Descender: - @abstr_number 
  * x-height: @abstr_number 
  * Cap height: @abstr_number 
  * Ascender: @abstr_number 



Translating between EM units and pixels:

  * Rasterized at @abstr_number px: @abstr_number px = @abstr_number units
  * Rasterized at @abstr_number px: @abstr_number px = @abstr_number units
  * Rasterized at @abstr_number px: @abstr_number px = @abstr_number units



There's a Figma workspace for glyphs, with configured metrics: @abstr_hyperlink 

## See also

  * Contributing
  * Compiling font files
  * SIL Open Font License


