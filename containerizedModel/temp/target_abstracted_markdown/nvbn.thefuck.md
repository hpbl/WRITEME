# The Fuck @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

_The Fuck_ is a magnificent app, inspired by a @abstr_hyperlink @abstr_hyperlink , that corrects errors in previous console commands.

Is _The Fuck_ too slow? Try the experimental instant mode!

@abstr_hyperlink 

More examples:

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

@abstr_code_section 

If you're not afraid of blindly running corrected commands, the `require_confirmation` settings option can be disabled:

@abstr_code_section 

## Requirements

  * python ( @abstr_number . @abstr_number +)
  * pip
  * python-dev



## Installation

On OS X, you can install _The Fuck_ via @abstr_hyperlink (or via @abstr_hyperlink on Linux):

@abstr_code_section 

On Ubuntu / Mint, install _The Fuck_ with the following commands: @abstr_code_section 

On FreeBSD, install _The Fuck_ with the following commands: @abstr_code_section 

On ChromeOS, install _The Fuck_ using @abstr_hyperlink with the following command: @abstr_code_section 

On other systems, install _The Fuck_ by using `pip`:

@abstr_code_section 

@abstr_hyperlink 

# It is recommended that you place this command in your `.bash_profile`, `.bashrc`, `.zshrc` or other startup script:

@abstr_code_section 

@abstr_hyperlink 

Changes are only available in a new shell session. To make changes immediately available, run `source ~/.bashrc` (or your shell config file like `.zshrc`).

To run fixed commands without confirmation, use the `--yeah` option (or just `-y` for short):

@abstr_code_section 

To fix commands recursively until succeeding, use the `-r` option:

@abstr_code_section 

## Updating

@abstr_code_section 

**Note: Alias functionality was changed in v @abstr_number . @abstr_number of _The Fuck_**

## How it works

