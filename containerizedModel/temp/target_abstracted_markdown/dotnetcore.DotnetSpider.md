# DotnetSpider

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

DotnetSpider, a .NET Standard web crawling library. It is lightweight, efficient and fast high-level web crawling & scraping framework

### DESIGN

@abstr_image 

### DEVELOP ENVIROMENT

@abstr_number . Visual Studio @abstr_number ( @abstr_number . @abstr_number or later) or Jetbrains Rider @abstr_number . @abstr_hyperlink @abstr_number . Docker @abstr_number . MySql
    
    
        docker run --name mysql -d -p  @abstr_number : @abstr_number  --restart always -e MYSQL_ROOT_PASSWORD= @abstr_number qazZAQ! mysql: @abstr_number . @abstr_number
    

@abstr_number . Redis (option)
    
    
        docker run --name redis -d -p  @abstr_number : @abstr_number  --restart always redis
    

@abstr_number . SqlServer
    
    
        docker run --name sqlserver -d -p  @abstr_number : @abstr_number  --restart always  -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD= @abstr_number qazZAQ!' mcr.microsoft.com/mssql/server: @abstr_number -latest
    

@abstr_number . PostgreSQL (option)
    
    
        docker run --name postgres -d  -p  @abstr_number : @abstr_number  --restart always -e POSTGRES_PASSWORD= @abstr_number qazZAQ! postgres
    

@abstr_number . MongoDb (option)
    
    
        docker run --name mongo -d -p  @abstr_number : @abstr_number  --restart always mongo
    

@abstr_number . Kafka
    
    
        docker run -d --restart always --name kafka-dev -p  @abstr_number : @abstr_number  -p  @abstr_number : @abstr_number  -p  @abstr_number - @abstr_number : @abstr_number - @abstr_number  \
               -p  @abstr_number - @abstr_number : @abstr_number - @abstr_number  -p  @abstr_number : @abstr_number  -e ADV_HOST= @abstr_number . @abstr_number . @abstr_number . @abstr_number  \
               landoop/fast-data-dev:latest
    

@abstr_number . Docker remote api for mac
    
    
        docker run -d  --restart always --name socat -v /var/run/docker.sock:/var/run/docker.sock -p  @abstr_number : @abstr_number  bobrik/socat TCP @abstr_number -LISTEN: @abstr_number ,fork,reuseaddr UNIX-CONNECT:/var/run/docker.sock
    

@abstr_number . Docker registry
    
    
        docker run -d  --restart always --name registry -p  @abstr_number : @abstr_number  --name registry registry: @abstr_number
    

@abstr_number . Add hosts
    
    
        {your id}       registry.zousong.com
        {your id}       kafka.zousong.com
        {your id}       zousong.com
    

### MORE DOCUMENTS

https://github.com/dotnetcore/DotnetSpider/wiki

### SAMPLES
    
    
    Please see the Project DotnetSpider.Sample in the solution.
    

### BASE USAGE

@abstr_hyperlink 

### ADDITIONAL USAGE: Configurable Entity Spider

