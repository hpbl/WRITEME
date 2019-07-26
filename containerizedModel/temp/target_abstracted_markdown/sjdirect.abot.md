# Abot @abstr_hyperlink @abstr_hyperlink 

_Please star this project!!_ Contact me with exciting opportunities!!

###### C# web crawler built for speed and flexibility.

Abot is an open source C# web crawler built for speed and flexibility. It takes care of the low level plumbing (multithreading, http requests, scheduling, link parsing, etc..). You just register for events to process the page data. You can also plugin your own implementations of core interfaces to take complete control over the crawl process. Abot targets .NET version @abstr_number . @abstr_number which makes it highly compatible with many .net framework implementations.

###### What's So Great About It?

  * Open Source (Free for commercial and personal use)
  * It's fast!!
  * Easily customizable (Pluggable architecture allows you to decide what gets crawled and how)
  * Heavily unit tested (High code coverage)
  * Very lightweight (not over engineered)
  * No out of process dependencies (database, installed services, etc...)



###### Links of Interest

  * @abstr_hyperlink , sorry guys/gals :(
  * @abstr_hyperlink , please search for similar questions first!!!
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink to help prioritize features/improvements
  * @abstr_hyperlink 
  * @abstr_hyperlink 



###### Use @abstr_hyperlink for powerful extensions/wrappers

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



  
  


* * *

## Quick Start

###### Installing Abot

  * Install Abot using @abstr_hyperlink 
  * If you prefer to build from source yourself see the Working With The Source Code section below



###### Using Abot

@abstr_number : Add the following using statements to the host class... ```c# using Abot.Crawler; using Abot.Poco; @abstr_code_section xml 

httpRequestTimeoutInSeconds=" @abstr_number " httpRequestMaxAutoRedirects=" @abstr_number " isHttpRequestAutoRedirectsEnabled="true" isHttpRequestAutomaticDecompressionEnabled="false" isSendingCookiesEnabled="false" isSslCertificateValidationEnabled="false" isRespectUrlNamedAnchorOrHashbangEnabled="false" minAvailableMemoryRequiredInMb=" @abstr_number " maxMemoryUsageInMb=" @abstr_number " maxMemoryUsageCacheTimeInSeconds=" @abstr_number " maxCrawlDepth=" @abstr_number " maxLinksPerPage=" @abstr_number " isForcedLinkParsingEnabled="false" maxRetryCount=" @abstr_number " minRetryDelayInMilliseconds=" @abstr_number " />   
  
  
@abstr_code_section c# CrawlConfiguration crawlConfig = new CrawlConfiguration(); crawlConfig.CrawlTimeoutSeconds = @abstr_number ; crawlConfig.MaxConcurrentThreads = @abstr_number ; crawlConfig.MaxPagesToCrawl = @abstr_number ; crawlConfig.UserAgentString = "abot v @abstr_number . @abstr_number http://code.google.com/p/abot"; crawlConfig.ConfigurationExtensions.Add("SomeCustomConfigValue @abstr_number ", " @abstr_number "); crawlConfig.ConfigurationExtensions.Add("SomeCustomConfigValue @abstr_number ", " @abstr_number "); etc... @abstr_code_section c# CrawlConfiguration crawlConfig = AbotConfigurationSectionHandler.LoadFromXml().Convert(); crawlConfig.MaxConcurrentThreads = @abstr_number ;//this overrides the config value etc... @abstr_code_section c# //Will use app.config for configuration PoliteWebCrawler crawler = new PoliteWebCrawler(); @abstr_code_section @abstr_number : Register for events and create processing methods (both synchronous and asynchronous versions available) `c# crawler.PageCrawlStartingAsync += crawler_ProcessPageCrawlStarting; crawler.PageCrawlCompletedAsync += crawler_ProcessPageCrawlCompleted; crawler.PageCrawlDisallowedAsync += crawler_PageCrawlDisallowed; crawler.PageLinksCrawlDisallowedAsync += crawler_PageLinksCrawlDisallowed; @abstr_code_section @abstr_number : (Optional) Add any number of custom objects to the dynamic crawl bag or page bag. These objects will be available in the CrawlContext.CrawlBag object, PageToCrawl.PageBag object or CrawledPage.PageBag object. `c# PoliteWebCrawler crawler = new PoliteWebCrawler(); crawler.CrawlBag.MyFoo @abstr_number = new Foo(); crawler.CrawlBag.MyFoo @abstr_number = new Foo(); crawler.PageCrawlStartingAsync += crawler_ProcessPageCrawlStarting; ... @abstr_code_section @abstr_number : Run the crawl ```c# CrawlResult result = crawler.Crawl(new Uri("http://localhost: @abstr_number /")); //This is synchronous, it will not go to the next line until the crawl has completed

if (result.ErrorOccurred) Console.WriteLine("Crawl of { @abstr_number } completed with error: { @abstr_number }", result.RootUri.AbsoluteUri, result.ErrorException.Message); else Console.WriteLine("Crawl of { @abstr_number } completed without error.", result.RootUri.AbsoluteUri); @abstr_code_section c# CancellationTokenSource cancellationTokenSource = new CancellationTokenSource();

PoliteWebCrawler crawler = new PoliteWebCrawler(); CrawlResult result = crawler.Crawl(new Uri("addurihere"), cancellationTokenSource); @abstr_code_section c# using log @abstr_number net.Config; @abstr_code_section c# XmlConfigurator.Configure(); @abstr_code_section xml 

@abstr_code_section c# PoliteWebCrawler crawler = new PoliteWebCrawler();

crawler.ShouldCrawlPage((pageToCrawl, crawlContext) => { CrawlDecision decision = new CrawlDecision{ Allow = true }; if(pageToCrawl.Uri.Authority == "google.com") return new CrawlDecision{ Allow = false, Reason = "Dont want to crawl google pages" };
    
    
    return decision;
    

});

crawler.ShouldDownloadPageContent((crawledPage, crawlContext) => { CrawlDecision decision = new CrawlDecision{ Allow = true }; if (!crawledPage.Uri.AbsoluteUri.Contains(".com")) return new CrawlDecision { Allow = false, Reason = "Only download raw page content for .com tlds" };
    
    
    return decision;
    

});

crawler.ShouldCrawlPageLinks((crawledPage, crawlContext) => { CrawlDecision decision = new CrawlDecision{ Allow = true }; if (crawledPage.Content.Bytes.Length < @abstr_number ) return new CrawlDecision { Allow = false, Reason = "Just crawl links in pages that have at least @abstr_number bytes" };
    
    
    return decision;
    

}); @abstr_code_section c# PoliteWebCrawler crawler = new PoliteWebCrawler( new CrawlConfiguration(), new YourCrawlDecisionMaker(), new YourThreadMgr(), new YourScheduler(), new YourPageRequester(), new YourHyperLinkParser(), new YourMemoryManager(), new YourDomainRateLimiter, new YourRobotsDotTextFinder()); @abstr_code_section c# PoliteWebCrawler crawler = new PoliteWebCrawler( null, null, null, null, new YourPageRequester(), new YourHyperLinkParser(), null, null, null); @abstr_code_section c# ///  /// Determines what pages should be crawled, whether the raw content should be downloaded and if the links on a page should be crawled ///  public interface ICrawlDecisionMaker { ///  /// Decides whether the page should be crawled ///  CrawlDecision ShouldCrawlPage(PageToCrawl pageToCrawl, CrawlContext crawlContext);
    
    
    /// <summary>
    /// Decides whether the page's links should be crawled
    /// </summary>
    CrawlDecision ShouldCrawlPageLinks(CrawledPage crawledPage, CrawlContext crawlContext);
    
    /// <summary>
    /// Decides whether the page's content should be dowloaded
    /// </summary>
    CrawlDecision ShouldDownloadPageContent(CrawledPage crawledPage, CrawlContext crawlContext);
    

} @abstr_code_section c# ///  /// Handles the multithreading implementation details ///  public interface IThreadManager : IDisposable { ///  /// Max number of threads to use. ///  int MaxThreads { get; }
    
    
    /// <summary>
    /// Will perform the action asynchrously on a seperate thread
    /// </summary>
    /// <param name="action">The action to perform</param>
    void DoWork(Action action);
    
    /// <summary>
    /// Whether there are running threads
    /// </summary>
    bool HasRunningThreads();
    
    /// <summary>
    /// Abort all running threads
    /// </summary>
    void AbortAll();
    

} @abstr_code_section c# ///  /// Handles managing the priority of what pages need to be crawled ///  public interface IScheduler { ///  /// Count of remaining items that are currently scheduled ///  int Count { get; }
    
    
    /// <summary>
    /// Schedules the param to be crawled
    /// </summary>
    void Add(PageToCrawl page);
    
    /// <summary>
    /// Schedules the param to be crawled
    /// </summary>
    void Add(IEnumerable<PageToCrawl> pages);
    
    /// <summary>
    /// Gets the next page to crawl
    /// </summary>
    PageToCrawl GetNext();
    
    /// <summary>
    /// Clear all currently scheduled pages
    /// </summary>
    void Clear();
    

} @abstr_code_section c# public interface IPageRequester { ///  /// Make an http web request to the url and download its content ///  CrawledPage MakeRequest(Uri uri);
    
    
    /// <summary>
    /// Make an http web request to the url and download its content based on the param func decision
    /// </summary>
    CrawledPage MakeRequest(Uri uri, Func<CrawledPage, CrawlDecision> shouldDownloadContent);
    

} @abstr_code_section c# ///  /// Handles parsing hyperlikns out of the raw html ///  public interface IHyperLinkParser { ///  /// Parses html to extract hyperlinks, converts each into an absolute url ///  IEnumerable GetLinks(CrawledPage crawledPage); } @abstr_code_section c# ///  /// Handles memory monitoring/usage ///  public interface IMemoryManager : IMemoryMonitor, IDisposable { ///  /// Whether the current process that is hosting this instance is allocated/using above the param value of memory in mb ///  bool IsCurrentUsageAbove(int sizeInMb);
    
    
    /// <summary>
    /// Whether there is at least the param value of available memory in mb
    /// </summary>
    bool IsSpaceAvailable(int sizeInMb);
    

} @abstr_code_section c# ///  /// Rate limits or throttles on a per domain basis ///  public interface IDomainRateLimiter { ///  /// If the domain of the param has been flagged for rate limiting, it will be rate limited according to the configured minimum crawl delay ///  void RateLimit(Uri uri);
    
    
    /// <summary>
    /// Add a domain entry so that domain may be rate limited according the the param minumum crawl delay
    /// </summary>
    void AddDomain(Uri uri, long minCrawlDelayInMillisecs);
    

} @abstr_code_section c# ///  /// Finds and builds the robots.txt file abstraction ///  public interface IRobotsDotTextFinder { ///  /// Finds the robots.txt file using the rootUri. /// IRobotsDotText Find(Uri rootUri); } @abstr_code_section xml    
@abstr_code_section xml    
```

This will tell Abot to use @abstr_number threads, to crawl up to @abstr_number , @abstr_number pages and that it should NOT wait in between requests. Abot will be requesting and processing up to @abstr_number pages at a time concurrently. 

@abstr_number : Right click on the Abot.Demo project and set it as the "startup project"  
@abstr_number : Then hit ctrl + F @abstr_number to see the console app run.  
@abstr_number : When prompted for a url enter whatever site you want to crawl (must begin with "http://" or "https://")  
@abstr_number : Press enter  
@abstr_number : View the Abot.Demo/bin/debug/abotlog.txt file for all the output.  


###### How To Run Demo Against Abot.SiteSimulator

If you would rather test your crawls on a test site then I would suggest you use the Abot.SiteSimulator mvc project. This site is hosted on your machine and will not generate any http traffic beyond your local network. This allows you to crawl as aggressively as you would like without of fear of isp issues. This site also has links that purposefully return http @abstr_number , @abstr_number - @abstr_number , @abstr_number - @abstr_number and @abstr_number responses to simulate a wide range of what can be encountered while crawling the web. To use the Abot.SiteSimulator project do the following...

@abstr_number : Right click on the Abot.SiteSimulator project and set it as the "startup project".  
@abstr_number : Then hit ctrl + F @abstr_number to run it, You should see a simple webpage with a few links on http://localhost: @abstr_number /  
@abstr_number : Right click on the Abot.Demo project and set it as the "startup project".   
@abstr_number : Then hit ctrl + F @abstr_number to see the console app run.  
@abstr_number : When prompted for a url enter: http://localhost: @abstr_number /  
@abstr_number : Press enter  
@abstr_number : View the Abot.Demo/bin/debug/abotlog.txt file for all the output.  


Now the Abot.Demo console application will be crawling the Abot.SiteSimulator test site that is running locally on your machine. This is the best way to develop Abot without being banned by your ip.

###### How to run Abot.Tests.Unit

@abstr_number : Verify "External Tools" defined above are installed and working  
@abstr_number : Run Abot.Tests.Unit tests using whatever test runner you like (Visual Studio test runner, Testdriven.net or Resharper).  


###### How to run Abot.Tests.Integration

@abstr_number : Verify "External Tools" defined above are installed and working  
@abstr_number : Run Abot.Tests.Integration using whatever test runner you like (Visual Studio test runner, Testdriven.net or Resharper).  
@abstr_number : View the file output at Abot.Tests.Integration/bin/debug/abotlog.txt file for all the output.  


###### Fiddler Core

Just a note that Fiddler.Core is started and stopped during unit and integration tests. This allows replaying predictable http requests. Read more about @abstr_hyperlink 