_The Fuck_ attempts to match the previous command with a rule. If a match is found, a new command is created using the matched rule and executed. The following rules are enabled by default:

  * `adb_unknown_command` – fixes misspelled commands like `adb logcta`;
  * `ag_literal` – adds `-Q` to `ag` when suggested;
  * `aws_cli` – fixes misspelled commands like `aws dynamdb scan`;
  * `az_cli` – fixes misspelled commands like `az providers`;
  * `cargo` – runs `cargo build` instead of `cargo`;
  * `cargo_no_command` – fixes wrongs commands like `cargo buid`;
  * `cat_dir` – replaces `cat` with `ls` when you try to `cat` a directory;
  * `cd_correction` – spellchecks and correct failed cd commands;
  * `cd_mkdir` – creates directories before cd'ing into them;
  * `cd_parent` – changes `cd..` to `cd ..`;
  * `chmod_x` – add execution bit;
  * `composer_not_command` – fixes composer command name;
  * `cp_omitting_directory` – adds `-a` when you `cp` directory;
  * `cpp @abstr_number` – adds missing `-std=c++ @abstr_number` to `g++` or `clang++`;
  * `dirty_untar` – fixes `tar x` command that untarred in the current directory;
  * `dirty_unzip` – fixes `unzip` command that unzipped in the current directory;
  * `django_south_ghost` – adds `--delete-ghost-migrations` to failed because ghosts django south migration;
  * `django_south_merge` – adds `--merge` to inconsistent django south migration;
  * `docker_login` – executes a `docker login` and repeats the previous command;
  * `docker_not_command` – fixes wrong docker commands like `docker tags`;
  * `dry` – fixes repetitions like `git git push`;
  * `fab_command_not_found` – fix misspelled fabric commands;
  * `fix_alt_space` – replaces Alt+Space with Space character;
  * `fix_file` – opens a file with an error in your `$EDITOR`;
  * `gem_unknown_command` – fixes wrong `gem` commands;
  * `git_add` – fixes _"pathspec 'foo' did not match any file(s) known to git."_ ;
  * `git_add_force` – adds `--force` to `git add <pathspec>...` when paths are .gitignore'd;
  * `git_bisect_usage` – fixes `git bisect strt`, `git bisect goood`, `git bisect rset`, etc. when bisecting;
  * `git_branch_delete` – changes `git branch -d` to `git branch -D`;
  * `git_branch_exists` – offers `git branch -d foo`, `git branch -D foo` or `git checkout foo` when creating a branch that already exists;
  * `git_branch_list` – catches `git branch list` in place of `git branch` and removes created branch;
  * `git_checkout` – fixes branch name or creates new branch;
  * `git_commit_amend` – offers `git commit --amend` after previous commit;
  * `git_commit_reset` – offers `git reset HEAD~` after previous commit;
  * `git_diff_no_index` – adds `--no-index` to previous `git diff` on untracked files;
  * `git_diff_staged` – adds `--staged` to previous `git diff` with unexpected output;
  * `git_fix_stash` – fixes `git stash` commands (misspelled subcommand and missing `save`);
  * `git_flag_after_filename` – fixes `fatal: bad flag '...' after filename`
  * `git_help_aliased` – fixes `git help <alias>` commands replacing  with the aliased command;
  * `git_merge` – adds remote to branch names;
  * `git_merge_unrelated` – adds `--allow-unrelated-histories` when required
  * `git_not_command` – fixes wrong git commands like `git brnch`;
  * `git_pull` – sets upstream before executing previous `git pull`;
  * `git_pull_clone` – clones instead of pulling when the repo does not exist;
  * `git_pull_uncommitted_changes` – stashes changes before pulling and pops them afterwards;
  * `git_push` – adds `--set-upstream origin $branch` to previous failed `git push`;
  * `git_push_different_branch_names` – fixes pushes when local brach name does not match remote branch name;
  * `git_push_pull` – runs `git pull` when `push` was rejected;
  * `git_push_without_commits` – Creates an initial commit if you forget and only `git add .`, when setting up a new project;
  * `git_rebase_no_changes` – runs `git rebase --skip` instead of `git rebase --continue` when there are no changes;
  * `git_remote_delete` – replaces `git remote delete remote_name` with `git remote remove remote_name`;
  * `git_rm_local_modifications` – adds `-f` or `--cached` when you try to `rm` a locally modified file;
  * `git_rm_recursive` – adds `-r` when you try to `rm` a directory;
  * `git_rm_staged` – adds `-f` or `--cached` when you try to `rm` a file with staged changes
  * `git_rebase_merge_dir` – offers `git rebase (--continue | --abort | --skip)` or removing the `.git/rebase-merge` dir when a rebase is in progress;
  * `git_remote_seturl_add` – runs `git remote add` when `git remote set_url` on nonexistant remote;
  * `git_stash` – stashes your local modifications before rebasing or switching branch;
  * `git_stash_pop` – adds your local modifications before popping stash, then resets;
  * `git_tag_force` – adds `--force` to `git tag <tagname>` when the tag already exists;
  * `git_two_dashes` – adds a missing dash to commands like `git commit -amend` or `git rebase -continue`;
  * `go_run` – appends `.go` extension when compiling/running Go programs;
  * `gradle_no_task` – fixes not found or ambiguous `gradle` task;
  * `gradle_wrapper` – replaces `gradle` with `./gradlew`;
  * `grep_arguments_order` – fixes `grep` arguments order for situations like `grep -lir . test`;
  * `grep_recursive` – adds `-r` when you try to `grep` directory;
  * `grunt_task_not_found` – fixes misspelled `grunt` commands;
  * `gulp_not_task` – fixes misspelled `gulp` tasks;
  * `has_exists_script` – prepends `./` when script/binary exists;
  * `heroku_multiple_apps` – add `--app <app>` to `heroku` commands like `heroku pg`;
  * `heroku_not_command` – fixes wrong `heroku` commands like `heroku log`;
  * `history` – tries to replace command with most similar command from history;
  * `hostscli` – tries to fix `hostscli` usage;
  * `ifconfig_device_not_found` – fixes wrong device names like `wlan @abstr_number` to `wlp @abstr_number s @abstr_number`;
  * `java` – removes `.java` extension when running Java programs;
  * `javac` – appends missing `.java` when compiling Java files;
  * `lein_not_task` – fixes wrong `lein` tasks like `lein rpl`;
  * `long_form_help` – changes `-h` to `--help` when the short form version is not supported
  * `ln_no_hard_link` – catches hard link creation on directories, suggest symbolic link;
  * `ln_s_order` – fixes `ln -s` arguments order;
  * `ls_all` – adds `-A` to `ls` when output is empty;
  * `ls_lah` – adds `-lah` to `ls`;
  * `man` – changes manual section;
  * `man_no_space` – fixes man commands without spaces, for example `mandiff`;
  * `mercurial` – fixes wrong `hg` commands;
  * `missing_space_before_subcommand` – fixes command with missing space like `npminstall`;
  * `mkdir_p` – adds `-p` when you try to create a directory without parent;
  * `mvn_no_command` – adds `clean package` to `mvn`;
  * `mvn_unknown_lifecycle_phase` – fixes misspelled lifecycle phases with `mvn`;
  * `npm_missing_script` – fixes `npm` custom script name in `npm run-script <script>`;
  * `npm_run_script` – adds missing `run-script` for custom `npm` scripts;
  * `npm_wrong_command` – fixes wrong npm commands like `npm urgrade`;
  * `no_command` – fixes wrong console commands, for example `vom/vim`;
  * `no_such_file` – creates missing directories with `mv` and `cp` commands;
  * `open` – either prepends `http://` to address passed to `open` or create a new file or directory and passes it to `open`;
  * `pip_install` – fixes permission issues with `pip install` commands by adding `--user` or prepending `sudo` if necessary;
  * `pip_unknown_command` – fixes wrong `pip` commands, for example `pip instatl/pip install`;
  * `php_s` – replaces `-s` by `-S` when trying to run a local php server;
  * `port_already_in_use` – kills process that bound port;
  * `prove_recursively` – adds `-r` when called with directory;
  * `pyenv_no_such_command` – fixes wrong pyenv commands like `pyenv isntall` or `pyenv list`;
  * `python_command` – prepends `python` when you try to run non-executable/without `./` python script;
  * `python_execute` – appends missing `.py` when executing Python files;
  * `quotation_marks` – fixes uneven usage of `'` and `"` when containing args';
  * `path_from_history` – replaces not found path with similar absolute path from history;
  * `react_native_command_unrecognized` – fixes unrecognized `react-native` commands;
  * `remove_trailing_cedilla` – remove trailling cedillas `ç`, a common typo for european keyboard layouts;
  * `rm_dir` – adds `-rf` when you try to remove a directory;
  * `scm_correction` – corrects wrong scm like `hg log` to `git log`;
  * `sed_unterminated_s` – adds missing '/' to `sed`'s `s` commands;
  * `sl_ls` – changes `sl` to `ls`;
  * `ssh_known_hosts` – removes host from `known_hosts` on warning;
  * `sudo` – prepends `sudo` to previous command if it failed because of permissions;
  * `sudo_command_from_user_path` – runs commands from users `$PATH` with `sudo`;
  * `switch_lang` – switches command from your local layout to en;
  * `systemctl` – correctly orders parameters of confusing `systemctl`;
  * `test.py` – runs `py.test` instead of `test.py`;
  * `touch` – creates missing directories before "touching";
  * `tsuru_login` – runs `tsuru login` if not authenticated or session expired;
  * `tsuru_not_command` – fixes wrong `tsuru` commands like `tsuru shell`;
  * `tmux` – fixes `tmux` commands;
  * `unknown_command` – fixes hadoop hdfs-style "unknown command", for example adds missing '-' to the command on `hdfs dfs ls`;
  * `unsudo` – removes `sudo` from previous command if a process refuses to run on super user privilege.
  * `vagrant_up` – starts up the vagrant instance;
  * `whois` – fixes `whois` command;
  * `workon_doesnt_exists` – fixes `virtualenvwrapper` env name os suggests to create new.
  * `yarn_alias` – fixes aliased `yarn` commands like `yarn ls`;
  * `yarn_command_not_found` – fixes misspelled `yarn` commands;
  * `yarn_command_replaced` – fixes replaced `yarn` commands;
  * `yarn_help` – makes it easier to open `yarn` documentation;



