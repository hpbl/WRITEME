# spdlog

Very fast, header-only/compiled, C++ logging library. @abstr_hyperlink @abstr_hyperlink 

## Install

#### Header only version

  * Copy the source @abstr_hyperlink to your build tree and use a C++ @abstr_number compiler.



#### Static lib version (recommended - much faster compile times, v @abstr_number . @abstr_number . @abstr_number )

  * Copy @abstr_hyperlink to your build tree and pass the `-DSPDLOG_COMPILED_LIB` to the compiler.
  * Or use **CMake** to build:

$ git clone https://github.com/gabime/spdlog.git $ cd spdlog && mkdir build && cd build $ cmake .. && make -j

see example @abstr_hyperlink on how to use.




## Platforms

  * Linux, FreeBSD, OpenBSD, Solaris, AIX
  * Windows (msvc @abstr_number +, cygwin)
  * macOS (clang @abstr_number . @abstr_number +)
  * Android



## Package managers:

  * Homebrew: `brew install spdlog`
  * FreeBSD: `cd /usr/ports/devel/spdlog/ && make install clean`
  * Fedora: `yum install spdlog`
  * Gentoo: `emerge dev-libs/spdlog`
  * Arch Linux: `yaourt -S spdlog-git`
  * vcpkg: `vcpkg install spdlog`



## Features

  * Very fast (see benchmarks below).
  * Headers only, just copy and use. Or use as a compiled library.
  * Feature rich formatting, using the excellent @abstr_hyperlink library.
  * Fast asynchronous mode (optional)
  * @abstr_hyperlink formatting.
  * Multi/Single threaded loggers.
  * Various log targets: 
    * Rotating log files.
    * Daily log files.
    * Console logging (colors supported).
    * syslog.
    * Windows debugger (`OutputDebugString(..)`)
    * Easily extendable with custom log targets (just implement a single function in the sink interface).
  * Severity based filtering - threshold levels can be modified in runtime as well as in compile time.



## Usage samples

#### Basic usage

