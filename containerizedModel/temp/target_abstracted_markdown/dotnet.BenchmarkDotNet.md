@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

| Build server | Platform | Build status | |--------------|----------|--------------| | Azure Pipelines | Windows | @abstr_hyperlink | | Azure Pipelines | Ubuntu | @abstr_hyperlink | | Azure Pipelines | macOS | @abstr_hyperlink | | AppVeyor | Windows | @abstr_hyperlink | | Travis | Linux | @abstr_hyperlink |   
| Travis | macOS | @abstr_hyperlink |

**BenchmarkDotNet** is a powerful .NET library for benchmarking.

Benchmarking is really hard (especially microbenchmarking), you can easily make a mistake during performance measurements. BenchmarkDotNet will protect you from the common pitfalls (even for experienced developers) because it does all the dirty work for you: it generates an isolated project per each benchmark method, does several launches of this project, run multiple iterations of the method (include warm-up), and so on. Usually, you even shouldn't care about a number of iterations because BenchmarkDotNet chooses it automatically to achieve the requested level of precision.

It's really easy to design a performance experiment with BenchmarkDotNet. Just mark your method with the [Benchmark] attribute and the benchmark is ready. Want to run your code on .NET Framework, .NET Core, CoreRT, and Mono? No problem: a few more attributes and the corresponded projects will be generated; the results will be presented at the same summary table. In fact, you can compare any environment that you want: you can check performance difference between processor architectures (x @abstr_number /x @abstr_number ), JIT versions (LegacyJIT/RyuJIT), different sets of GC flags (like Server/Workstation), and so on. You can also introduce one or several parameters and check the performance on different inputs at once.

BenchmarkDotNet helps you not only run benchmarks but also analyze the results: it generates reports in different formats and renders nice plots. It calculates many statistics, allows you to run statistical tests, and compares results of different benchmark methods. So it doesn't overload you with data, by default BenchmarkDotNet prints only the really important statistical values depending on your results: it allows you to keep summary small and simple for primitive cases but notify you about an additional important area for complicated cases (of course, you can request any numbers manually via additional attributes).

BenchmarkDotNet doesn't just blindly run your code: it tries to help you to conduct a qualitative performance investigation.

## Showtime

It's very easy to start using BenchmarkDotNet. Let's look at an example:

@abstr_code_section 

BenchmarkDotNet allows designing a performance experiment in a user-friendly declarative way. At the end of an experiment, it will generate a summary table which contains only important data in a compact and understandable form:

@abstr_code_section 

In artifacts, you can also find detailed information about each iteration. You can export the data in different formats like (CSV, XML, JSON, and so on) or even generate beautiful plots:

@abstr_image 

## Main features

BenchmarkDotNet has a lot of awesome features for deep performance investigations:

  * **Standard benchmarking routine:** generating an isolated project per each benchmark method; auto-selection of iteration amount; warmup; overhead evaluation; and so on
  * **Execution control:** BenchmarkDotNet tries to choose the best possible way to evaluate performance, but you can also manually control amount of iterations, switch between cold start and warmed state, set the accuracy level, tune GC parameters, change environment variables, and more
  * **Statistics:** by default, you will see the most important statistics like mean and standard deviation; but you can also manually ask for min/max values, confidence intervals, skewness, kurtosis, quartile, percentiles, or define own metrics
  * **Comparing environments:** @abstr_hyperlink to compare different environments (x @abstr_number vs x @abstr_number , LegacyJit vs RyuJit, Mono vs .NET Core, and so on)
  * **Relative performance:** you can @abstr_hyperlink evaluate difference between different methods of environments
  * **Memory diagnostics:** the library not only measure performance of your code, but also prints information about memory traffic and amount of GC collections
  * **Disassembly diagnostics:** you can ask for an assembly listing with the help of single additional attribute
  * **Parametrization:** performance can be evaluated for different sets of input @abstr_hyperlink like in popular unit test frameworks
  * **Environment information:** when your share performance results, it's very important to share information about your environment; BenchmarkDotNet automatically prints the exact version of your OS and processor; amount of physical CPU, physical cores, and logic cores; hypervisor (if you use it); frequency of the hardware timer; the JIT-compiler version; and more
  * **Command-line support:** you can manage thousands of benchmark, group them by categories, @abstr_hyperlink and run them from @abstr_hyperlink 
  * **Powerful reporting system:** it's possible to export benchmark results to markdown, csv, html, plain text, png plots



A few useful links for you:

  * If you want to know more about BenchmarkDotNet features, check out the @abstr_hyperlink .
  * If you want to use BenchmarkDotNet for the first time, the @abstr_hyperlink will help you.
  * If you want to ask a quick question or discuss performance topics, use the @abstr_hyperlink channel.



## Supported technologies

BenchmarkDotNet supports all kinds of .NET stacks:

  * **Supported runtimes:** .NET Framework ( @abstr_number . @abstr_number . @abstr_number +), .NET Core ( @abstr_number . @abstr_number +), Mono, CoreRT
  * **Supported languages:** C#, F#, Visual Basic
  * **Supported OS:** Windows, Linux, macOS



## Our users

The library is used by a large number of projects for performance discussions or as a part of the codebase:

  * @abstr_hyperlink (official benchmarks used for testing the performance of all .NET Runtimes)
  * @abstr_hyperlink (.NET Core Runtime)
  * @abstr_hyperlink (.NET Core Base Class Libraries)
  * @abstr_hyperlink (C# and Visual Basic compiler)
  * @abstr_hyperlink (A cross platform web server for ASP.NET Core)
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



It's not the full list. On GitHub, you can find hundreds of @abstr_hyperlink and @abstr_hyperlink which involve BenchmarkDotNet. There are @abstr_hyperlink which contain "BenchmarkDotNet".

## Contributions are welcome!

BenchmarkDotNet is already a stable full-featured library which allows performing performance investigation on a professional level. And it continues to evolve! We add new features all the time, but we have too many new cool ideas. Any help will be appreciated. You can develop new features, fix bugs, improve the documentation, or do some other cool stuff.

If you want to contribute, check out the @abstr_hyperlink and @abstr_hyperlink issues. If you have new ideas or want to complain about bugs, feel free to @abstr_hyperlink . Let's build the best tool for benchmarking together!

## Code of Conduct

This project has adopted the code of conduct defined by the @abstr_hyperlink to clarify expected behavior in our community. For more information see the @abstr_hyperlink .

## .NET Foundation

This project is supported by the @abstr_hyperlink .
