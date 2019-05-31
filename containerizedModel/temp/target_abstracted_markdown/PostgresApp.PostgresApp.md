# Postgres.app Version @abstr_number

This is a complete rewrite of Postgres.app

  * Modern User Interface
  * Improved Error Messages & Status Reporting
  * Run Multiple Versions of PostgreSQL simultaneously
  * Written in Swift!



If you are looking for the current/old version of Postgres.app, please switch to the pg @abstr_number X branches!

Most of this README is outdated and needs to be updated for the new version.

## Download

You can download Postgres.app from the @abstr_hyperlink .

Older versions and pre-releases are available in the releases section on GitHub.

## Documentation

Documentation is available at @abstr_hyperlink , as well as from the "Open Documentation" menu item in Postgres.app.

## What's Included?

  * @abstr_hyperlink 
  * @abstr_hyperlink 
  * @abstr_hyperlink 



## How To Build

_Note: This section is outdated_

If you want to tweak the GUI only, just make sure you have a compiled copy of Postgres.app in your applications folder. Open the XCode file and start hacking!

If you want to build your own versions of all the PostgreSQL binaries, you have a bit more work.

Make sure you have `autoconf`, `automake` installed. The quickest way to install them is using MacPorts:
    
    
    sudo port install autoconf automake
    

For building PostgreSQL with docs, you also need a bunch of other tools:
    
    
    sudo port install docbook-dsssl docbook-sgml- @abstr_number . @abstr_number  docbook-xml- @abstr_number . @abstr_number  docbook-xsl libxslt openjade opensp
    

Then make sure you remove other versions of `Postgres.app` from your Applications folder.

Open the `src` directory and type `make`. This will download and build PostgreSQL, PostGIS, and PLV @abstr_number . Several hundred megabytes of sources will be downloaded and built. This can take an hour or longer, depending on your Internet connection and processor speed. All the products will be installed in `/Applications/Postgres.app/Contents/MacOS/`.

Once this is done, you can just open `Postgres.xcodeproj` in Xcode, select the "Postgres" scheme, and click "Build".

To share your build, use the "Archive" command and then use the "Distribute" command in Organizer.

## Under the Hood

Postgres.app bundles the PostgreSQL binaries inside the application package. When you first start Postgres.app, here's what it does:

  * Initialise a database cluster: `initdb -D DATA_DIRECTORY -EUTF- @abstr_number --locale=XX_XX.UTF- @abstr_number`
  * Start the server: `pg_ctl start -D DATA_DIRECTORY -w -l DATA_DIRECTORY/postgres-server.log`
  * Create a user database: `createdb USERNAME`



On subsequent app launches, Postgres.app only starts the server.

The default `DATA_DIRECTORY` is `/Users/USERNAME/Library/Application Support/Postgres/var- @abstr_number .X`

Note that Postgres.app runs the server as your user, unlike other installations which might create a separate user named `postgres`.

When you quit Postgres.app, it stops the server using the following command:

  * `pg_ctl stop -w -D DATA_DIRECTORY`



## Command Line Utilities

Postgres.app also includes useful command line utilities:

  * PostgreSQL: `clusterdb` `createdb` `createlang` `createuser` `dropdb` `droplang` `dropuser` `ecpg` `initdb` `oid @abstr_number name` `pg_archivecleanup` `pg_basebackup` `pg_config` `pg_controldata` `pg_ctl` `pg_dump` `pg_dumpall` `pg_receivexlog` `pg_resetxlog` `pg_restore` `pg_standby` `pg_test_fsync` `pg_test_timing` `pg_upgrade` `pgbench` `postgres` `postmaster` `psql` `reindexdb` `vacuumdb` `vacuumlo`
  * PROJ. @abstr_number : `cs @abstr_number cs` `geod` `invgeod` `invproj` `nad @abstr_number bin` `proj`
  * GDAL: `gdal_contour` `gdal_grid` `gdal_rasterize` `gdal_translate` `gdaladdo` `gdalbuildvrt` `gdaldem` `gdalenhance` `gdalinfo` `gdallocationinfo` `gdalmanage` `gdalserver` `gdalsrsinfo` `gdaltindex` `gdaltransform` `gdalwarp` `nearblack` `ogr @abstr_number ogr` `ogrinfo` `ogrtindex` `testepsg`
  * PostGIS: `pgsql @abstr_number shp` `raster @abstr_number pgsql` `shp @abstr_number pgsql`



See @abstr_hyperlink for more info.

## Contact

If you find a bug, please @abstr_hyperlink .

Postgres.app is maintained by @abstr_hyperlink and @abstr_hyperlink .

## License

Postgres.app is released under the PostgreSQL License. See LICENSE for additional information.
