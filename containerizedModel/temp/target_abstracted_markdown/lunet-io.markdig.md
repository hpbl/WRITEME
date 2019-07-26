# Markdig @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_image 

Markdig is a fast, powerful, @abstr_hyperlink compliant, extensible Markdown processor for .NET.

> NOTE: The repository is under construction. There will be a dedicated website and proper documentation at some point!

You can **try Markdig online** and compare it to other implementations on @abstr_hyperlink 

## Features

  * **Very fast parser and html renderer** (no-regexp), very lightweight in terms of GC pressure. See benchmarks
  * **Abstract Syntax Tree** with precise source code location for syntax tree, useful when building a Markdown editor. 
    * Checkout @abstr_hyperlink powered by Markdig!
  * Converter to **HTML**
  * Passing more than _* @abstr_number + tests_ * from the latest @abstr_hyperlink 
  * Includes all the core elements of CommonMark: 
    * including **GFM fenced code blocks**. 
  * **Extensible** architecture 
    * Even the core Markdown/CommonMark parsing is pluggable, so it allows to disable builtin Markdown/Commonmark parsing (e.g @abstr_hyperlink ) or change behaviour (e.g change matching `#` of a headers with `@`) 
  * Built-in with _* @abstr_number + extensions_ *, including: 
    * @abstr_number kind of tables:
    * Pipe tables (inspired from Github tables and @abstr_hyperlink )
    * Grid tables (inspired from @abstr_hyperlink ) 
    * Extra emphasis (inspired from @abstr_hyperlink and @abstr_hyperlink ) 
    * strike through `~~`,
    * Subscript `~`
    * Superscript `^`
    * Inserted `++`
    * Marked `==`
    * Special attributes or attached HTML attributes (inspired from @abstr_hyperlink )
    * Definition lists (inspired from @abstr_hyperlink )
    * Footnotes (inspired from @abstr_hyperlink )
    * Auto-identifiers for headings (similar to @abstr_hyperlink )
    * Auto-links generates links if a text starts with `http://` or `https://` or `ftp://` or `mailto:` or `www.xxx.yyy`
    * Task Lists inspired from @abstr_hyperlink .
    * Extra bullet lists, supporting alpha bullet `a.` `b.` and roman bullet (`i`, `ii`...etc.)
    * Media support for media url (youtube, vimeo, mp @abstr_number ...etc.) (inspired from this @abstr_hyperlink )
    * Abbreviations (inspired from @abstr_hyperlink )
    * Citation text by enclosing `""...""` (inspired by this @abstr_hyperlink )
    * Custom containers similar to fenced code block `:::` for generating a proper `<div>...</div>` instead (inspired by this @abstr_hyperlink )
    * Figures (inspired from this @abstr_hyperlink )
    * Footers (inspired from this @abstr_hyperlink )
    * Mathematics/Latex extension by enclosing `$$` for block and `$` for inline math (inspired from this @abstr_hyperlink )
    * Soft lines as hard lines
    * Emoji support (inspired from @abstr_hyperlink )
    * SmartyPants (inspired from @abstr_hyperlink )
    * Bootstrap class (to output bootstrap class)
    * Diagrams extension whenever a fenced code block contains a special keyword, it will be converted to a div block with the content as-is (currently, supports @abstr_hyperlink and @abstr_hyperlink diagrams)
    * YAML frontmatter to parse without evaluating the frontmatter and to discard it from the HTML output (typically used for previewing without the frontmatter in MarkdownEditor)
    * JIRA links to automatically generate links for JIRA project references (Thanks to @clarkd: https://github.com/clarkd/MarkdigJiraLinker)
  * Compatible with .NET @abstr_number . @abstr_number , @abstr_number . @abstr_number + and .NET Core (`netstandard @abstr_number . @abstr_number +`)



### Third Party Extensions

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## Documentation

> The repository is under construction. There will be a dedicated website and proper documentation at some point!

While there is not yet a dedicated documentation, you can find from the specs documentation how to use these extensions.

In the meantime, you can have a "behind the scene" article about Markdig in my blog post @abstr_hyperlink 

## Download

Markdig is available as a NuGet package: @abstr_hyperlink 

Also @abstr_hyperlink NuGet package provides signed assemblies.

## Usage

The main entry point for the API is the `Markdig.Markdown` class:

By default, without any options, Markdig is using the plain CommonMark parser:

@abstr_code_section 

In order to activate most of all advanced extensions (except Emoji, SoftLine as HardLine, JiraLinks and SmartyPants)

@abstr_code_section 

You can have a look at the @abstr_hyperlink that describes all actionable extensions (by modifying the MarkdownPipeline)

## Build

In order to build Markdig, you need to install @abstr_hyperlink 

## License

This software is released under the @abstr_hyperlink .

## Benchmarking

This is an early preview of the benchmarking against various implementations:

**C implementations** :

  * @abstr_hyperlink (version: @abstr_number . @abstr_number . @abstr_number ): Reference C implementation of CommonMark, no support for extensions
  * @abstr_hyperlink (version: : popular C Markdown processor



**.NET implementations** :

  * @abstr_hyperlink (version: @abstr_number . @abstr_number .x): itself
  * @abstr_hyperlink (version: @abstr_number . @abstr_number . @abstr_number ): CommonMark implementation for .NET, no support for extensions, port of cmark 
    * @abstr_hyperlink : An evolution of CommonMark.NET, supports extensions, not released yet
  * @abstr_hyperlink (version: @abstr_number . @abstr_number . @abstr_number ): another .NET implementation
  * @abstr_hyperlink (version: @abstr_number . @abstr_number . @abstr_number ): Open source C# implementation of Markdown processor, as featured on Stack Overflow, regexp based.
  * @abstr_hyperlink (version: @abstr_number . @abstr_number . @abstr_number ) port of original @abstr_hyperlink project
  * @abstr_hyperlink (version: @abstr_number . @abstr_number . @abstr_number ) used by the @abstr_hyperlink project



**JavaScript/V @abstr_number implementations** :

  * @abstr_hyperlink (version: @abstr_number . @abstr_number . @abstr_number ) @abstr_hyperlink running in Google V @abstr_number (not .NET based)



### Analysis of the results:

  * Markdig is roughly **x @abstr_number times faster than MarkdownSharp** , _* @abstr_number x times faster than docfx_ *
  * **Among the best in CPU** , Extremely competitive and often faster than other implementations (not feature wise equivalent) 
  * _* @abstr_number % to @abstr_number % less allocations_ * and GC pressure



Because Marked.NET, MarkdownSharp and DocAsCode.MarkdownLite are way too slow, they are not included in the following charts:

@abstr_image 

@abstr_image 

### Performance for x @abstr_number :

@abstr_code_section 

### Performance for x @abstr_number :

@abstr_code_section 

## Donate

If you are using this library and find it useful for your project, please consider a donation for it!

@abstr_hyperlink 

## Credits

Thanks to the fantastic work done by @abstr_hyperlink for the CommonMark specs and all the people involved in making Markdown a better standard!

This project would not have been possible without this huge foundation.

Thanks also to the project @abstr_hyperlink that makes benchmarking so easy to setup!

Some decoding part (e.g HTML @abstr_hyperlink ) have been re-used from @abstr_hyperlink 

Thanks to the work done by @clarkd on the JIRA Link extension (https://github.com/clarkd/MarkdigJiraLinker), now included with this project!

## Author

Alexandre MUTEL aka @abstr_hyperlink 
