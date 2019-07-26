@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

## Project Description

Write maintainable unit tests, faster.

AutoFixture makes it easier for developers to do Test-Driven Development by automating non-relevant Test Fixture Setup, allowing the Test Developer to focus on the essentials of each test case.

> "saved us quite some time"
> 
> -Florian Hötzinger, GAB Enterprise IT Solutions GmbH 

## Overview

(Jump straight to the @abstr_hyperlink if you just want to see some code samples right away.)

AutoFixture is designed to make Test-Driven Development more productive and unit tests more refactoring-safe. It does so by removing the need for hand-coding anonymous variables as part of a test's Fixture Setup phase. Among other features, it offers a generic implementation of the @abstr_hyperlink pattern.

When writing unit tests, you typically need to create some objects that represent the initial state of the test. Often, an API will force you to specify much more data than you really care about, so you frequently end up creating objects that has no influence on the test, simply to make the code compile.

AutoFixture can help by creating such @abstr_hyperlink for you. Here's a simple example:

```c# [Fact] public void IntroductoryTest() { // Arrange Fixture fixture = new Fixture();
    
    
    int expectedNumber = fixture.Create<int>();
    MyClass sut = fixture.Create<MyClass>();
    // Act
    int result = sut.Echo(expectedNumber);
    // Assert
    Assert.Equal(expectedNumber, result);
    

} @abstr_code_section c# [Theory, AutoData] public void IntroductoryTest( int expectedNumber, MyClass sut) { int result = sut.Echo(expectedNumber); Assert.Equal(expectedNumber, result); } @abstr_code_section c# [Test, AutoData] public void IntroductoryTest( int expectedNumber, MyClass sut) { int result = sut.Echo(expectedNumber); Assert.Equal(expectedNumber, result); } @abstr_code_section Build.cmd BuildVersion= @abstr_number . @abstr_number . @abstr_number ```

Refer to the Build.fsx file to get information about all the supported build keys.

## Documentation

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Questions

If you have questions, feel free to ask. The best places to ask are:

  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Who uses AutoFixture?

AutoFixture is used around the world, as the following quotes testify:

> "I’ve introduced AutoFixture to my developers (at www.gab.de ) some time ago. We’ve been using it successfully with xunit in multiple projects all across the .NET technology stack. We also use it for feeding dummy data to the UI when developing prototypes. That saved us quite some time.
> 
> \- @abstr_hyperlink , @abstr_hyperlink 
> 
> "I have used AutoFixture for @abstr_number years, it's a vital tool in my TDD toolbox, a real time-saver. Setting up maintainable and robust unit tests with AutoFixture is easy and straightforward - highly recommendable"
> 
> \- @abstr_hyperlink , Senior .Net Developer, @abstr_hyperlink 
> 
> "Autofixture is more than just another test data generator. It helps me to write tests faster, which are robust against changes in my production code. Moreover, with Autofixture I can focus the tests on the behavior I want to check which why they are easier to read and understand."
> 
> \- @abstr_hyperlink , @abstr_hyperlink 

If you want to add your own testimonial to this list, we (the AutoFixture maintainers) would be very grateful. Send us a pull request to this README.md file.

## Additional resources

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 


