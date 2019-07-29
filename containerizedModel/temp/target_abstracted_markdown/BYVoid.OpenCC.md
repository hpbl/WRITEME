# Open Chinese Convert 開放中文轉換

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Introduction 介紹

Open Chinese Convert (OpenCC, 開放中文轉換) is an opensource project for conversion between Traditional Chinese and Simplified Chinese, supporting character-level conversion, phrase-level conversion, variant conversion and regional idioms among Mainland China, Taiwan and Hong kong.

中文簡繁轉換開源項目，支持詞彙級別的轉換、異體字轉換和地區習慣用詞轉換（中國大陸、臺灣、香港）。

### Features 特點

  * 嚴格區分「一簡對多繁」和「一簡對多異」。
  * 完全兼容異體字，可以實現動態替換。
  * 嚴格審校一簡對多繁詞條，原則爲「能分則不合」。
  * 支持中國大陸、臺灣、香港異體字和地區習慣用詞轉換，如「裏」「裡」、「鼠標」「滑鼠」。
  * 詞庫和函數庫完全分離，可以自由修改、導入、擴展。
  * 支持C、C++、Python、PHP、Java、Ruby、Node.js and Android。
  * 兼容Windows、Linux、Mac平臺。



### Links 相關鏈接

  * Introduction 詳細介紹 https://github.com/BYVoid/OpenCC/wiki/%E @abstr_number %B @abstr_number %A @abstr_number %E @abstr_number % @abstr_number %B @abstr_number 
  * OpenCC Online (在線轉換) http://opencc.byvoid.com/
  * 現代漢語常用簡繁一對多字義辨析表 http://ytenx.org/byohlyuk/KienxPyan



## Installation 安裝

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Download 下載

https://bintray.com/byvoid/opencc/OpenCC

## Usage 使用

### Command Line 命令行

`opencc --help`

### Configurations 配置文件

#### 預設配置文件

  * `s @abstr_number t.json` Simplified Chinese to Traditional Chinese 簡體到繁體
  * `t @abstr_number s.json` Traditional Chinese to Simplified Chinese 繁體到簡體
  * `s @abstr_number tw.json` Simplified Chinese to Traditional Chinese (Taiwan Standard) 簡體到臺灣正體
  * `tw @abstr_number s.json` Traditional Chinese (Taiwan Standard) to Simplified Chinese 臺灣正體到簡體
  * `s @abstr_number hk.json` Simplified Chinese to Traditional Chinese (Hong Kong Standard) 簡體到香港繁體（香港小學學習字詞表標準）
  * `hk @abstr_number s.json` Traditional Chinese (Hong Kong Standard) to Simplified Chinese 香港繁體（香港小學學習字詞表標準）到簡體
  * `s @abstr_number twp.json` Simplified Chinese to Traditional Chinese (Taiwan Standard) with Taiwanese idiom 簡體到繁體（臺灣正體標準）並轉換爲臺灣常用詞彙
  * `tw @abstr_number sp.json` Traditional Chinese (Taiwan Standard) to Simplified Chinese with Mainland Chinese idiom 繁體（臺灣正體標準）到簡體並轉換爲中國大陸常用詞彙
  * `t @abstr_number tw.json` Traditional Chinese (OpenCC Standard) to Taiwan Standard 繁體（OpenCC 標準）到臺灣正體
  * `t @abstr_number hk.json` Traditional Chinese (OpenCC Standard) to Hong Kong Standard 繁體（OpenCC 標準）到香港繁體（香港小學學習字詞表標準）



## Development Documentation 開發文檔

  * http://byvoid.github.io/OpenCC/



## Build 編譯

### Build with CMake

Linux (gcc @abstr_number . @abstr_number is required):

@abstr_code_section 

Mac OS X (clang @abstr_number . @abstr_number is required):

@abstr_code_section 

Windows MSYS:

@abstr_code_section 

Windows Visual Studio ( @abstr_number or higher required):

@abstr_code_section 

### iOS

See https://github.com/gelosie/OpenCC/tree/master/iOS

Or @abstr_hyperlink 

### Android

See @abstr_hyperlink 

## Projects using Opencc 使用OpenCC的項目

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## License 許可協議

Apache License @abstr_number . @abstr_number 

## Third Party Library 第三方庫

  * @abstr_hyperlink BSD License
  * @abstr_hyperlink MIT License
  * @abstr_hyperlink MIT License



All these libraries are statically linked.

## Change History 版本歷史

https://github.com/BYVoid/OpenCC/blob/master/NEWS.md

## Contributors 貢獻者

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Please update this list you have contributed OpenCC.
