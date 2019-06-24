# python-for-android

@abstr_hyperlink @abstr_hyperlink 

python-for-android is a packaging tool for Python apps on Android. You can create your own Python distribution including the modules and dependencies you want, and bundle it in an APK along with your own code.

Features include:

  * Support for building with both Python @abstr_number and Python @abstr_number .
  * Different app backends including Kivy, PySDL @abstr_number , and a WebView with Python webserver.
  * Automatic support for most pure Python modules, and built in support for many others, including popular dependencies such as numpy and sqlalchemy.
  * Multiple architecture targets, for APKs optimised on any given device.



For documentation and support, see:

  * Website: http://python-for-android.readthedocs.io
  * Mailing list: https://groups.google.com/forum/#!forum/kivy-users or https://groups.google.com/forum/#!forum/python-android.



## Documentation

Follow the @abstr_hyperlink to install and begin creating APKs.

**Quick instructions** : install python-for-android with:
    
    
    pip install python-for-android
    

(for the develop branch: `pip install git+https://github.com/kivy/python-for-android.git`)

Test that the install works with:
    
    
    p @abstr_number a --version
    

To build any actual apps, **set up the Android SDK and NDK** as described in the @abstr_hyperlink . **Use the SDK/NDK API level & NDK version as in the quickstart,** other API levels may not work.

With everything installed, build an APK with SDL @abstr_number with e.g.:
    
    
    p @abstr_number a apk --requirements=kivy --private /home/username/devel/planewave_frozen/ --package=net.inclem.planewavessdl @abstr_number  --name="planewavessdl @abstr_number " --version= @abstr_number . @abstr_number  --bootstrap=sdl @abstr_number
    

**For full instructions and parameter options,** see @abstr_hyperlink .

## Support

If you need assistance, you can ask for help on our mailing list:

  * User Group: https://groups.google.com/group/kivy-users
  * Email: kivy-users@googlegroups.com



We also have @abstr_hyperlink .

## Contributing

We love pull requests and discussing novel ideas. Check out the Kivy project @abstr_hyperlink and feel free to improve python-for-android.

See @abstr_hyperlink for more information about the python-for-android development and release model, but don't worry about the details. You just need to make a pull request, we'll take care of the rest.

The following mailing list and IRC channel are used exclusively for discussions about developing the Kivy framework and its sister projects:

  * Dev Group: https://groups.google.com/group/kivy-dev
  * Email: kivy-dev@googlegroups.com



We also have @abstr_hyperlink .

## License

python-for-android is released under the terms of the MIT License. Please refer to the LICENSE file.

## History

In @abstr_number these tools were rewritten to provide a new, easier to use and extend interface. If you'd like to browse the old toolchain, its status is recorded for posterity at at https://github.com/kivy/python-for-android/tree/old_toolchain.

In the last quarter of @abstr_number the python recipes has been changed, the new recipe for python @abstr_number ( @abstr_number . @abstr_number . @abstr_number ) has a new build system which has been applied to the ancient python recipe, allowing us to bump the python @abstr_number version number to @abstr_number . @abstr_number . @abstr_number . This change, unifies the build process for both python recipes, and probably solve some issues detected over the years. Also should be mentioned that this **unified python recipes** require to target to a _*minimum api level of @abstr_number *_ , _Android @abstr_number . @abstr_number - Lollipop_ , so in case the you need to build targeting an api level below @abstr_number , you must use an old version of python-for-android (<= @abstr_number . @abstr_number . @abstr_number ). All this work has been done using android ndk version r @abstr_number c, and your build should success with that version...but be aware that the project is in constant development so...the ndk version will change at some time.

Those mentioned changes has been done this way to make easier the transition between python @abstr_number and python @abstr_number . We will slowly phase out python @abstr_number support towards @abstr_number ...so...if you are using python @abstr_number in your projects you should consider to migrate it into python @abstr_number .

## Contributors

This project exists thanks to all the people who contribute. [Contribute]. @abstr_hyperlink 

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/kivy#backer)]

@abstr_hyperlink 

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/kivy#sponsor)]

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 
