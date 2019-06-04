# schooldemo

网站页面视图文件：

index.php（网站首页）  
说明：本页面为网站首页展示，为进入网站的门户页面。该页面内容主要包括网站整体框架——导航和主体。该页面包含了网站的导航栏、网站功能说明、网站更新说明、网站公告、网站底部栏。

aboutschool.php（学院简介）  
说明：该页面为二级导航链接，页面主要内容为介绍学院成立时间等基本信息。

tese.php（学院特色）  
说明：该页面为学院特色介绍页面，主要介绍学院办学特色和教学特色等。

jiangjin.php（奖、助学金）  
说明：该页面主要介绍学院奖学金、助学金的成立历史和获奖条件等。

contact.php（留言）  
说明：该页面为留言页面。主要为有意愿报名的同学活家长提供咨询平台等，若留言无法解决问题可跳转至jiuye.php页面根据页面提供的信息电话咨询。 该页面后台操作页面为actioncontact.php文件。 该页面功能主要实现代码为： @abstr_code_section 

showcontact.php（留言展示）  
说明：该页面为留言展示页面，目前只展示最新发布信息的前 @abstr_number 条信息。设置展示信息功能代码为： @abstr_code_section 

login.php（登陆）  
说明：该页面为网站登陆页面。主要实现功能为注册用户登陆，功能实现操作网页为actionlogin.php，主要功能代码为： @abstr_code_section 

regist.php（注册页面）  
说明：该页面为网站用户注册页面，用户需要先注册才能成功登陆。注册功能执行页面为actionregist.php，主要功能实现代码为： @abstr_code_section 

others.php（其他通知）  
说明：该页面负责其他未分类信息的通知。

jiuye.php（就业咨询）  
说明：该页面提供就业咨询招生等方面的问题。若无法在留言版块得到想要的答复可根据此页面信息电话咨询。

dbconfig.php（连接页面）  
说明：本页面代码主要说明数据库的名称、数据库名、数据名、密码等信息。属于公共调用文件。文件主要代码为： @abstr_code_section 

daohang.php（导航页面）  
说明：本页面为网站的导航菜单页面，负责各个页面的相互连接。为了简化代码的亢余，所有展示页面均适用php代码include直接连接。适用方法为在需要展示也满面的最顶部输入如下代码： @abstr_code_section 

footer.php（导航页面）  
说明：本页面为网站的底部说明页面，负责各个页面的底部说明。为了简化代码的亢余，所有展示页面均适用php代码include直接连接。适用方法为在需要展示也满面的最底部输入如下代码： @abstr_code_section 

NewsSearch.php（信息展示）  
说明：本页面为学生信息展示页面，为保密，目前只展示最新的 @abstr_number 条信息。执行代码为： @abstr_code_section 

NewsPutin.php（信息录入）  
说明：本页面为学生信息的录入，录入后的信息可以在NewsSearch.php页面中看到。执行页面为actionNews.php，主要执行代码为： @abstr_code_section 

session.php（session判断页面）  
说明：本页面代码为session判断。若登陆后显示“登陆用户邮箱//注销”，若未登录则显示“登陆//注册”。主要代码为： @abstr_code_section 

session_destory.php（登陆注销）  
说明：登陆成功后会有一个按钮“注销”，点击注销能注销用户登陆。本页面为销毁session功能。主要代码为：

session_destory();

# 数据库设计及文件说明  


注意：本网站数据库已经设计好，可以直接在phpmyadmin中导入即可 数据库文件：studentsN.sql 数据库样式：  
@abstr_code_section 

* * *

@abstr_code_section 

* * *

@abstr_code_section 

* * *

@abstr_code_section 
