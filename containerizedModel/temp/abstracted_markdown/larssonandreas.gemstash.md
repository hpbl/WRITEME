@abstr_hyperlink 

@abstr_image 

## What is Gemstash?

Gemstash is both a cache for remote servers such as https://www.rubygems.org, and a private gem source.

If you are using @abstr_hyperlink across many machines that have access to a server within your control, you might want to use Gemstash.

If you produce gems that you don't want everyone in the world to have access to, you might want to use Gemstash.

If you frequently bundle the same set of gems across multiple projects, you might want to use Gemstash.

Are you only using gems from https://www.rubygems.org, and don't bundle the same gems frequently? Well, maybe you don't need Gemstash... yet.

## Quickstart Guide

### Setup

Gemstash is designed to be quick and painless to get set up. By the end of this Quickstart Guide, you will be able to bundle stashed gems from public sources against a Gemstash server running on your machine.

Install Gemstash to get started:

@abstr_code_section 

After it is installed, starting Gemstash requires no additional steps. Simply start the Gemstash server with the `gemstash` command:

@abstr_code_section 

You may have noticed that the command finished quickly. This is because Gemstash will run the server in the background by default. The server runs on port @abstr_number .

### Bundling

With the server running, you can bundle against it. Tell Bundler that you want to use Gemstash to find gems from RubyGems.org:

@abstr_code_section 

Now you can create a Gemfile and install gems through Gemstash:

@abstr_code_section 

The gems you include should be gems you don't yet have installed, otherwise Gemstash will have nothing to stash. Now bundle:

@abstr_code_section 

Your Gemstash server has fetched the gems from https://www.rubygems.org and cached them for you! To prove this, you can disable your Internet connection and try again. The gem dependencies from https://www.rubygems.org are cached for @abstr_number minutes, so if you bundle again before that, you can successfully bundle without an Internet connection:

@abstr_code_section 

### Stopping the Server

Once you've finish using your Gemstash server, you can stop it just as easily as you started it:

@abstr_code_section 

You'll also want to tell Bundler that it can go back to getting gems from RubyGems.org directly, instead of going through Gemstash:

@abstr_code_section 

### Under the Hood

You might wonder where the gems are stored. After running the commands above, you will find a new directory at `~/.gemstash`. This directory holds all the cached and private gems. It also has a server log, the database, and configuration for Gemstash. If you prefer, you can point to a different directory.

Gemstash uses @abstr_hyperlink to store details about private gems. The database will be located in `~/.gemstash`, however you won't see the database appear until you start using private gems. If you prefer, you can use a different database.

Gemstash temporarily caches things like gem dependencies in memory. Anything cached in memory will last for @abstr_number minutes before being retrieved again. You can use memcached instead of caching in memory. Gem files are always cached permanently, so bundling with a `Gemfile.lock` with all gems cached will never call out to https://www.rubygems.org.

The server you ran is provided via @abstr_hyperlink and @abstr_hyperlink , however they are not customizable at this point.

## Deep Dive

For a deep dive into the following subjects, follow the links: * Private gems * Multiple gem sources * Using Gemstash as a mirror * Customizing the server (database, storage, caching, and more) * Deploying Gemstash * Debugging Gemstash

## Reference

For an anatomy of various configuration and commands, follow the links: * Configuration * Authorize * Start * Stop * Status * Setup

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake` to run RuboCop and the tests. While developing, you can run `bin/gemstash` to run Gemstash. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bundler/gemstash. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License

The gem is available as open source under the terms of the @abstr_hyperlink .
