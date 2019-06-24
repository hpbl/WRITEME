@abstr_hyperlink 

youtube-dl - download videos from youtube.com or other video platforms

  * INSTALLATION
  * DESCRIPTION
  * OPTIONS
  * CONFIGURATION
  * OUTPUT TEMPLATE
  * FORMAT SELECTION
  * VIDEO SELECTION
  * FAQ
  * DEVELOPER INSTRUCTIONS
  * EMBEDDING YOUTUBE-DL
  * BUGS
  * COPYRIGHT



# INSTALLATION

To install it right away for all UNIX users (Linux, macOS, etc.), type:
    
    
    sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
    sudo chmod a+rx /usr/local/bin/youtube-dl
    

If you do not have curl, you can alternatively use a recent wget:
    
    
    sudo wget https://yt-dl.org/downloads/latest/youtube-dl -O /usr/local/bin/youtube-dl
    sudo chmod a+rx /usr/local/bin/youtube-dl
    

Windows users can @abstr_hyperlink and place it in any location on their @abstr_hyperlink except for `%SYSTEMROOT%\System @abstr_number` (e.g. **do not** put in `C:\Windows\System @abstr_number`).

You can also use pip:
    
    
    sudo -H pip install --upgrade youtube-dl
    

This command will update youtube-dl if you have already installed it. See the @abstr_hyperlink for more information.

macOS users can install youtube-dl with @abstr_hyperlink :
    
    
    brew install youtube-dl
    

Or with @abstr_hyperlink :
    
    
    sudo port install youtube-dl
    

Alternatively, refer to the developer instructions for how to check out and work with the git repository. For further options, including PGP signatures, see the @abstr_hyperlink .

# DESCRIPTION

**youtube-dl** is a command-line program to download videos from YouTube.com and a few more sites. It requires the Python interpreter, version @abstr_number . @abstr_number , @abstr_number . @abstr_number , or @abstr_number . @abstr_number +, and it is not platform specific. It should work on your Unix box, on Windows or on macOS. It is released to the public domain, which means you can modify it, redistribute it or use it however you like.
    
    
    youtube-dl [OPTIONS] URL [URL...]
    

# OPTIONS
    
    
    -h, --help                       Print this help text and exit
    --version                        Print program version and exit
    -U, --update                     Update this program to latest version. Make
                                     sure that you have sufficient permissions
                                     (run with sudo if needed)
    -i, --ignore-errors              Continue on download errors, for example to
                                     skip unavailable videos in a playlist
    --abort-on-error                 Abort downloading of further videos (in the
                                     playlist or the command line) if an error
                                     occurs
    --dump-user-agent                Display the current browser identification
    --list-extractors                List all supported extractors
    --extractor-descriptions         Output descriptions of all supported
                                     extractors
    --force-generic-extractor        Force extraction to use the generic
                                     extractor
    --default-search PREFIX          Use this prefix for unqualified URLs. For
                                     example "gvsearch @abstr_number :" downloads two videos
                                     from google videos for youtube-dl "large
                                     apple". Use the value "auto" to let
                                     youtube-dl guess ("auto_warning" to emit a
                                     warning when guessing). "error" just throws
                                     an error. The default value "fixup_error"
                                     repairs broken URLs, but emits an error if
                                     this is not possible instead of searching.
    --ignore-config                  Do not read configuration files. When given
                                     in the global configuration file
                                     /etc/youtube-dl.conf: Do not read the user
                                     configuration in ~/.config/youtube-
                                     dl/config (%APPDATA%/youtube-dl/config.txt
                                     on Windows)
    --config-location PATH           Location of the configuration file; either
                                     the path to the config or its containing
                                     directory.
    --flat-playlist                  Do not extract the videos of a playlist,
                                     only list them.
    --mark-watched                   Mark videos watched (YouTube only)
    --no-mark-watched                Do not mark videos watched (YouTube only)
    --no-color                       Do not emit color codes in output
    

## Network Options:
    
    
    --proxy URL                      Use the specified HTTP/HTTPS/SOCKS proxy.
                                     To enable SOCKS proxy, specify a proper
                                     scheme. For example
                                     socks @abstr_number :// @abstr_number . @abstr_number . @abstr_number . @abstr_number : @abstr_number /. Pass in an empty
                                     string (--proxy "") for direct connection
    --socket-timeout SECONDS         Time to wait before giving up, in seconds
    --source-address IP              Client-side IP address to bind to
    - @abstr_number , --force-ipv @abstr_number                  Make all connections via IPv @abstr_number 
    - @abstr_number , --force-ipv @abstr_number                  Make all connections via IPv @abstr_number
    

## Geo Restriction:
    
    
    --geo-verification-proxy URL     Use this proxy to verify the IP address for
                                     some geo-restricted sites. The default
                                     proxy specified by --proxy (or none, if the
                                     option is not present) is used for the
                                     actual downloading.
    --geo-bypass                     Bypass geographic restriction via faking
                                     X-Forwarded-For HTTP header
    --no-geo-bypass                  Do not bypass geographic restriction via
                                     faking X-Forwarded-For HTTP header
    --geo-bypass-country CODE        Force bypass geographic restriction with
                                     explicitly provided two-letter ISO  @abstr_number - @abstr_number 
                                     country code
    --geo-bypass-ip-block IP_BLOCK   Force bypass geographic restriction with
                                     explicitly provided IP block in CIDR
                                     notation
    

