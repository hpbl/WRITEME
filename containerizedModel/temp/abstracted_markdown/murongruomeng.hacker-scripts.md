# Hacker Scripts

Based on a _ @abstr_hyperlink _:

> xxx: OK, so, our build engineer has left for another company. The dude was literally living inside the terminal. You know, that type of a guy who loves Vim, creates diagrams in Dot and writes wiki-posts in Markdown... If something - anything - requires more than @abstr_number seconds of his time, he writes a script to automate that.
> 
> xxx: So we're sitting here, looking through his, uhm, "legacy"
> 
> xxx: You're gonna love this
> 
> xxx: @abstr_hyperlink - sends a text message "late at work" to his wife (apparently). Automatically picks reasons from an array of strings, randomly. Runs inside a cron-job. The job fires if there are active SSH-sessions on the server after @abstr_number pm with his login.
> 
> xxx: @abstr_hyperlink - scans the inbox for emails from "Kumar" (a DBA at our clients). Looks for keywords like "help", "trouble", "sorry" etc. If keywords are found - the script SSHes into the clients server and rolls back the staging database to the latest backup. Then sends a reply "no worries mate, be careful next time".
> 
> xxx: @abstr_hyperlink - another cron-job that is set to specific dates. Sends automated emails like "not feeling well/gonna work from home" etc. Adds a random "reason" from another predefined array of strings. Fires if there are no interactive sessions on the server at @abstr_number : @abstr_number am.
> 
> xxx: (and the oscar goes to) @abstr_hyperlink - this one waits exactly @abstr_number seconds (!), then opens an SSH session to our coffee-machine (we had no frikin idea the coffee machine is on the network, runs linux and has SSHD up and running) and sends some weird gibberish to it. Looks binary. Turns out this thing starts brewing a mid-sized half-caf latte and waits another @abstr_number (!) seconds before pouring it into a cup. The timing is exactly how long it takes to walk to the machine from the dudes desk.
> 
> xxx: holy sh*t I'm keeping those

Original: http://bash.im/quote/ @abstr_number (in Russian)   
Pull requests with other implementations (Python, Perl, Shell, etc) are welcome.

## Usage

You need these environment variables:

@abstr_code_section 

For Ruby scripts you need to install gems: `gem install dotenv twilio gmail`

## Cron jobs

@abstr_code_section 

* * *

Code is released under WTFPL.
