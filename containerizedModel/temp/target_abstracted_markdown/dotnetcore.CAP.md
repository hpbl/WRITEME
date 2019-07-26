@abstr_image 

# CAP @abstr_hyperlink 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

CAP is a library based on .Net standard, which is a solution to deal with distributed transactions, also has the function of EventBus, it is lightweight, easy to use, and efficiently.

In the process of building an SOA or MicroService system, we usually need to use the event to integrate each services. In the process, the simple use of message queue does not guarantee the reliability. CAP is adopted the local message table program integrated with the current database to solve the exception may occur in the process of the distributed system calling each other. It can ensure that the event messages are not lost in any case.

You can also use the CAP as an EventBus. The CAP provides a simpler way to implement event publishing and subscriptions. You do not need to inherit or implement any interface during the process of subscription and sending.

## Architecture overview

@abstr_image 

> CAP implements the Outbox Pattern described in the @abstr_hyperlink .

## Getting Started

### NuGet

You can run the following command to install the CAP in your project.

@abstr_code_section 

CAP supports RabbitMQ,Kafka and AzureService as message queue, select the packages you need to install:

@abstr_code_section 

CAP supports SqlServer, MySql, PostgreSql，MongoDB as event log storage.

@abstr_code_section 

### Configuration

First,You need to config CAP in your Startup.cs：

@abstr_code_section 

### Publish

Inject `ICapPublisher` in your Controller, then use the `ICapPublisher` to send message

```c# public class PublishController : Controller { private readonly ICapPublisher _capBus;
    
    
    public PublishController(ICapPublisher capPublisher)
    {
        _capBus = capPublisher;
    }
    
    [Route("~/adonet/transaction")]
    public IActionResult AdonetWithTransaction()
    {
        using (var connection = new MySqlConnection(ConnectionString))
        {
            using (var transaction = connection.BeginTransaction(_capBus, autoCommit: true))
            {
                //your business logic code
    
                _capBus.Publish("xxx.services.show.time", DateTime.Now);
            }
        }
    
        return Ok();
    }
    
    [Route("~/ef/transaction")]
    public IActionResult EntityFrameworkWithTransaction([FromServices]AppDbContext dbContext)
    {
        using (var trans = dbContext.Database.BeginTransaction(_capBus, autoCommit: true))
        {
            //your business logic code
    
            _capBus.Publish("xxx.services.show.time", DateTime.Now);
        }
    
        return Ok();
    }
    

}

@abstr_code_section c# public class PublishController : Controller { [CapSubscribe("xxx.services.show.time")] public void CheckReceivedMessage(DateTime datetime) { Console.WriteLine(datetime); } }

@abstr_code_section c#

namespace BusinessCode.Service { public interface ISubscriberService { public void CheckReceivedMessage(DateTime datetime); }
    
    
    public class SubscriberService: ISubscriberService, ICapSubscribe
    {
        [CapSubscribe("xxx.services.show.time")]
        public void CheckReceivedMessage(DateTime datetime)
        {
        }
    }
    

}

@abstr_code_section c# public void ConfigureServices(IServiceCollection services) { //Note: The injection of services needs before of `services.AddCap()` services.AddTransient();
    
    
    services.AddCap(x=>
    {
        //...
    });
    

} @abstr_code_section C#

[CapSubscribe("xxx.services.show.time", Group = "group @abstr_number " )] public void ShowTime @abstr_number (DateTime datetime) { }

[CapSubscribe("xxx.services.show.time", Group = "group @abstr_number ")] public void ShowTime @abstr_number (DateTime datetime) { }

@abstr_code_section C# services.AddCap(x => { x.DefaultGroup = "default-group-name";   
});

@abstr_code_section c# services.AddCap(x => { //...
    
    
    // Register Dashboard
    x.UseDashboard();
    
    // Register to Consul
    x.UseDiscovery(d =>
    {
        d.DiscoveryServerHostName = "localhost";
        d.DiscoveryServerPort =  @abstr_number ;
        d.CurrentNodeHostName = "localhost";
        d.CurrentNodePort =  @abstr_number ;
        d.NodeId =  @abstr_number ;
        d.NodeName = "CAP No. @abstr_number  Node";
    });
    

}); ```

The default dashboard address is : @abstr_hyperlink , you can also change the `cap` suffix to others with `d.MatchPath` configuration options.

@abstr_image 

@abstr_image 

@abstr_image 

@abstr_image 

## Contribute

One of the easiest ways to contribute is to participate in discussions and discuss issues. You can also contribute by submitting pull requests with code changes.

### License

@abstr_hyperlink 
