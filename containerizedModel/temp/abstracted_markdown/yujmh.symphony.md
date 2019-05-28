@abstr_image 

@abstr_hyperlink | @abstr_hyperlink 

  * Introduction 
    * Motivation
    * Usecases
  * Features 
    * Good editors
    * Intelligent and flexible information architecture
    * To meet the diverse needs of post
    * Humanized interactive replies
    * User personalization
    * Edit history and anonymous posting
    * Search engine friendly
    * Real-time message notification
    * Fun activities
    * Powered management background
    * Open content API
    * Integrated cloud mail service
    * Integrated cloud search service
  * Roadmap 
    * trust system
    * badge system
  * Installation 
    * Requirements
    * Steps
    * Configuration
  * License 
    * Open source license
    * Commercial license
  * Contribution 
    * Authors
    * Discussion area
  * Feeling
  * Credits



@abstr_hyperlink 

## Introduction

@abstr_hyperlink is a modern community platform, because it:

  * implements a content oriented discussion forum
  * includes a social network for users to share, make friends, and play games
  * the ability to aggregate independent bloggers, to build and share quality resources
  * and `@abstr_number %` open source



Welcome to Sym official community - @abstr_hyperlink for more details.

### Motivation

Sym was born with the following reasons:

(genuine)

  * a lot of system interfaces still keep the old style, far from keeping up with the pace of development of the times, they do not have the characteristics of innovation, fun, lack of modern interactive elements and user experience
  * most systems are designed from the programmer's point of view, without considering the actual product, operational requirements, such systems function is too simple, the details are not refined enough, the lack of long-term maintenance
  * in addition, we are exploring a new community mode, to achieve @abstr_hyperlink ) and @abstr_hyperlink combined with @abstr_hyperlink 



(funny)

  * universal GitHub even can not find a Java community system, Sym to fill the gaps in the universe
  * do the most popular open source community system, is expected to be a few years after @abstr_number % of the community will be built in Sym
  * Ruby/Python/Node.js/(especially) PHP how can do better than Java



### Usecases

Personal maintenance:

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



Company maintenance:

  * @abstr_hyperlink 



If you build it, you are welcome to add your site to this list by Pull Request :-p

## Features

Specific function point details can be viewed at @abstr_hyperlink , the following lists the main features of Sym, and illustrates why Sym is **modern**.

### Good editors

@abstr_image 

  * Markdown: support GFM syntax and some extended syntax
  * format adjustment: bold, italics, hyperlinks, references, etc. the list toolbar button also supports shortcut keys
  * file upload: support for copy and paste or drag and drop to upload pictures; support for uploading ordinary files; MP @abstr_number will use the online player for rendering
  * clipboard processing: automatically copy the contents of the conversion to Markdown format; the image of the chain automatically uploaded to the station
  * @ username: according to the automatic completion, support shortcut key
  * Emoji: most of the mainstream support for Emoji expression, shortcut keys for automatic completion
  * mathematical formula: support LaTex mathematical formula rendering
  * data temporary local browser: support for temporary storage of data, to avoid accidental edits lost



### Intelligent and flexible information architecture

@abstr_image 

The traditional node type community requires the post must belong to a node, the information architecture is top-down. Sym is not a top-down node type information architecture, the post does not require a fixed classification, through the tag to **aggregate** into a domain.

  * tag: according to the content of the post intelligent extraction keyword tag automatic completion, a post to multiple tags. The structure of the graph with edge weight is described, which is convenient to calculate the correlation
  * domain: a domain contains multiple tags, tags will automatically by post polymerization to specific areas, at any time can increase and decrease the associated tags so as to adjust the scope of the domain, for the final polymerization card list



### To meet the diverse needs of post

@abstr_image 

Currently supports @abstr_number types of posts, to meet the different user preferences:

  * General Post: ask or share experiences and insights that help others
  * Thoughts: to record and replay the writing process, the text version of the watch @abstr_hyperlink 
  * Private Discussion: invite friends to communicate in a private space
  * City Broadcast: the recruitment of your city, Meetup, etc.



In addition, all posts can be set **playing area** , it can be placed some "treasure" content, only after the user can enjoy the reward. Play area editor also supports Markdown, Emoji and file upload and other characteristics. Play area to support content updates, and can adjust the value at any time.

For testing posts, you can use the Sandbox mechanism: with the Sandbox tag posts will be considered as a test post, will not show in the home or in a field, will only show in the post of their own posts list.

