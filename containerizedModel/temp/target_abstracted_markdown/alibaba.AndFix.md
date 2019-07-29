# AndFix

@abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink 

AndFix is a solution to fix the bugs online instead of redistributing Android App. It is distributed as @abstr_hyperlink .

Andfix is an acronym for " **And** roid hot- **fix** ".

AndFix supports Android version from @abstr_number . @abstr_number to @abstr_number . @abstr_number , both ARM and X @abstr_number architecture, both Dalvik and ART runtime, both @abstr_number bit and @abstr_number bit.

The compressed file format of AndFix's patch is **.apatch**. It is dispatched from your own server to client to fix your App's bugs.

## Principle

The implementation principle of AndFix is method body's replacing,

@abstr_image 

### Method replacing

AndFix judges the methods should be replaced by java custom annotation and replaces it by hooking it. AndFix has a native method `art_replaceMethod` in ART or `dalvik_replaceMethod` in Dalvik. 

For more details, @abstr_hyperlink .

## Fix Process

@abstr_image 

## Integration

### How to get?

Directly add AndFix aar to your project as compile libraries.

For your maven dependency,

@abstr_code_section For your gradle dependency,

@abstr_code_section 

### How to use?

@abstr_number . Initialize PatchManager,

@abstr_code_section 

@abstr_number . Load patch,

@abstr_code_section 

You should load patch as early as possible, generally, in the initialization phase of your application(such as `Application.onCreate()`).

@abstr_number . Add patch,

@abstr_code_section When a new patch file has been downloaded, it will become effective immediately by `addPatch`.

## Developer Tool

AndFix provides a patch-making tool called **apkpatch**.

### How to get?

The `apkpatch` tool can be found @abstr_hyperlink .

### How to use?

  * Prepare two android packages, one is the online package, the other one is the package after you fix bugs by coding.

  * Generate `.apatch` file by providing the two package,

@abstr_code_section 




Now you get the application savior, the patch file. Then you need to dispatch it to your client in some way, push or pull.

Sometimes, your team members may fix each other's bugs, and generate not only one `.apatch`. For this situation, you can merge `.apatch` files using this tool,

@abstr_code_section 

## Running sample

@abstr_number . Import samplesI/AndFixDemo to your IDE, append AndFixDemo dependencies with AndFix(library project or aar). @abstr_number . Build project, save the package as @abstr_number .apk, and then install on device/emulator. @abstr_number . Modify com.euler.test.A, references com.euler.test.Fix. @abstr_number . Build project, save the package as @abstr_number .apk. @abstr_number . Use apkpatch tool to make a patch. @abstr_number . Rename the patch file to out.apatch, and then copy it to sdcard. @abstr_number . Run @abstr_number .apk and view log.

## Notice

### ProGuard

If you enable ProGuard, you must save the mapping.txt, so your new version's build can use it with @abstr_hyperlink .

And it is necessary to keep classes as follow,

  * Native method

com.alipay.euler.andfix.AndFix

  * Annotation

com.alipay.euler.andfix.annotation.MethodReplace




To ensure that these classes can be found after running an obfuscation and static analysis tool like ProGuard, add the configuration below to your ProGuard configuration file.

@abstr_code_section 

### Self-Modifying Code

If you use it, such as _Bangcle_. To generate patch file, you'd better to use raw apk.

### Security

The following is important but out of AndFix's range.

  * verify the signature of patch file
  * verify the fingerprint of optimize file



## API Documentation

The libraries javadoc can be found @abstr_hyperlink .

## Contact

...

## License

@abstr_hyperlink 

Copyright (c) @abstr_number , alipay.com
