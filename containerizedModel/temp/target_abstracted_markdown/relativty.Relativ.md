We couldn't afford an Oculus so we built one 

@abstr_image @abstr_image @abstr_image 

@abstr_image Build your own VR headset for $ @abstr_number 💸 

# Why Relativ? 📖

My name is @abstr_hyperlink . I’m @abstr_number years old and I live in a small village in the countryside where I’m the only teenager. With my best friends, @abstr_hyperlink and @abstr_hyperlink , and my math teacher @abstr_hyperlink (we call him Sensei) we built our own VR headset for $ @abstr_number . 

I started programming when I was @abstr_number , thanks to Sensei when he created a robotics club. On the first day we were @abstr_number students, the next week we were @abstr_number - yep, you guessed it, the other two were Gabriel and Jonas. I fell in love with VR because of an anime called SAO, but the problem was that the Oculus Rift was way too expensive for me. I talked about this with Gabriel and we both agreed that we should build our own VR headset. That got us into the math and physics behind VR (quaternions, proper acceleration, antiderivatives…). Then we bought the cheapest components we could and we reinvented VR. Now using @abstr_hyperlink and Relativ you can build your VR headset too. 

Here's a schematic by TheYxxy to give you an overview of the project: 

@abstr_hyperlink 

# Meet the team ❤️

@abstr_image 

**Gabriel:** I work on optics for @abstr_hyperlink , @abstr_number D conception with Maxime and cheap tracking for the next big update. 

  
  
@abstr_image 

**Maxime:** I created @abstr_hyperlink and with Gabriel we created @abstr_hyperlink . I'm also behind the code for the hardware. 

  
  
@abstr_image 

**Jonas:** I convinced a Chinese factory to sell us premium components at low prices and I'm working on a Master Guide for Relativ. 

  
  
@abstr_image 

**Sensei:** I'm the theoretician of the team. I teach them math and I help them to solve algorithm issues. 

# Open-Source it FTW

Thanks to this project I’ve had the incredible fortune to meet amazing people, including the chief architect at Oculus, Atman Binstock. He gave me a precious piece of advice: "open source it". I deleted all the code I had, and started rewriting it all from scratch, better. And I convinced my two friends and our math teacher to open source the project 

@abstr_image 

# Getting Started ⚡️

**PLEASE NOTE** ; We highly recommend that you use the STM @abstr_number tracker because it has proved to be more stable than the Due based one. The Due code has recently been reported to throw compiler errors, and the Due trackers have exhibited stability issues. Because of this, we will be phasing out support for the Arduino DUE code in the next couple of months. _(NOTE added on Apr @abstr_number , @abstr_number )_

## What you'll need

### What components ?

There are a few variants of Relativ. The original design by the founders **(deprecated)** and two new version by TheYXXY and Vang @abstr_number based on a on a model from @abstr_hyperlink . Shoutout to them for making this possible and allowing their design to be modified! 

##### @abstr_number D models

All our @abstr_number D models can be found on our Thingiverse account; https://www.thingiverse.com/Relativty/designs. We have decided to move our @abstr_number D models to Thingiverse, because of the amount of different designs, and remakes. This to keep the GitHub file zise low, and people don't have to downlaod _all_ the @abstr_number D models with the code together. Some @abstr_number D designs require additional parts, they can be found on the Thingiverse page itself.

##### Parts needed for all the designs:

  * STM @abstr_number , $ @abstr_number , @abstr_number @abstr_hyperlink 
  * ST-link V @abstr_number USB ~$ @abstr_number , @abstr_number @abstr_hyperlink ⚠️ Price may vary a lot
  * GY- @abstr_number MPU- @abstr_number , $ @abstr_number 
  * @abstr_number . @abstr_number inch @abstr_number @abstr_number K LCD Screen with an HDMI to MIPI board, between € @abstr_number and € @abstr_number on AliExpress ( @abstr_hyperlink ) ⚠️ Price may vary a lot
  * Face foam ( @abstr_number mm wide), about $ @abstr_number , see @abstr_hyperlink 



@abstr_image 

### How to Install?

You can either install it using @abstr_hyperlink or direct @abstr_hyperlink . Or from the **command line** :

@abstr_code_section 

# Building the headset

Detailed instructions and parts lists can be found in the Relativ Wiki at:

https://wiki.relativty.net/index.php/STM @abstr_number 

Basically, copy the contents of **"library"** folder into your Arduino libraries folder, then copy the main STM @abstr_number -Tracker folder (which contains the **STM @abstr_number _BlackPill** and **STM @abstr_number _BluePill** folders) into your main Arduino folder. However, all the critical information that you need to build this tracker is in the Wiki, so you really do need to read it before you start this build.

Because we had to edit some of the main library files so that they would compile on an STM @abstr_number board, we have included them in each sketch folder (so that the changes don't mess up any other sketches that use those particular libraries). However, bacause other parts of the code rely on the un-patched libraries, we have to make the original libraries available in the main arduino libraries folder as well.

These really should work straignt out of the box - however, if they don't then please raise a GitHub issue or message us on the Relativ Discord.

# Start playing your favorite games!

You can now play with your headset by downloading SteamVR, and OSVR. 

I would love to hear about what you’ve experienced building the headset or help if you have any questions. Ping me at maxime@relativty.com or @abstr_hyperlink . 

🤗You can now chat with me and the Fellowship https://discord.gg/W @abstr_number VKbjU

** <> with ❤️, maxime@relativty.com**
