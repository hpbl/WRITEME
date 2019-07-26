# surging @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

### surging 是一个分布式微服务框架,提供高性能RPC远程服务调用，采用Zookeeper、Consul作为surging服务的注册中心，集成了哈希，随机，轮询，压力最小优先作为负载均衡的算法，RPC集成采用的是netty框架，采用异步传输。

  


### 名字由来

英文名：surging

中文名：滔滔

中文名来自周星驰的经典台词

我对阁下的景仰犹如滔滔江水,连绵不绝,犹如黄河泛滥,一发而不可收拾，而取名英文的含义也希望此框架能流行起来，也能像《.net core surging》这句英文语句含义一样，.net core技术风起云涌,冲击整个软件生态系统。

### 微服务定义

微服务应该是可以自由组合拆分，对于每个业务都是独立的，针对于业务模块的 CRUD 可以注册为服务，而每个服务都是高度自治的，从开发，部署都是独立，而每个服务只做单一功能，利用领域驱动设计去更好的拆分成粒度更小的模块

### 微服务边界

微服务是针对业务的松耦合，也是粒度最小的功能业务模块，针对于行业解决方案，集成相应的service host,而针对于业务需要一些中间件来辅助，比如缓存中间件，eventbus中间件（消息中间件），数据储存中间件,而各个服务又可以互相通过rpc进行可靠性通信。

引擎是微服务的容器，而docker 是服务引擎的容器，而利用k @abstr_number s或rancher可以针对docker集群化管理，可以服务编排弹性扩容，熟知工具，让工具物尽其用。

### 能做什么

@abstr_number .简化的服务调用，通过服务规则的指定，就可以做到服务之间的远程调用，无需其它方式的侵入

@abstr_number .服务自动注册与发现，不需要配置服务提供方地址，注册中心基于ServiceId 或者RoutePath查询服务提供者的地址和元数据，并且能够平滑添加或删除服务提供者。

@abstr_number .软负载均衡及容错机制，通过surging内部负载算法和容错规则的设定，从而达到内部调用的负载和容错

@abstr_number .分布式缓存中间件：通过哈希一致性算法来实现负载，并且有健康检查能够平滑的把不健康的服务从列表中删除

@abstr_number . 事件总线：通过对于事件总线的适配可以实现发布订阅交互模式

@abstr_number .容器化持续集成与持续交付 ：通过构建一体化Devops平台,实现项目的自动化构建、部署、测试和发布，从而提高生产环境的可靠性、稳定性、弹性和安全性。

@abstr_number . 业务模块化驱动引擎，通过加载指定业务模块，能够更加灵活、高效的部署不同版本的业务功能模块

### 引擎如何安装

docker hub : docker pull serviceengine/surging:版本号

nuget:Install-Package surging -Version 版本号

### surging模块功能

@abstr_image 

### 配置：

