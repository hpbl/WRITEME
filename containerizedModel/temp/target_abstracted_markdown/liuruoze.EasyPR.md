# EasyPR

EasyPR是一个开源的中文车牌识别系统，其目标是成为一个简单、高效、准确的非限制场景(unconstrained situation)下的车牌识别库。

相比于其他的车牌识别系统，EasyPR有如下特点：

  * 它基于openCV这个开源库。这意味着你可以获取全部源代码，并且移植到opencv支持的所有平台。
  * 它能够识别中文。例如车牌为苏EUK @abstr_number 的图片，它可以准确地输出std:string类型的"苏EUK @abstr_number "的结果。
  * 它的识别率较高。图片清晰情况下，车牌检测与字符识别可以达到 @abstr_number %以上的精度。



### 更新

本次更新版本是 @abstr_number . @abstr_number 正式版本，主要有以下几点更新：

@abstr_number . 修正了多项readme的文本提示。

@abstr_number . 增加了C#调用EasyPR的一个项目的链接，感谢 @zhang-can 同学。

**注意**

@abstr_number . 对于Opencv @abstr_number . @abstr_number 或以上版本，如果碰到编译问题，例如“ANN_MLP”相关的错误，尝试将config.h中将#define CV_VERSION_THREE_ZERO改为#define CV_VERSION_THREE_TWO试试.

@abstr_number . linux系统推荐使用Opencv @abstr_number . @abstr_number 以上版本。 @abstr_number . @abstr_number 以下的版本例如 @abstr_number . @abstr_number 和 @abstr_number . @abstr_number 在识别时可能会出现车牌识别结果为空的情况。稳妥起见，建议都升级到最新的 @abstr_number . @abstr_number 版本。Windows版本没有这个问题。

## 待做的工作

  * [ ] 完成一个CNN框架
  * [ ] 替换ANN为CNN
  * [ ] 增加新能源车的识别（待定）
  * [ ] 增加两行车牌的识别（待定）



### 跨平台

目前除了windows平台以外，还有以下其他平台的EasyPR版本。一些平台的版本可能会暂时落后于主平台。

现在有一个无需配置opencv的 @abstr_number . @abstr_number 版本的 @abstr_hyperlink 。仅仅支持vs @abstr_number ，也只能在debug和x @abstr_number 下运行，其他情况的话还是得配置opencv。感谢范文捷同学的帮助。页面里的两个文件都要下载，下载后用 @abstr_hyperlink 解压。

|版本 | 开发者 | 版本 | 地址 |------|-------|-------|------- | C# | zhang-can | @abstr_number . @abstr_number | @abstr_hyperlink | android | goldriver | @abstr_number . @abstr_number | @abstr_hyperlink | linux | Micooz | @abstr_number . @abstr_number | 已跟EasyPR整合 | ios | zhoushiwei | @abstr_number . @abstr_number | @abstr_hyperlink | mac | zhoushiwei,Micooz | @abstr_number . @abstr_number | 已跟EasyPR整合 | java | fan-wenjie | @abstr_number . @abstr_number | @abstr_hyperlink | 懒人版 | fan-wenjie | @abstr_number . @abstr_number | @abstr_hyperlink 

### 兼容性

当前EasyPR是基于opencv @abstr_number . @abstr_number 版本开发的， @abstr_number . @abstr_number 及以上的版本应该可以兼容，以前的版本可能会存在不兼容的现象。

### 例子

假设我们有如下的原始图片，需要识别出中间的车牌字符与颜色：

@abstr_image 

经过EasyPR的第一步处理车牌检测（PlateDetect）以后，我们获得了原始图片中仅包含车牌的图块：

@abstr_image 

接着，我们对图块进行OCR过程，在EasyPR中，叫做字符识别（CharsRecognize）。我们得到了一个包含车牌颜色与字符的字符串：

“蓝牌：苏EUK @abstr_number ”

### 示例

EasyPR的调用非常简单，下面是一段示例代码: ```c++ CPlateRecognize pr; pr.setResultShow(false); pr.setDetectType(PR_DETECT_CMSER);
    
    
    vector<CPlate> plateVec;
    Mat src = imread(filepath);
    int result = pr.plateRecognize(src, plateVec);
    

@abstr_code_section c++ pr.setResultShow(false); @abstr_code_section c++ pr.setDetectType(PR_DETECT_CMSER); @abstr_code_section c++ pr.setDetectType(PR_DETECT_COLOR | PR_DETECT_SOBEL); @abstr_code_section c++ pr.setLifemode(true); @abstr_code_section c++ pr.setMaxPlates( @abstr_number ); @abstr_code_section c++ vector plateVec; Mat src = imread(filepath); int result = pr.plateRecognize(src, plateVec); @abstr_code_section c++ CPlate plate = plateVec.at(i); Mat plateMat = plate.getPlateMat(); RotatedRect rrect = plate.getPlatePos(); string license = plate.getPlateStr(); ```