The following rules are enabled by default on specific platforms only:

  * `apt_get` – installs app from apt if it not installed (requires `python-commandnotfound` / `python @abstr_number -commandnotfound`);
  * `apt_get_search` – changes trying to search using `apt-get` with searching using `apt-cache`;
  * `apt_invalid_operation` – fixes invalid `apt` and `apt-get` calls, like `apt-get isntall vim`;
  * `apt_list_upgradable` – helps you run `apt list --upgradable` after `apt update`;
  * `apt_upgrade` – helps you run `apt upgrade` after `apt list --upgradable`;
  * `brew_cask_dependency` – installs cask dependencies;
  * `brew_install` – fixes formula name for `brew install`;
  * `brew_reinstall` – turns `brew install <formula>` into `brew reinstall <formula>`;
  * `brew_link` – adds `--overwrite --dry-run` if linking fails;
  * `brew_uninstall` – adds `--force` to `brew uninstall` if multiple versions were installed;
  * `brew_unknown_command` – fixes wrong brew commands, for example `brew docto/brew doctor`;
  * `brew_update_formula` – turns `brew update <formula>` into `brew upgrade <formula>`;
  * `dnf_no_such_command` – fixes mistyped DNF commands;
  * `pacman` – installs app with `pacman` if it is not installed (uses `yay` or `yaourt` if available);
  * `pacman_not_found` – fixes package name with `pacman`, `yay` or `yaourt`.



