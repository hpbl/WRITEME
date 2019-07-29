# dear imgui

@abstr_hyperlink @abstr_hyperlink 

_(This library is available under a free and permissive licence, but needs financial support to sustain its continued improvements. In addition to maintenance and stability there are many desirable features yet to be added. If your company is using dear imgui, please consider reaching out. If you are an individual using dear imgui, please consider supporting the project via Patreon or PayPal.)_

Businesses: support continued development via invoiced technical support & maintenance contracts:   
_E-mail: omarcornut at gmail dot com_

Individuals/hobbyists: support continued maintenance and development via the monthly Patreon:   
@abstr_hyperlink 

Individuals/hobbyists: support continued maintenance and development via PayPal:   
@abstr_hyperlink 

Dear ImGui is a bloat-free graphical user interface library for C++. It outputs optimized vertex buffers that you can render anytime in your @abstr_number D-pipeline enabled application. It is fast, portable, renderer agnostic and self-contained (no external dependencies).

Dear ImGui is designed to enable fast iterations and to empower programmers to create content creation tools and visualization / debug tools (as opposed to UI for the average end-user). It favors simplicity and productivity toward this goal, and lacks certain features normally found in more high-level libraries.

Dear ImGui is particularly suited to integration in games engine (for tooling), real-time @abstr_number D applications, fullscreen applications, embedded applications, or any applications on consoles platforms where operating system features are non-standard.

See @abstr_hyperlink , @abstr_hyperlink and @abstr_hyperlink pages to get an idea of its use cases.

Dear ImGui is self-contained within a few files that you can easily copy and compile into your application/engine: \- imgui.cpp \- imgui.h \- imgui_demo.cpp \- imgui_draw.cpp \- imgui_widgets.cpp \- imgui_internal.h \- imconfig.h (empty by default, user-editable) \- imstb_rectpack.h \- imstb_textedit.h \- imstb_truetype.h

No specific build process is required. You can add the .cpp files to your project or #include them from an existing file.

### Usage

Your code passes mouse/keyboard/gamepad inputs and settings to Dear ImGui (see example applications for more details). After Dear ImGui is setup, you can use it from _anywhere_ in your program loop:

Code: @abstr_code_section Result:   
@abstr_image   
_(settings: Dark style (left), Light style (right) / Font: Roboto-Medium, @abstr_number px / Rounding: @abstr_number )_

Code: @abstr_code_section Result:   
@abstr_image 

### How it works

Check out the References section if you want to understand the core principles behind the IMGUI paradigm. An IMGUI tries to minimize superfluous state duplication, state synchronization and state retention from the user's point of view. It is less error prone (less code and less bugs) than traditional retained-mode interfaces, and lends itself to create dynamic user interfaces.

Dear ImGui outputs vertex buffers and command lists that you can easily render in your application. The number of draw calls and state changes required to render them is fairly small. Because Dear ImGui doesn't know or touch graphics state directly, you can call its functions anywhere in your code (e.g. in the middle of a running algorithm, or in the middle of your own rendering process). Refer to the sample applications in the examples/ folder for instructions on how to integrate dear imgui with your existing codebase.

_A common misunderstanding is to mistake immediate mode gui for immediate mode rendering, which usually implies hammering your driver/GPU with a bunch of inefficient draw calls and state changes as the gui functions are called. This is NOT what Dear ImGui does. Dear ImGui outputs vertex buffers and a small list of draw calls batches. It never touches your GPU directly. The draw call batches are decently optimal and you can render them later, in your app or even remotely._

Dear ImGui allows you create elaborate tools as well as very short-lived ones. On the extreme side of short-liveness: using the Edit&Continue (hot code reload) feature of modern compilers you can add a few widgets to tweaks variables while your application is running, and remove the code a minute later! Dear ImGui is not just for tweaking values. You can use it to trace a running algorithm by just emitting text commands. You can use it along with your own reflection data to browse your dataset live. You can use it to expose the internals of a subsystem in your engine, to create a logger, an inspection tool, a profiler, a debugger, an entire game making editor/framework, etc.

## Demo Binaries