```c# var host = new ServiceHostBuilder() .RegisterServices(builder => { builder.AddMicroService(option => { option.AddServiceRuntime();// option.AddRelateService();//添加支持服务代理远程调用 option.AddConfigurationWatch();//添加同步更新配置文件的监听处理 // option.UseZooKeeperManager(new ConfigInfo(" @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number ")); //使用Zookeeper管理 option.UseConsulManager(new ConfigInfo(" @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number "));//使用Consul管理 option.UseDotNettyTransport();//使用Netty传输 option.UseRabbitMQTransport();//使用rabbitmq 传输 option.AddRabbitMQAdapt();//基于rabbitmq的消费的服务适配 // option.UseProtoBufferCodec();//基于protobuf序列化 option.UseMessagePackCodec();//基于MessagePack序列化 builder.Register(p => new CPlatformContainer(ServiceLocator.Current));//初始化注入容器 }); }) .SubscribeAt() //消息订阅 //.UseServer(" @abstr_number . @abstr_number . @abstr_number . @abstr_number ", @abstr_number ) //.UseServer(" @abstr_number . @abstr_number . @abstr_number . @abstr_number ", @abstr_number ，“true”) //自动生成Token //.UseServer(" @abstr_number . @abstr_number . @abstr_number . @abstr_number ", @abstr_number ，“ @abstr_number ”) //固定密码Token .UseServer(options=> { options.Ip = " @abstr_number . @abstr_number . @abstr_number . @abstr_number "; options.Port = @abstr_number ; //options.IpEndpoint = new IPEndPoint(IPAddress.Any, @abstr_number ); //options.Ip = " @abstr_number . @abstr_number . @abstr_number . @abstr_number "; options.ExecutionTimeoutInMilliseconds = @abstr_number ; //执行超时时间 options.Strategy=(int)StrategyType.Failover; //容错策略使用故障切换 options.RequestCacheEnabled=true; //开启缓存（只有通过接口代理远程调用，才能启用缓存） options.Injection="return null"; //注入方式 options.InjectionNamespaces= new string[] { "Surging.IModuleServices.Common" }); //脚本注入使用的命名空间 options.BreakeErrorThresholdPercentage= @abstr_number ; //错误率达到多少开启熔断保护 options.BreakeSleepWindowInMilliseconds= @abstr_number ; //熔断多少毫秒后去尝试请求 options.BreakerForceClosed=false; //是否强制关闭熔断 options.BreakerRequestVolumeThreshold = @abstr_number ;// @abstr_number 秒钟内至少多少请求失败，熔断器才发挥起作用 options.MaxConcurrentRequests= @abstr_number ;//支持最大并发 options.ShuntStrategy=AddressSelectorMode.Polling; //使用轮询负载分流策略 options.NotRelatedAssemblyFiles = "Centa.Agency.Application.DTO\w _|StackExchange.Redis\w_ "; //排除无需依赖注册 }) //.UseLog @abstr_number net("Configs/log @abstr_number net.config") //使用log @abstr_number net记录日志 .UseNLog(LogLevel.Error, "Configs/NLog.config")// 使用NLog 记录日志 //.UseLog @abstr_number net(LogLevel.Error) //使用log @abstr_number net记录日志 //.UseLog @abstr_number net() //使用log @abstr_number net记录日志 .Configure(build => build.AddEventBusFile("eventBusSettings.json", optional: false))//使用eventBusSettings.json文件进行配置 .Configure(build => build.AddCacheFile("cacheSettings.json", optional: false))//使用cacheSettings.json文件进行配置 .UseProxy() //使用Proxy .UseStartup() .Build();
    
    
            using (host.Run())
            {
                Console.WriteLine($"服务端启动成功，{DateTime.Now}。");
            }
    

@abstr_code_section c# { "ConnectionString": "${Register_Conn}| @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number ", // ${环境变量名} |默认值, "SessionTimeout": "${Register_SessionTimeout}| @abstr_number ", "ReloadOnChange": true }

@abstr_code_section c# { "Ip": "${Server_IP}| @abstr_number . @abstr_number . @abstr_number . @abstr_number ", "WatchInterval": @abstr_number , "Port": "${Server_port}", "Token": "true", "Protocol": "${Protocol}|Tcp", //支持Http,Tcp协议 "RootPath": "${RootPath}", "RequestCacheEnabled": false }

@abstr_code_section c# { "Ip": "${Server_IP}| @abstr_number . @abstr_number . @abstr_number . @abstr_number ",//私有容器IP "WatchInterval": @abstr_number , "Port": "${Server_port}| @abstr_number ",//私有容器端口 "MappingIp": "${Mapping_ip}",//公开主机IP "MappingPort": "${Mapping_Port}",//公开主机端口 "Protocol": "${Protocol}|Tcp", //支持Http,Tcp协议 "Token": "true", "RootPath": "${RootPath}", "RequestCacheEnabled": false }

@abstr_code_section c# [ServiceBundle("api/{Service}")] @abstr_code_section c# [Authorization(AuthType = AuthorizationType.JWT)]; @abstr_code_section c# [Authorization(AuthType = AuthorizationType.AppSecret)]; @abstr_code_section c# ServiceLocator.GetService< ISubscriptionAdapt >().SubscribeAt(); @abstr_code_section c# [Command(Strategy= StrategyType.Injection ,Injection = @"return null;")] @abstr_code_section C#   
[Command(Strategy= StrategyType.Injection ,Injection = @"return Task.FromResult(new Surging.IModuleServices.Common.Models.UserModel { Name=""fanly"", Age= @abstr_number });",InjectionNamespaces =new string[] { "Surging.IModuleServices.Common"})] @abstr_code_section C#   
[Command(Strategy= StrategyType.Injection ,Injection = @"return true;")] @abstr_code_section C#   
[Command(Strategy= StrategyType.Failover,FailoverCluster = @abstr_number ,RequestCacheEnabled =true)] //RequestCacheEnabled =true 就是启用缓存 @abstr_code_section C#   
[InterceptMethod(CachingMethod.Get, Key = "GetUser_id_{ @abstr_number }", Mode = CacheTargetType.Redis, Time = @abstr_number )] @abstr_code_section C#   
[InterceptMethod(CachingMethod.Remove, "GetUser_id_{ @abstr_number }", "GetUserName_name_{ @abstr_number }", Mode = CacheTargetType.Redis)] @abstr_code_section C# [CacheKey( @abstr_number )] @abstr_code_section C# .AddClientIntercepted(typeof(CacheProviderInterceptor)) ```

### 捐赠基金

如果觉得这个框架不错，可以支持surging开源，请fanly喝一杯咖啡或吃一顿午餐或者是更好的社区发展，扫描下方二维码进行捐赠，并在付款说明填写您的改进意见。

@abstr_image 

## 捐赠明细

surging 接受来自社区的捐赠，所有款项将通过 捐赠明细表 进行公示，接受社区监督。

IDE:Visual Studio @abstr_number @abstr_number . @abstr_number ,vscode   
框架：.NET core @abstr_number . @abstr_number   
QQ群： @abstr_number * @abstr_hyperlink * @abstr_hyperlink 

## 谁在使用
