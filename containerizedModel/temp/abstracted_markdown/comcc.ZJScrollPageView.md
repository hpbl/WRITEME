# ZJScrollPageView

#### OC版的简单方便的集成网易新闻, 腾讯视频, 头条 等首页的滑块视图联动的效果, segmentVIew, scrollViewController

### swift版本的请点 @abstr_hyperlink 

## #### 注意,如果您需要查看详细的注释, 可以下载swift版本里面, 这里很多地方就没有把注释移过来了

## 使用示例效果

@abstr_image @abstr_image @abstr_image 

@abstr_image @abstr_image @abstr_image 

@abstr_image @abstr_image 

@abstr_image @abstr_image @abstr_image @abstr_image 

* * *

### 可以简单快速灵活的实现上图中的效果

* * *

### 书写思路移步

###  @abstr_hyperlink 

## Requirements

  * iOS @abstr_number . @abstr_number + 



## Installation

  * ###直接将下载文件的ZJScrollPageView文件夹下的文件拖进您的项目中然后#import "ZJScrollPageView.h"就可以使用了



~~使用cocoaPods, 在你项目的Podfile文件里面添加 `pod ZJScrollPageView`(未更新)~~

## usage

#### 特别说明

因为大家可能会复用同一个controller来显示内容 * 在对应的controller的viewWillAppear()等生命周期里面可以根据不同的title来显示不同的内容或者刷新视图

  * 请注意: 如果你希望所有的子控制器的view的系统生命周期方法被正确的调用
  * 请重写父控制器的'shouldAutomaticallyForwardAppearanceMethods'方法 并且返回NO
  * 当然如果你不做这个操作, 子控制器的生命周期方法将不会被正确的调用
  * 如果你仍然想利用子控制器的生命周期方法, 请使用'ZJScrollPageViewChildVcDelegate'提供的代理方法
  * 或者'ZJScrollPageViewDelegate'提供的代理方法



* * *

### 更新说明

  * @abstr_number / @abstr_number / @abstr_number 新增了一个通知ScrollPageViewDidShowThePageNotification, 你可以监听这个通知来获取到正在显示的页数, 使用的示例可以参照 ZJSegmentStyle.h里面的说明
  * @abstr_number / @abstr_number / @abstr_number 增加了一个style属性 segmentViewBounces, 来设置segmentView是否有弹性
  * @abstr_number / @abstr_number / @abstr_number 增加了一个style属性 scrollContentView, 来设置contentView是否能滑动
  * @abstr_number / @abstr_number / @abstr_number 增加了一个分类, 提供了 scrollPageParentViewController属性, 方便在每个界面获取到父控制器
  * @abstr_number / @abstr_number / @abstr_number 更改了初始化方法, 改为了使用代理来传递相关的自控制器 方便动态更新
  * @abstr_number / @abstr_number / @abstr_number 新增加了子控制器遵守的协议ZJScrollPageViewChildVcDelegate, 用于页面出现的时候加载数据
  * @abstr_number / @abstr_number / @abstr_number 增加了可以显示图片, 和设置图片的不同位置的功能 

## * @abstr_number / @abstr_number / @abstr_number 修复一直bug, 保证了子控制器的生命周期方法被正确调用.




#### 可以设置的style效果

@abstr_code_section 

#### 一. 使用ScrollPageView , 提供了各种效果的组合,但是不能修改segmentView和ContentView的相对位置,两者是结合在一起的
    
    
    - (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"效果示例";
    
    //必要的设置, 如果没有设置可能导致内容显示不正常
    self.automaticallyAdjustsScrollViewInsets = NO;
    
    ZJSegmentStyle *style = [[ZJSegmentStyle alloc] init];
    //显示遮盖
    style.showCover = YES;
    style.segmentViewBounces = NO;
    // 颜色渐变
    style.gradualChangeTitleColor = YES;
    // 显示附加的按钮
    style.showExtraButton = YES;
    // 设置附加按钮的背景图片
    style.extraBtnBackgroundImageName = @"extraBtnBackgroundImage";
    
    self.titles = @[@"新闻头条",
                    @"国际要闻",
                    @"体育",
                    @"中国足球",
                    @"汽车",
                    @"囧途旅游",
                    @"幽默搞笑",
                    @"视频",
                    @"无厘头",
                    @"美女图片",
                    @"今日房价",
                    @"头像",
                    ];
    // 初始化
    CGRect scrollPageViewFrame = CGRectMake( @abstr_number ,  @abstr_number . @abstr_number , self.view.bounds.size.width, self.view.bounds.size.height -  @abstr_number . @abstr_number );
    ZJScrollPageView *scrollPageView = [[ZJScrollPageView alloc] initWithFrame:scrollPageViewFrame segmentStyle:style titles:_titles parentViewController:self delegate:self];
    self.scrollPageView = scrollPageView;
    // 额外的按钮响应的block
    __weak typeof(self) weakSelf = self;
    
    
    self.scrollPageView.extraBtnOnClick = ^(UIButton *extraBtn){
        weakSelf.title = @"点击了extraBtn";
        NSLog(@"点击了extraBtn");
    
    };
    [self.view addSubview:self.scrollPageView];
    

}

