# You-Get

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

@abstr_hyperlink is a tiny command-line utility to download media contents (videos, audios, images) from the Web, in case there is no other handy way to do it.

Here's how you use `you-get` to download a video from @abstr_hyperlink :

@abstr_code_section 

And here's why you might want to use it:

  * You enjoyed something on the Internet, and just want to download them for your own pleasure.
  * You watch your favorite videos online from your computer, but you are prohibited from saving them. You feel that you have no control over your own computer. (And it's not how an open Web is supposed to work.)
  * You want to get rid of any closed-source technology or proprietary JavaScript code, and disallow things like Flash running on your computer.
  * You are an adherent of hacker culture and free software.



What `you-get` can do for you:

  * Download videos / audios from popular websites such as YouTube, Youku, Niconico, and a bunch more. (See the full list of supported sites)
  * Stream an online video in your media player. No web browser, no more ads.
  * Download images (of interest) by scraping a web page.
  * Download arbitrary non-HTML contents, i.e., binary files.



Interested? Install it now and get started by examples.

Are you a Python programmer? Then check out @abstr_hyperlink and fork it!

@abstr_image 

## Installation

### Prerequisites

The following dependencies are required and must be installed separately, unless you are using a pre-built package on Windows:

  * **@abstr_hyperlink**
  * **@abstr_hyperlink** (strongly recommended) or @abstr_hyperlink 
  * (Optional) @abstr_hyperlink 



### Option @abstr_number : Install via pip

The official release of `you-get` is distributed on @abstr_hyperlink , and can be installed easily from a PyPI mirror via the @abstr_hyperlink package manager. Note that you must use the Python @abstr_number version of `pip`:
    
    
    $ pip @abstr_number  install you-get
    

### Option @abstr_number : Install via @abstr_hyperlink 

Add the following line to your `.zshrc`:
    
    
    antigen bundle soimort/you-get
    

### Option @abstr_number : Use a pre-built package (Windows only)

Download the `exe` (standalone) or `@abstr_number z` (all dependencies included) from: @abstr_hyperlink .

### Option @abstr_number : Download from GitHub

You may either download the @abstr_hyperlink (identical with the latest release on PyPI) or the @abstr_hyperlink (more hotfixes, unstable features) branch of `you-get`. Unzip it, and put the directory containing the `you-get` script into your `PATH`.

Alternatively, run

@abstr_code_section 

to install `you-get` to a permanent path.

### Option @abstr_number : Git clone

This is the recommended way for all developers, even if you don't often code in Python.

@abstr_code_section 

Then put the cloned directory into your `PATH`, or run `make install` to install `you-get` to a permanent path.

## Upgrading

Based on which option you chose to install `you-get`, you may upgrade it via:

@abstr_code_section 

or download the latest release via:

@abstr_code_section 

## Getting Started

### Download a video

When you get a video of interest, you might want to use the `--info`/`-i` option to see all available quality and formats:

@abstr_code_section 

The format marked with `DEFAULT` is the one you will get by default. If that looks cool to you, download it:

@abstr_code_section 

(If a YouTube video has any closed captions, they will be downloaded together with the video file, in SubRip subtitle format.)

Or, if you prefer another format (mp @abstr_number ), just use whatever the option `you-get` shows to you:

@abstr_code_section 

**Note:**

  * At this point, format selection has not been generally implemented for most of our supported sites; in that case, the default format to download is the one with the highest quality.
  * `ffmpeg` is a required dependency, for downloading and joining videos streamed in multiple parts (e.g. on some sites like Youku), and for YouTube videos of @abstr_number p or high resolution.
  * If you don't want `you-get` to join video parts after downloading them, use the `--no-merge`/`-n` option.



### Download anything else

If you already have the URL of the exact resource you want, you can download it directly with:

@abstr_code_section 

Otherwise, `you-get` will scrape the web page and try to figure out if there's anything interesting to you:

@abstr_code_section 

**Note:**

  * This feature is an experimental one and far from perfect. It works best on scraping large-sized images from popular websites like Tumblr and Blogger, but there is really no universal pattern that can apply to any site on the Internet.



### Search on Google Videos and download

You can pass literally anything to `you-get`. If it isn't a valid URL, `you-get` will do a Google search and download the most relevant video for you. (It might not be exactly the thing you wish to see, but still very likely.)

@abstr_code_section 

### Pause and resume a download

You may use `Ctrl`+`C` to interrupt a download.

A temporary `.download` file is kept in the output directory. Next time you run `you-get` with the same arguments, the download progress will resume from the last session. In case the file is completely downloaded (the temporary `.download` extension is gone), `you-get` will just skip the download.

To enforce re-downloading, use the `--force`/`-f` option. ( **Warning:** doing so will overwrite any existing file or temporary file with the same name!)

### Set the path and name of downloaded file

Use the `--output-dir`/`-o` option to set the path, and `--output-filename`/`-O` to set the name of the downloaded file:

@abstr_code_section 

**Tips:**

  * These options are helpful if you encounter problems with the default video titles, which may contain special characters that do not play well with your current shell / operating system / filesystem.
  * These options are also helpful if you write a script to batch download files and put them into designated folders with designated names.



### Proxy settings

You may specify an HTTP proxy for `you-get` to use, via the `--http-proxy`/`-x` option:

@abstr_code_section 

However, the system proxy setting (i.e. the environment variable `http_proxy`) is applied by default. To disable any proxy, use the `--no-proxy` option.

**Tips:**

  * If you need to use proxies a lot (in case your network is blocking certain sites), you might want to use `you-get` with @abstr_hyperlink and set `alias you-get="proxychains -q you-get"` (in Bash).
  * For some websites (e.g. Youku), if you need access to some videos that are only available in mainland China, there is an option of using a specific proxy to extract video information from the site: `--extractor-proxy`/`-y`.



### Watch a video

Use the `--player`/`-p` option to feed the video into your media player of choice, e.g. `mplayer` or `vlc`, instead of downloading it:

@abstr_code_section 

Or, if you prefer to watch the video in a browser, just without ads or comment section:

@abstr_code_section 

**Tips:**

  * It is possible to use the `-p` option to start another download manager, e.g., `you-get -p uget-gtk 'https://www.youtube.com/watch?v=jNQXAC @abstr_number IVRw'`, though they may not play together very well.



### Load cookies

Not all videos are publicly available to anyone. If you need to log in your account to access something (e.g., a private video), it would be unavoidable to feed the browser cookies to `you-get` via the `--cookies`/`-c` option.

**Note:**

  * As of now, we are supporting two formats of browser cookies: Mozilla `cookies.sqlite` and Netscape `cookies.txt`.



### Reuse extracted data

Use `--url`/`-u` to get a list of downloadable resource URLs extracted from the page. Use `--json` to get an abstract of extracted data in the JSON format.

**Warning:**

  * For the time being, this feature has **NOT** been stabilized and the JSON schema may have breaking changes in the future.



## Supported Sites

| Site | URL | Videos? | Images? | Audios? | | :--: | :-- | :-----: | :-----: | :-----: | | **YouTube** | @abstr_hyperlink |✓| | | | **Twitter** | @abstr_hyperlink |✓|✓| | | VK | @abstr_hyperlink |✓| | | | Vine | @abstr_hyperlink |✓| | | | Vimeo | @abstr_hyperlink |✓| | | | Vidto | @abstr_hyperlink |✓| | | | Videomega | @abstr_hyperlink |✓| | | | Veoh | @abstr_hyperlink |✓| | | | **Tumblr** | @abstr_hyperlink |✓|✓|✓| | TED | @abstr_hyperlink |✓| | | | SoundCloud | @abstr_hyperlink | | |✓| | Pinterest | @abstr_hyperlink | |✓| | | MusicPlayOn | @abstr_hyperlink |✓| | | | MTV @abstr_number |  |✓| | | | Mixcloud | @abstr_hyperlink | | |✓| | Metacafe | @abstr_hyperlink |✓| | | | Magisto | @abstr_hyperlink |✓| | | | Khan Academy | @abstr_hyperlink |✓| | | | JPopsuki TV | @abstr_hyperlink |✓| | | | Internet Archive | @abstr_hyperlink |✓| | | | **Instagram** | @abstr_hyperlink |✓|✓| | | Imgur | @abstr_hyperlink | |✓| | | Heavy Music Archive | @abstr_hyperlink | | |✓| | **Google+** | @abstr_hyperlink |✓|✓| | | Freesound | @abstr_hyperlink | | |✓| | Flickr | @abstr_hyperlink |✓|✓| | | FC @abstr_number Video |  |✓| | | | Facebook | @abstr_hyperlink |✓| | | | eHow | @abstr_hyperlink |✓| | | | Dailymotion | @abstr_hyperlink |✓| | | | CBS | @abstr_hyperlink |✓| | | | Bandcamp | @abstr_hyperlink | | |✓| | AliveThai | @abstr_hyperlink |✓| | | | interest.me | @abstr_hyperlink |✓| | | | _* @abstr_number  
ナナゴーゴー_* |  |✓|✓| | | **niconico  
ニコニコ動画** | @abstr_hyperlink |✓| | | | _* @abstr_number  
网易视频  
网易云音乐_* |   
|✓| |✓| | @abstr_number 网 |  |✓| | | | **AcFun** | @abstr_hyperlink |✓| | | | **Baidu  
百度贴吧** | @abstr_hyperlink |✓|✓| | | 爆米花网 | @abstr_hyperlink |✓| | | | **bilibili  
哔哩哔哩** | @abstr_hyperlink |✓| | | | Dilidili | @abstr_hyperlink |✓| | | | 豆瓣 | @abstr_hyperlink | | |✓| | 斗鱼 | @abstr_hyperlink |✓| | | | 凤凰视频 | @abstr_hyperlink |✓| | | | 风行网 | @abstr_hyperlink |✓| | | | iQIYI  
爱奇艺 | @abstr_hyperlink |✓| | | | 激动网 | @abstr_hyperlink |✓| | | | 酷 @abstr_number 网 |  |✓| | | | 酷狗音乐 | @abstr_hyperlink | | |✓| | 酷我音乐 | @abstr_hyperlink | | |✓| | 乐视网 | @abstr_hyperlink |✓| | | | 荔枝FM | @abstr_hyperlink | | |✓| | 秒拍 | @abstr_hyperlink |✓| | | | MioMio弹幕网 | @abstr_hyperlink |✓| | | | 痞客邦 | @abstr_hyperlink |✓| | | | PPTV聚力 | @abstr_hyperlink |✓| | | | 齐鲁网 | @abstr_hyperlink |✓| | | | QQ  
腾讯视频 | @abstr_hyperlink |✓| | | | 阡陌视频 | @abstr_hyperlink |✓| | | | Sina  
新浪视频  
微博秒拍视频 | @abstr_hyperlink   
@abstr_hyperlink |✓| | | | Sohu  
搜狐视频 | @abstr_hyperlink |✓| | | | 天天动听 | @abstr_hyperlink | | |✓| | **Tudou  
土豆** | @abstr_hyperlink |✓| | | | 虾米 | @abstr_hyperlink | | |✓| | 阳光卫视 | @abstr_hyperlink |✓| | | | **音悦Tai** | @abstr_hyperlink |✓| | | | **Youku  
优酷** | @abstr_hyperlink |✓| | | | 战旗TV | @abstr_hyperlink |✓| | | | 央视网 | @abstr_hyperlink |✓| | |

For all other sites not on the list, the universal extractor will take care of finding and downloading interesting resources from the page.

### Known bugs

If something is broken and `you-get` can't get you things you want, don't panic. (Yes, this happens all the time!)

Check if it's already a known problem on @abstr_hyperlink , and search on the @abstr_hyperlink . If it has not been reported yet, open a new issue, with detailed command-line output attached.

## Getting Involved

You can reach us on the Gitter channel @abstr_hyperlink (here's how you @abstr_hyperlink for Gitter). If you have a quick question regarding `you-get`, ask it there.

All kinds of pull requests are welcome. However, there are a few guidelines to follow:

  * The @abstr_hyperlink branch is where your pull request should go.
  * Remember to rebase.
  * Document your PR clearly, and if applicable, provide some sample links for reviewers to test with.
  * Write well-formatted, easy-to-understand commit messages. If you don't know how, look at existing ones.
  * We will not ask you to sign a CLA, but you must assure that your code can be legally redistributed (under the terms of the MIT license).



## Legal Issues

This software is distributed under the @abstr_hyperlink .

In particular, please be aware that

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Translated to human words:

_In case your use of the software forms the basis of copyright infringement, or you use the software for any other illegal purposes, the authors cannot take any responsibility for you._

We only ship the code here, and how you are going to use it is left to your own discretion.

## Authors

Made by @abstr_hyperlink , who is in turn powered by :coffee:, :pizza: and :ramen:.

You can find the @abstr_hyperlink here.