You should be able to build the examples from sources (tested on Windows/Mac/Linux). If you don't, let me know! If you want to have a quick look at some Dear ImGui features, you can download Windows binaries of the demo app here: \- @abstr_hyperlink (Windows binaries, Dear ImGui @abstr_number . @abstr_number WIP built @abstr_number / @abstr_number / @abstr_number , master branch, @abstr_number executables)

The demo applications are unfortunately not yet DPI aware so expect some blurriness on a @abstr_number K screen. For DPI awareness in your application, you can load/reload your font at different scale, and scale your Style with `style.ScaleAllSizes()`.

## Bindings

Integrating Dear ImGui within your custom engine is a matter of @abstr_number ) wiring mouse/keyboard/gamepad inputs @abstr_number ) uploading one texture to your GPU/render engine @abstr_number ) providing a render function that can bind textures and render textured triangles. The @abstr_hyperlink folder is populated with applications doing just that. If you are an experienced programmer at ease with those concepts, it should take you about an hour to integrate Dear ImGui in your custom engine. Make sure to spend time reading the FAQ, the comments and other documentation!

_NB: those third-party bindings may be more or less maintained, more or less close to the original API (as people who create language bindings sometimes haven't used the C++ API themselves.. for the good reason that they aren't C++ users). Dear ImGui was designed with C++ in mind and some of the subtleties may be lost in translation with other languages. If your language supports it, I would suggest replicating the function overloading and default parameters used in the original, else the API may be harder to use. In doubt, please check the original C++ version first!_

Languages: (third-party bindings) \- C: @abstr_hyperlink ( @abstr_number : now auto-generated! you can use its json output to generate bindings for other languages) \- C#/.Net: @abstr_hyperlink \- ChaiScript: @abstr_hyperlink \- D: @abstr_hyperlink \- Go: @abstr_hyperlink or @abstr_hyperlink \- Haxe/hxcpp: @abstr_hyperlink \- Java: @abstr_hyperlink \- JavaScript: @abstr_hyperlink \- Julia: @abstr_hyperlink \- Lua: @abstr_hyperlink , @abstr_hyperlink or @abstr_hyperlink \- Odin: @abstr_hyperlink \- Pascal: @abstr_hyperlink \- PureBasic: @abstr_hyperlink \- Python: @abstr_hyperlink or @abstr_hyperlink or @abstr_hyperlink \- Ruby: @abstr_hyperlink \- Rust: @abstr_hyperlink or @abstr_hyperlink \- Swift @abstr_hyperlink 

Frameworks: \- Renderers: DirectX @abstr_number / @abstr_number / @abstr_number / @abstr_number , Metal, OpenGL @abstr_number , OpenGL @abstr_number +/ES @abstr_number /ES @abstr_number , Vulkan: @abstr_hyperlink \- Platform: GLFW, SDL, Win @abstr_number , OSX, GLUT: @abstr_hyperlink \- Framework: Allegro @abstr_number , Emscripten, Marmalade: @abstr_hyperlink \- Unmerged PR: Android: @abstr_hyperlink \- bsf: @abstr_hyperlink \- Cinder: @abstr_hyperlink \- Cocos @abstr_number d-x: @abstr_hyperlink , @abstr_hyperlink \- Flexium: @abstr_hyperlink \- GML/GameMakerStudio @abstr_number : @abstr_hyperlink \- Irrlicht: @abstr_hyperlink \- Ogre: @abstr_hyperlink \- OpenFrameworks: @abstr_hyperlink \- OpenSceneGraph/OSG: @abstr_hyperlink \- ORX: @abstr_hyperlink , @abstr_hyperlink \- px_render: @abstr_hyperlink , @abstr_hyperlink \- LÖVE+Lua: @abstr_hyperlink \- Magnum: @abstr_hyperlink ( @abstr_hyperlink ) \- NanoRT: @abstr_hyperlink \- Qt: @abstr_hyperlink / @abstr_hyperlink / @abstr_hyperlink / @abstr_hyperlink \- SFML: @abstr_hyperlink \- Software renderer: @abstr_hyperlink \- Unreal Engine @abstr_number : @abstr_hyperlink or @abstr_hyperlink 

