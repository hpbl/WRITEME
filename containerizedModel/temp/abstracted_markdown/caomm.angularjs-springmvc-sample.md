# angularjs-springmvc-sample

An example application using AnguarJS/Bootstrap as frontend and Spring MVC as REST API producer.

@abstr_hyperlink 

## Contribution

_I appreciate any contribution for this project, including suggestions, documentation improvements, reporting issues, forks and bugfixs, etc. I have found there are some unrelated issues added, before you file an issue, please **READ THE STEPS IN THIS README.md** carefully_.

**在你提交 ISSUE 前，请务必确认已经严格完成了本文中描述的操作步骤** 。

Thank the DevFactory team member @abstr_hyperlink for sending several PRs to improve the code quaulity according to the sonar rules.

## Requirements

  * JDK @abstr_number 

Oracle Java @abstr_number is required, go to @abstr_hyperlink to download it and install into your system. 

Optionally, you can set **JAVA_HOME** environment variable and add _< JDK installation dir>/bin_ in your **PATH** environment variable.

  * Apache Maven

Download the latest Apache Maven from @abstr_hyperlink , and uncompress it into your local system. 

Optionally, you can set **M @abstr_number _HOME** environment varible, and also do not forget to append _< Maven Installation dir>/bin_ your **PATH** environment variable. 




## Run this project
    
    
    @abstr_number . Clone the codes.
    
    <pre>
    git clone https://github.com/hantsy/angularjs-springmvc-sample
    </pre>
    
    @abstr_number . And enter the root folder, run `mvn tomcat @abstr_number :run` to start up an embedded tomcat @abstr_number  to serve this application.
    
    <pre>
    mvn tomcat @abstr_number :run
    </pre>
    
    @abstr_number . Go to [http://localhost: @abstr_number /angularjs-springmvc-sample/](http://localhost: @abstr_number /angularjs-springmvc-sample/) to test it. If you want to explore the REST API docs online, there is a *Swagger UI* configured for visualizing the REST APIs, just go to [http://localhost: @abstr_number /angularjs-springmvc-sample/swagger-ui.html](http://localhost: @abstr_number /angularjs-springmvc-sample/swagger-ui.html).
    

## Spring Boot

If you are interested in Spring Boot, I have moved the `boot` branch into a new project @abstr_hyperlink .