## Video Selection:
    
    
    --playlist-start NUMBER          Playlist video to start at (default is  @abstr_number )
    --playlist-end NUMBER            Playlist video to end at (default is last)
    --playlist-items ITEM_SPEC       Playlist video items to download. Specify
                                     indices of the videos in the playlist
                                     separated by commas like: "--playlist-items
                                      @abstr_number , @abstr_number , @abstr_number , @abstr_number " if you want to download videos
                                     indexed  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number  in the playlist. You can
                                     specify range: "--playlist-items
                                      @abstr_number - @abstr_number , @abstr_number , @abstr_number - @abstr_number ", it will download the videos
                                     at index  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number ,  @abstr_number  and  @abstr_number .
    --match-title REGEX              Download only matching titles (regex or
                                     caseless sub-string)
    --reject-title REGEX             Skip download for matching titles (regex or
                                     caseless sub-string)
    --max-downloads NUMBER           Abort after downloading NUMBER files
    --min-filesize SIZE              Do not download any videos smaller than
                                     SIZE (e.g.  @abstr_number k or  @abstr_number . @abstr_number m)
    --max-filesize SIZE              Do not download any videos larger than SIZE
                                     (e.g.  @abstr_number k or  @abstr_number . @abstr_number m)
    --date DATE                      Download only videos uploaded in this date
    --datebefore DATE                Download only videos uploaded on or before
                                     this date (i.e. inclusive)
    --dateafter DATE                 Download only videos uploaded on or after
                                     this date (i.e. inclusive)
    --min-views COUNT                Do not download any videos with less than
                                     COUNT views
    --max-views COUNT                Do not download any videos with more than
                                     COUNT views
    --match-filter FILTER            Generic video filter. Specify any key (see
                                     the "OUTPUT TEMPLATE" for a list of
                                     available keys) to match if the key is
                                     present, !key to check if the key is not
                                     present, key > NUMBER (like "comment_count
                                     >  @abstr_number ", also works with >=, <, <=, !=, =) to
                                     compare against a number, key = 'LITERAL'
                                     (like "uploader = 'Mike Smith'", also works
                                     with !=) to match against a string literal
                                     and & to require multiple matches. Values
                                     which are not known are excluded unless you
                                     put a question mark (?) after the operator.
                                     For example, to only match videos that have
                                     been liked more than  @abstr_number  times and disliked
                                     less than  @abstr_number  times (or the dislike
                                     functionality is not available at the given
                                     service), but who also have a description,
                                     use --match-filter "like_count >  @abstr_number  &
                                     dislike_count <?  @abstr_number  & description" .
    --no-playlist                    Download only the video, if the URL refers
                                     to a video and a playlist.
    --yes-playlist                   Download the playlist, if the URL refers to
                                     a video and a playlist.
    --age-limit YEARS                Download only videos suitable for the given
                                     age
    --download-archive FILE          Download only videos not listed in the
                                     archive file. Record the IDs of all
                                     downloaded videos in it.
    --include-ads                    Download advertisements as well
                                     (experimental)
    

## Download Options:
    
    
    -r, --limit-rate RATE            Maximum download rate in bytes per second
                                     (e.g.  @abstr_number K or  @abstr_number . @abstr_number M)
    -R, --retries RETRIES            Number of retries (default is  @abstr_number ), or
                                     "infinite".
    --fragment-retries RETRIES       Number of retries for a fragment (default
                                     is  @abstr_number ), or "infinite" (DASH, hlsnative and
                                     ISM)
    --skip-unavailable-fragments     Skip unavailable fragments (DASH, hlsnative
                                     and ISM)
    --abort-on-unavailable-fragment  Abort downloading when some fragment is not
                                     available
    --keep-fragments                 Keep downloaded fragments on disk after
                                     downloading is finished; fragments are
                                     erased by default
    --buffer-size SIZE               Size of download buffer (e.g.  @abstr_number  or  @abstr_number K)
                                     (default is  @abstr_number )
    --no-resize-buffer               Do not automatically adjust the buffer
                                     size. By default, the buffer size is
                                     automatically resized from an initial value
                                     of SIZE.
    --http-chunk-size SIZE           Size of a chunk for chunk-based HTTP
                                     downloading (e.g.  @abstr_number  or  @abstr_number M) (default
                                     is disabled). May be useful for bypassing
                                     bandwidth throttling imposed by a webserver
                                     (experimental)
    --playlist-reverse               Download playlist videos in reverse order
    --playlist-random                Download playlist videos in random order
    --xattr-set-filesize             Set file xattribute ytdl.filesize with
                                     expected file size
    --hls-prefer-native              Use the native HLS downloader instead of
                                     ffmpeg
    --hls-prefer-ffmpeg              Use ffmpeg instead of the native HLS
                                     downloader
    --hls-use-mpegts                 Use the mpegts container for HLS videos,
                                     allowing to play the video while
                                     downloading (some players may not be able
                                     to play it)
    --external-downloader COMMAND    Use the specified external downloader.
                                     Currently supports
                                     aria @abstr_number c,avconv,axel,curl,ffmpeg,httpie,wget
    --external-downloader-args ARGS  Give these arguments to the external
                                     downloader
    

## Filesystem Options:
    
    
    -a, --batch-file FILE            File containing URLs to download ('-' for
                                     stdin), one URL per line. Lines starting
                                     with '#', ';' or ']' are considered as
                                     comments and ignored.
    --id                             Use only video ID in file name
    -o, --output TEMPLATE            Output filename template, see the "OUTPUT
                                     TEMPLATE" for all the info
    --autonumber-start NUMBER        Specify the start value for %(autonumber)s
                                     (default is  @abstr_number )
    --restrict-filenames             Restrict filenames to only ASCII
                                     characters, and avoid "&" and spaces in
                                     filenames
    -w, --no-overwrites              Do not overwrite files
    -c, --continue                   Force resume of partially downloaded files.
                                     By default, youtube-dl will resume
                                     downloads if possible.
    --no-continue                    Do not resume partially downloaded files
                                     (restart from beginning)
    --no-part                        Do not use .part files - write directly
                                     into output file
    --no-mtime                       Do not use the Last-modified header to set
                                     the file modification time
    --write-description              Write video description to a .description
                                     file
    --write-info-json                Write video metadata to a .info.json file
    --write-annotations              Write video annotations to a
                                     .annotations.xml file
    --load-info-json FILE            JSON file containing the video information
                                     (created with the "--write-info-json"
                                     option)
    --cookies FILE                   File to read cookies from and dump cookie
                                     jar in
    --cache-dir DIR                  Location in the filesystem where youtube-dl
                                     can store some downloaded information
                                     permanently. By default
                                     $XDG_CACHE_HOME/youtube-dl or
                                     ~/.cache/youtube-dl . At the moment, only
                                     YouTube player files (for videos with
                                     obfuscated signatures) are cached, but that
                                     may change.
    --no-cache-dir                   Disable filesystem caching
    --rm-cache-dir                   Delete all filesystem cache files
    

## Thumbnail images:
    
    
    --write-thumbnail                Write thumbnail image to disk
    --write-all-thumbnails           Write all thumbnail image formats to disk
    --list-thumbnails                Simulate and list all available thumbnail
                                     formats
    

## Verbosity / Simulation Options:
    
    
    -q, --quiet                      Activate quiet mode
    --no-warnings                    Ignore warnings
    -s, --simulate                   Do not download the video and do not write
                                     anything to disk
    --skip-download                  Do not download the video
    -g, --get-url                    Simulate, quiet but print URL
    -e, --get-title                  Simulate, quiet but print title
    --get-id                         Simulate, quiet but print id
    --get-thumbnail                  Simulate, quiet but print thumbnail URL
    --get-description                Simulate, quiet but print video description
    --get-duration                   Simulate, quiet but print video length
    --get-filename                   Simulate, quiet but print output filename
    --get-format                     Simulate, quiet but print output format
    -j, --dump-json                  Simulate, quiet but print JSON information.
                                     See the "OUTPUT TEMPLATE" for a description
                                     of available keys.
    -J, --dump-single-json           Simulate, quiet but print JSON information
                                     for each command-line argument. If the URL
                                     refers to a playlist, dump the whole
                                     playlist information in a single line.
    --print-json                     Be quiet and print the video information as
                                     JSON (video is still being downloaded).
    --newline                        Output progress bar as new lines
    --no-progress                    Do not print progress bar
    --console-title                  Display progress in console titlebar
    -v, --verbose                    Print various debugging information
    --dump-pages                     Print downloaded pages encoded using base @abstr_number 
                                     to debug problems (very verbose)
    --write-pages                    Write downloaded intermediary pages to
                                     files in the current directory to debug
                                     problems
    --print-traffic                  Display sent and read HTTP traffic
    -C, --call-home                  Contact the youtube-dl server for debugging
    --no-call-home                   Do NOT contact the youtube-dl server for
                                     debugging
    

## Workarounds:
    
    
    --encoding ENCODING              Force the specified encoding (experimental)
    --no-check-certificate           Suppress HTTPS certificate validation
    --prefer-insecure                Use an unencrypted connection to retrieve
                                     information about the video. (Currently
                                     supported only for YouTube)
    --user-agent UA                  Specify a custom user agent
    --referer URL                    Specify a custom referer, use if the video
                                     access is restricted to one domain
    --add-header FIELD:VALUE         Specify a custom HTTP header and its value,
                                     separated by a colon ':'. You can use this
                                     option multiple times
    --bidi-workaround                Work around terminals that lack
                                     bidirectional text support. Requires bidiv
                                     or fribidi executable in PATH
    --sleep-interval SECONDS         Number of seconds to sleep before each
                                     download when used alone or a lower bound
                                     of a range for randomized sleep before each
                                     download (minimum possible number of
                                     seconds to sleep) when used along with
                                     --max-sleep-interval.
    --max-sleep-interval SECONDS     Upper bound of a range for randomized sleep
                                     before each download (maximum possible
                                     number of seconds to sleep). Must only be
                                     used along with --min-sleep-interval.
    

## Video Format Options:
    
    
    -f, --format FORMAT              Video format code, see the "FORMAT
                                     SELECTION" for all the info
    --all-formats                    Download all available video formats
    --prefer-free-formats            Prefer free video formats unless a specific
                                     one is requested
    -F, --list-formats               List all available formats of requested
                                     videos
    --youtube-skip-dash-manifest     Do not download the DASH manifests and
                                     related data on YouTube videos
    --merge-output-format FORMAT     If a merge is required (e.g.
                                     bestvideo+bestaudio), output to given
                                     container format. One of mkv, mp @abstr_number , ogg,
                                     webm, flv. Ignored if no merge is required
    

## Subtitle Options:
    
    
    --write-sub                      Write subtitle file
    --write-auto-sub                 Write automatically generated subtitle file
                                     (YouTube only)
    --all-subs                       Download all the available subtitles of the
                                     video
    --list-subs                      List all available subtitles for the video
    --sub-format FORMAT              Subtitle format, accepts formats
                                     preference, for example: "srt" or
                                     "ass/srt/best"
    --sub-lang LANGS                 Languages of the subtitles to download
                                     (optional) separated by commas, use --list-
                                     subs for available language tags
    

## Authentication Options:
    
    
    -u, --username USERNAME          Login with this account ID
    -p, --password PASSWORD          Account password. If this option is left
                                     out, youtube-dl will ask interactively.
    - @abstr_number , --twofactor TWOFACTOR        Two-factor authentication code
    -n, --netrc                      Use .netrc authentication data
    --video-password PASSWORD        Video password (vimeo, smotri, youku)
    

## Adobe Pass Options:
    
    
    --ap-mso MSO                     Adobe Pass multiple-system operator (TV
                                     provider) identifier, use --ap-list-mso for
                                     a list of available MSOs
    --ap-username USERNAME           Multiple-system operator account login
    --ap-password PASSWORD           Multiple-system operator account password.
                                     If this option is left out, youtube-dl will
                                     ask interactively.
    --ap-list-mso                    List all supported multiple-system
                                     operators
    

## Post-processing Options:
    
    
    -x, --extract-audio              Convert video files to audio-only files
                                     (requires ffmpeg or avconv and ffprobe or
                                     avprobe)
    --audio-format FORMAT            Specify audio format: "best", "aac",
                                     "flac", "mp @abstr_number ", "m @abstr_number a", "opus", "vorbis", or
                                     "wav"; "best" by default; No effect without
                                     -x
    --audio-quality QUALITY          Specify ffmpeg/avconv audio quality, insert
                                     a value between  @abstr_number  (better) and  @abstr_number  (worse)
                                     for VBR or a specific bitrate like  @abstr_number K
                                     (default  @abstr_number )
    --recode-video FORMAT            Encode the video to another format if
                                     necessary (currently supported:
                                     mp @abstr_number |flv|ogg|webm|mkv|avi)
    --postprocessor-args ARGS        Give these arguments to the postprocessor
    -k, --keep-video                 Keep the video file on disk after the post-
                                     processing; the video is erased by default
    --no-post-overwrites             Do not overwrite post-processed files; the
                                     post-processed files are overwritten by
                                     default
    --embed-subs                     Embed subtitles in the video (only for mp @abstr_number ,
                                     webm and mkv videos)
    --embed-thumbnail                Embed thumbnail in the audio as cover art
    --add-metadata                   Write metadata to the video file
    --metadata-from-title FORMAT     Parse additional metadata like song title /
                                     artist from the video title. The format
                                     syntax is the same as --output. Regular
                                     expression with named capture groups may
                                     also be used. The parsed parameters replace
                                     existing values. Example: --metadata-from-
                                     title "%(artist)s - %(title)s" matches a
                                     title like "Coldplay - Paradise". Example
                                     (regex): --metadata-from-title
                                     "(?P<artist>.+?) - (?P<title>.+)"
    --xattrs                         Write metadata to the video file's xattrs
                                     (using dublin core and xdg standards)
    --fixup POLICY                   Automatically correct known faults of the
                                     file. One of never (do nothing), warn (only
                                     emit a warning), detect_or_warn (the
                                     default; fix file if we can, warn
                                     otherwise)
    --prefer-avconv                  Prefer avconv over ffmpeg for running the
                                     postprocessors
    --prefer-ffmpeg                  Prefer ffmpeg over avconv for running the
                                     postprocessors (default)
    --ffmpeg-location PATH           Location of the ffmpeg/avconv binary;
                                     either the path to the binary or its
                                     containing directory.
    --exec CMD                       Execute a command on the file after
                                     downloading, similar to find's -exec
                                     syntax. Example: --exec 'adb push {}
                                     /sdcard/Music/ && rm {}'
    --convert-subs FORMAT            Convert the subtitles to other format
                                     (currently supported: srt|ass|vtt|lrc)
    

# CONFIGURATION

You can configure youtube-dl by placing any supported command line option to a configuration file. On Linux and macOS, the system wide configuration file is located at `/etc/youtube-dl.conf` and the user wide configuration file at `~/.config/youtube-dl/config`. On Windows, the user wide configuration file locations are `%APPDATA%\youtube-dl\config.txt` or `C:\Users\<user name>\youtube-dl.conf`. Note that by default configuration file may not exist so you may need to create it yourself.

For example, with the following configuration file youtube-dl will always extract the audio, not copy the mtime, use a proxy and save all videos under `Movies` directory in your home directory: @abstr_code_section 

Note that options in configuration file are just the same options aka switches used in regular command line calls thus there **must be no whitespace** after `-` or `--`, e.g. `-o` or `--proxy` but not `- o` or `-- proxy`.

You can use `--ignore-config` if you want to disable the configuration file for a particular youtube-dl run.

You can also use `--config-location` if you want to use custom configuration file for a particular youtube-dl run.

### Authentication with `.netrc` file

You may also want to configure automatic credentials storage for extractors that support authentication (by providing login and password with `--username` and `--password`) in order not to pass credentials as command line arguments on every youtube-dl execution and prevent tracking plain text passwords in the shell command history. You can achieve this using a @abstr_hyperlink on a per extractor basis. For that you will need to create a `.netrc` file in your `$HOME` and restrict permissions to read/write by only you: @abstr_code_section After that you can add credentials for an extractor in the following format, where _extractor_ is the name of the extractor in lowercase: @abstr_code_section For example: @abstr_code_section To activate authentication with the `.netrc` file you should pass `--netrc` to youtube-dl or place it in the configuration file.

On Windows you may also need to setup the `%HOME%` environment variable manually. For example: @abstr_code_section 

# OUTPUT TEMPLATE

The `-o` option allows users to indicate a template for the output file names.

**tl;dr:** navigate me to examples.

The basic usage is not to set any template arguments when downloading a single file, like in `youtube-dl -o funny_video.flv "https://some/video"`. However, it may contain special sequences that will be replaced when downloading each video. The special sequences may be formatted according to @abstr_hyperlink . For example, `%(NAME)s` or `%(NAME) @abstr_number d`. To clarify, that is a percent symbol followed by a name in parentheses, followed by formatting operations. Allowed names along with sequence type are:

  * `id` (string): Video identifier
  * `title` (string): Video title
  * `url` (string): Video URL
  * `ext` (string): Video filename extension
  * `alt_title` (string): A secondary title of the video
  * `display_id` (string): An alternative identifier for the video
  * `uploader` (string): Full name of the video uploader
  * `license` (string): License name the video is licensed under
  * `creator` (string): The creator of the video
  * `release_date` (string): The date (YYYYMMDD) when the video was released
  * `timestamp` (numeric): UNIX timestamp of the moment the video became available
  * `upload_date` (string): Video upload date (YYYYMMDD)
  * `uploader_id` (string): Nickname or id of the video uploader
  * `channel` (string): Full name of the channel the video is uploaded on
  * `channel_id` (string): Id of the channel
  * `location` (string): Physical location where the video was filmed
  * `duration` (numeric): Length of the video in seconds
  * `view_count` (numeric): How many users have watched the video on the platform
  * `like_count` (numeric): Number of positive ratings of the video
  * `dislike_count` (numeric): Number of negative ratings of the video
  * `repost_count` (numeric): Number of reposts of the video
  * `average_rating` (numeric): Average rating give by users, the scale used depends on the webpage
  * `comment_count` (numeric): Number of comments on the video
  * `age_limit` (numeric): Age restriction for the video (years)
  * `is_live` (boolean): Whether this video is a live stream or a fixed-length video
  * `start_time` (numeric): Time in seconds where the reproduction should start, as specified in the URL
  * `end_time` (numeric): Time in seconds where the reproduction should end, as specified in the URL
  * `format` (string): A human-readable description of the format 
  * `format_id` (string): Format code specified by `--format`
  * `format_note` (string): Additional info about the format
  * `width` (numeric): Width of the video
  * `height` (numeric): Height of the video
  * `resolution` (string): Textual description of width and height
  * `tbr` (numeric): Average bitrate of audio and video in KBit/s
  * `abr` (numeric): Average audio bitrate in KBit/s
  * `acodec` (string): Name of the audio codec in use
  * `asr` (numeric): Audio sampling rate in Hertz
  * `vbr` (numeric): Average video bitrate in KBit/s
  * `fps` (numeric): Frame rate
  * `vcodec` (string): Name of the video codec in use
  * `container` (string): Name of the container format
  * `filesize` (numeric): The number of bytes, if known in advance
  * `filesize_approx` (numeric): An estimate for the number of bytes
  * `protocol` (string): The protocol that will be used for the actual download
  * `extractor` (string): Name of the extractor
  * `extractor_key` (string): Key name of the extractor
  * `epoch` (numeric): Unix epoch when creating the file
  * `autonumber` (numeric): Five-digit number that will be increased with each download, starting at zero
  * `playlist` (string): Name or id of the playlist that contains the video
  * `playlist_index` (numeric): Index of the video in the playlist padded with leading zeros according to the total length of the playlist
  * `playlist_id` (string): Playlist identifier
  * `playlist_title` (string): Playlist title
  * `playlist_uploader` (string): Full name of the playlist uploader
  * `playlist_uploader_id` (string): Nickname or id of the playlist uploader



Available for the video that belongs to some logical chapter or section:

  * `chapter` (string): Name or title of the chapter the video belongs to
  * `chapter_number` (numeric): Number of the chapter the video belongs to
  * `chapter_id` (string): Id of the chapter the video belongs to



Available for the video that is an episode of some series or programme:

  * `series` (string): Title of the series or programme the video episode belongs to
  * `season` (string): Title of the season the video episode belongs to
  * `season_number` (numeric): Number of the season the video episode belongs to
  * `season_id` (string): Id of the season the video episode belongs to
  * `episode` (string): Title of the video episode
  * `episode_number` (numeric): Number of the video episode within a season
  * `episode_id` (string): Id of the video episode



Available for the media that is a track or a part of a music album:

  * `track` (string): Title of the track
  * `track_number` (numeric): Number of the track within an album or a disc
  * `track_id` (string): Id of the track
  * `artist` (string): Artist(s) of the track
  * `genre` (string): Genre(s) of the track
  * `album` (string): Title of the album the track belongs to
  * `album_type` (string): Type of the album
  * `album_artist` (string): List of all artists appeared on the album
  * `disc_number` (numeric): Number of the disc or other physical medium the track belongs to
  * `release_year` (numeric): Year (YYYY) when the album was released



Each aforementioned sequence when referenced in an output template will be replaced by the actual value corresponding to the sequence name. Note that some of the sequences are not guaranteed to be present since they depend on the metadata obtained by a particular extractor. Such sequences will be replaced with `NA`.

For example for `-o %(title)s-%(id)s.%(ext)s` and an mp @abstr_number video with title `youtube-dl test video` and id `BaW_jenozKcj`, this will result in a `youtube-dl test video-BaW_jenozKcj.mp @abstr_number` file created in the current directory.

For numeric sequences you can use numeric related formatting, for example, `%(view_count) @abstr_number d` will result in a string with view count padded with zeros up to @abstr_number characters, like in `@abstr_number`.

Output templates can also contain arbitrary hierarchical path, e.g. `-o '%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s'` which will result in downloading each video in a directory corresponding to this path template. Any missing directory will be automatically created for you.

To use percent literals in an output template use `%%`. To output to stdout use `-o -`.

The current default template is `%(title)s-%(id)s.%(ext)s`.

In some cases, you don't want special characters such as 中, spaces, or &, such as when transferring the downloaded filename to a Windows system or the filename through an @abstr_number bit-unsafe channel. In these cases, add the `--restrict-filenames` flag to get a shorter title:

#### Output template and Windows batch files

If you are using an output template inside a Windows batch file then you must escape plain percent characters (`%`) by doubling, so that `-o "%(title)s-%(id)s.%(ext)s"` should become `-o "%%(title)s-%%(id)s.%%(ext)s"`. However you should not touch `%`'s that are not plain characters, e.g. environment variables for expansion should stay intact: `-o "C:\%HOMEPATH%\Desktop\%%(title)s.%%(ext)s"`.

#### Output template examples

Note that on Windows you may need to use double quotes instead of single.

@abstr_code_section 

# FORMAT SELECTION

By default youtube-dl tries to download the best available quality, i.e. if you want the best quality you **don't need** to pass any special options, youtube-dl will guess it for you by **default**.

But sometimes you may want to download in a different format, for example when you are on a slow or intermittent connection. The key mechanism for achieving this is so-called _format selection_ based on which you can explicitly specify desired format, select formats based on some criterion or criteria, setup precedence and much more.

The general syntax for format selection is `--format FORMAT` or shorter `-f FORMAT` where `FORMAT` is a _selector expression_ , i.e. an expression that describes format or formats you would like to download.

**tl;dr:** navigate me to examples.

The simplest case is requesting a specific format, for example with `-f @abstr_number` you can download the format with format code equal to @abstr_number . You can get the list of available format codes for particular video using `--list-formats` or `-F`. Note that these format codes are extractor specific. 

You can also use a file extension (currently `@abstr_number gp`, `aac`, `flv`, `m @abstr_number a`, `mp @abstr_number`, `mp @abstr_number`, `ogg`, `wav`, `webm` are supported) to download the best quality format of a particular file extension served as a single file, e.g. `-f webm` will download the best quality format with the `webm` extension served as a single file.

You can also use special names to select particular edge case formats:

  * `best`: Select the best quality format represented by a single file with video and audio.
  * `worst`: Select the worst quality format represented by a single file with video and audio.
  * `bestvideo`: Select the best quality video-only format (e.g. DASH video). May not be available.
  * `worstvideo`: Select the worst quality video-only format. May not be available.
  * `bestaudio`: Select the best quality audio only-format. May not be available.
  * `worstaudio`: Select the worst quality audio only-format. May not be available.



For example, to download the worst quality video-only format you can use `-f worstvideo`.

If you want to download multiple videos and they don't have the same formats available, you can specify the order of preference using slashes. Note that slash is left-associative, i.e. formats on the left hand side are preferred, for example `-f @abstr_number / @abstr_number / @abstr_number` will download format @abstr_number if it's available, otherwise it will download format @abstr_number if it's available, otherwise it will download format @abstr_number if it's available, otherwise it will complain that no suitable formats are available for download.

If you want to download several formats of the same video use a comma as a separator, e.g. `-f @abstr_number , @abstr_number , @abstr_number` will download all these three formats, of course if they are available. Or a more sophisticated example combined with the precedence feature: `-f @abstr_number / @abstr_number /mp @abstr_number /bestvideo, @abstr_number /m @abstr_number a/bestaudio`.

You can also filter the video formats by putting a condition in brackets, as in `-f "best[height= @abstr_number ]"` (or `-f "[filesize> @abstr_number M]"`).

The following numeric meta fields can be used with comparisons `<`, `<=`, `>`, `>=`, `=` (equals), `!=` (not equals):

  * `filesize`: The number of bytes, if known in advance
  * `width`: Width of the video, if known
  * `height`: Height of the video, if known
  * `tbr`: Average bitrate of audio and video in KBit/s
  * `abr`: Average audio bitrate in KBit/s
  * `vbr`: Average video bitrate in KBit/s
  * `asr`: Audio sampling rate in Hertz
  * `fps`: Frame rate



Also filtering work for comparisons `=` (equals), `^=` (starts with), `$=` (ends with), `*=` (contains) and following string meta fields:

  * `ext`: File extension
  * `acodec`: Name of the audio codec in use
  * `vcodec`: Name of the video codec in use
  * `container`: Name of the container format
  * `protocol`: The protocol that will be used for the actual download, lower-case (`http`, `https`, `rtsp`, `rtmp`, `rtmpe`, `mms`, `f @abstr_number m`, `ism`, `http_dash_segments`, `m @abstr_number u @abstr_number`, or `m @abstr_number u @abstr_number _native`)
  * `format_id`: A short description of the format



Any string comparison may be prefixed with negation `!` in order to produce an opposite comparison, e.g. `!*=` (does not contain).

Note that none of the aforementioned meta fields are guaranteed to be present since this solely depends on the metadata obtained by particular extractor, i.e. the metadata offered by the video hoster.

Formats for which the value is not known are excluded unless you put a question mark (`?`) after the operator. You can combine format filters, so `-f "[height <=? @abstr_number ][tbr> @abstr_number ]"` selects up to @abstr_number p videos (or videos where the height is not known) with a bitrate of at least @abstr_number KBit/s.

You can merge the video and audio of two formats into a single file using `-f <video-format>+<audio-format>` (requires ffmpeg or avconv installed), for example `-f bestvideo+bestaudio` will download the best video-only format, the best audio-only format and mux them together with ffmpeg/avconv.

Format selectors can also be grouped using parentheses, for example if you want to download the best mp @abstr_number and webm formats with a height lower than @abstr_number you can use `-f '(mp @abstr_number ,webm)[height< @abstr_number ]'`.

Since the end of April @abstr_number and version @abstr_number . @abstr_number . @abstr_number , youtube-dl uses `-f bestvideo+bestaudio/best` as the default format selection (see @abstr_hyperlink , @abstr_hyperlink ). If ffmpeg or avconv are installed this results in downloading `bestvideo` and `bestaudio` separately and muxing them together into a single file giving the best overall quality available. Otherwise it falls back to `best` and results in downloading the best available quality served as a single file. `best` is also needed for videos that don't come from YouTube because they don't provide the audio and video in two different files. If you want to only download some DASH formats (for example if you are not interested in getting videos with a resolution higher than @abstr_number p), you can add `-f bestvideo[height<=? @abstr_number ]+bestaudio/best` to your configuration file. Note that if you use youtube-dl to stream to `stdout` (and most likely to pipe it to your media player then), i.e. you explicitly specify output template as `-o -`, youtube-dl still uses `-f best` format selection in order to start content delivery immediately to your player and not to wait until `bestvideo` and `bestaudio` are downloaded and muxed.

If you want to preserve the old format selection behavior (prior to youtube-dl @abstr_number . @abstr_number . @abstr_number ), i.e. you want to download the best available quality media served as a single file, you should explicitly specify your choice with `-f best`. You may want to add it to the configuration file in order not to type it every time you run youtube-dl.

#### Format selection examples

Note that on Windows you may need to use double quotes instead of single.

@abstr_code_section Note that in the last example, an output template is recommended as bestvideo and bestaudio may have the same file name.

# VIDEO SELECTION

Videos can be filtered by their upload date using the options `--date`, `--datebefore` or `--dateafter`. They accept dates in two formats:

  * Absolute dates: Dates in the format `YYYYMMDD`.
  * Relative dates: Dates in the format `(now|today)[+-][ @abstr_number - @abstr_number ](day|week|month|year)(s)?`



Examples:

@abstr_code_section 

# FAQ

### How do I update youtube-dl?

If you've followed @abstr_hyperlink , you can simply run `youtube-dl -U` (or, on Linux, `sudo youtube-dl -U`).

If you have used pip, a simple `sudo pip install -U youtube-dl` is sufficient to update.

If you have installed youtube-dl using a package manager like _apt-get_ or _yum_ , use the standard system update mechanism to update. Note that distribution packages are often outdated. As a rule of thumb, youtube-dl releases at least once a month, and often weekly or even daily. Simply go to https://yt-dl.org to find out the current version. Unfortunately, there is nothing we youtube-dl developers can do if your distribution serves a really outdated version. You can (and should) complain to your distribution in their bugtracker or support forum.

As a last resort, you can also uninstall the version installed by your package manager and follow our manual installation instructions. For that, remove the distribution's package, with a line like
    
    
    sudo apt-get remove -y youtube-dl
    

Afterwards, simply follow @abstr_hyperlink :

@abstr_code_section 

Again, from then on you'll be able to update with `sudo youtube-dl -U`.

### youtube-dl is extremely slow to start on Windows

Add a file exclusion for `youtube-dl.exe` in Windows Defender settings.

### I'm getting an error `Unable to extract OpenGraph title` on YouTube playlists

YouTube changed their playlist format in March @abstr_number and later on, so you'll need at least youtube-dl @abstr_number . @abstr_number . @abstr_number to download all YouTube videos.

If you have installed youtube-dl with a package manager, pip, setup.py or a tarball, please use that to update. Note that Ubuntu packages do not seem to get updated anymore. Since we are not affiliated with Ubuntu, there is little we can do. Feel free to @abstr_hyperlink to the @abstr_hyperlink - all they have to do is update the package to a somewhat recent version. See above for a way to update.

### I'm getting an error when trying to use output template: `error: using output template conflicts with using title, video ID or auto number`

Make sure you are not using `-o` with any of these options `-t`, `--title`, `--id`, `-A` or `--auto-number` set in command line or in a configuration file. Remove the latter if any.

### Do I always have to pass `-citw`?

By default, youtube-dl intends to have the best options (incidentally, if you have a convincing case that these should be different, @abstr_hyperlink ). Therefore, it is unnecessary and sometimes harmful to copy long option strings from webpages. In particular, the only option out of `-citw` that is regularly useful is `-i`.

### Can you please put the `-b` option back?

Most people asking this question are not aware that youtube-dl now defaults to downloading the highest available quality as reported by YouTube, which will be @abstr_number p or @abstr_number p in some cases, so you no longer need the `-b` option. For some specific videos, maybe YouTube does not report them to be available in a specific high quality format you're interested in. In that case, simply request it with the `-f` option and youtube-dl will try to download it.

### I get HTTP error @abstr_number when trying to download a video. What's this?

Apparently YouTube requires you to pass a CAPTCHA test if you download too much. We're @abstr_hyperlink , but at the moment, your best course of action is pointing a web browser to the youtube URL, solving the CAPTCHA, and restart youtube-dl.

### Do I need any other programs?

youtube-dl works fine on its own on most sites. However, if you want to convert video/audio, you'll need @abstr_hyperlink or @abstr_hyperlink . On some sites - most notably YouTube - videos can be retrieved in a higher quality format without sound. youtube-dl will detect whether avconv/ffmpeg is present and automatically pick the best option.

Videos or video formats streamed via RTMP protocol can only be downloaded when @abstr_hyperlink is installed. Downloading MMS and RTSP videos requires either @abstr_hyperlink or @abstr_hyperlink to be installed.

### I have downloaded a video but how can I play it?

Once the video is fully downloaded, use any video player, such as @abstr_hyperlink , @abstr_hyperlink or @abstr_hyperlink .

### I extracted a video URL with `-g`, but it does not play on another machine / in my web browser.

It depends a lot on the service. In many cases, requests for the video (to download/play it) must come from the same IP address and with the same cookies and/or HTTP headers. Use the `--cookies` option to write the required cookies into a file, and advise your downloader to read cookies from that file. Some sites also require a common user agent to be used, use `--dump-user-agent` to see the one in use by youtube-dl. You can also get necessary cookies and HTTP headers from JSON output obtained with `--dump-json`.

It may be beneficial to use IPv @abstr_number ; in some cases, the restrictions are only applied to IPv @abstr_number . Some services (sometimes only for a subset of videos) do not restrict the video URL by IP address, cookie, or user-agent, but these are the exception rather than the rule.

Please bear in mind that some URL protocols are **not** supported by browsers out of the box, including RTMP. If you are using `-g`, your own downloader must support these as well.

If you want to play the video on a machine that is not running youtube-dl, you can relay the video content from the machine that runs youtube-dl. You can use `-o -` to let youtube-dl stream a video to stdout, or simply allow the player to download the files written by youtube-dl in turn.

### ERROR: no fmt_url_map or conn information found in video info

YouTube has switched to a new video info format in July @abstr_number which is not supported by old versions of youtube-dl. See above for how to update youtube-dl.

### ERROR: unable to download video

YouTube requires an additional signature since September @abstr_number which is not supported by old versions of youtube-dl. See above for how to update youtube-dl.

### Video URL contains an ampersand and I'm getting some strange output `[ @abstr_number ] @abstr_number` or `'v' is not recognized as an internal or external command`

That's actually the output from your shell. Since ampersand is one of the special shell characters it's interpreted by the shell preventing you from passing the whole URL to youtube-dl. To disable your shell from interpreting the ampersands (or any other special characters) you have to either put the whole URL in quotes or escape them with a backslash (which approach will work depends on your shell).

For example if your URL is https://www.youtube.com/watch?t= @abstr_number &v=BaW_jenozKc you should end up with following command:

`youtube-dl 'https://www.youtube.com/watch?t= @abstr_number &v=BaW_jenozKc' @abstr_code_section youtube-dl https://www.youtube.com/watch?t= @abstr_number \&v=BaW_jenozKc`

For Windows you have to use the double quotes:

```youtube-dl "https://www.youtube.com/watch?t= @abstr_number &v=BaW_jenozKc" @abstr_code_section python # coding: utf- @abstr_number from __future__ import unicode_literals
    
    
    from .common import InfoExtractor
    
    
    class YourExtractorIE(InfoExtractor):
        _VALID_URL = r'https?://(?:www\.)?yourextractor\.com/watch/(?P<id>[ @abstr_number - @abstr_number ]+)'
        _TEST = {
            'url': 'https://yourextractor.com/watch/ @abstr_number ',
            'md @abstr_number ': 'TODO: md @abstr_number  sum of the first  @abstr_number  bytes of the video file (use --test)',
            'info_dict': {
                'id': ' @abstr_number ',
                'ext': 'mp @abstr_number ',
                'title': 'Video title goes here',
                'thumbnail': r're:^https?://.*\.jpg$',
                # TODO more properties, either as:
                # * A value
                # * MD @abstr_number  checksum; start the string with md @abstr_number :
                # * A regular expression; start the string with re:
                # * Any Python type (for example int or float)
            }
        }
    
        def _real_extract(self, url):
            video_id = self._match_id(url)
            webpage = self._download_webpage(url, video_id)
    
            # TODO more code goes here, for example ...
            title = self._html_search_regex(r'<h @abstr_number >(.+?)</h @abstr_number >', webpage, 'title')
    
            return {
                'id': video_id,
                'title': title,
                'description': self._og_search_description(webpage),
                'uploader': self._search_regex(r'<div[^>]+id="uploader"[^>]*>([^<]+)<', webpage, 'uploader', fatal=False),
                # TODO more properties (see youtube_dl/extractor/common.py)
            }
     @abstr_code_section python
    

meta = self._download_json(url, video_id) @abstr_code_section python { ... "summary": "some fancy summary text", ... } @abstr_code_section python description = meta.get('summary') # correct @abstr_code_section python description = meta['summary'] # incorrect @abstr_code_section python description = self._search_regex( r'>([^<]+)<', webpage, 'description', fatal=False) @abstr_code_section python description = self._search_regex( r'>([^<]+)<', webpage, 'description', default=None) @abstr_code_section python title = meta['title'] @abstr_code_section python title = meta.get('title') or self._og_search_title(webpage) @abstr_code_section python r'(?:id|ID)=(?P\d+)' @abstr_code_section python r'(id|ID)=(?P\d+)' @abstr_code_section html some fancy title @abstr_code_section python title = self._search_regex( r'>([^<]+)', webpage, 'title') @abstr_code_section python title = self._search_regex( r'>(?P[^<]+)', webpage, 'title', group='title') @abstr_code_section python title = self._search_regex( r'(.*?)', webpage, 'title', group='title') @abstr_code_section python 'https://www.youtube.com/watch?v=FqZTN @abstr_number JQw&list=PLMYEtVRpaqY @abstr_number V @abstr_number W @abstr_number Cwmzp @abstr_number N @abstr_number vZqfUKD @abstr_number ' @abstr_code_section python 'https://www.youtube.com/watch?v=FqZTN @abstr_number JQw&list=' 'PLMYEtVRpaqY @abstr_number V @abstr_number W @abstr_number Cwmzp @abstr_number N @abstr_number vZqfUKD @abstr_number ' @abstr_code_section python description = try_get(response, lambda x: x['result']['video'][ @abstr_number ]['summary'], compat_str) @abstr_code_section python video = try_get(response, lambda x: x['result']['video'][ @abstr_number ], dict) or {} description = video.get('summary') duration = float_or_none(video.get('durationMs'), scale= @abstr_number ) view_count = int_or_none(video.get('views')) @abstr_code_section python from __future__ import unicode_literals import youtube_dl

ydl_opts = {} with youtube_dl.YoutubeDL(ydl_opts) as ydl: ydl.download(['https://www.youtube.com/watch?v=BaW_jenozKc']) @abstr_code_section python from __future__ import unicode_literals import youtube_dl

class MyLogger(object): def debug(self, msg): pass
    
    
    def warning(self, msg):
        pass
    
    def error(self, msg):
        print(msg)
    

def my_hook(d): if d['status'] == 'finished': print('Done downloading, now converting ...')

ydl_opts = { 'format': 'bestaudio/best', 'postprocessors': [{ 'key': 'FFmpegExtractAudio', 'preferredcodec': 'mp @abstr_number ', 'preferredquality': ' @abstr_number ', }], 'logger': MyLogger(), 'progress_hooks': [my_hook], } with youtube_dl.YoutubeDL(ydl_opts) as ydl: ydl.download(['https://www.youtube.com/watch?v=BaW_jenozKc']) @abstr_code_section $ youtube-dl -v  [debug] System config: [] [debug] User config: [] [debug] Command-line args: [u'-v', u'https://www.youtube.com/watch?v=BaW_jenozKcj'] [debug] Encodings: locale cp @abstr_number , fs mbcs, out cp @abstr_number , pref cp @abstr_number [debug] youtube-dl version @abstr_number . @abstr_number . @abstr_number [debug] Git HEAD: @abstr_number e [debug] Python version @abstr_number . @abstr_number . @abstr_number - Windows- @abstr_number Server- @abstr_number . @abstr_number . @abstr_number -SP @abstr_number [debug] exe versions: ffmpeg N- @abstr_number -g @abstr_number d @abstr_number f, ffprobe N- @abstr_number -g @abstr_number d @abstr_number f, rtmpdump @abstr_number . @abstr_number [debug] Proxy map: {} ... ``` **Do not post screenshots of verbose logs; only plain text is acceptable.**

The output (including the first lines) contains important debugging information. Issues without the full output are often not reproducible and therefore do not get solved in short order, if ever.

Please re-read your issue once again to avoid a couple of common mistakes (you can and should use this as a checklist):

### Is the description of the issue itself sufficient?

We often get issue reports that we cannot really decipher. While in most cases we eventually get the required information after asking back multiple times, this poses an unnecessary drain on our resources. Many contributors, including myself, are also not native speakers, so we may misread some parts.

So please elaborate on what feature you are requesting, or what bug you want to be fixed. Make sure that it's obvious

  * What the problem is
  * How it could be fixed
  * How your proposed solution would look like



If your report is shorter than two lines, it is almost certainly missing some of these, which makes it hard for us to respond to it. We're often too polite to close the issue outright, but the missing info makes misinterpretation likely. As a committer myself, I often get frustrated by these issues, since the only possible way for me to move forward on them is to ask for clarification over and over.

For bug reports, this means that your report should contain the _complete_ output of youtube-dl when called with the `-v` flag. The error message you get for (most) bugs even says so, but you would not believe how many of our bug reports do not contain this information.

If your server has multiple IPs or you suspect censorship, adding `--call-home` may be a good idea to get more diagnostics. If the error is `ERROR: Unable to extract ...` and you cannot reproduce it from multiple countries, add `--dump-pages` (warning: this will yield a rather large output, redirect it to the file `log.txt` by adding `>log.txt @abstr_number >& @abstr_number` to your command-line) or upload the `.dump` files you get when you add `--write-pages` @abstr_hyperlink .

**Site support requests must contain an example URL**. An example URL is a URL you might want to download, like `https://www.youtube.com/watch?v=BaW_jenozKc`. There should be an obvious video present. Except under very special circumstances, the main page of a video service (e.g. `https://www.youtube.com/`) is _not_ an example URL.

### Are you using the latest version?

Before reporting any issue, type `youtube-dl -U`. This should report that you're up-to-date. About @abstr_number % of the reports we receive are already fixed, but people are using outdated versions. This goes for feature requests as well.

### Is the issue already documented?

Make sure that someone has not already opened the issue you're trying to open. Search at the top of the window or browse the @abstr_hyperlink of this repository. If there is an issue, feel free to write something along the lines of "This affects me as well, with version @abstr_number . @abstr_number . @abstr_number . Here is some more information on the issue: ...". While some issues may be old, a new post into them often spurs rapid activity.

### Why are existing options not enough?

Before requesting a new feature, please have a quick peek at @abstr_hyperlink . Many feature requests are for features that actually exist already! Please, absolutely do show off your work in the issue report and detail how the existing similar options do _not_ solve your problem.

### Is there enough context in your bug report?

People want to solve problems, and often think they do us a favor by breaking down their larger problems (e.g. wanting to skip already downloaded files) to a specific request (e.g. requesting us to look whether the file exists before downloading the info page). However, what often happens is that they break down the problem into two steps: One simple, and one impossible (or extremely complicated one).

We are then presented with a very complicated request when the original problem could be solved far easier, e.g. by recording the downloaded video IDs in a separate file. To avoid this, you must include the greater context where it is non-obvious. In particular, every feature request that does not consist of adding support for a new site should contain a use case scenario that explains in what situation the missing feature would be useful.

### Does the issue involve one problem, and one problem only?

Some of our users seem to think there is a limit of issues they can or should open. There is no limit of issues they can or should open. While it may seem appealing to be able to dump all your issues into one ticket, that means that someone who solves one of your issues cannot mark the issue as closed. Typically, reporting a bunch of issues leads to the ticket lingering since nobody wants to attack that behemoth, until someone mercifully splits the issue into multiple ones.

In particular, every site support request issue should only pertain to services at one site (generally under a common domain, but always using the same backend technology). Do not request support for vimeo user videos, White house podcasts, and Google Plus pages in the same issue. Also, make sure that you don't post bug reports alongside feature requests. As a rule of thumb, a feature request does not include outputs of youtube-dl that are not immediately related to the feature at hand. Do not post reports of a network error alongside the request for a new video service.

### Is anyone going to need the feature?

Only post features that you (or an incapacitated friend you can personally talk to) require. Do not post features because they seem like a good idea. If they are really useful, they will be requested by someone who requires them.

### Is your question about youtube-dl?

It may sound strange, but some bug reports we receive are completely unrelated to youtube-dl and relate to a different, or even the reporter's own, application. Please make sure that you are actually using youtube-dl. If you are using a UI for youtube-dl, report the bug to the maintainer of the actual application providing the UI. On the other hand, if your UI for youtube-dl fails in some way you believe is related to youtube-dl, by all means, go ahead and report the bug.

# COPYRIGHT

youtube-dl is released into the public domain by the copyright holders.

This README file was originally written by @abstr_hyperlink and is likewise released into the public domain.
