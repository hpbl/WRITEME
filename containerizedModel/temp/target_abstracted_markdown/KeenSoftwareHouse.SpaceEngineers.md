# Space Engineers

Welcome to the Space Engineers source code! 

From this repository you can build Space Engineers. To play Space Engineers you need to own the game on Steam. Assets (audio, models, textures) are not included in this repository.

Before downloading the source code please read the EULA carefully - @abstr_hyperlink .

See the @abstr_hyperlink for latest changes.   
Have you found a problem related to the source code? Report an @abstr_hyperlink .   
Discuss source code on our @abstr_hyperlink .

## Prerequisities

  * [Visual Studio @abstr_number Community Edition with Update @abstr_number ] (https://www.visualstudio.com/en-us/downloads/download-visual-studio-vs#d-community) or different version of VS @abstr_number with Update @abstr_number 
  * Steam Client + Space Engineers game (to run and test the game)



## Quickstart

Space Engineers must be installed on your computer, Steam must be running.

  * Clone or @abstr_hyperlink and unpack the repository.
  * Open **SpaceEngineers.sln** in Visual Studio.
  * Open file **global.props** (it's in configuration folder).
  * Make sure **ContentPath** tag contains path to SpaceEngineers **Content** directory in Steam folder.
  * Start debugging by pressing **F @abstr_number _* or select *_ Debug** \- **Start Debugging** in main menu



Instead of modifying **global.props** , you can create **user.props** , more information @abstr_hyperlink .

## How to contribute

One way to contribute changes is to send a GitHub @abstr_hyperlink .

**To get started using GitHub:**

  * Create your own Space Engineers **fork** by clicking the __Fork button__ in the top right of this page.
  * @abstr_hyperlink on your computer.
  * Use the GitHub program to **Sync** the project's files to a folder on your computer.
  * Open up **SpaceEngineers.sln** in Visual Studio.
  * Modify the source codes and test your changes.
  * Using the GitHub program, you can easily **submit contributions** back up to your **fork**.
  * Do not **commit to master** , for each feature **create new branch**.
  * When you're ready to send the changes to the Keen Software House for review, simply create a @abstr_hyperlink .
  * Following @abstr_hyperlink will help us lower the time needed to process the PR and merge it thus increase the amount of PRs that can be merged



**Advanced topics:** \- You can update your master branch by executing: \- git pull https://github.com/KeenSoftwareHouse/SpaceEngineers.git master \- If your master is tainted and any branch you make contains junk, you can do **hard reset**. All unmerged commits on master branch will be lost. \- git checkout master \- git fetch https://github.com/KeenSoftwareHouse/SpaceEngineers.git master \- git reset --hard FETCH_HEAD \- git push --force origin master

## Common issues

**Build error: The command "..\ @abstr_number rd\Utils\RunTemplate.bat "....\MyEnumToStringsGenerated"" exited with code @abstr_number .** This is common when using old versions of Visual Studio, see @abstr_hyperlink . It can also happen when TextTemplating.exe was not found for some reason (it should be installed with Visual Studio).

**Assert: unable to find audio/model/texture file: 'xxxxxx'**. This happens because repository is slightly ahead of content in Steam folder. Definitions (Content/Data) are taken from repository and may contain new definitions referencing assets which are not yet in Steam content folder. We decided to use definitions from repository by default, so you can easily modify it. You can edit **global.props** to use definitions from Steam (that should fix the issue). When running on **Release** asserts won't be shown; missing assets won't crash the game. More info @abstr_hyperlink .

## Where is the @abstr_number -bit version?

We're unable to provide a @abstr_number -bit version of all @abstr_number rd party libraries because of licensing. We're working on this and trying to negotiate a better license which will allow us to do that.
