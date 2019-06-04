# HanLP: Han Language Processing

汉语言处理包 @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

* * *

**HanLP** 是由一系列模型与算法组成的Java工具包，目标是普及自然语言处理在生产环境中的应用。 **HanLP** 具备功能完善、性能高效、架构清晰、语料时新、可自定义的特点。

**HanLP** 提供下列功能：

>   * 中文分词 
>     * 最短路分词
>     * N-最短路分词
>     * CRF分词
>     * 索引分词
>     * 极速词典分词
>     * 用户自定义词典
>   * 词性标注
>   * 命名实体识别 
>     * 中国人名识别
>     * 音译人名识别
>     * 日本人名识别
>     * 地名识别
>     * 实体机构名识别
>   * 关键词提取 
>     * TextRank关键词提取
>   * 自动摘要 
>     * TextRank自动摘要
>   * 短语提取 
>     * 基于互信息和左右信息熵的短语提取
>   * 拼音转换 
>     * 多音字
>     * 声母
>     * 韵母
>     * 声调
>   * 简繁转换 
>     * 繁体中文分词
>     * 简繁分歧词（简体、繁体、臺灣正體、香港繁體）
>   * 文本推荐 
>     * 语义推荐
>     * 拼音推荐
>     * 字词推荐
>   * 依存句法分析 
>     * 基于神经网络的高性能依存句法分析器
>     * MaxEnt依存句法分析
>     * CRF依存句法分析
>   * 语料库工具 
>     * 分词语料预处理
>     * 词频词性词典制作
>     * BiGram统计
>     * 词共现统计
>     * CoNLL语料预处理
>     * CoNLL UA/LA/DA评测工具
> 


在提供丰富功能的同时， **HanLP** 内部模块坚持低耦合、模型坚持惰性加载、服务坚持静态提供、词典坚持明文发布，使用非常方便，同时自带一些语料处理工具，帮助用户训练自己的模型。

* * *

## 项目主页

HanLP下载地址：https://github.com/hankcs/HanLP/releases

Solr @abstr_number .x、Lucene @abstr_number .x插件：https://github.com/hankcs/hanlp-solr-plugin

更多细节：https://github.com/hankcs/HanLP/wiki

* * *

## 下载与配置

### 方式一、Maven

为了方便用户，特提供内置了数据包的Portable版，只需在pom.xml加入：

@abstr_code_section 

零配置，即可使用基本功能（除CRF分词、依存句法分析外的全部功能）。如果用户有自定义的需求，可以参考方式二，使用hanlp.properties进行配置。

### 方式二、下载jar、data、hanlp.properties

**HanLP** 将数据与程序分离，给予用户自定义的自由。

#### @abstr_number 、下载jar

@abstr_hyperlink 

#### @abstr_number 、下载data

| 数据包 | 功能 | 体积（MB） | | -------- | -----: | :----: | | @abstr_hyperlink | 全部 | @abstr_number | 下载后解压到任意目录，接下来通过配置文件告诉HanLP数据包的位置。

**HanLP** 中的数据分为 _词典_ 和 _模型_ ，其中 _词典_ 是词法分析必需的， _模型_ 是句法分析必需的。
    
    
    data
    │
    ├─dictionary
    └─model
    

用户可以自行增删替换，如果不需要句法分析功能的话，随时可以删除model文件夹。 \- 模型跟词典没有绝对的区别，隐马模型被做成人人都可以编辑的词典形式，不代表它不是模型。 \- GitHub代码库中已经包含了data.zip中的词典，直接编译运行自动缓存即可；模型则需要额外下载。

#### @abstr_number 、配置文件

示例配置文件: @abstr_hyperlink 在GitHub的发布页中，`hanlp.properties`一般和`jar`打包在同一个`zip`包中。

配置文件的作用是告诉HanLP数据包的位置，只需修改第一行
    
    
    root=usr/home/HanLP/
    

为data的 **父目录** 即可，比如data目录是`/Users/hankcs/Documents/data`，那么`root=/Users/hankcs/Documents/` 。

  * 如果选用mini词典的话，则需要修改配置文件： @abstr_code_section 



最后将HanLP.properties放入classpath即可，对于任何项目，都可以放到src或resources目录下，编译时IDE会自动将其复制到classpath中。

如果放置不当，HanLP会智能提示当前环境下的合适路径，并且尝试从项目根目录读取数据集。