### Humanized interactive replies

@abstr_image 

  * in real time: replies submitted after the other readers can not refresh the page to see your reply in time
  * floating scroll: at any time at any time convenient reply editor replies to scroll the screen to see other content, do not have to worry about losing focus
  * real reply: reply for the reply, which is based on the user @, @ is not mentioned in reply, many systems are not considering this point. Reply / reference can be carried through in the current position, can also jump to reply, and support for cross page jump
  * intelligent robots: robots can also send in a discussion and active atmosphere at the same time maybe robots can really solve some problems



### User personalization

@abstr_image 

Users can set a lot of parameters to meet the individual needs:

  * customizes size of a list per page
  * replies: the traditional browsing mode (press release time ascending, real-time push refresh); real time (press release time DESC, real-time push new replies)
  * picture browse mode: original (GIF support graph); static map
  * Chrome notification / message subscription / keyboard shortcut switch
  * set commonly used Emoji, to facilitate the release of the contents of the rapid insertion of expression



In addition to the function of personalized configuration items, there are a lot of privacy switch:

  * whether public posts / replies list
  * do you have a public focus on the users / tags / fans, the collection posts, and the list of points
  * is open online
  * whether public UA information
  * whether public geographic location
  * whether to participate in the wealth / consumption ranking



In addition, users can also complete export data, including posts and replies.

### Edit history and anonymous posting

@abstr_image 

Post can be updated, but each update will produce a history of editing, visitors can see and compare the changes in its content. There is no support for subsequent replies update, will join, please look forward to.

Posts and replies can be used to publish anonymous identity, you know.

### Search engine friendly

  * tags, fields can be custom links, and can be individually configured with title/keywords/description meta
  * back end Markdown rendering, output crawler readable HTML
  * administrator settings browsing permissions do not affect the crawler crawl content
  * through some HTML details properties (such as canonical) for SEO



### Real-time message notification

@abstr_image 

  * to display messages by category, mark has read
  * with the message type: receive replies, receive a reply, @ I, I pay attention to people, integral city, information systems and other related
  * friendly Chrome desktop alerts



### Fun activities

@abstr_image 

  * receive attendance awards, receive an active reward yesterday
  * Shanghai Lottery
  * Word @abstr_hyperlink 
  * Snake



Follow up will continue to add some fun online games.

### Powered management console

@abstr_image 

  * background: data statistics, version check
  * user management: search users, add users, user data maintenance (state settings, points, etc.)
  * post management: add new search posts, posts, post maintenance data (top, rebuild index etc.)
  * replies Management: setting up, update
  * domain management: add fields, field data maintenance (associated labels, icons, URI, CSS, description, etc.)
  * label management: add tags, tag data maintenance (pictures, URI, CSS, description, etc.)
  * keep word management: add the reserved word, keep the word data maintenance
  * invitation code management: generate invitation code, invitation code data maintenance
  * advertising management: sidebar exclusive booth maintenance
  * other management post / replies: open / close / switch; user registration invitation code switch



### Open content API

Sym @abstr_hyperlink synchronous posts, replies @abstr_hyperlink , the @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink have provided plug-ins to content synchronization, welcome to access!

In the future will be added to the new interface, to facilitate the production of APP client or some of the value of the application.

### Integrated cloud mail service

@abstr_image 

Through the configuration can be integrated @abstr_hyperlink cloud mail service, the service rate is more reliable to build their own mail service.

  * user login authentication, password reset by trigger type
  * weekly subscription push through batch type



### Integrated cloud search service

@abstr_image 

  * through the configuration can be integrated @abstr_hyperlink cloud search service, can customize the search field, and the weight and ranking optimization
  * can also build their own Elasticsearch and integrated through the configuration



Follow up on the search function to strengthen, to achieve the conditions for filtering, the results highlight, please look forward to.

## Roadmap

### trust system

Through the historical data to carry on the classification to the user, lets the user gradually change to the participant, the organizer, the management, realizes the autonomous community ecosystem.

### badge system

Record the achievements of the users and the contribution to the community.

## Installation

### Requirements

  * JDK @abstr_number 
  * Maven @abstr_number +
  * MySQL @abstr_number . @abstr_number +
  * Jetty @abstr_number or Tomcat @abstr_number 



### Steps

