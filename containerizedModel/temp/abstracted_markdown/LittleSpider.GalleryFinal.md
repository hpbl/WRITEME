@abstr_image 

# GalleryFinal简介

Android自定义相册，实现了拍照、图片选择（单选/多选）、 裁剪（单/多裁剪）、旋转、ImageLoader无绑定任由开发者选择、功能可配置、主题样式可配置。GalleryFinal为你定制相册。

## 为什么要使用GalleryFinal？

  * 拍照/选择图片倒立问题
  * 市场上各种相机和图片浏览器泛滥导致各种异常问题
  * 各种手机兼容性问题引起crash
  * 系统Gallery App不能进行多选
  * 系统拍照/选择图片/裁剪视乎不太好用
  * 系统Gallery App不美观
  * ……



_* @abstr_hyperlink *_

### _*注： @abstr_number )、现支持所有主流的ImageLoader，包括Glide/Fresco/Picasso/UIL等，如果你觉得还不满足，欢迎在issues上提问。 @abstr_number )、本项目是基于SDK @abstr_number （ @abstr_number . @abstr_number ）系统编译的请开发者将targetSdkVersion改成 @abstr_number *_

## 截图展示

Demo apk二维码地址： @abstr_image @abstr_image 

@abstr_image @abstr_image 

# GalleryFinal使用方法

## 下载GalleryFinal

通过Gradle抓取:

@abstr_code_section 

# Next Version

  * 添加多选强制裁剪
  * 图片分页查看
  * 拍照自动纠正图片(自动旋转)
  * 添加配置-配置图片压缩到指定大小后返回调用者
  * 精简配置
  * ……



# @abstr_number . @abstr_number . @abstr_number . @abstr_number 更新内容

  * 解决fresco gif图片不显示问题



## 具体使用

@abstr_number 、通过gradle把GalleryFinal添加到你的项目里

@abstr_number 、在你的Application中添加配置GallerFinal

@abstr_code_section 

@abstr_number 、选择图片加载器

  * **UIL实现** @abstr_hyperlink 

  * **Glide实现** @abstr_hyperlink 

  * **Picasso实现** @abstr_hyperlink 

  * **fresco实现** @abstr_hyperlink 

  * **xUtils @abstr_number 实现** @abstr_hyperlink 

  * **xUitls @abstr_number 实现** @abstr_hyperlink 

  * **自定义**




自定义步骤：

@abstr_number )、实现ImageLoader接口

@abstr_number )、在displayImage方法中实现图片加载， **这个需要注意的是一定要禁止缓存到本地和禁止缓存到内存**

@abstr_number )、设置请求图片目标大小。displayImage方法中已经给出了width和height

@abstr_number )、设置默认图和请求图片清晰度，建议把图片请求清晰度调整为Bitmap.Config.RGB_ @abstr_number 避免出现OOM情况

  * ……

@abstr_number 、启动GalleryFinal




在GalleryFinal @abstr_number . @abstr_number . @abstr_number 版本中相册、拍照、裁剪和图片编辑功能可独立使用

**REQUEST_CODE_GALLERY 为请求码** **functionConfig 为功能配置** **mOnHanlderResultCallback 为请求回调**

  * 单选打开相册

@abstr_code_section 

  * 多选打开相册 @abstr_code_section 

  * 使用拍照

@abstr_code_section 

  * 使用裁剪

@abstr_code_section 

  * 使用图片编辑

@abstr_code_section 

  * **FunctionConfig Builder类说明**

@abstr_code_section 

  * **主题的配置**

@abstr_number )、GalleryFinal默认主题为DEFAULT（深蓝色）,还自带主题：DARK（黑色主题）、CYAN（蓝绿主题）、ORANGE（橙色主题）、GREEN（绿色主题）和TEAL（青绿色主题），当然也支持自定义主题（Custom Theme）,在自定义主题中用户可以配置字体颜色、图标颜色、更换图标、和背景色

  * 设置主题

@abstr_number )、使用自定义主题

@abstr_code_section @abstr_number )、 **ThemeConfig类说明** @abstr_code_section 

  * **CoreConfig配置类** @abstr_code_section 

@abstr_number 、如果你还想更深度的定制页面效果可以把资源文件名字定义成Gallery资源名已达到覆盖效果。如有不理解可以联系我。




# 权限

@abstr_code_section 

# 混淆配置

@abstr_code_section 

##  @abstr_hyperlink 

# 感谢（Thanks）

  * 图片裁剪 @abstr_hyperlink 
  * 图片缩放 @abstr_hyperlink 



# 关于作者

  * **QQ:** @abstr_number 
  * **QQ群:** @abstr_number 
  * **Email:** @abstr_hyperlink 



## License
    
    
    Licensed under the Apache License, Version  @abstr_number . @abstr_number  (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
       http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number 
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