## 调用方法

**HanLP** 几乎所有的功能都可以通过工具类`HanLP`快捷调用，当你想不起来调用方法时，只需键入`HanLP.`，IDE应当会给出提示，并展示 **HanLP** 完善的文档。

_推荐用户始终通过工具类`HanLP`调用，这么做的好处是，将来 **HanLP** 升级后，用户无需修改调用代码。_

所有Demo都位于 @abstr_hyperlink 下，比文档覆盖了更多细节，强烈建议运行一遍。

### @abstr_number . 第一个Demo

@abstr_code_section \- 内存要求 * **HanLP** 对词典的数据结构进行了长期的优化，可以应对绝大多数场景。哪怕 **HanLP** 的词典上百兆也无需担心，因为在内存中被精心压缩过。 * 如果内存非常有限，请使用小词典。 **HanLP** 默认使用大词典，同时提供小词典，请参考配置文件章节。 \- 写给正在编译 **HanLP** 的开发者 * 如果你正在编译运行从Github检出的 **HanLP** 代码，并且没有下载data缓存，那么首次加载词典/模型会发生一个 _自动缓存_ 的过程。 * _自动缓存_ 的目的是为了加速词典载入速度，在下次载入时，缓存的词典文件会带来毫秒级的加载速度。由于词典体积很大， _自动缓存_ 会耗费一些时间，请耐心等待。 * _自动缓存_ 缓存的不是明文词典，而是双数组Trie树、DAWG、AhoCorasickDoubleArrayTrie等数据结构。

### @abstr_number . 标准分词

@abstr_code_section \- 说明 * **HanLP** 中有一系列“开箱即用”的静态分词器，以`Tokenizer`结尾，在接下来的例子中会继续介绍。 * `HanLP.segment`其实是对`StandardTokenizer.segment`的包装。 * 分词结果包含词性，每个词性的意思请查阅 @abstr_hyperlink 。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . NLP分词

@abstr_code_section \- 说明 * NLP分词`NLPTokenizer`会执行全部命名实体识别和词性标注。

### @abstr_number . 索引分词

@abstr_code_section \- 说明 * 索引分词`IndexTokenizer`是面向搜索引擎的分词器，能够对长词全切分，另外通过`term.offset`可以获取单词在文本中的偏移量。

### @abstr_number . N-最短路径分词

@abstr_code_section \- 说明 * N最短路分词器`NShortSegment`比最短路分词器慢，但是效果稍微好一些，对命名实体识别能力更强。 * 一般场景下最短路分词的精度已经足够，而且速度比N最短路分词器快几倍，请酌情选择。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . CRF分词

@abstr_code_section \- 说明 * CRF对新词有很好的识别能力，但是开销较大。 \- 算法详解 * @abstr_hyperlink * @abstr_hyperlink 

### @abstr_number . 极速词典分词

@abstr_code_section \- 说明 * 极速分词是词典最长分词，速度极其快，精度一般。 * 在i @abstr_number 上跑出了 @abstr_number 万字每秒的速度。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 用户自定义词典

@abstr_code_section \- 说明 * `CustomDictionary`是一份全局的用户自定义词典，可以随时增删，影响全部分词器。 * 另外可以在任何分词器中关闭它。通过代码动态增删不会保存到词典文件。 \- 追加词典 * `CustomDictionary`主词典文本路径是`data/dictionary/custom/CustomDictionary.txt`，用户可以在此增加自己的词语（不推荐）；也可以单独新建一个文本文件，通过配置文件`CustomDictionaryPath=data/dictionary/custom/CustomDictionary.txt; 我的词典.txt;`来追加词典（推荐）。 * 始终建议将相同词性的词语放到同一个词典文件里，便于维护和分享。 \- 词典格式 * 每一行代表一个单词，格式遵从`[单词] [词性A] [A的频次] [词性B] [B的频次] ...` 如果不填词性则表示采用词典的默认词性。 * 词典的默认词性默认是名词n，可以通过配置文件修改：`全国地名大全.txt ns;`如果词典路径后面空格紧接着词性，则该词典默认是该词性。 * 在基于层叠隐马模型的最短路分词中，并不保证自定义词典中的词一定被切分出来。如果你认为这个词绝对应该切分出来，那么请将词频设大一些 * 关于用户词典的更多信息请参考 **词典说明** 一章。 \- 算法详解 * @abstr_hyperlink * @abstr_hyperlink 

