# Big List of Naughty Strings

The Big List of Naughty Strings is an evolving list of strings which have a high probability of causing issues when used as user-input data. This is intended for use in helping both automated and manual QA testing; useful for whenever your QA engineer @abstr_hyperlink .

## Why Test Naughty Strings?

Even multi-billion dollar companies with huge amounts of automated testing can't find every bad input. For example, look at what happens when you try to Tweet a @abstr_hyperlink (U+ @abstr_number B) on Twitter:

@abstr_image 

Although this is not a malicious error, and typical users aren't Tweeting weird unicode, an "internal server error" for unexpected input is never a positive experience for the user, and may in fact be a symptom of deeper string-validation issues. The Big List of Naughty Strings is intended to help reveal such issues.

## Usage

`blns.txt` consists of newline-delimited strings and comments which are preceded with `#`. The comments divide the strings into sections for easy manual reading and copy/pasting into input forms. For those who want to access the strings programmatically, a `blns.json` file is provided containing an array with all the comments stripped out (the `scripts` folder contains a Python script used to generate the `blns.json`).

## Contributions

Feel free to send a pull request to add more strings, or additional sections. However, please do not send pull requests with very-long strings ( @abstr_number + characters), as that makes the list much more difficult to view.

Likewise, please do not send pull requests which compromise _manual usability of the file_. This includes the @abstr_hyperlink , which can cause the file to be flagged by antivirus scanners, and files which alter the encoding of `blns.txt`. Also, do not send a null character (U+ @abstr_number ) string, as it @abstr_hyperlink and renders it unreadable in pull requests. Finally, when adding or removing a string please update all files when you perform a pull request.

## Disclaimer

The Big List of Naughty Strings is intended to be used _for software you own and manage_. Some of the Naughty Strings can indicate security vulnerabilities, and as a result using such strings with third-party software may be a crime. The maintainer is not responsible for any negative actions that result from the use of the list.

Additionally, the Big List of Naughty Strings is not a fully-comprehensive substitute for formal security/penetration testing for your service.

## Maintainer/Creator

Max Woolf ( @abstr_hyperlink )

## Social Media Discussions

  * June @abstr_number , @abstr_number [Hacker News]: @abstr_hyperlink 
  * August @abstr_number , @abstr_number [Reddit]: @abstr_hyperlink 
  * February @abstr_number , @abstr_number [Reddit]: @abstr_hyperlink 
  * January @abstr_number , @abstr_number [Hacker News]: @abstr_hyperlink 
  * January @abstr_number , @abstr_number [Reddit]: @abstr_hyperlink 



## License

MIT