The following commands are bundled with _The Fuck_ , but are not enabled by default:

  * `git_push_force` – adds `--force-with-lease` to a `git push` (may conflict with `git_push_pull`);
  * `rm_root` – adds `--no-preserve-root` to `rm -rf /` command.



## Creating your own rules

To add your own rule, create a file named `your-rule-name.py` in `~/.config/thefuck/rules`. The rule file must contain two functions:

@abstr_code_section 

Additionally, rules can contain optional functions:

@abstr_code_section Rules can also contain the optional variables `enabled_by_default`, `requires_output` and `priority`.

`Command` has three attributes: `script`, `output` and `script_parts`. Your rule should not change `Command`.

**Rules api changed in @abstr_number . @abstr_number :** To access a rule's settings, import it with `from thefuck.conf import settings`

`settings` is a special object assembled from `~/.config/thefuck/settings.py`, and values from env (see more below).

A simple example rule for running a script with `sudo`:

@abstr_code_section 

@abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink .

## Settings

Several _The Fuck_ parameters can be changed in the file `$XDG_CONFIG_HOME/thefuck/settings.py` (`$XDG_CONFIG_HOME` defaults to `~/.config`):

  * `rules` – list of enabled rules, by default `thefuck.conf.DEFAULT_RULES`;
  * `exclude_rules` – list of disabled rules, by default `[]`;
  * `require_confirmation` – requires confirmation before running new command, by default `True`;
  * `wait_command` – max amount of time in seconds for getting previous command output;
  * `no_colors` – disable colored output;
  * `priority` – dict with rules priorities, rule with lower `priority` will be matched first;
  * `debug` – enables debug output, by default `False`;
  * `history_limit` – numeric value of how many history commands will be scanned, like `@abstr_number`;
  * `alter_history` – push fixed command to history, by default `True`;
  * `wait_slow_command` – max amount of time in seconds for getting previous command output if it in `slow_commands` list;
  * `slow_commands` – list of slow commands;
  * `num_close_matches` – maximum number of close matches to suggest, by default `@abstr_number`.



An example of `settings.py`:

@abstr_code_section 

Or via environment variables:

  * `THEFUCK_RULES` – list of enabled rules, like `DEFAULT_RULES:rm_root` or `sudo:no_command`;
  * `THEFUCK_EXCLUDE_RULES` – list of disabled rules, like `git_pull:git_push`;
  * `THEFUCK_REQUIRE_CONFIRMATION` – require confirmation before running new command, `true/false`;
  * `THEFUCK_WAIT_COMMAND` – max amount of time in seconds for getting previous command output;
  * `THEFUCK_NO_COLORS` – disable colored output, `true/false`;
  * `THEFUCK_PRIORITY` – priority of the rules, like `no_command= @abstr_number :apt_get= @abstr_number`, rule with lower `priority` will be matched first;
  * `THEFUCK_DEBUG` – enables debug output, `true/false`;
  * `THEFUCK_HISTORY_LIMIT` – how many history commands will be scanned, like `@abstr_number`;
  * `THEFUCK_ALTER_HISTORY` – push fixed command to history `true/false`;
  * `THEFUCK_WAIT_SLOW_COMMAND` – max amount of time in seconds for getting previous command output if it in `slow_commands` list;
  * `THEFUCK_SLOW_COMMANDS` – list of slow commands, like `lein:gradle`;
  * `THEFUCK_NUM_CLOSE_MATCHES` – maximum number of close matches to suggest, like `@abstr_number`.



For example:

@abstr_code_section 

## Third-party packages with rules

If you'd like to make a specific set of non-public rules, but would still like to share them with others, create a package named `thefuck_contrib_*` with the following structure:

@abstr_code_section 

_The Fuck_ will find rules located in the `rules` module.

## Experimental instant mode

The default behavior of _The Fuck_ requires time to re-run previous commands. When in instant mode, _The Fuck_ saves time by logging output with @abstr_hyperlink , then reading the log.

@abstr_hyperlink 

Currently, instant mode only supports Python @abstr_number with bash or zsh. zsh's autocorrect function also needs to be disabled in order for thefuck to work properly.

To enable instant mode, add `--enable-experimental-instant-mode` to the alias initialization in `.bashrc`, `.bash_profile` or `.zshrc`.

For example:

@abstr_code_section 

## Developing

See CONTRIBUTING.md

## License MIT

Project License can be found here.