### @abstr_number . 中国人名识别

@abstr_code_section \- 说明 * 目前分词器基本上都默认开启了中国人名识别，比如`HanLP.segment()`接口中使用的分词器等等，用户不必手动开启；上面的代码只是为了强调。 * 有一定的误命中率，比如误命中`关键年`，则可以通过在`data/dictionary/person/nr.txt`加入一条`关键年 A @abstr_number`来排除`关键年`作为人名的可能性，也可以将`关键年`作为新词登记到自定义词典中。 * 如果你通过上述办法解决了问题，欢迎向我提交pull request，词典也是宝贵的财富。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 音译人名识别

@abstr_code_section \- 说明 * 目前分词器基本上都默认开启了音译人名识别，用户不必手动开启；上面的代码只是为了强调。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 日本人名识别

@abstr_code_section \- 说明 * 目前标准分词器默认关闭了日本人名识别，用户需要手动开启；这是因为日本人名的出现频率较低，但是又消耗性能。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 地名识别

@abstr_code_section \- 说明 * 目前标准分词器都默认关闭了地名识别，用户需要手动开启；这是因为消耗性能，其实多数地名都收录在核心词典和用户自定义词典中。 * 在生产环境中，能靠词典解决的问题就靠词典解决，这是最高效稳定的方法。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 机构名识别

@abstr_code_section \- 说明 * 目前分词器默认关闭了机构名识别，用户需要手动开启；这是因为消耗性能，其实常用机构名都收录在核心词典和用户自定义词典中。 * HanLP的目的不是演示动态识别，在生产环境中，能靠词典解决的问题就靠词典解决，这是最高效稳定的方法。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 关键词提取

@abstr_code_section \- 说明 * 内部采用`TextRankKeyword`实现，用户可以直接调用`TextRankKeyword.getKeywordList(document, size)` \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 自动摘要

@abstr_code_section \- 说明 * 内部采用`TextRankSentence`实现，用户可以直接调用`TextRankSentence.getTopSentenceList(document, size)`。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 短语提取

@abstr_code_section \- 说明 * 内部采用`MutualInformationEntropyPhraseExtractor`实现，用户可以直接调用`MutualInformationEntropyPhraseExtractor.extractPhrase(text, size)`。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 拼音转换

@abstr_code_section \- 说明 * **HanLP** 不仅支持基础的汉字转拼音，还支持声母、韵母、音调、音标和输入法首字母首声母功能。 * **HanLP** 能够识别多音字，也能给繁体中文注拼音。 * 最重要的是， **HanLP** 采用的模式匹配升级到`AhoCorasickDoubleArrayTrie`，性能大幅提升，能够提供毫秒级的响应速度！ \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 简繁转换

@abstr_code_section \- 说明 * **HanLP** 能够识别简繁分歧词，比如`打印机=印表機`。许多简繁转换工具不能区分“以后”“皇后”中的两个“后”字， **HanLP** 可以。 \- 算法详解 * @abstr_hyperlink 

### @abstr_number . 文本推荐

@abstr_code_section \- 说明 * 在搜索引擎的输入框中，用户输入一个词，搜索引擎会联想出最合适的搜索词， **HanLP** 实现了类似的功能。 * 可以动态调节每种识别器的权重

### @abstr_number . 语义距离

@abstr_code_section \- 说明 * 设想的应用场景是搜索引擎对词义的理解，词与词并不只存在“同义词”与“非同义词”的关系，就算是同义词，它们之间的意义也是有微妙的差别的。 \- 算法 * 为每个词分配一个语义ID，词与词的距离通过语义ID的差得到。语义ID通过《同义词词林扩展版》计算而来。

### @abstr_number . 依存句法分析

@abstr_code_section \- 说明 * 内部采用`NeuralNetworkDependencyParser`实现，用户可以直接调用`NeuralNetworkDependencyParser.compute(sentence)` * 也可以调用基于最大熵的依存句法分析器`MaxEntDependencyParser.compute(sentence)` \- 算法详解 * @abstr_hyperlink * @abstr_hyperlink * @abstr_hyperlink 

## 词典说明

本章详细介绍 **HanLP** 中的词典格式，满足用户自定义的需要。 **HanLP** 中有许多词典，它们的格式都是相似的，形式都是文本文档，随时可以修改。

### 基本格式