For other bindings: see @abstr_hyperlink . Also see @abstr_hyperlink for more links and ideas.

## Roadmap

Some of the goals for @abstr_number are: \- Finish work on docking, tabs. (see @abstr_hyperlink , in public `docking` branch looking for feedback) \- Finish work on multiple viewports / multiple OS windows. (see @abstr_hyperlink , in public `docking` branch looking for feedback) \- Finish work on gamepad/keyboard controls. (see @abstr_hyperlink ) \- Add an automation and testing system, both to test the library and end-user apps. (see @abstr_hyperlink ) \- Make Columns better. (they are currently pretty terrible!) \- Make the examples look better, improve styles, improve font support, make the examples hi-DPI aware.

## Gallery

User screenshots:   
@abstr_hyperlink (Feb @abstr_number to Feb @abstr_number )   
@abstr_hyperlink (Feb @abstr_number to Aug @abstr_number )   
@abstr_hyperlink (Aug @abstr_number to Jan @abstr_number )   
@abstr_hyperlink (Jan @abstr_number to Aug @abstr_number )   
@abstr_hyperlink (Aug @abstr_number to Feb @abstr_number )   
@abstr_hyperlink (Feb @abstr_number to June @abstr_number )   
@abstr_hyperlink (June @abstr_number to January @abstr_number )   
@abstr_hyperlink (January @abstr_number to May @abstr_number )   
@abstr_hyperlink (May @abstr_number onward)

Custom engine @abstr_hyperlink 

Custom engine @abstr_hyperlink 

Demo window @abstr_image 

@abstr_hyperlink @abstr_image 

## References

The Immediate Mode GUI paradigm may at first appear unusual to some users. This is mainly because "Retained Mode" GUIs have been so widespread and predominant. The following links can give you a better understanding about how Immediate Mode GUIs works. \- @abstr_hyperlink . \- @abstr_hyperlink . \- @abstr_hyperlink . \- @abstr_hyperlink . \- @abstr_hyperlink . \- @abstr_hyperlink .

See the @abstr_hyperlink for more references and @abstr_hyperlink for third-party bindings to different languages and frameworks.

## Support

If you are new to Dear ImGui and have issues with: compiling, linking, adding fonts, wiring inputs, running or displaying Dear ImGui: please post on the Discourse forums: https://discourse.dearimgui.org.

Otherwise for any other questions, bug reports, requests, feedback, you may post on https://github.com/ocornut/imgui/issues. Please read and fill the New Issue template carefully.

Private support is available for paying customers.

## Frequently Asked Question (FAQ)

**Where is the documentation?**

This library is poorly documented at the moment and expects of the user to be acquainted with C/C++. \- Run the examples/ applications and explore them. \- See demo code in imgui_demo.cpp and particularly the ImGui::ShowDemoWindow() function. \- The demo covers most features of Dear ImGui, so you can read the code and see its output. \- See documentation and comments at the top of imgui.cpp + effectively imgui.h. \- Dozens of standalone example applications using e.g. OpenGL/DirectX are provided in the examples/ folder to explain how to integrate Dear ImGui with your own engine/application. \- Your programming IDE is your friend, find the type or function declaration to find comments associated to it. \- We obviously needs better documentation! Consider contributing or becoming a @abstr_hyperlink to promote this effort.

**Which version should I get?**

I occasionally tag @abstr_hyperlink but it is generally safe and recommended to sync to master/latest. The library is fairly stable and regressions tend to be fixed fast when reported.

You may also peak at the @abstr_hyperlink and @abstr_hyperlink features in the `docking` branch. Many projects are using this branch and it is kept in sync with master regularly.

**Who uses Dear ImGui?**

See the @abstr_hyperlink and @abstr_hyperlink Wiki pages for a list of games/software which are publicly known to use dear imgui. Please add yours if you can!

**Why the odd dual naming, "Dear ImGui" vs "ImGui"?**

The library started its life as "ImGui" due to the fact that I didn't give it a proper name when I released @abstr_number . @abstr_number and had no particular expectation that it would take off. However, the term IMGUI (immediate-mode graphical user interface) was coined before and is being used in variety of other situations (e.g. Unity uses it own implementation of the IMGUI paradigm). To reduce this ambiguity without affecting existing codebases, I have decided on an alternate, longer name "Dear ImGui" that people can use to refer to this specific library. Please try to refer to this library as "Dear ImGui".

