@abstr_image 

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

* * *

The Bitwarden Server project contains the APIs, database, and other core infrastructure items needed for the "backend" of all bitwarden client applications.

The server project is written in C# using .NET Core with ASP.NET Core. The database is written in T-SQL/SQL Server. The codebase can be developed, built, run, and deployed cross-platform on Windows, macOS, and Linux distributions.

## Build/Run

### Requirements

  * @abstr_hyperlink 
  * @abstr_hyperlink 



_These dependencies are free to use._

### Recommended Development Tooling

  * @abstr_hyperlink (Windows and macOS)
  * @abstr_hyperlink (other)



_These tools are free to use._

### API

@abstr_code_section 

visit http://localhost: @abstr_number /alive

### Identity

@abstr_code_section 

visit http://localhost: @abstr_number /.well-known/openid-configuration

## Deploy

@abstr_hyperlink 

You can deploy Bitwarden using Docker containers on Windows, macOS, and Linux distributions. Use the provided PowerShell and Bash scripts to get started quickly. Find all of the Bitwarden images on @abstr_hyperlink .

Full documentation for deploying Bitwarden with Docker can be found in our help center at: https://help.bitwarden.com/article/install-on-premise/

### Requirements

  * @abstr_hyperlink 
  * @abstr_hyperlink (already included with some Docker installations)



_These dependencies are free to use._

### Linux & macOS

@abstr_code_section 

### Windows

@abstr_code_section 

## Contribute

Code contributions are welcome! Visual Studio or VS Code is highly recommended if you are working on this project. Please commit any pull requests against the `master` branch.

Security audits and feedback are welcome. Please open an issue or email us privately if the report is sensitive in nature. You can read our security policy in the SECURITY.md file. We also run a program on @abstr_hyperlink .
