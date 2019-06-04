# afinal交流平台

  * QQ群： @abstr_number （群 @abstr_number ， @abstr_number 未满） @abstr_number （群 @abstr_number ， @abstr_number 未满） 

## 作者个人微信




@abstr_image 

* * *

#  @abstr_image Afinal简介

  * Afinal 是一个android的sqlite orm 和 ioc 框架。同时封装了android中的http框架，使其更加简单易用；
  * 使用finalBitmap，无需考虑bitmap在android中加载的时候oom的问题和快速滑动的时候图片加载位置错位等问题。
  * Afinal的宗旨是简洁，快速。约定大于配置的方式。尽量一行代码完成所有事情。



## 目前Afinal主要有四大模块：

  * FinalDB模块：android中的orm框架，一行代码就可以进行增删改查。支持一对多，多对一等查询。

  * FinalActivity模块：android中的ioc框架，完全注解方式就可以进行UI绑定和事件绑定。无需findViewById和setClickListener等。

  * FinalHttp模块：通过httpclient进行封装http数据请求，支持ajax方式加载。

  * FinalBitmap模块：通过FinalBitmap，imageview加载bitmap的时候无需考虑bitmap加载过程中出现的oom和android容器快速滑动时候出现的图片错位等现象。FinalBitmap可以配置线程加载线程数量，缓存大小，缓存路径，加载显示动画等。FinalBitmap的内存管理使用lru算法，没有使用弱引用（android @abstr_number . @abstr_number 以后google已经不建议使用弱引用，android @abstr_number . @abstr_number 后强行回收软引用和弱引用，详情查看android官方文档），更好的管理bitmap内存。FinalBitmap可以自定义下载器，用来扩展其他协议显示网络图片，比如ftp等。同时可以自定义bitmap显示器，在imageview显示图片的时候播放动画等（默认是渐变动画显示）。




* * *

## 使用afinal快速开发框架需要有以下权限：

@abstr_code_section * 第一个是访问网络 * 第二个是访问sdcard * 访问网络是请求网络图片的时候需要或者是http数据请求时候需要，访问sdcard是图片缓存的需要。

* * *

## FinalDB使用方法：

关于finalDb的更多介绍，请点击 @abstr_hyperlink 

@abstr_code_section 

* * *

## FinalDB OneToMany懒加载使用方法：

模型定义： @abstr_code_section 使用：

##  @abstr_code_section 

## FinalActivity使用方法：

  * 完全注解方式就可以进行UI绑定和事件绑定
  * 无需findViewById和setClickListener等

@abstr_code_section *在其他侵入式框架下使用（如ActionBarShelock） @abstr_code_section *在Fragment中使用 @abstr_code_section 

## FinalHttp使用方法：




### 普通get方法

@abstr_code_section 

### 使用FinalHttp上传文件 或者 提交数据 到服务器（post方法）

文件上传到服务器，服务器如何接收，请查看 @abstr_hyperlink 

@abstr_code_section 

* * *

### 使用FinalHttp下载文件：

  * 支持断点续传，随时停止下载任务 或者 开始任务

@abstr_code_section 




## FinalBitmap 使用方法

加载网络图片就一行代码 fb.display(imageView,url) ,更多的display重载请看 @abstr_hyperlink 

@abstr_code_section 

* * *

**> >> Add by fantouch**

#### 配置成Android Library Project

_解决需求:有多个项目依赖afinal,并且想修改afinal源码_

>   * clone到本地
>   * 添加AndroidManifest.xml文件: @abstr_code_section 
> 
>   * 导入到 Eclipse:   
>  `Import => Android => Existing Android Code Into Workspace`
> 
>   * 工程上按右键 => Properties => Android => √ Is Library
>   * 完成,你的项目可以引用这个afinal Library了.
> 


#### 排除不需要Git管理的文件

_解决需求:想修改源码,但不想让Eclipse把工程弄脏_

>   * 忽略已经被Git管理的`./bin`目录:   
>  导入Eclipse前执行: `git update-index --assume-unchanged ./bin/*`
> 
>   * 忽略未被Git管理的文件和目录: 添加`/.gitignore` 文件:   
>  @abstr_code_section 
> 
>   * 导入到Eclipse,`git status`可见Repository依旧干净.
> 


**< << Add by fantouch**

* * *

# 关于作者michael

  * 个人博客： @abstr_hyperlink 
  * afinal捐助： @abstr_hyperlink （为了感谢捐助者，michael将会把捐助者将公布在afinal官方网站上,不让公布的同学说明下）
  * afinal交流QQ群 ： @abstr_number 

# 个人微信




@abstr_image 