@abstr_number . @abstr_hyperlink source code @abstr_number . to modify the database after extracting `src/main/resources/local.properties` configuration, and create a database @abstr_number . _may_ need to modify the `latke.properties` port for container port @abstr_number . _may_ need to modify the `init.properties` administrator account @abstr_number . use `mvn install` to build @abstr_number . to deploy the war package to the container, the database table will be created automatically at the start of the first

Notice:

  * there is no database table SQL script, manual database, table automatically generated in the first boot
  * production environment is recommended to use reverse proxy, and the need to configure the WebSocket agent
  * Tomcat with more than @abstr_number version, it is best to use the latest version
  * reference @abstr_hyperlink 



### Configuration

  * image upload the default is to upload the server locally, to use @abstr_hyperlink can be configured in the `qiniu.*` attribute `symphony.properties`
  * mail is sent using @abstr_hyperlink , you need to configure the `sendcloud.*` attribute in `symphony.properties`
  * user registration required to verify the mailbox, so you must first configure the SendCloud



If you encounter problems, you can refer to this @abstr_hyperlink .

## License

There is no difference between a commercial license and an open source license, and you can choose one of the following two ways.

### Open source license

Sym is the use of GPL as an open source agreement, if you choose the open source license, you must fully comply with the relevant provisions of GPL.

### Commercial license

If you need to use Sym for commercial use, including but not limited to the following scenarios:

  * company use
  * profitability



You must pay the price for $ @abstr_number , please contact QQ @abstr_number or email (DL @abstr_number @gmail.com) for detailed consultation.

## Contribution

### Authors

The main authors of Sym are @abstr_hyperlink and @abstr_hyperlink , all contributors can see @abstr_hyperlink .

We are very much looking forward to your joining in this project, whether it is the use of feedback or code patches, are on the Sym a full of love: heart:

### Discussion area

  * to Sym official @abstr_hyperlink post (Recommended Practice)
  * new a @abstr_hyperlink 
  * join Sym development support QQ group @abstr_number 



## Feeling

In the implementation of @abstr_hyperlink of these years:

  * we have witnessed the rise and fall of xAE (GAE/BAE/SAE/etc). In @abstr_number GAE was selected as a server, and began to implement @abstr_hyperlink framework to solve the cross platform cloud, until [GAE] (https://hacpai.com/article/ @abstr_number ), bid farewell to sigh technical change quickly
  * feel the advantages and disadvantages of self-made wheels, and certainly a bit: for a long to product, technology advantages far outweigh the disadvantages of self-made frame
  * a playful product or the details of the characteristics of the egg, it needs to be done is a product / feature that can continue to provide user value.
  * although until the current B @abstr_number log product users are not many, but we have a preliminary proof: Java used to achieve the blog, forum, there is nothing bad
  * the use of open source software, to understand the idea of open source, into the open source ecology
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Credits

Sym's birth can not be separated from the following open source projects:

  * @abstr_hyperlink : Front end JavaScript tool library
  * @abstr_hyperlink : Front end Markdown editor kernel
  * @abstr_hyperlink : Front end code highlighter
  * @abstr_hyperlink : Front end Emoji tool library
  * @abstr_hyperlink : Front end audio library
  * @abstr_hyperlink : Front end interactive chart library
  * @abstr_hyperlink : Front end Math rendering library
  * @abstr_hyperlink : Front end HTML sound recorder
  * @abstr_hyperlink : Front end clipboard
  * @abstr_hyperlink : Front endJavaScript MD @abstr_number 
  * @abstr_hyperlink : Front end WebSocket reconnecting
  * @abstr_hyperlink : Front end HTML to Markdown
  * @abstr_hyperlink : Front end User-Agent parser
  * @abstr_hyperlink : Front end CSS preprocessor
  * @abstr_hyperlink : Java HTML parser
  * @abstr_hyperlink : Java Markdown parser
  * @abstr_hyperlink : Java tool library
  * @abstr_hyperlink : Java tool library
  * @abstr_hyperlink : Java Emoji tool library
  * @abstr_hyperlink : Java User-Agent parser
  * @abstr_hyperlink : Java database connection pool
  * @abstr_hyperlink : popular Java template engine
  * @abstr_hyperlink : full-stack Java Web framework
  * @abstr_hyperlink : wonderful IDE
  * @abstr_hyperlink : another wonderful IDE



* * *

**Next generation community system, build for the future**   
  
@abstr_image 