plateMat代表车牌图像，rrect代表车牌的可旋转矩形位置，license代表车牌字符串，例如“蓝牌：苏EUK @abstr_number ”。

这里说下如何去阅读如下图的识别结果。

@abstr_image 

第 @abstr_number 行代表的是图片的文件名。

第 @abstr_number 行代表GroundTruth车牌，用后缀（g）表示。第 @abstr_number 行代表EasyPR检测车牌，用后缀（d）表示。两者形成一个配对，第 @abstr_number 行代表两者的字符差距。

下面同上。本图片中有 @abstr_number 个车牌，所有共有三个配对。最后的Recall等指标代表的是整幅图片的定位评价，考虑了三个配对的结果。

有时检测车牌的部分会用“无车牌”与“No string”替代。“无车牌”代表“定位不成功”，“No string”代表“定位成功但字符分割失败”。

### 版权

EasyPR的源代码与训练数据遵循Apache v @abstr_number . @abstr_number 协议开源。

EasyPR的resources/image/general_test文件夹下的图片数据遵循GDSL协议（通用数据共享协议）进行开放。

请确保在使用前了解以上协议的内容。

### 目录结构

以下表格是本工程中所有目录的解释:

|目录 | 解释 |------|---------- | src | 所有源文件 | include | 所有头文件 | test | 测试程序 | model | 机器学习的模型 | resources/text | 中文字符映射表 | resources/train | 训练数据与说明 | resources/image | 测试用的图片 | resources/doc | 相关文档 | tmp | 训练数据读取目录，需要自建

以下表格是resources/image目录中子目录的解释:

|目录 | 解释 |------|---------- | general_test | GDTS（通用数据测试集） | native_test | NDTS（本地数据测试集） | tmp | Debug模式下EasyPR输出中间图片的目录，需要自建

以下表格是src目录中子目录的解释:

|目录 | 解释 |------|---------- | core | 核心功能 | preprocess | SVM预处理 | train | 训练目录，存放模型训练的代码 | util | 辅助功能

以下表格是src目录下一些核心文件的解释与关系:

|文件 | 解释 |------|---------- | plate_locate | 车牌定位 | plate_judge | 车牌判断 | plate_detect | 车牌检测，是车牌定位与车牌判断功能的组合 | chars_segment | 字符分割 | chars_identify | 字符鉴别 | chars_recognise | 字符识别，是字符分割与字符鉴别功能的组合 | plate_recognize | 车牌识别，是车牌检测与字符识别的共有子类 | feature | 特征提取回调函数 | plate | 车牌抽象 | core_func.h | 共有的一些函数

以下表格是test目录下文件的解释:

|文件 | 解释 |------|---------- | main.cpp | 主命令行窗口 | accuracy.hpp | 批量测试 | chars.hpp | 字符识别相关 | plate.hpp | 车牌识别相关

以下表格是train目录下文件的解释:

|文件 | 解释 |------|---------- | ann_train.cpp | 训练二值化字符 | annCh_train.hpp | 训练中文灰度字符 | svm_train.hpp | 训练车牌判断 | create_data.hpp | 生成合成数据

### 使用

请参考这里

### 获取帮助

详细的开发与教程请见 @abstr_hyperlink 。

如果你在使用过程中遇到任何问题，请在 @abstr_hyperlink 告诉我们。

EasyPR讨论QQ群号是：一群： @abstr_number ，二群： @abstr_number ，三群： @abstr_number ，四群： @abstr_number ，加前请注明EasyPR学习讨论。

### Contributors

  * liuruoze： @abstr_number . @abstr_number - @abstr_number . @abstr_number ， @abstr_number . @abstr_number 版作者

  * 海豚嘎嘎(车主之家)： @abstr_number . @abstr_number 版算法贡献者，提升了车牌定位与字符识别的准确率

  * Micooz： @abstr_number . @abstr_number - @abstr_number . @abstr_number 版架构重构，linux与mac支持，opencv @abstr_number . @abstr_number 支持，utf- @abstr_number 编码转换

  * jsxyhelu：deface版本一

  * zhoushiwei：deface版本二

  * ahccom：新的plateLocate函数

  * 阿水： @abstr_number . @abstr_number 版整合，数据标注等工作

  * fan-wenjie： @abstr_number . @abstr_number 版opencv整合版提供者

  * Free： @abstr_number . @abstr_number 版数据提供者




### 鸣谢

taotao @abstr_number ，邱锦山，唐大侠，jsxyhelu，如果有一天(zhoushiwei)，学习奋斗，袁承志，圣城小石匠，goldriver，Micooz，梦里时光，Rain Wang，任薛纪，ahccom，星夜落尘，海豚嘎嘎(车主之家)，刘超，Free大神，以及所有对EasyPR贡献数据的热心同学。
