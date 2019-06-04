Whenever is a Ruby gem that provides a clear syntax for writing and deploying cron jobs.

### Installation

@abstr_code_section 

Or with Bundler in your Gemfile.

@abstr_code_section 

### Getting started

@abstr_code_section 

This will create an initial `config/schedule.rb` file for you.

### The `whenever` command

@abstr_code_section 

This will simply show you your `schedule.rb` file converted to cron syntax. It does not read or write your crontab file; you'll need to do this in order for your jobs to execute:

@abstr_code_section 

You can list installed cron jobs using `crontab -l`.

Run `whenever --help` for a complete list of options for selecting the schedule to use, setting variables in the schedule, selecting a user as which to install the crontab, etc.

### Example schedule.rb file

@abstr_code_section 

### Define your own job types

Whenever ships with three pre-defined job types: command, runner, and rake. You can define your own with `job_type`.

For example:

@abstr_code_section 

Would run `/usr/local/bin/awesome party extreme` every two hours. `:task` is always replaced with the first argument, and any additional `:whatevers` are replaced with the options passed in or by variables that have been defined with `set`.

The default job types that ship with Whenever are defined like so:

@abstr_code_section 

Pre-Rails @abstr_number apps and apps that don't use Bundler will redefine the `rake` and `runner` jobs respectively to function correctly.

If a `:path` is not set it will default to the directory in which `whenever` was executed. `:environment_variable` will default to 'RAILS_ENV'. `:environment` will default to 'production'. `:output` will be replaced with your output redirection settings which you can read more about here: @abstr_hyperlink 

All jobs are by default run with `bash -l -c 'command...'`. Among other things, this allows your cron jobs to play nice with RVM by loading the entire environment instead of cron's somewhat limited environment. Read more: 

You can change this by setting your own `:job_template`.

@abstr_code_section 

Or set the job_template to nil to have your jobs execute normally.

@abstr_code_section 

### Capistrano integration

Use the built-in Capistrano recipe for easy crontab updates with deploys. For Capistrano V @abstr_number , see the next section.

In your "config/deploy.rb" file:

@abstr_code_section 

Take a look at the recipe for options you can set.  For example, if you're using bundler do this:

@abstr_code_section 

If you are using different environments (such as staging, production), then you may want to do this:

@abstr_code_section 

The capistrano variable `:stage` should be the one holding your environment name. This will make the correct `:environment` available in your `schedule.rb`.

If both your environments are on the same server you'll want to namespace them or they'll overwrite each other when you deploy:

@abstr_code_section 

### Capistrano V @abstr_number Integration

In your "Capfile" file:

@abstr_code_section 

Take a look at the @abstr_hyperlink (bottom of file) for options you can set. For example, to namespace the crontab entries by application and stage do this in your "config/deploy.rb" file:

@abstr_code_section 

The Capistrano integration by default expects the `:application` variable to be set in order to scope jobs in the crontab.

If your deploy user is different than your application user, you can specify to set the crontab user with:

@abstr_code_section 

### Capistrano roles

The first thing to know about the new roles support is that it is entirely optional and backwards-compatible. If you don't need different jobs running on different servers in your capistrano deployment, then you can safely stop reading now and everything should just work the same way it always has.

When you define a job in your schedule.rb file, by default it will be deployed to all servers in the whenever_roles list (which defaults to [:db]).

However, if you want to restrict certain jobs to only run on subset of servers, you can add a :roles => [...] argument to their definitions. **Make sure to add that role to the whenever_roles list in your deploy.rb.**

When you run `cap deploy`, jobs with a :roles list specified will only be added to the crontabs on servers with one or more of the roles in that list.

Jobs with no :roles argument will be deployed to all servers in the whenever_roles list. This is to maintain backward compatibility with previous releases of whenever.

So, for example, with the default whenever_roles of [:db], a job like this would be deployed to all servers with the :db role:

@abstr_code_section 

If we set whenever_roles to [:db, :app] in deploy.rb, and have the following jobs in schedule.rb:

@abstr_code_section 

Here are the basic rules:

@abstr_number . If a server's role isn't listed in whenever_roles, it will _never_ have jobs added to its crontab. @abstr_number . If a server's role is listed in the whenever_roles, then it will have all jobs added to its crontab that either list that role in their :roles arg or that don't have a :roles arg. @abstr_number . If a job has a :roles arg but that role isn't in the whenever_roles list, that job _will not_ be deployed to any server.

### RVM Integration

If your production environment uses RVM (Ruby Version Manager) you will run into a gotcha that causes your cron jobs to hang. This is not directly related to Whenever, and can be tricky to debug. Your .rvmrc files must be trusted or else the cron jobs will hang waiting for the file to be trusted. A solution is to disable the prompt by adding this line to your user rvm file in `~/.rvmrc`

`rvm_trust_rvmrcs_flag= @abstr_number`

This tells rvm to trust all rvmrc files.

### Heroku?

No. Heroku does not support cron, instead providing @abstr_hyperlink . If you deploy to Heroku, you should use that rather than Whenever.

### Testing

@abstr_hyperlink is an extension to Whenever for testing a Whenever schedule.

### Credit

Whenever was created for use at Inkling ( @abstr_hyperlink ). Their take on it: 

Thanks to all the contributors who have made it even better: @abstr_hyperlink 

### Discussion / Feedback / Issues / Bugs

For general discussion and questions, please use the google group: @abstr_hyperlink 

If you've found a genuine bug or issue, please use the Issues section on github: @abstr_hyperlink 

Ryan Bates created a great Railscast about Whenever:  It's a little bit dated now, but remains a good introduction.

* * *

@abstr_hyperlink 

* * *

Copyright © @abstr_number Javan Makhmali
