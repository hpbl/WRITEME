# MailKit

@abstr_hyperlink 

| Package |Latest Release|Latest Build| |:----------|:------------:|:----------:| | **MimeKit** | @abstr_hyperlink | @abstr_hyperlink | | **MailKit** | @abstr_hyperlink | @abstr_hyperlink |

| Platform |Build Status|Code Coverage|Static Analysis| |:------------|:----------:|:-----------:|:-------------:| | **Linux/Mac** | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink | | **Windows** | @abstr_hyperlink | @abstr_hyperlink | @abstr_hyperlink |

## What is MailKit?

MailKit is a cross-platform mail client library built on top of @abstr_hyperlink .

## Donate

MailKit is a personal open source project that I have put thousands of hours into perfecting with the goal of making it the very best email framework for .NET. I need your help to achieve this.

Donating helps pay for things such as web hosting, domain registration and licenses for developer tools such as a performance profiler, memory profiler, a static code analysis tool, and more. It also helps motivate me to continue working on the project.

@abstr_hyperlink 

## Features

  * SASL Authentication 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * XOAUTH @abstr_number (partial support - you need to fetch the auth tokens yourself)
  * Proxy Support 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
  * SMTP Client 
    * Supports all of the SASL mechanisms listed above.
    * Supports SSL-wrapped connections via the "smtps" protocol.
    * Supports client SSL/TLS certificates.
    * Supports the following extensions:
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * All APIs are cancellable.
    * Async APIs are available.
  * POP @abstr_number Client 
    * Supports all of the SASL mechanisms listed above.
    * Also supports authentication via @abstr_hyperlink and `USER`/`PASS`.
    * Supports SSL-wrapped connections via the "pops" protocol.
    * Supports client SSL/TLS certificates.
    * Supports the following extensions:
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * All APIs are cancellable.
    * Async APIs are available.
  * IMAP @abstr_number Client 
    * Supports all of the SASL mechanisms listed above.
    * Supports SSL-wrapped connections via the "imaps" protocol.
    * Supports client SSL/TLS certificates.
    * Supports the following extensions:
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink 
    * @abstr_hyperlink (X-GM-MSGID, X-GM-THRID, X-GM-RAW and X-GM-LABELS)
    * All APIs are cancellable.
    * Async APIs are available.
  * Client-side sorting and threading of messages.



## Goals

The main goal of this project is to provide the .NET world with robust, fully featured and RFC-compliant SMTP, POP @abstr_number , and IMAP client implementations.

All of the other .NET IMAP client implementations that I could find suffer from major architectural problems such as ignoring unexpected untagged responses, assuming that literal string tokens will never be used for anything other than message bodies (when in fact they could be used for pretty much any string token in a response), assuming that the way to find the end of a message body in a FETCH response is by scanning for `") UID"`, and not properly handling mailbox names with international characters to simply name a few.

IMAP requires a LOT of time spent laboriously reading and re-reading the IMAP specifications (as well as the MIME specifications) to understand all of the subtleties of the protocol and most (all?) of the other Open Source .NET IMAP libraries, at least, were written by developers that only cared enough that it worked for their simple needs. There's nothing necessarily wrong with doing that, but the web is full of half-working, non-RFC-compliant IMAP implementations out there that it was finally time for a carefully designed and implemented IMAP client library to be written.

For POP @abstr_number , libraries such as OpenPOP.NET are actually fairly decent, although the MIME parser is far too strict - throwing exceptions any time it encounters a Content-Type or Content-Disposition parameter that it doesn't already know about, which, if you read over the mailing-list, is a problem that OpenPOP.NET users are constantly running into. MailKit's Pop @abstr_number Client, of course, doesn't have this problem. It also parses messages directly from the socket instead of downloading the message into a large string buffer before parsing it, so you'll probably find that not only is MailKit faster (MailKit's MIME parser, @abstr_hyperlink , parses messages from disk @abstr_number x faster than OpenPOP.NET's parser), but also uses far less memory.

For SMTP, most developers use System.Net.Mail.SmtpClient which suits their needs more-or-less satisfactorily and so is probably not high on their list of needs. However, the SmtpClient implementation included with MailKit is a much better option if cross-platform support is needed or if the developer wants to be able to save and re-load MIME messages before sending them via SMTP. MailKit's SmtpClient also supports PIPELINING which should improve performance of sending messages (although might not be very noticeable).

## License Information

MailKit is Copyright (C) @abstr_number - @abstr_number Xamarin Inc. and is licensed under the MIT license:
    
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    

## Installing via NuGet

The easiest way to install MailKit is via @abstr_hyperlink .

In Visual Studio's @abstr_hyperlink , enter the following command:
    
    
    Install-Package MailKit
    

## Getting the Source Code