词典分为词频词性词典和词频词典。

  * 词频词性词典 
    * 每一行代表一个单词，格式遵从`[单词] [词性A] [A的频次] [词性B] [B的频次] ...`。
  * 词频词典 
    * 每一行代表一个单词，格式遵从`[单词] [单词的频次]`。
    * 每一行的分隔符为空格符或制表符



少数词典有自己的专用格式，比如同义词词典兼容《同义词词林扩展版》的文本格式，而转移矩阵词典则是一个csv表格。

下文主要介绍通用词典，如不注明，词典特指通用词典。

### 数据结构

Trie树（字典树）是 **HanLP** 中使用最多的数据结构，为此，我实现了通用的Trie树，支持泛型、遍历、储存、载入。

用户自定义词典采用AhoCorasickDoubleArrayTrie和二分Trie树储存，其他词典采用基于 @abstr_hyperlink 实现的 @abstr_hyperlink 。

### 储存形式

词典有两个形态：文本文件(filename.txt)和缓存文件(filename.txt.bin或filename.txt.trie.dat和filename.txt.trie.value)。

  * 文本文件 
    * 采用明文储存，UTF- @abstr_number 编码，CRLF换行符。
  * 缓存文件 
    * 就是一些二进制文件，通常在文本文件的文件名后面加上.bin表示。有时候是.trie.dat和.trie.value。后者是历史遗留产物，分别代表trie树的数组和值。
    * 如果你修改了任何词典，只有删除缓存才能生效。



### 修改方法

HanLP的核心词典训练自人民日报 @abstr_number 语料，语料不是完美的，总会存在一些错误。这些错误可能会导致分词出现奇怪的结果，这时请打开调试模式排查问题： @abstr_code_section \- 核心词性词频词典 * 比如你在`data/dictionary/CoreNatureDictionary.txt`中发现了一个不是词的词，或者词性标注得明显不对，那么你可以修改它，然后删除缓存文件使其生效。 * 目前`CoreNatureDictionary.ngram.txt`的缓存依赖于`CoreNatureDictionary.txt`的缓存，修改了后者之后必须同步删除前者的缓存，否则可能出错 \- 核心二元文法词典 * 二元文法词典`data/dictionary/CoreNatureDictionary.ngram.txt`储存的是两个词的接续，如果你发现不可能存在这种接续时，删掉即可。 * 你也可以添加你认为合理的接续，但是这两个词必须同时在核心词典中才会生效。 \- 命名实体识别词典 * 基于角色标注的命名实体识别比较依赖词典，所以词典的质量大幅影响识别质量。 * 这些词典的格式与原理都是类似的，请阅读 @abstr_hyperlink 或代码修改它。

如果问题解决了，欢迎向我提交一个pull request，这是我在代码库中保留明文词典的原因，众人拾柴火焰高！

* * *

## 版权

### 上海林原信息科技有限公司

  * Apache License Version @abstr_number . @abstr_number 
  * HanLP产品初始知识产权归上海林原信息科技有限公司所有，任何人和企业可以无偿使用，可以对产品、源代码进行任何形式的修改，可以打包在其他产品中进行销售。
  * 任何使用了HanLP的全部或部分功能、词典、模型的项目、产品或文章等形式的成果必须显式注明HanLP及此项目主页。



### 鸣谢

感谢下列优秀开源项目：

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



感谢NLP界各位学者老师的著作：

  * 《基于角色标注的中国人名自动识别研究》张华平 刘群
  * 《基于层叠隐马尔可夫模型的中文命名实体识别》俞鸿魁 张华平 刘群 吕学强 施水才
  * 《基于角色标注的中文机构名识别》俞鸿魁 张华平 刘群
  * 《基于最大熵的依存句法分析》 辛霄 范士喜 王轩 王晓龙
  * An Efficient Implementation of Trie Structures, JUN-ICHI AOE AND KATSUSHI MORIMOTO
  * TextRank: Bringing Order into Texts, Rada Mihalcea and Paul Tarau



感谢上海林原信息科技有限公司的刘先生，允许我利用工作时间开发HanLP，提供服务器和域名，并且促成了开源。感谢诸位用户的关注和使用，HanLP并不完善，未来还恳求各位NLP爱好者多多关照，提出宝贵意见。

作者 @abstr_hyperlink 

@abstr_number 年 @abstr_number 月 @abstr_number 日
