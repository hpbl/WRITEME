# Temporal Reprojection Anti-Aliasing

Source code release of the anti-aliasing solution used in Playdead's _INSIDE_.

#### LICENSE

MIT (see LICENSE.txt)

#### REQUIRES

Unity @abstr_number . @abstr_number +

#### INSTRUCTIONS

  * copy Assets/* to your project
  * disable MSAA under 'Project Settings/Quality' (optional)
  * add the TemporalReprojection component to your cameras
  * add the VelocityBufferTag component to individual moving meshes (if you want correct motion vectors)
  * tagging skinned meshes is expensive



#### AUTHOR

Lasse Jon Fuglsang Pedersen < @abstr_hyperlink >

#### THANKS TO

  * Mikkel Gj\xf @abstr_number l (suggestions and feedback, noise distributions, motion blur tweaks)
  * Tiago Sousa (neighbourhood clamping in SMAA @abstr_number tx; http://www.crytek.com/download/Sousa_Graphics_Gems_CryENGINE @abstr_number .pdf)
  * Brian Karis (YCoCg clipping, neighbourhood rounding; http://advances.realtimerendering.com/s @abstr_number /epic/TemporalAA.pptx)
  * Timothy Lottes (weighing by unbiased luminance diff; http://www.youtube.com/watch?v=WzpLWzGvFK @abstr_number &t= @abstr_number m)
  * Morgan McGuire (motion blur reconstruction filter; http://graphics.cs.williams.edu/papers/MotionBlurI @abstr_number D @abstr_number /McGuire @abstr_number Blur.pdf)