**How can I tell whether to dispatch mouse/keyboard to Dear ImGui or to my application?**   
**How can I display an image? What is ImTextureID, how does it works?**   
**Why are multiple widgets reacting when I interact with a single one? How can I have multiple widgets with the same label or with an empty label? A primer on labels and the ID Stack...**   
**How can I use my own math types instead of ImVec @abstr_number /ImVec @abstr_number ?**   
**How can I load a different font than the default?**   
**How can I easily use icons in my application?**   
**How can I load multiple fonts?**   
**How can I display and input non-latin characters such as Chinese, Japanese, Korean, Cyrillic?** ( @abstr_hyperlink )   
**How can I interact with standard C++ types (such as std::string and std::vector)?**   
**How can I use the drawing facilities without a Dear ImGui window? (using ImDrawList API)**   
**How can I use this without a mouse, without a keyboard or without a screen? (gamepad, input share, remote display)**   
**I integrated Dear ImGui in my engine and the text or lines are blurry..**   
**I integrated Dear ImGui in my engine and some elements are disappearing when I move windows around..**   
**How can I help?**

See the FAQ in @abstr_hyperlink for answers.

**Can you create elaborate/serious tools with Dear ImGui?**

Yes. People have written game editors, data browsers, debuggers, profilers and all sort of non-trivial tools with the library. In my experience the simplicity of the API is very empowering. Your UI runs close to your live data. Make the tools always-on and everybody in the team will be inclined to create new tools (as opposed to more "offline" UI toolkits where only a fraction of your team effectively creates tools). The list of sponsors below is also an indicator that serious game teams have been using the library.

Dear ImGui is very programmer centric and the immediate-mode GUI paradigm might requires you to readjust some habits before you can realize its full potential. Dear ImGui is about making things that are simple, efficient and powerful.

**Can you reskin the look of Dear ImGui?**

You can alter the look of the interface to some degree: changing colors, sizes, padding, rounding, fonts. However, as Dear ImGui is designed and optimized to create debug tools, the amount of skinning you can apply is limited. There is only so much you can stray away from the default look and feel of the interface. Below is a screenshot from @abstr_hyperlink with custom colors + a docking/tabs extension (both of which you can find in the Issues section and will eventually be merged):

@abstr_image 

**Why using C++ (as opposed to C)?**

Dear ImGui takes advantage of a few C++ languages features for convenience but nothing anywhere Boost-insanity/quagmire. Dear ImGui does NOT require C++ @abstr_number so it can be used with most old C++ compilers. Dear ImGui doesn't use any C++ header file. Language-wise, function overloading and default parameters are used to make the API easier to use and code more terse. Doing so I believe the API is sitting on a sweet spot and giving up on those features would make the API more cumbersome. Other features such as namespace, constructors and templates (in the case of the ImVector<> class) are also relied on as a convenience.

There is an auto-generated @abstr_hyperlink by Sonoro @abstr_number and Stephan Dilly. It is designed for creating binding to other languages. If possible, I would suggest using your target language functionalities to try replicating the function overloading and default parameters used in C++ else the API may be harder to use. Also see @abstr_hyperlink for various third-party bindings.

## Support dear imgui

**How can I help?**

  * You may participate in the @abstr_hyperlink and the GitHub @abstr_hyperlink .
  * You may help with development and submit pull requests! Please understand that by submitting a PR you are also submitting a request for the maintainer to review your code and then take over its maintenance forever. PR should be crafted both in the interest in the end-users and also to ease the maintainer into understanding and accepting it.
  * See @abstr_hyperlink on the @abstr_hyperlink for some more ideas.
  * Have your company financially support this project.



**How can I help financing further development of Dear ImGui?**

Your contributions are keeping this project alive. The library is available under a free and permissive licence, but continued maintenance and development are a full-time endeavor and I would like to grow the team. In addition to maintenance and stability there are many desirable features yet to be added. If your company is using dear imgui, please consider reaching out for invoiced technical support and maintenance contracts. If you are an individual using dear imgui, please consider supporting the project via Patreon or PayPal. Thank you!