```c++

# include "spdlog/spdlog.h"

# include "spdlog/sinks/basic_file_sink.h"

int main() { spdlog::info("Welcome to spdlog!"); spdlog::error("Some error message with arg: {}", @abstr_number );
    
    
    spdlog::warn("Easy padding in numbers like {: @abstr_number d}",  @abstr_number );
    spdlog::critical("Support for int: { @abstr_number :d};  hex: { @abstr_number :x};  oct: { @abstr_number :o}; bin: { @abstr_number :b}",  @abstr_number );
    spdlog::info("Support for floats {: @abstr_number . @abstr_number f}",  @abstr_number . @abstr_number );
    spdlog::info("Positional args are { @abstr_number } { @abstr_number }..", "too", "supported");
    spdlog::info("{:< @abstr_number }", "left aligned");
    
    spdlog::set_level(spdlog::level::debug); // Set global log level to debug
    spdlog::debug("This message should be displayed..");    
    
    // change log pattern
    spdlog::set_pattern("[%H:%M:%S %z] [%n] [%^---%L---%$] [thread %t] %v");
    
    // Compile time log levels
    // define SPDLOG_ACTIVE_LEVEL to desired level
    SPDLOG_TRACE("Some trace message with param {}", {});
    SPDLOG_DEBUG("Some debug message");
    
    // Set the default logger to file logger
    auto file_logger = spdlog::basic_logger_mt("basic_logger", "logs/basic.txt");
    spdlog::set_default_logger(file_logger);
    

} @abstr_code_section c++

# include "spdlog/spdlog.h"

# include "spdlog/sinks/stdout_color_sinks.h"

void stdout_example() { // create color multi threaded logger auto console = spdlog::stdout_color_mt("console");   
auto err_logger = spdlog::stderr_color_mt("stderr");   
spdlog::get("console")->info("loggers can be retrieved from a global registry using the spdlog::get(logger_name)"); } @abstr_code_section c++

# include "spdlog/sinks/basic_file_sink.h"

void basic_logfile_example() { try { auto my_logger = spdlog::basic_logger_mt("basic_logger", "logs/basic-log.txt"); } catch (const spdlog::spdlog_ex &ex) { std::cout << "Log init failed: " << ex.what() << std::endl; } } @abstr_code_section c++

# include "spdlog/sinks/rotating_file_sink.h"

void rotating_example() { // Create a file rotating logger with @abstr_number mb size max and @abstr_number rotated files auto rotating_logger = spdlog::rotating_logger_mt("some_logger_name", "logs/rotating.txt", @abstr_number * @abstr_number , @abstr_number ); } @abstr_code_section c++

# include "spdlog/sinks/daily_file_sink.h"

void daily_example() { // Create a daily logger - a new file is created every day on @abstr_number : @abstr_number am auto daily_logger = spdlog::daily_logger_mt("daily_logger", "logs/daily.txt", @abstr_number , @abstr_number ); }

@abstr_code_section c++ // clone a logger and give it new name. // Useful for creating subsystem loggers from some "root" logger void clone_example() { auto network_logger = spdlog::get("root")->clone("network"); network_logger->info("Logging network stuff.."); } @abstr_code_section c++ // periodically flush all _registered_ loggers every @abstr_number seconds: // warning: only use if all your loggers are thread safe! spdlog::flush_every(std::chrono::seconds( @abstr_number ));

@abstr_code_section c++ // many types of std::container types can be used. // ranges are supported too. // format flags: // {:X} - print in uppercase. // {:s} - don't separate each byte with space. // {:p} - don't print the position on each line start. // {:n} - don't split the output to lines.

# include "spdlog/fmt/bin_to_hex.h"

void binary_example() { auto console = spdlog::get("console"); std::arrayinfo("Binary example: {}", spdlog::to_hex(buf)); console->info("Another binary example:{:n}", spdlog::to_hex(std::begin(buf), std::begin(buf) + @abstr_number )); // more examples: // logger->info("uppercase: {:X}", spdlog::to_hex(buf)); // logger->info("uppercase, no delimiters: {:Xs}", spdlog::to_hex(buf)); // logger->info("uppercase, no delimiters, no position info: {:Xsp}", spdlog::to_hex(buf)); }

@abstr_code_section c++

// create logger with @abstr_number targets with different log levels and formats. // the console will show only warnings or errors, while the file will log all. void multi_sink_example() { auto console_sink = std::make_shared(); console_sink->set_level(spdlog::level::warn); console_sink->set_pattern("[multi_sink_example] [%^%l%$] %v");
    
    
    auto file_sink = std::make_shared<spdlog::sinks::basic_file_sink_mt>("logs/multisink.txt", true);
    file_sink->set_level(spdlog::level::trace);
    
    spdlog::logger logger("multi_sink", {console_sink, file_sink});
    logger.set_level(spdlog::level::debug);
    logger.warn("this should appear in both console and file");
    logger.info("this message should not appear in the console, only in the file");
    

} @abstr_code_section c++

# include "spdlog/async.h"

# include "spdlog/sinks/basic_file_sink.h"

void async_example() { // default thread pool settings can be modified _before_ creating the async logger: // spdlog::init_thread_pool( @abstr_number , @abstr_number ); // queue with @abstr_number k items and @abstr_number backing thread. auto async_file = spdlog::basic_logger_mt ("async_file_logger", "logs/async_log.txt"); // alternatively: // auto async_file = spdlog::create_async("async_file_logger", "logs/async_log.txt");   
}

@abstr_code_section c++

# include "spdlog/sinks/stdout_color_sinks.h"

# include "spdlog/sinks/rotating_file_sink.h"

void multi_sink_example @abstr_number () { spdlog::init_thread_pool( @abstr_number , @abstr_number ); auto stdout_sink = std::make_shared("mylog.txt", @abstr_number * @abstr_number * @abstr_number , @abstr_number ); std::vector sinks {stdout_sink, rotating_sink}; auto logger = std::make_shared("loggername", sinks.begin(), sinks.end(), spdlog::thread_pool(), spdlog::async_overflow_policy::block); spdlog::register_logger(logger); } @abstr_code_section c++ // user defined types logging by implementing operator<<

# include "spdlog/fmt/ostr.h" // must be included

struct my_type { int i; template friend OStream &operator<<(OStream &os, const my_type &c) { return os << "[my_type i=" << c.i << "]"; } };

void user_defined_example() { spdlog::get("console")->info("user defined type: {}", my_type{ @abstr_number }); }

@abstr_code_section c++ void err_handler_example() { // can be set globally or per logger(logger->set_error_handler(..)) spdlog::set_error_handler( { spdlog::get("console")->error(" *** LOGGER ERROR *** : {}", msg); }); spdlog::get("console")->info("some invalid message to trigger an error {}{}{}{}", @abstr_number ); }

@abstr_code_section c++

# include "spdlog/sinks/syslog_sink.h"

void syslog_example() { std::string ident = "spdlog-example"; auto syslog_logger = spdlog::syslog_logger_mt("syslog", ident, LOG_PID); syslog_logger->warn("This is warning that will end up in syslog."); } @abstr_code_section c++

# include "spdlog/sinks/android_sink.h"

void android_example() { std::string tag = "spdlog-android"; auto android_logger = spdlog::android_logger_mt("android", tag); android_logger->critical("Use \"adb shell logcat\" to view this message."); } @abstr_code_section [info] **_*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ __**[info] Single thread, @abstr_number , @abstr_number , @abstr_number iterations [info] ** _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_** [info] basic_st Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] rotating_st Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] daily_st Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] empty_logger Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] **_*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ __**[info] C-string ( @abstr_number bytes). Single thread, @abstr_number , @abstr_number , @abstr_number iterations [info] ** _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_** [info] basic_st Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] rotating_st Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] daily_st Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] null_st Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] **_*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ __**[info] @abstr_number threads sharing same logger, @abstr_number , @abstr_number , @abstr_number iterations [info] ** _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_** [info] basic_mt Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] rotating_mt Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] daily_mt Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] null_mt Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec @abstr_code_section [info] ------------------------------------------------- [info] Messages : @abstr_number , @abstr_number , @abstr_number [info] Threads : @abstr_number [info] Queue : @abstr_number , @abstr_number slots [info] Queue memory : @abstr_number , @abstr_number x @abstr_number = @abstr_number , @abstr_number KB [info] Total iters : @abstr_number [info] ------------------------------------------------- [info] [info] **_*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_** [info] Queue Overflow Policy: block [info] **_*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ __**[info] Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number /sec [info] Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number /sec [info] Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number /sec [info] [info] ** _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ __**[info] Queue Overflow Policy: overrun [info] ** _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ _*_ *** [info] Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec [info] Elapsed: @abstr_number . @abstr_number secs @abstr_number , @abstr_number , @abstr_number /sec

```

## Documentation

Documentation can be found in the @abstr_hyperlink pages.
