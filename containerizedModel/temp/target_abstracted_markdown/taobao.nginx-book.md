.. nginx_book documentation master file, created by sphinx-quickstart on Wed Feb @abstr_number @abstr_number : @abstr_number : @abstr_number @abstr_number . You can adapt this file completely to your liking, but it should at least contain the root `toctree` directive.

# Nginx开发从入门到精通

缘起 ++++++

nginx由于出色的性能，在世界范围内受到了越来越多人的关注，在淘宝内部它更是被广泛的使用，众多的开发以及运维同学都迫切的想要了解nginx模块的开发和它的内部原理，但是国内却没有一本关于这方面的书，源于此我们决定自己来写一本。本书的作者为淘宝核心系统服务器平台组的成员，本书写作的思路是从模块开发逐渐过渡到nginx原理剖析。书籍的内容会定期在这里更新，欢迎大家提出宝贵意见，不管是本书的内容问题，还是字词错误，都欢迎大家提交issue(章节标题的左侧有评注按钮)，我们会及时的跟进。

.. topic:: 更新历史
    
    
    .. csv-table:: 
       :header: 日期, 描述
       :widths:  @abstr_number ,  @abstr_number 
       :quote: $
       :delim: |
    
        @abstr_number / @abstr_number / @abstr_number |创建目录大纲
        @abstr_number / @abstr_number / @abstr_number |增加了样章
        @abstr_number / @abstr_number / @abstr_number |更新样章
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(event module)
        @abstr_number / @abstr_number / @abstr_number |更新第 @abstr_number 章部分内容
        @abstr_number / @abstr_number / @abstr_number |更新第 @abstr_number 章event module部分内容
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章（请求头读取，subrequest解析）
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(nginx基础架构及基础概念)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(ngx_str_t数据结构介绍)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(模块开发高级篇之变量)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(nginx的启动阶段部分内容)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(ngx_array_t,ngx_hash_t及ngx_pool_t介绍)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(配置解析综述)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(ngx_hash_wildcard_t,ngx_hash_combined_t及ngx_hash_keys_arrays_t介绍)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(ngx_chain_t,ngx_list_t及ngx_buf_t介绍)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章(请求体的读取和丢弃解析)
        @abstr_number / @abstr_number / @abstr_number |更新第 @abstr_number 章(ngx_buf_t的部分字段以及其他一些书写错误和表达)
        @abstr_number / @abstr_number / @abstr_number |更新第 @abstr_number 章(解析http块)
        @abstr_number / @abstr_number / @abstr_number |增加第 @abstr_number 章的内容
        @abstr_number / @abstr_number / @abstr_number |补充和完善了第 @abstr_number 章的内容
        @abstr_number / @abstr_number / @abstr_number |增加了第 @abstr_number 章(nginx的配置系统)
        @abstr_number / @abstr_number / @abstr_number |增加了第 @abstr_number 章(nginx的模块化体系结构, nginx的请求处理)
        @abstr_number / @abstr_number / @abstr_number |增加了第 @abstr_number 章部分内容(多阶段请求处理)
        @abstr_number / @abstr_number / @abstr_number |完成第 @abstr_number 章第 @abstr_number 节(配置解析综述、ngx_http_block)
        @abstr_number / @abstr_number / @abstr_number |完成第 @abstr_number 章第 @abstr_number 节(源码目录结构、configure原理)
        @abstr_number / @abstr_number / @abstr_number |完成第 @abstr_number 章部分内容(多阶段执行链各个阶段解析)
        @abstr_number / @abstr_number / @abstr_number |完成第 @abstr_number 章部分内容(filter解析)
        @abstr_number / @abstr_number / @abstr_number |完成第 @abstr_number 章部分内容(ssl解析)
    

版权申明 ++++++++++++

本书的著作权归作者淘宝核心系统服务器平台组成员所有。你可以：

  * 下载、保存以及打印本书
  * 网络链接、转载本书的部分或者全部内容，但是必须在明显处提供读者访问本书发布网站的链接
  * 在你的程序中任意使用本书所附的程序代码，但是由本书的程序所引起的任何问题，作者不承担任何责任



你不可以：

  * 以任何形式出售本书的电子版或者打印版
  * 擅自印刷、出版本书
  * 以纸媒出版为目的，改写、改编以及摘抄本书的内容



目录 ++++++

书籍浏览 (http://tengine.taobao.org/book/index.html)

团队成员 ++++++++++++

叔度 (http://blog.zhuzhaoyuan.com)

雕梁 (http://www.pagefault.info)

文景 (http://yaoweibin.cn)

李子 (http://blog.lifeibo.com)

卫越 (http://blog.sina.com.cn/u/ @abstr_number )

袁茁 (http://yzprofile.me)

小熊 (http://dinic.iteye.com)

吉兆 (http://jizhao.blog.chinaunix.net)

静龙 (http://blog.csdn.net/fengmo_q)

竹权 (http://weibo.com/u/ @abstr_number )

公远 (http:// @abstr_number continue.iteye.com/)

布可 (http://weibo.com/sifeierss)