Businesses: support continued development via invoiced technical support & maintenance contracts:   
_E-mail: omarcornut at gmail dot com_

Individuals/hobbyists: support continued maintenance and development via the monthly Patreon:   
@abstr_hyperlink 

Individuals/hobbyists: support continued maintenance and development via PayPal:   
@abstr_hyperlink 

Ongoing dear imgui development is financially supported by users and private sponsors, recently:

**Platinum-chocolate sponsors** \- Blizzard Entertainment \- Google

**Double-chocolate sponsors** \- Media Molecule, Mobigame, Aras Pranckevičius, Greggman, DotEmu, Nadeo, Supercell, Runner, Aiden Koss, Kylotonn.

**Salty caramel supporters** \- Remedy Entertainment, Recognition Robotics, ikrima, Geoffrey Evans, Mercury Labs, Singularity Demo Group, Lionel Landwerlin, Ron Gilbert, Brandon Townsend, Morten Skaaning, Nikhil Deshpande, Cort Stratton, drudru, Harfang @abstr_number D, Jeff Roberts, Rainway inc, Ondra Voves, Mesh Consultants, Unit @abstr_number Games, Neil Bickford.

**Caramel supporters** \- Jerome Lanquetot, Daniel Collin, Ctrl Alt Ninja, Neil Henning, Neil Blakey-Milner, Aleksei, NeiloGD, Eric, Game Atelier, Vincent Hamm, Colin Riley, Sergio Gonzales, Andrew Berridge, Roy Eltham, Game Preservation Society, Josh Faust, Martin Donlon, Codecat, Doug McNabb, Emmanuel Julien, Guillaume Chereau, Jeffrey Slutter, Jeremiah Deckard, r-lyeh, Nekith, Joshua Fisher, Malte Hoffmann, Mustafa Karaalioglu, Merlyn Morgan-Graham, Per Vognsen, Fabian Giesen, Jan Staubach, Matt Hargett, John Shearer, Jesse Chounard, kingcoopa, Jonas Bernemann, Johan Andersson, Michael Labbe, Tomasz Golebiowski, Louis Schnellbach, Jimmy Andrews, Bojan Endrovski, Robin Berg Pettersen, Rachel Crawford, Andrew Johnson, Sean Hunter, Jordan Mellow, Nefarius Software Solutions, Laura Wieme, Robert Nix, Mick Honey, Steven Kah Hien Wong, Bartosz Bielecki, Oscar Penas, A M, Liam Moynihan, Artometa, Mark Lee, Dimitri Diakopoulos, Pete Goodwin, Johnathan Roatch, nyu lea, Oswald Hurlem, Semyon Smelyanskiy, Le Bach, Jeong MyeongSoo, Chris Matthews, Astrofra, Frederik De Bleser, Anticrisis.

And all other past and present supporters; THANK YOU! (Please contact me if you would like to be added or removed from this list)

## Credits

Developed by @abstr_hyperlink and every direct or indirect contributors to the GitHub. The early version of this library was developed with the support of @abstr_hyperlink and first used internally on the game @abstr_hyperlink .

I first discovered the IMGUI paradigm at @abstr_hyperlink where Atman Binstock had dropped his own simple implementation in the codebase, which I spent quite some time improving and thinking about. It turned out that Atman was exposed to the concept directly by working with Casey. When I moved to Media Molecule I rewrote a new library trying to overcome the flaws and limitations of the first one I've worked with. It became this library and since then I have spent an unreasonable amount of time iterating and improving it.

Embeds @abstr_hyperlink font by Tristan Grimmer (MIT license).

Embeds @abstr_hyperlink by Sean Barrett (public domain).

Inspiration, feedback, and testing for early versions: Casey Muratori, Atman Binstock, Mikko Mononen, Emmanuel Briney, Stefan Kamoda, Anton Mikhailov, Matt Willis. And everybody posting feedback, questions and patches on the GitHub.

## License

Dear ImGui is licensed under the MIT License, see @abstr_hyperlink for more information.
