# AssetStudio

@abstr_hyperlink 

**None of the repo, the tool, nor the repo owner is affiliated with, or sponsored or authorized by, Unity Technologies or its affiliates.**

AssetStudio is a tool for exploring, extracting and exporting assets and assetbundles.

## Features

  * Support version: 
    * @abstr_number . @abstr_number - @abstr_number . @abstr_number 
  * Support asset types: 
    * **Texture @abstr_number D** : support convert to bmp, png or jpeg. export to containers: DDS, PVR and KTX
    * **Sprite** : bmp, png or jpeg
    * **AudioClip** : mp @abstr_number , ogg, wav, m @abstr_number a, fsb. support convert FSB file to WAV(PCM)
    * **Font**
    * **Mesh** : obj
    * **TextAsset**
    * **Shader**
    * **MovieTexture**
    * **VideoClip**
    * **MonoBehaviour**
    * **Animator** : export to FBX file with bound AnimationClip



## Usage

### Requirements

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



### How to use

  * Use **File-Load file** , **File-Load folder** to load assets or assetbundles from multiple files or folder 
  * Use **File-Extract file** , **File-Extract folder** to export assetbundles to assets from multiple files or folder 
  * Export assets: use **Export** menu 
  * Export model:   

    * Export model from "Scene Hierarchy" using the **Model** menu 
    * Export Animator from "Asset List" using the **Export** menu 
    * With AnimationClip:
    * Select model from "Scene Hierarchy" then select the AnimationClip from "Asset List", using **Model-Export selected objects with AnimationClip** to export
    * Export Animator will export bound AnimationClip or use **Ctrl** to select Animator and AnimationClip from "Asset List", using **Export-Export Animator with selected AnimationClip** to export



## Build

  * The project uses some C# @abstr_number syntax, need Visual Studio @abstr_number or newer
  * **AssetStudioFBX** uses FBX SDK @abstr_number . @abstr_number VS @abstr_number , before building, you need to install the FBX SDK and modify the project file, change include directory and library directory to point to the FBX SDK directory
  * If you want to change the FBX SDK version, you need to replace `libfbxsdk.dll` which in `AssetStudioGUI/Libraries/x @abstr_number /` and `AssetStudioGUI/Libraries/x @abstr_number` directory to the new version


