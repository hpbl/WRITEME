# SpringMVC - Best Practices

A full-blown, functional, tested Spring @abstr_number . @abstr_number reference application with JPA persistence, REST Level- @abstr_number resources, asynchronous processing, jobs, security, unit, mock, integration, functional, rest client stubs, and performance tests, and many best practices I gathered over several years working in mvc / spring / grails web apps.

## How to run
    
    
    mvn clean package
    mvn jetty:run
    

## Best Practices

### Domain Modeling

  * Immutable Domain Model with Builder Pattern
  * Jackson JSON Annotations
  * JPA Annotations
  * Unit Tests



### REST

  * REST Errors and Exception Resolver
  * HATEOAS (REST Level @abstr_number )



### Persistence

  * Transaction Management & Connection Pooling
  * JPA / Hibernate



### AOP

  * Http ETag management, HTTP Caching & Resource optimistic locking



### Async

  * Asynchronous processing: Request-Acknowledge-Poll Pattern (Fork-Join/Future implemention on REST)
  * Jobs



### Caching

  * Simplified caching using Spring’s new @Cacheable / Eh-Cache



### Spring

  * Streamlined configuration for web, persistence, rest, spring, and properties



### Testing

  * Unit Testing (JUnit, Mockito)
  * Integration Testing (Spring Test, MVC Test)



## Libraries Used

  * Spring @abstr_number . @abstr_number , JPA @abstr_number , Hibernate @abstr_number . @abstr_number 
  * JSP, JQuery, Twitter Bootstrap @abstr_number . @abstr_number 
  * H @abstr_number db (soon, MongoDb?)
  * JUnit, Mockito, Spring Test, Hamcrest, JsonPath,
  * Google Guava, Joda DateTime, Logback/Slf @abstr_number j, Jackson Json


