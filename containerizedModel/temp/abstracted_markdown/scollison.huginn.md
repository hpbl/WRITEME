@abstr_image 

* * *

## What is Huginn?

Huginn is a system for building agents that perform automated tasks for you online. They can read the web, watch for events, and take actions on your behalf. Huginn's Agents create and consume events, propagating them along a directed graph. Think of it as a hackable Yahoo! Pipes plus IFTTT on your own server. You always know who has your data. You do.

@abstr_image 

#### Here are some of the things that you can do with Huginn:

  * Track the weather and get an email when it's going to rain (or snow) tomorrow ("Don't forget your umbrella!")
  * List terms that you care about and receive emails when their occurrence on Twitter changes. (For example, want to know when something interesting has happened in the world of Machine Learning? Huginn will watch the term "machine learning" on Twitter and tell you when there is a spike in discussion.)
  * Watch for air travel or shopping deals
  * Follow your project names on Twitter and get updates when people mention them
  * Scrape websites and receive emails when they change
  * Connect to Adioso, HipChat, Basecamp, Growl, FTP, IMAP, Jabber, JIRA, MQTT, nextbus, Pushbullet, Pushover, RSS, Bash, Slack, StubHub, translation APIs, Twilio, Twitter, Wunderground, and Weibo, to name a few.
  * Send digest emails with things that you care about at specific times during the day
  * Track counts of high frequency events and send an SMS within moments when they spike, such as the term "san francisco emergency"
  * Send and receive WebHooks
  * Run custom JavaScript or CoffeeScript functions
  * Track your location over time
  * Create Amazon Mechanical Turk workflows as the inputs, or outputs, of agents (the Amazon Turk Agent is called the "HumanTaskAgent"). For example: "Once a day, ask @abstr_number people for a funny cat photo; send the results to @abstr_number more people to be rated; send the top-rated photo to @abstr_number people for a funny caption; send to @abstr_number final people to rate for funniest caption; finally, post the best captioned photo on my blog."



@abstr_hyperlink 

Join us in our @abstr_hyperlink to discuss the project and follow @abstr_hyperlink for updates as Huginn evolves.

### Join us!

Want to help with Huginn? All contributions are encouraged! You could make UI improvements, @abstr_hyperlink , write @abstr_hyperlink , or try tackling @abstr_hyperlink . Please fork, add specs, and send pull requests!

Really want a fix or feature? Want to solve some community issues and earn some extra coffee money? Take a look at the @abstr_hyperlink .

Have an awesome idea but not feeling quite up to contributing yet? Head over to our @abstr_hyperlink and tell us!

## Examples

Please checkout the @abstr_hyperlink !

And now, some example screenshots. Below them are instructions to get you started.

@abstr_image 

@abstr_image 

@abstr_image 

@abstr_image 

@abstr_image 

## Getting Started

### Docker

The quickest and easiest way to check out Huginn is to use the offical Docker image. Have a look at the documentation.

### Local Installation

If you just want to play around, you can simply fork this repository, then perform the following steps:

  * Run `git remote add upstream https://github.com/cantino/huginn.git` to add the main repository as a remote for your fork.
  * Copy `.env.example` to `.env` (`cp .env.example .env`) and edit `.env`, at least updating the `APP_SECRET_TOKEN` variable.
  * Run `bundle` to install dependencies
  * Run `bundle exec rake db:create`, `bundle exec rake db:migrate`, and then `bundle exec rake db:seed` to create a development MySQL database with some example Agents.
  * Run `bundle exec foreman start`, visit @abstr_hyperlink , and login with the username of `admin` and the password of `password`.
  * Setup some Agents!
  * Read the @abstr_hyperlink for usage examples and to get started making new Agents.
  * Periodically run `git fetch upstream` and then `git checkout master && git merge upstream/master` to merge in the newest version of Huginn.



Note: By default, emails are intercepted in the `development` Rails environment, which is what you just setup. You can view them at @abstr_hyperlink . If you'd like to send real emails via SMTP when playing with Huginn locally, set `SEND_EMAIL_IN_DEVELOPMENT` to `true` in your `.env` file.

If you need more detailed instructions, see the @abstr_hyperlink .

### Develop

All agents have specs! Test all specs with `bundle exec rspec`, or test a specific spec with `bundle exec rspec path/to/specific/spec.rb`. Read more about rspec for rails @abstr_hyperlink .

## Deployment

### Heroku

Try Huginn on Heroku: @abstr_hyperlink (Takes a few minutes to setup. Read the documentation while you are waiting and be sure to click 'View it' after launch!)

Huginn works on the free version of Heroku @abstr_hyperlink . For non-experimental use, we strongly recommend Heroku's cheapest paid plan or our Docker container.

Please see @abstr_hyperlink for detailed deployment strategies for different providers.

### Manual installation on any server

Have a look at the installation guide.

### Optional Setup

#### Setup for private development

See @abstr_hyperlink on the wiki.

#### Enable the WeatherAgent

In order to use the WeatherAgent you need an @abstr_hyperlink . Signup for one and then change the value of `api_key: your-key` in your seeded WeatherAgent.

#### Disable SSL

We assume your deployment will run over SSL. This is a very good idea! However, if you wish to turn this off, you'll probably need to edit `config/initializers/devise.rb` and modify the line containing `config.rememberable_options = { :secure => true }`. You will also need to edit `config/environments/production.rb` and modify the value of `config.force_ssl`.

## License

Huginn is provided under the MIT License.

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 