@abstr_hyperlink 
    
    
    public class EntitySpider : Spider
    {
        public static void Run()
        {
            var builder = new SpiderBuilder();
            builder.AddSerilog();
            builder.ConfigureAppConfiguration();
            builder.UseStandalone();
            builder.AddSpider<EntitySpider>();
            var provider = builder.Build();
            provider.Create<EntitySpider>().RunAsync();
        }
    
        protected override void Initialize()
        {
            NewGuidId();
            Scheduler = new QueueDistinctBfsScheduler();
            Speed =  @abstr_number ;
            Depth =  @abstr_number ;
            DownloaderSettings.Type = DownloaderType.HttpClient;
            AddDataFlow(new DataParser<BaiduSearchEntry>()).AddDataFlow(GetDefaultStorage());
            AddRequests(
                new Request("https://news.cnblogs.com/n/page/ @abstr_number /", new Dictionary<string, string> {{"网站", "博客园"}}),
                new Request("https://news.cnblogs.com/n/page/ @abstr_number /", new Dictionary<string, string> {{"网站", "博客园"}}));
        }
    
        [Schema("cnblogs", "cnblogs_entity_model")]
        [EntitySelector(Expression = ".//div[@class='news_block']", Type = SelectorType.XPath)]
        [ValueSelector(Expression = ".//a[@class='current']", Name = "类别", Type = SelectorType.XPath)]
        class BaiduSearchEntry : EntityBase<BaiduSearchEntry>
        {
            protected override void Configure()
            {
                HasIndex(x => x.Title);
                HasIndex(x => new {x.WebSite, x.Guid}, true);
            }
    
            public int Id { get; set; }
    
            [Required]
            [StringLength( @abstr_number )]
            [ValueSelector(Expression = "类别", Type = SelectorType.Enviroment)]
            public string Category { get; set; }
    
            [Required]
            [StringLength( @abstr_number )]
            [ValueSelector(Expression = "网站", Type = SelectorType.Enviroment)]
            public string WebSite { get; set; }
    
            [StringLength( @abstr_number )]
            [ValueSelector(Expression = "//title")]
            [ReplaceFormatter(NewValue = "", OldValue = " - 博客园")]
            public string Title { get; set; }
    
            [StringLength( @abstr_number )]
            [ValueSelector(Expression = "GUID", Type = SelectorType.Enviroment)]
            public string Guid { get; set; }
    
            [ValueSelector(Expression = ".//h @abstr_number [@class='news_entry']/a")]
            public string News { get; set; }
    
            [ValueSelector(Expression = ".//h @abstr_number [@class='news_entry']/a/@href")]
            public string Url { get; set; }
    
            [ValueSelector(Expression = ".//div[@class='entry_summary']", ValueOption = ValueOption.InnerText)]
            public string PlainText { get; set; }
    
            [ValueSelector(Expression = "DATETIME", Type = SelectorType.Enviroment)]
            public DateTime CreationTime { get; set; }
        }
    
        public EntitySpider(IMessageQueue mq, IStatisticsService statisticsService, ISpiderOptions options, ILogger<Spider> logger, IServiceProvider services) : base(mq, statisticsService, options, logger, services)
        {
        }
    }
    

#### Distributed spider

##### start @abstr_number agent
    
    
    $ cd src/DotnetSpider.DownloaderAgent
    $ sh build.sh
    $ mkdir -p /Users/lewis/dotnetspider/logs/agent
    $ docker run --name agent @abstr_number  -d --restart always -e "DOTNET_SPIDER_AGENTID=agent @abstr_number " -e "DOTNET_SPIDER_AGENTNAME=agent @abstr_number " -e "DOTNET_SPIDER_KAFKACONSUMERGROUP=Agent" -v /Users/lewis/dotnetspider/agent/logs:/logs registry.zousong.com: @abstr_number /dotnetspider/downloader-agent:latest
    $ docker run --name agent @abstr_number  -d --restart always -e "DOTNET_SPIDER_AGENTID=agent @abstr_number " -e "DOTNET_SPIDER_AGENTNAME=agent @abstr_number " -e "DOTNET_SPIDER_KAFKACONSUMERGROUP=Agent" -v /Users/lewis/dotnetspider/agent/logs:/logs registry.zousong.com: @abstr_number /dotnetspider/downloader-agent:latest
    

#### start portal
    
    
    $ mkdir -p /Users/lewis/dotnetspider/portal & cd /Users/lewis/dotnetspider/portal
    $ curl https://raw.githubusercontent.com/dotnetcore/DotnetSpider/master/src/DotnetSpider.Portal/appsettings.json -O
    $ docker run --name dotnetspider.portal -d --restart always -p  @abstr_number : @abstr_number  -v /Users/lewis/dotnetspider/portal/appsettings.json:/portal/appsettings.json -v /Users/lewis/dotnetspider/portal/logs:/logs registry.zousong.com: @abstr_number /dotnetspider/portal:latest
    

#### WebDriver Support

When you want to collect a page JS loaded, there is only one thing to do, set the downloader to WebDriverDownloader.
    
    
    Downloader = new WebDriverDownloader(Browser.Chrome);
    

@abstr_hyperlink 

NOTE:

@abstr_number . Make sure the ChromeDriver.exe is in bin folder when use Chrome, install it to your project from NUGET: Chromium.ChromeDriver @abstr_number . Make sure you already add a *.webdriver Firefox profile when use Firefox: https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles @abstr_number . Make sure the PhantomJS.exe is in bin folder when use PhantomJS, install it to your project from NUGET: PhantomJS

### NOTICE

#### when you use redis scheduler, please update your redis config:
    
    
    timeout  @abstr_number 
    tcp-keepalive  @abstr_number
    

### Buy me a coffee

@abstr_image 

### AREAS FOR IMPROVEMENTS

QQ Group: @abstr_number Email: zlzforever@ @abstr_number .com
