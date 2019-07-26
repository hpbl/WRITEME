# FluentScheduler

@abstr_hyperlink @abstr_hyperlink 

Automated job scheduler with fluent interface.

  * Usage
  * Using it with ASP.NET
  * Stopping the scheduler
  * Unexpected exceptions
  * Concurrent jobs
  * Daylight Saving Time
  * Milliseconds Accuracy
  * Weekly jobs
  * Dependency Injection
  * Contributing



## Usage

The job configuration is handled in a [Registry] class. A job is either an [Action] or a class that inherits [IJob]:

@abstr_code_section 

You can also use the [Registry] class directly (instead of inheriting it):

@abstr_code_section 

With the registry ready you then need to initialize the [JobManager]. This is usually done as soon as your application is loaded (in the [Application_Start] method of a web application for example):

@abstr_code_section 

It's also possible to schedule jobs after initialization:

@abstr_code_section 

## Using it with ASP.NET

When using it with ASP.NET consider implementing [IRegisteredObject] and registering it on [HostingEnvironment] ( @abstr_hyperlink ), like:

@abstr_code_section 

## Stopping the Scheduler

To stop the scheduler:

@abstr_code_section 

To both stop and wait for the running jobs to finish:

@abstr_code_section 

## Unexpected exceptions

To observe unhandled exceptions from your scheduled jobs listen for the JobException event on [JobManager]:

@abstr_code_section 

## Concurrent jobs

By default, the library allows a schedule to run in parallel with a previously triggered execution of the same schedule.

If you don't want such behaviour you can set a specific schedule as non-reentrant:

@abstr_code_section 

Or you can set it to all schedules of the registry at once:

@abstr_code_section 

## Daylight Saving Time

Unfortunately, not unlike many schedulers, there is no daylight saving time support yet.

If you are worried about your jobs not running or running twice due to that, the suggestion is to either avoid troublesome time ranges or to force the use of UTC:

@abstr_code_section 

## Milliseconds Accuracy

The aim of the library is ease of use and flexibility, and not millisecond precision. While the library has a millisecond unit, you should avoid relying on really small intervals (less than @abstr_number ms).

## Weekly jobs

Let's suppose it's @abstr_number : @abstr_number of a Monday morning and you want to start a job that runs every Monday at @abstr_number : @abstr_number . Should the first run of your job be today or only on the next week Monday?

If you want the former (not waiting for a whole week):

@abstr_code_section 

Or if you want the latter (making sure that at least one week has passed):

@abstr_code_section 

## Dependency Injection

Currently, the library supports dependency injection of jobs (via IJobFactory). However, you shouldn't use it, it's bad idea on its way to be deprecated.

## Contributing

Feel free to [open an issue] or to [submit a pull request].

To make sure your pull request doesn't get rejected, discuss it in an issue beforehand. Also, remember to [Run All Tests (Ctrl + R, A)], [Run Code Analysis on Solution (Alt + F @abstr_number )] and to be consistent with the existing code.

You can also help others in need for support, check the ["help wanted"] label.
