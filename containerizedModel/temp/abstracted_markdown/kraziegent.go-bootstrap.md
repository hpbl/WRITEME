@abstr_hyperlink @abstr_hyperlink 

## go-bootstrap

This is not a web framework. It generates a skeleton web project for you to kick-ass.

Feel free to use or rip-out any of its parts.

## Prerequisites

@abstr_number . PostgreSQL

@abstr_number . Go programming language, version @abstr_number . @abstr_number .x or newer.

## Installation

@abstr_number . `go get github.com/go-bootstrap/go-bootstrap`

@abstr_number . `$GOPATH/bin/go-bootstrap -dir github.com/{git-user}/{project-name}`

@abstr_number . Start using it: `cd $GOPATH/src/github.com/{git-user}/{project-name} && go run main.go`

## PostgreSQL Environment Variables

If you have `PGUSER`, `PGPASSWORD`, `PGHOST`, `PGPORT`, `PGSSLMODE` environment variables set, they will be used to generate and bootstrap the database.

## Decisions Made for You

This generator makes **A LOT** of decisions for you. Here's the list of things it uses for your project:

@abstr_number . PostgreSQL is chosen for the database.

@abstr_number . bcrypt is chosen as the password hasher.

@abstr_number . Bootstrap Flatly is chosen for the UI theme.

@abstr_number . Session is stored inside encrypted cookie.

@abstr_number . Static directory is located under `/static`.

@abstr_number . Model directory is located under `/dal` (Database Access Layer).

@abstr_number . It does not use ORM nor installs one.

@abstr_number . Test database is automatically created under `$GO_BOOTSTRAP_PROJECT_NAME-test`.

@abstr_number . A minimal Dockerfile is provided.

@abstr_number . A minimal Vagrantfile is provided.

@abstr_number . @abstr_hyperlink is chosen to manage dependencies.

@abstr_number . @abstr_hyperlink is chosen to connect to a database.

@abstr_number . @abstr_hyperlink is chosen for a lot of the HTTP plumbings.

@abstr_number . @abstr_hyperlink is chosen as the middleware library.

@abstr_number . @abstr_hyperlink is chosen to enable graceful shutdown.

@abstr_number . @abstr_hyperlink is chosen as the database migration and management tool.

@abstr_number . @abstr_hyperlink is chosen as the logging library.
