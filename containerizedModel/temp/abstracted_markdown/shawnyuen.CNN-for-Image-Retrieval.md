## CNN for Image Retrieval

博文： @abstr_hyperlink ，对应web演示主页 @abstr_hyperlink 。

**注意** ：其中文件夹matconvnet- @abstr_number . @abstr_number -beta @abstr_number 是已经编译好了的，鉴于MatConvNet只能在 **Matlab @abstr_number _*及其以上以及系统必须是_** @abstr_number 位*，所以在使用此工具箱之前得满足这两个条件。如果是Pythoner，推荐使用 @abstr_hyperlink ，纯Python，非常易于写成在线图像搜索应用。

示例：Caltech- @abstr_number 图像数据库

@abstr_image 

Caltech- @abstr_number 图像数据库上搜索结果

@abstr_image 

### 运行步骤

@abstr_number ). 如果不需要计算mAP的话，那就直接把你的图像库文件夹名字命名为`database`，并将图片全部放在放在`database`文件夹下即可。如果你要在后面计算MAP（平均检索精度）的话，要确保图像数据库做成文件夹`databaseClassified`中的形式，然后执行下面命令：

@abstr_code_section 

@abstr_number ). 接着便可以抽取特征。运行`extractCNN.m`，要用parfor并行的话，直接修改注释部分即可。

@abstr_number ). 检索可视化。这一步运行`queryInDatabaseDemo.m`即可。

@abstr_number ). 计算mAP。不需要计算MAP的这步略过。运行`compute_MAP.m`，关于mAP的计算，请参阅我画的mAP计算过程示意图： @abstr_hyperlink ，这个计算mAP的脚本是按照那个流程中定义的mAP计算方式来写的。

### 降维

> 非常的amazing, 除了验证降维到 @abstr_number D后损失不减外，惊奇地发现 @abstr_number D的CNN降维到 @abstr_number D后精度还有提高，一种可能的解释：CNN特征也有一定的信息冗余，信息冗余所带来的影响比降维所带来的损失的影响要更大。结论：You should reduce the dimension of CNN when you use if.

PCA降维对CNN特征的影响

@abstr_image 

上面实验使用的是本项目代码，图像数据集使用的是Caltech @abstr_number 。

关于PCA对PCA降维的影响， @abstr_hyperlink 中也有探讨，以及曾跟Adrian Rosebrock也有过这方面的交流：

> ANN is really fantastic, it makes such much easier. You could also try something like PCA on your @abstr_number -d vector and try to get it down to @abstr_number -d. It would save some space and (ideally) not hurt accuracy.

所以，如果采用了CNN特征的话，推荐将其降维到 @abstr_number D。

_* @abstr_number / @abstr_number / @abstr_number 更新_ *：添加对MatConvNet最新版version @abstr_number . @abstr_number -beta @abstr_number 的支持，预训练的模型请到Matconvnet官网下载最新的模型。

_* @abstr_number / @abstr_number / @abstr_number 更新_ *：Web演示部分代码公开 @abstr_hyperlink 。

_* @abstr_number / @abstr_number / @abstr_number 更新_ *：添加对MatConvNet最新版version @abstr_number . @abstr_number -beta @abstr_number 的支持。

_* @abstr_number / @abstr_number / @abstr_number 更新_ *：添加对 @abstr_hyperlink 最新版version @abstr_number . @abstr_number -beta @abstr_number 的支持，删掉原来的版本(预训练的模型请到matconvnet官网下载最新的模型)。

_* @abstr_number / @abstr_number / @abstr_number 更新_ *：添加对 @abstr_hyperlink 最新版version @abstr_number . @abstr_number -beta @abstr_number 的支持。

## CNN资源列表

### C++

@abstr_hyperlink ,对应博客 @abstr_hyperlink 

### Python

@abstr_hyperlink ，强力推荐

Keras资源列表：

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink 

@abstr_hyperlink ，对应主页 @abstr_hyperlink 

### Matlab

@abstr_hyperlink , A GPU Implementation of GoogLeNet.
