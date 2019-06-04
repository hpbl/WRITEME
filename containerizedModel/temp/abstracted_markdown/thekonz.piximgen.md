# PixImGen

Pixel graphics library for PHP.

## Installation

Add this to your composer.json:

`JSON { "require": { "thekonz/piximgen": " @abstr_number . @abstr_number .*@dev" } } @abstr_code_section PHP require_once 'vendor/autoload.php'; @abstr_code_section PHP $image = new \thekonz\PixImGen(); @abstr_code_section PHP $image->setSettings([ 'seed' => 'GitHub rocks!' ]); @abstr_code_section PHP header('content-type: image/png'); @abstr_code_section PHP echo $image->getImage(); `

  * Look at your image!



@abstr_image 

If you play around with the settings (especially the saturation settings), you can get some pretty cool images. 

## Complete list of settings

| Setting | Explanation | Default value | | --- | --- | --- | | seed | Starting value for the random generator. Just like in Minecraft. | System time (`time()`) | | blocksize | The width of each block (pixel). | @abstr_number | | width | The amount of blocks on the X-axis of the image. | @abstr_number | | height | The amount of blocks on the Y-axis of the image. | @abstr_number | | minredsaturation | The minimum saturation of the color red. | @abstr_number | | maxredsaturation | The maximum saturation of the color red. | @abstr_number | | mingreensaturation | The minimum saturation of the color green. | @abstr_number | | maxgreensaturation | The maximum saturation of the color green. | @abstr_number | | minbluesaturation | The minimum saturation of the color blue. | @abstr_number | | maxbluesaturation | The maximum saturation of the color blue. | @abstr_number |

## Further manipulation of the image

Since the method **getImage()** returns an Imagick object, you can use all of the @abstr_hyperlink .