代理方法
    
    
    - (NSInteger)numberOfChildViewControllers {
    return self.titles.count;// 传入页面的总数, 推荐使用titles.count
    }
    
    - (UIViewController *)childViewController:(UIViewController *)reuseViewController forIndex:(NSInteger)index {
    
    UIViewController *childVc = reuseViewController;
    // 这里一定要判断传过来的是否是nil, 如果为nil直接使用并返回
    // 如果不为nil 就创建
    if (childVc == nil) {
        childVc = [UIViewController new];
    
        if (index% @abstr_number  ==  @abstr_number ) {
            childVc.view.backgroundColor = [UIColor redColor];
        } else {
            childVc.view.backgroundColor = [UIColor cyanColor];
    
        }
    
    }
    return childVc;
    }
    

#### 二 使用 ZJScrollSegmentView 和 ZJContentView, 提供相同的效果组合, 但是同时可以分离开segmentView和contentView,可以单独设置他们的frame, 使用更灵活
    
    
    - (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"效果示例";
    
    //必要的设置, 如果没有设置可能导致内容显示不正常
    self.automaticallyAdjustsScrollViewInsets = NO;
    self.childVcs = [self setupChildVc];
    // 初始化
    [self setupSegmentView];
    [self setupContentView];
    
    }
    

### setupSegmentView
    
    
        // 注意: 一定要避免循环引用!!
    __weak typeof(self) weakSelf = self;
    ZJScrollSegmentView *segment = [[ZJScrollSegmentView alloc] initWithFrame:CGRectMake( @abstr_number ,  @abstr_number . @abstr_number ,  @abstr_number . @abstr_number ,  @abstr_number . @abstr_number ) segmentStyle:style titles:titles titleDidClick:^(UILabel *label, NSInteger index) {
    
        [weakSelf.contentView setContentOffSet:CGPointMake(weakSelf.contentView.bounds.size.width * index,  @abstr_number . @abstr_number ) animated:YES];
    
    }];
    // 自定义标题的样式
    segment.layer.cornerRadius =  @abstr_number . @abstr_number ;
    segment.backgroundColor = [UIColor redColor];
    // 当然推荐直接设置背景图片的方式
    //    segment.backgroundImage = [UIImage imageNamed:@"extraBtnBackgroundImage"];
    
    self.segmentView = segment;
    self.navigationItem.titleView = self.segmentView;
    

### setupContentView
    
    
        ZJContentView *content = [[ZJContentView alloc] initWithFrame:CGRectMake( @abstr_number . @abstr_number ,  @abstr_number . @abstr_number , self.view.bounds.size.width, self.view.bounds.size.height -  @abstr_number . @abstr_number ) segmentView:self.segmentView parentViewController:self delegate:self];
    self.contentView = content;
    [self.view addSubview:self.contentView];
    

代理方法
    
    
    - (NSInteger)numberOfChildViewControllers {
    return self.titles.count;
    }
    
    - (UIViewController *)childViewController:(UIViewController *)reuseViewController forIndex:(NSInteger)index {
    UIViewController *childVc = reuseViewController;
    if (childVc == nil) {
        childVc = self.childVcs[index];
    
        if (index% @abstr_number  ==  @abstr_number ) {
            childVc.view.backgroundColor = [UIColor redColor];
        } else {
            childVc.view.backgroundColor = [UIColor cyanColor];
    
        }
    
    }
    return childVc;
    }
    

> 这是我写的
> 
> 当然作为本书的写作者, 还是希望有人能支持正版书籍. 如果你有意购买书籍, 在 @abstr_hyperlink , 介绍了书籍中所有的内容和书籍适合阅读的人群, 和一些试读章节, 以及购买链接. 在你准备 @abstr_hyperlink 之前, 请一定读一读里面的说明. 否则, 如果不适合你阅读, 虽然书籍售价 @abstr_number 不是很贵, 但是也是一笔损失.
> 
> 如果你希望联系到我, 可以通过 @abstr_hyperlink 联系到我
> 
> ## License

ScrollPageView is released under the MIT license. See LICENSE for details.
