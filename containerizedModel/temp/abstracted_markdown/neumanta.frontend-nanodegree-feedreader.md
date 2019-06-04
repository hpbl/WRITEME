# Frontend Nanodegree Tom's FeedReader Instructions

* * *

## Loading Tom's FeedReader

FeedReader is code designed and provided by Udacity. My code uses the Jasmin tools for performing unit testing. The only code updates created by me can be found in the file feedreader.js.

FeedReader is currently designed to run from the local your local workstation. To load FeedReader simply double-click on the index.html file released with this install package.

# Project Overview as provided by Udacity

* * *

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included @abstr_hyperlink and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## How will this help my career?

  * Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
  * Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.



# How will I complete this project?

@abstr_number . ---Download the @abstr_hyperlink . @abstr_number . ---Review the functionality of the application within your browser. @abstr_number . ---Explore the application's HTML ( _./index.html_ ), CSS ( _./css/style.css_ ) and JavaScript ( _./js/app.js_ ) to gain an understanding of how it works. @abstr_number . ---Explore the Jasmine spec file in _./jasmine/spec/feedreader.js_ @abstr_number . ---Edit the allFeeds variable in _./js/app.js_ to make the provided test fail and see how Jasmine visualizes this failure in your application. @abstr_number . ---Return the allFeeds variable to a passing state. @abstr_number . ---Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty. @abstr_number . ---Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty. @abstr_number . ---Write a new test suite named "The menu". @abstr_number . ---Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element. @abstr_number . ---Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again. @abstr_number . ---Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function. @abstr_number . ---Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous. @abstr_number . ---When complete - all of your tests should pass.