First, you'll need to clone MailKit from my GitHub repository. To do this using the command-line version of Git, you'll need to issue the following command in your terminal:
    
    
    git clone --recursive https://github.com/jstedfast/MailKit.git
    

If you are using @abstr_hyperlink on Windows, you'll need to right-click in the directory where you'd like to clone MailKit and select **Git Clone...** in the menu. Once you do that, you'll get the following dialog:

@abstr_image 

Fill in the areas outlined in red and then click **OK**. This will recursively clone MailKit onto your local machine.

## Updating the Source Code

Occasionally you might want to update your local copy of the source code if I have made changes to MailKit since you downloaded the source code in the step above. To do this using the command-line version of Git, you'll need to issue the following commands in your terminal within the MailKit directory:
    
    
    git pull
    git submodule update
    

If you are using @abstr_hyperlink on Windows, you'll need to right-click on the MailKit directory and select **Git Sync...** in the menu. Once you do that, you'll need to click the **Pull** and **Submodule Update** buttons in the following dialog:

@abstr_image 

## Building

In the top-level MailKit directory, there are a number of solution files; they are:

  * **MailKit.sln** \- includes the projects for .NET @abstr_number . @abstr_number , .NETStandard @abstr_number . @abstr_number / @abstr_number . @abstr_number / @abstr_number . @abstr_number , Windows Universal @abstr_number . @abstr_number , Xamarin.Android, and Xamarin.iOS.
  * **MailKit.Mobile.sln** \- includes only the Xamarin.iOS and Xamarin.Android projects.
  * **MailKit.Net @abstr_number .sln** \- includes only the .NET @abstr_number . @abstr_number project and the unit tests.



If you don't have the Xamarin products, you'll probably want to open the MailKit.Net @abstr_number .sln instead of MailKit.sln.

Once you've opened the appropriate MailKit solution file in @abstr_hyperlink , you can choose the **Debug** or **Release** build configuration and then build.

Note: The **Release** build will generate the xml API documentation, but the **Debug** build will not.

## Using MailKit

### Sending Messages

One of the more common operations that MailKit is meant for is sending email messages.

@abstr_code_section 

## Retrieving Messages (via Pop @abstr_number )

One of the other main uses of MailKit is retrieving messages from pop @abstr_number servers.

@abstr_code_section 

## Using IMAP

More important than POP @abstr_number support is the IMAP support. Here's a simple use-case of retrieving messages from an IMAP server:

@abstr_code_section 

However, you probably want to do more complicated things with IMAP such as fetching summary information so that you can display a list of messages in a mail client without having to first download all of the messages from the server:

@abstr_code_section 

The results of a Fetch command can also be used to download individual MIME parts rather than downloading the entire message. For example:

@abstr_code_section 

You may also be interested in sorting and searching...

@abstr_code_section 

Of course, instead of downloading the message, you could also fetch the summary information for the matching messages or do any of a number of other things with the UIDs that are returned.

How about navigating folders? MailKit can do that, too:

@abstr_code_section 

If the IMAP server supports the SPECIAL-USE or the XLIST (GMail) extension, you can get ahold of the pre-defined All, Drafts, Flagged (aka Important), Junk, Sent, Trash, etc folders like this:

@abstr_code_section 

In cases where the IMAP server does _not_ support the SPECIAL-USE or XLIST extensions, you'll have to come up with your own heuristics for getting the Sent, Drafts, Trash, etc folders. For example, you might use logic similar to this:

@abstr_code_section 

Using LINQ, you could simplify this down to something more like this:

@abstr_code_section 

Another option might be to allow the user of your application to configure which folder he or she wants to use as their Sent folder, Drafts folder, Trash folder, etc.

How you handle this is up to you.

## Contributing

The first thing you'll need to do is fork MailKit to your own GitHub repository. For instructions on how to do that, see the section titled **Getting the Source Code**.

If you use @abstr_hyperlink or @abstr_hyperlink , all of the solution files are configured with the coding style used by MailKit. If you use Visual Studio on Windows or some other editor, please try to maintain the existing coding style as best as you can.

Once you've got some changes that you'd like to submit upstream to the official MailKit repository, send me a **Pull Request** and I will try to review your changes in a timely manner.

If you'd like to contribute but don't have any particular features in mind to work on, check out the issue tracker and look for something that might pique your interest!

## Reporting Bugs

Have a bug or a feature request? @abstr_hyperlink .

Before opening a new issue, please search for existing issues to avoid submitting duplicates.

If MailKit does not work with your mail server, please include a @abstr_hyperlink in your bug report, otherwise there is nothing I can do to fix the problem.

If you are getting an exception from somewhere within MailKit, don't just provide the `Exception.Message` string. Please include the `Exception.StackTrace` as well. The `Message`, by itself, is useless.

## Documentation

API documentation can be found at @abstr_hyperlink .

A copy of the xml formatted API documentation is also included in the NuGet and/or Xamarin Component package.
