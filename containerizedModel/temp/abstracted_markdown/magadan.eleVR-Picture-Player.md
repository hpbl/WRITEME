# eleVR Picture Player

The eleVR Picture Player lets you watch @abstr_number flat and stereo equirectangular panoramas on your Oculus Rift, Android, or iPhone device with VR headset (Cardboard, Durovis Dive, etc.) from a web browser. It is written with js, html @abstr_number , and webGL. It depends on the open source libraries as noted in the @abstr_hyperlink section. 

eleVR Picture Player works with the native browser support currently being implemented by @abstr_hyperlink and @abstr_hyperlink .

The player is a fun fork of the @abstr_hyperlink with some changes to optimize the player for showing panoramic pictures.

Pictures shown in the player can be rotated using keyboard controls (a/d, w/s, and q/e), as well as by the Oculus Rift if you are running an experimental webVR browser. You may be able to decrease video judder by setting your Oculus Display refresh rate to @abstr_number Hz (the browser refreshes at @abstr_number Hz and the slower mismatch can cause judder).

####  @abstr_hyperlink 

The following table documents the keyboard controls currently available.

| Key | Control | |:-----:|-------------| | f | full screen webVR mode (with barrel distortion) | | g | regular full screen mode (less lag) | | w | up | | a | left | | s | down | | d | right | | q | rotate left | | e | rotate right |

It currently only supports spherical panoramic pictures with equirectangular projections and spherical @abstr_number D panoramas with top/bottom equirectangular projections.

### Support

Using keyboard rotation controls, the player works on standard Firefox and Chrome on Windows, Mac, and Linux. It also runs on Safari (if webgl is enabled). I haven't tested it on other browsers.

Using Oculus headset controls, the player works on the experimental webVR builds of @abstr_hyperlink and @abstr_hyperlink .

Using device orientation controls, it works on Safari on iPhone and Chrome on Android devices.

## Running your own picture

The easiest way to run your own picture is to click the folder icon and load your video from there. You may then need to choose the projection for your picture from the projection selector.

You can load your own picture from the javascript console, by typing loadVideo(" @abstr_number myVideo.mp @abstr_number "). If your video is equirectangular @abstr_number D, preface your picture by @abstr_number . If it is stereo top/bottom, preface it by @abstr_number . These numbers correspond to the projections in the projectionEnum declaration in elevr-player.js.

If you want to add your picture to the drop-down, create a new option in the html picture-select element that looks like: My Pic

If you want your picture to be the picture loaded initially, change the source of the picture in the html img tag with the id "pano-image". You can also update the starting projection, if necessary, by changing the value of the "projection" variable on instantiation (and also changing the default value of the projection-select html select tag.

## Possible Issues and Resolutions

### Oculus movement isn't being recognized

Make sure that you are using an experimental webVR version of the browser. If it still isn't being recognized, you can try restarting the browser and plugging/unplugging your device.

### Android or iPhone is not working

You may not be on a sufficiently recent version of Android or iOS. webGL support did not exist before Android @abstr_number . @abstr_number and iOS @abstr_number .

### My panorama isn't loading

Your image may exceed the max texture size of your device. This is likely to be @abstr_number x @abstr_number , but you can check by going here: https://www.khronos.org/registry/webgl/conformance-suites/ @abstr_number . @abstr_number . @abstr_number /conformance/limits/gl-max-texture-dimensions.html

## Future Work

The picture player is more of a fun diversion from the video player than a serious project of it's own. As such, there isn't that much extra work planned on it, other than occasionally updating it to match desirable features of the web player and potentially adding additional projections so as to be able to show cube map panoramas and similar.

## @abstr_number rd party libraries

The following assets are used by the eleVR Player:

  * glMatrix - Similar to MIT License - http://glmatrix.net/
  * Font Awesome - MIT License - http://fortawesome.github.io/Font-Awesome/


