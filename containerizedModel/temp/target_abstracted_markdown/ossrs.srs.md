# Simple-RTMP-Server

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

SRS/ @abstr_number . @abstr_number , @abstr_hyperlink 

SRS定位是运营级的互联网直播服务器集群，追求更好的概念完整性和最简单实现的代码。  
SRS is an industrial-strength live streaming cluster, with the best conceptual integrity and the simplest implementation. 

Download from github.io: @abstr_hyperlink , @abstr_hyperlink   
Download from ossrs.net: @abstr_hyperlink , @abstr_hyperlink   
Website for SRS/ @abstr_number . @abstr_number , read SRS @abstr_number . @abstr_number @abstr_hyperlink or @abstr_hyperlink .

## Why SRS?

@abstr_number . We completely rewrote HLS following m @abstr_number u @abstr_number /ts spec, and HLS support h. @abstr_number +aac/mp @abstr_number . @abstr_number . Highly efficient RTMP streaming, supporting @abstr_number k+ clients concurrency, vhost based, both origin and edge. @abstr_number . Embedded simplified media HTTP server for HLS, api and HTTP flv/ts/mp @abstr_number /aac streaming. @abstr_number . Variety input: RTMP, pull by ingest file or stream(HTTP/RTMP/RTSP), push by stream caster RTSP/MPEGTS-over-UDP. @abstr_number . Popular internet delivery: RTMP/HDS for flash, HLS for mobile(IOS/IPad/MAC/Android), HTTP flv/ts/mp @abstr_number /aac streaming for user prefered. @abstr_number . Enhanced DVR and hstrs: segment/session/append plan, customer path and HTTP callback. the hstrs(http stream trigger rtmp source) enable the http-flv stream standby util encoder start publish, similar to rtmp, which will trigger edge to fetch from origin. @abstr_number . Multiple feature: transcode, forward, ingest, http hooks, dvr, hls, rtsp, http streaming, http api, refer, log, bandwith test and srs-librtmp. @abstr_number . Best maintainess: simple arch over state-threads(coroutine), single thread, single process and for linux/osx platform, common server x @abstr_number - @abstr_number /i @abstr_number /arm/mips cpus, rich comments, strictly follows RTMP/HLS/RTSP spec. @abstr_number . Easy to use: both English and Chinese wiki, typically config files in trunk/conf, traceable and session based log, linux service script and install script. @abstr_number . MIT license, open source with product management and evolution.

Enjoy it!

## About

SRS(Simple RTMP Server) over state-threads created on @abstr_number . @abstr_number .

SRS delivers rtmp/hls/http/hds live on x @abstr_number /x @abstr_number /arm/mips linux/osx, supports origin/edge/vhost and transcode/ingest and dvr/forward and http-api/http-callback/reload, introduces tracable session-oriented log, exports client srs-librtmp, with stream caster to push MPEGTS-over-UDP/RTSP to SRS, provides EN/CN wiki and the most simple architecture.

## AUTHORS

There are two types of people that have contributed to the SRS project: * AUTHORS: Contribute important features. Names of all PRIMARY response in NetConnection.connect and metadata. * CONTRIBUTORS: Submit patches, report bugs, add translations, help answer newbie questions, and generally make SRS that much better.

About all PRIMARY, AUTHORS and CONTRIBUTORS, read @abstr_hyperlink .

A big THANK YOU goes to: * All friends of SRS for @abstr_hyperlink . * Genes amd Mabbott for creating @abstr_hyperlink ( @abstr_hyperlink ). * Michael Talyanksy for introducing us to use st. * Roman Arutyunyan for creating @abstr_hyperlink for SRS to refer to. * Joyent for creating @abstr_hyperlink for http-api for SRS. * Igor Sysoev for creating @abstr_hyperlink for SRS to refer to. * @abstr_hyperlink and @abstr_hyperlink group for SRS to use to transcode. * Guido van Rossum for creating Python for api-server for SRS.

## Mirrors

Github: @abstr_hyperlink , the GIT usage( @abstr_hyperlink , @abstr_hyperlink )

@abstr_code_section 

OSChina: @abstr_hyperlink , the GIT usage( @abstr_hyperlink , @abstr_hyperlink )

@abstr_code_section 

Gitlab: @abstr_hyperlink , the GIT usage( @abstr_hyperlink , @abstr_hyperlink )

@abstr_code_section 

## Usage

**Step @abstr_number :** get SRS 
    
    
    git clone https://github.com/ossrs/srs &&
    cd srs/trunk
    

**Step @abstr_number :** build SRS, **Requires Centos @abstr_number .x/Ubuntu @abstr_number @abstr_number / @abstr_number bits, for others OS recommend @abstr_hyperlink , see Build( @abstr_hyperlink , @abstr_hyperlink ).**
    
    
    ./configure && make
    

**Step @abstr_number :** start SRS 
    
    
    ./objs/srs -c conf/srs.conf
    

**See also:** * Usage: How to delivery RTMP?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to delivery RTMP Cluster?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to delivery HTTP FLV Live Streaming?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to delivery HTTP FLV Live Streaming Cluster?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to delivery HLS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to delivery HLS for other codec?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to transode RTMP stream by SRS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to forward stream to other server?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to deploy low lantency application?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to deploy SRS on ARM?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to ingest file/stream/device to SRS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to use SRS-HTTP-server to delivery HTTP/HLS stream?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to show the demo of ( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to publish h. @abstr_number raw stream to @abstr_hyperlink , @abstr_hyperlink ) * Usage: Solution using SRS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: Why SRS?( @abstr_hyperlink , @abstr_hyperlink )

## Wiki

SRS @abstr_number . @abstr_number wiki

Please select your language: * @abstr_hyperlink * @abstr_hyperlink 

SRS @abstr_number . @abstr_number wiki

Please select your language: * @abstr_hyperlink * @abstr_hyperlink 

## System Requirements

Supported operating systems and hardware: * All Linux , both @abstr_number and @abstr_number bits * Apple OSX(Darwin), both @abstr_number and @abstr_number bits. * All hardware with x @abstr_number /x @abstr_number _ @abstr_number /arm/mips cpu.

## Features

@abstr_number . Simple, also stable enough. @abstr_number . High-performance( @abstr_hyperlink , @abstr_hyperlink ): single-thread, async socket, event/st-thread driven. @abstr_number . High-concurrency( @abstr_hyperlink , @abstr_hyperlink ), @abstr_number + connections( @abstr_number kbps), @abstr_number Mbps, CPU @abstr_number . @abstr_number %, @abstr_number MB @abstr_number . Support RTMP Origin Server( @abstr_hyperlink , @abstr_hyperlink ) @abstr_number . Support RTMP Edge Server( @abstr_hyperlink , @abstr_hyperlink ) for CDN, push/pull stream from any RTMP server @abstr_number . Support single process; no multiple processes. @abstr_number . Support Vhost( @abstr_hyperlink , @abstr_hyperlink ), support __defaultVhost__. @abstr_number . Support RTMP( @abstr_hyperlink , @abstr_hyperlink ) live streaming; no vod streaming. @abstr_number . Support Apple HLS(m @abstr_number u @abstr_number )( @abstr_hyperlink , @abstr_hyperlink ) live streaming. @abstr_number . Support HLS audio-only( @abstr_hyperlink , @abstr_hyperlink ) live streaming. @abstr_number . Support Reload( @abstr_hyperlink , @abstr_hyperlink ) config to enable changes. @abstr_number . Support cache last gop( @abstr_hyperlink , @abstr_hyperlink ) for flash player to fast startup. @abstr_number . Support listen at multiple ports. @abstr_number . Support long time(> @abstr_number . @abstr_number hours) publish/play. @abstr_number . Support Forward( @abstr_hyperlink , @abstr_hyperlink ) in master-slave mode. @abstr_number . Support live stream Transcoding( @abstr_hyperlink , @abstr_hyperlink ) by ffmpeg. @abstr_number . Support ffmpeg( @abstr_hyperlink , @abstr_hyperlink ) filters(logo/overlay/crop), x @abstr_number params, copy/vn/an. @abstr_number . Support audio transcode( @abstr_hyperlink , @abstr_hyperlink ) only, speex/mp @abstr_number to aac @abstr_number . Support http callback api hooks( @abstr_hyperlink , @abstr_hyperlink )(for authentication and injection). @abstr_number . Support bandwidth test( @abstr_hyperlink , @abstr_hyperlink ) api and flash client. @abstr_number . Player, publisher(encoder), and demo pages(jquery+bootstrap)( @abstr_hyperlink , @abstr_hyperlink ). @abstr_number . Demo( @abstr_hyperlink , @abstr_hyperlink ) video meeting or chat(SRS+cherrypy+jquery+bootstrap). @abstr_number . Full documents in wiki( @abstr_hyperlink , @abstr_hyperlink ), both Chinese and English. @abstr_number . Support RTMP(play-publish) library: srs-librtmp( @abstr_hyperlink , @abstr_hyperlink ) @abstr_number . Support ARM cpu arch( @abstr_hyperlink , @abstr_hyperlink ) with rtmp/ssl/hls/librtmp. @abstr_number . Support init.d( @abstr_hyperlink , @abstr_hyperlink ) and packge script, log to file. @abstr_number . Support RTMP ATC( @abstr_hyperlink , @abstr_hyperlink ) for HLS/HDS to support backup(failover) @abstr_number . Support HTTP RESTful management api( @abstr_hyperlink , @abstr_hyperlink ). @abstr_number . Support Ingest( @abstr_hyperlink , @abstr_hyperlink ) FILE/HTTP/RTMP/RTSP(RTP, SDP) to RTMP using external tools(e.g ffmepg). @abstr_number . Support DVR( @abstr_hyperlink , @abstr_hyperlink ), record live to flv file for vod. @abstr_number . Support tracable log, session based log( @abstr_hyperlink , @abstr_hyperlink ). @abstr_number . Support DRM token traverse( @abstr_hyperlink , @abstr_hyperlink ) for fms origin authenticate. @abstr_number . Support system full utest on gtest. @abstr_number . Support embeded HTTP server( @abstr_hyperlink , @abstr_hyperlink ) for hls(live/vod) @abstr_number . Support vod stream(http flv/hls vod stream)( @abstr_hyperlink , @abstr_hyperlink ). @abstr_number . Stable @abstr_hyperlink . @abstr_number . Support publish h @abstr_number raw stream( @abstr_hyperlink , @abstr_hyperlink ) by srs-librtmp. @abstr_number . Support @abstr_hyperlink , @abstr_number Gbps per process. @abstr_number . Suppport @abstr_hyperlink . @abstr_number . Research and simplify st, @abstr_hyperlink . @abstr_number . Support compile @abstr_hyperlink , @abstr_hyperlink . @abstr_number . Support @abstr_hyperlink , @abstr_number Gbps per process. @abstr_number . Support publish aac adts raw stream( @abstr_hyperlink , @abstr_hyperlink ) by srs-librtmp. @abstr_number . Support @abstr_number . @abstr_number s+ latency, read @abstr_hyperlink . @abstr_number . Support allow/deny publish/play for all or specified ip( @abstr_hyperlink , @abstr_hyperlink ). @abstr_number . Support custom dvr path and http callback, read @abstr_hyperlink and @abstr_hyperlink . @abstr_number . Support rtmp remux to http flv/mp @abstr_number /aac/ts live stream, read @abstr_hyperlink ( @abstr_hyperlink , @abstr_hyperlink ). @abstr_number . Support HLS(h. @abstr_number +mp @abstr_number ) streaming, read @abstr_hyperlink . @abstr_number . Rewrite HLS(h. @abstr_number +aac/mp @abstr_number ) streaming, read @abstr_hyperlink . @abstr_number . [dev] Realease @abstr_hyperlink . @abstr_number . [experiment] Support Adobe HDS(f @abstr_number m)( @abstr_hyperlink , @abstr_hyperlink ) dynamic streaming. @abstr_number . [experiment] Support push MPEG-TS over UDP to SRS, read @abstr_hyperlink . @abstr_number . [experiment] Support push RTSP to SRS, read @abstr_hyperlink . @abstr_number . [experiment] Support push flv stream over HTTP POST to SRS, read wiki. @abstr_number . [experiment] Support @abstr_hyperlink , the multiple-process SRS. @abstr_number . [experiment] Support @abstr_hyperlink , read @abstr_hyperlink .

## Compare

Compare SRS with other media server.

### Stream Delivery

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | RTMP | Stable | Stable | Stable | Stable | Stable | | HLS | Stable | Stable | X | Stable | Stable | | HDS | Experiment| X | X | Stable | Stable | | HTTP FLV | Stable | X | X | X | X | | HLS(aonly) | Stable | X | X | Stable | Stable | | HTTP Server | Stable | Stable | X | X | Stable |

### Cluster

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | RTMP Edge | Stable | X | X | Stable | X | | RTMP Backup | Stable | X | X | X | X | | VHOST | Stable | X | X | Stable | Stable | | Reload | Stable | X | X | X | X | | Forward | Stable | X | X | X | X | | ATC | Stable | X | X | X | X |

### Stream Service

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | DVR | Stable | Stable | X | X | Stable | | Transcode | Stable | X | X | X | Stable | | HTTP API | Stable | Stable | X | X | Stable | | HTTP hooks | Stable | X | X | X | X | | GopCache | Stable | X | X | Stable | X | | Security | Stable | Stable | X | X | Stable | | Token Traverse| Stable | X | X | Stable | X |

### Efficiency

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | Concurrency | @abstr_number . @abstr_number k | @abstr_number k | @abstr_number k | @abstr_number k | @abstr_number k | |MultipleProcess| Experiment| Stable | X | X | X | | RTMP Latency| @abstr_number . @abstr_number s | @abstr_number s | @abstr_number s | @abstr_number s | @abstr_number s | | HLS Latency | @abstr_number s | @abstr_number s | X | @abstr_number s | @abstr_number s |

### Stream Caster

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | Ingest | Stable | X | X | X | X | | Push MPEGTS | Experiment| X | X | X | Stable | | Push RTSP | Experiment| X | Stable | X | Stable | | Push HTTP FLV | Experiment| X | X | X | X |

### Debug System

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | BW check | Stable | X | X | X | X | | Tracable Log | Stable | X | X | X | X |

### Docs

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | Demos | Stable | X | X | X | X | | WIKI(EN+CN) | Stable | EN only | X | X | Stable |

### Others

| Feature | SRS | NGINX | CRTMPD | FMS | WOWZA | | ----------- | ------- | ----- | --------- | -------- | ------ | | ARM/MIPS | Stable | Stable | X | X | X | | Client Library| Stable | X | X | X | X |

Remark:

@abstr_number . Concurrency: The concurrency of single process. @abstr_number . MultipleProcess: SRS is single process, while @abstr_hyperlink is a MultipleProcess SRS. @abstr_number . HLS aonly: The HLS audio only streaming delivery. @abstr_number . BW check: The bandwidth check. @abstr_number . Security: To allow or deny stream publish or play. @abstr_number . Reload: Nginx supports reload, but not nginx-rtmp.

## Releases

  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number release @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number release @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number release @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number release @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number release @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number release @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number release @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number beta @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number beta @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number beta @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number beta @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number beta @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number alpha @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number alpha @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number alpha @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , @abstr_number . @abstr_number alpha @abstr_number , @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , bug fixed, @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , bug fixed, @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , bug fixed, @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , bug fixed, @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , all bug fixed, @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , all bug fixed, @abstr_number . @abstr_number . @abstr_number , @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , config utest, all bug fixed. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , core/kernel/rtmp utest, refine bandwidth(as/js/srslibrtmp library). @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , refine perf @abstr_number k+ clients, edge token traverse, @abstr_hyperlink , @abstr_number days online. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support heartbeat, tracable log, fix mem leak and bugs. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support mips, fms origin, json(http-api). @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink , android, @abstr_hyperlink . @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink , @abstr_hyperlink , http @abstr_hyperlink / @abstr_hyperlink , @abstr_hyperlink . @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support bandwidth test, player/encoder/chat @abstr_hyperlink . @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink , update @abstr_hyperlink . @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink . @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink stream to origin/edge. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink , fragment and window. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink config, pause, longtime publish/play. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink , refer, gop cache, listen multiple ports. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink flash publish, h @abstr_number , time jitter correct. @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , support @abstr_hyperlink , vp @abstr_number . @abstr_number lines.
  * @abstr_number - @abstr_number - @abstr_number , Created.



## History

  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , Fix GCC @abstr_number build error, this statement may fall through. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , Support HTTP-FLV params. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , Upgrade to FFMPEG @abstr_number . @abstr_number and X @abstr_number @abstr_number . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , Support `_definst_` for Wowza. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , Fix string trim bug. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , Support build on OSX @abstr_number . @abstr_number Mojave. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , Fix sleep bug in us. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , Support param for transcoder. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , For @abstr_hyperlink , Support edge/forward to Aliyun CDN. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , For @abstr_hyperlink , Support HTTP FLV with HTTP callback. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , For @abstr_hyperlink , Refine params in http callback. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Refine HTTP-FLV latency, support realtime mode. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , For @abstr_hyperlink , Support params in http callback. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , For @abstr_hyperlink , SRS edge support douyu.com. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , fix memory leak. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , fix scaned issues. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , fix crash for edge HLS. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , support vhost in stream parameters. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , fix @abstr_hyperlink , TCP connection alive detection. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , fix bug of init.d script.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , allow user to add some specific flags. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink to fix @abstr_hyperlink , ts PES ext length. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , shouldn't remove ts/m @abstr_number u @abstr_number when hls_dispose disabled. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , FD leak for requesting empty HTTP stream. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , HTTP API support number of video frames for FPS. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , crash at HTTP fast buffer grow. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , support Haivision encoder. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , fix fd leak for FLV stream caster. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Merge @abstr_hyperlink , avoid the duplicated sps/pps in ts. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Fix @abstr_hyperlink , crash for TS context corrupt. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , remove the test code. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink disable utilities when reload a source. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink release the io then free it for kbps. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink use specific error code for dns resolve. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , timestamp overflow for ATC. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , convert ts aac audio private stream @abstr_number to common. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , kbps interface error. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , recovery the hls dispose. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine hls html @abstr_number video template.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , hls support NonIDR(open gop). @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , reset ack follow flash player rules. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , remove hls ram from srs @abstr_number to srs @abstr_number +. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , disable the source cleanup. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , refine source to avoid critical fetch and create. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , crash when source cleanup for edge. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , crash when source cleanup for http-flv. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , close fd after thread stopped. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support asprocess for oryx. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support change work_dir for oryx.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , typo for rtmp type. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix fast stream error bug. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine librtmp comments about NALUs. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix memory leak at source. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix memory leak at handshake. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support valgrind for @abstr_hyperlink .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support all arm for @abstr_hyperlink . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , workaround @abstr_hyperlink the fly stfd in close. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , comment the pcr.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink filter frame.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix socket timeout for librtmp.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix the crash by srs_info log.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix the sps pps parse bug.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix http reader bug, support infinite chunked. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , merge @abstr_hyperlink fix memory leak bug. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , merge @abstr_hyperlink add tcUrl for on_publish.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add keyword XCORE for coredump to identify the version. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink always alloc big object at heap. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink ignore null connect props to make RED @abstr_number happy. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink thread terminate normally dispose bug. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink failed when chunk size too small. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , default hls_on_error to continue. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink fix fd leak bug when fork. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink fix bug for restart thread. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink use srs_freepa and SrsAutoFreeA for array. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , remove duration for live.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , add av tag in flv header. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink partial hotfix the hls pure audio. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink fix the bug of response of http hooks. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink response error when client not found to kickoff. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink decrease the srs-librtmp size. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink error when arm glibc @abstr_number . @abstr_number + or not i @abstr_number /x @abstr_number _ @abstr_number /amd @abstr_number . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink srs for respberrypi and cubieboard. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink hotfix the openssl build script @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink config to donot parse width/height from sps. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink always release publish for source.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink http hooks use source thread cid. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink fix http hooks crash for st context switch. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support reload utc_time. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , HTTP API support JSONP by specifies the query string callback=xxx.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , srs-librtmp send sequence header when sps or pps changed.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , close @abstr_hyperlink , support obs restart publish. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , use reduce_sequence_header for stream control.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , use send_min_interval for stream control. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , enable the SRS_PERF_TCP_NODELAY and add config tcp_nodelay. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink support kickoff connected client. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink support default values for transcode. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink add pageUrl for HTTP callback on_play.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine the hls, ignore packet when no sequence header. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink use @abstr_number s timeout for first msg. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine hls disable the time jitter, support not mix monotonically increase. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink fix the sps parse bug. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink refine the time jitter, correct (-inf,- @abstr_number )+( @abstr_number ,+inf) to @abstr_number ms. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink fix aggregate timestamp bug. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink drop video for unkown RTMP header.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink remove ts for hls ram mode.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink cleanup hls when stop and timeout. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink support pure video hls. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support @abstr_hyperlink , the multiple-process SRS.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink register handler then start http thread. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine the thread, protocol, kbps code. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink copy request for async call.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink the USER_HZ maybe not @abstr_number . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , parse when got entire http header, by feilong. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , merge from bravo system, add the rtmfp to bms(commercial srs). @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support push flv stream over HTTP POST to SRS.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support ingest hls live stream to RTMP.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support mix_correct algorithm. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support reap hls/ts by gop or not. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , enhanced on_hls_notify, support HTTP GET when reap ts.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine the hls deviation for floor algorithm.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , fix hls bug, keep cc continous between ts files. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , rewrite annexb mux for ts, refer to apple sample. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , enhanced avc decode, parse the sps get width+height. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support transform vhost of edge @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , config hls to disable cleanup of ts. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support server cycle handler. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support on_hls for http hooks. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , enhanced hls, support deviation for duration. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support config the m @abstr_number u @abstr_number /ts path for hls. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , osx(darwin) support demo with nginx and ffmpeg. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , start @abstr_hyperlink , @abstr_number lines.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support hstrs(http stream trigger rtmp source) edge mode. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support hstrs(http stream trigger rtmp source) origin mode. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support adobe hds. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support osx(darwin) for mac pro. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , http api provides stream/vhost/srs/server bytes, codec and count. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , refine aac LC, support aac HE/HEv @abstr_number . @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , fix http-flv stream bug, support multiple streams. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine http request parse. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , revert dvr http api. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , fix hls bug, write pts/dts error. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine dvr, append file when dvr file exists. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine pithy print to more easyer to use. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support push rtsp to srs. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , the join maybe failed, should use a variable to ensure thread terminated. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support config default acodec/vcodec. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , rewrite hls/ts code, support h. @abstr_number +mp @abstr_number for hls. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , use stringstream to generate m @abstr_number u @abstr_number , add hls_td_ratio. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , dev code ZhouGuowen for @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , set pcr_base to dts. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink of ibmf format which decoded in annexb.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , downcast aac SSR to LC. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support hls without io(in ram). @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support push MPEGTS over UDP to SRS. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , build libfdk-aac in ffmpeg. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , hls support h. @abstr_number +mp @abstr_number , ok for vlc. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , http ts stream support h. @abstr_number +mp @abstr_number . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , refine the pcr start at @abstr_number , dts/pts plus delay. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , refine pcr=dts- @abstr_number ms and use dts/pts directly. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , use absolutely overflow to make jwplayer happy. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support http live ts stream. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support http live flv/aac/mp @abstr_number stream with fast cache. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support rtmp remux to http flv live stream. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , refine http server refer to go http-framework. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , refine http api refer to go http-framework. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , use iformat only for rtmp input. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , fix hls bug ignore type- @abstr_number send aud. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , http-callback support on_dvr when reap a dvr file. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix to remove the pageUrl for http callback. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , dvr support custom filepath by variables. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support security allow/deny publish/play all/ip. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , trim the last @abstr_number of log. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , http-callback check http status code ok( @abstr_number ). @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , http-callback post in application/json content-type. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , srs-librtmp flv read tag should init size. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , memory leak for http client post. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , aac profile is object id plus one. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , the forward dest ep should use server. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , the hls pcr is negative when startup. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , ignore NALU when sequence header to make HLS happy. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , support disconnect publish connect when hls error. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support @abstr_number . @abstr_number s+ latency. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , update wiki for mr( @abstr_hyperlink , @abstr_hyperlink ) and mw( @abstr_hyperlink , @abstr_hyperlink ).
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , @abstr_number k+ clients, use queue cond wait and fast vector. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , @abstr_number k+ clients, use fast cache for msgs queue. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , add mw(merged-write) config. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support mr(merged-read) config and reload. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , enable @abstr_hyperlink and @abstr_hyperlink , + @abstr_number % performance, @abstr_number . @abstr_number k publisher. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , improve about @abstr_number % performance for fast buffer. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , conn thread use cond to wait for recv thread error. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , merge @abstr_hyperlink , traverse the token before response connect. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , srs-librtmp support hijack io apis for st-load. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , refine syscall for recv, supports @abstr_number . @abstr_number k clients. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add qtcreate project file trunk/src/qt/srs/srs-qt.pro. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , refine handshake, replace union with template method. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , add srs_rtmp_dump tool. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , update PRIMARY, AUTHORS, CONTRIBUTORS rule. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support publish aac adts raw stream. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , remove timeout recv, support @abstr_number . @abstr_number k+ @abstr_number kbps clients. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , srs-librtmp add rtmp prefix for rtmp/utils/human apis. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine examples of srs-librtmp, add srs_print_rtmp_packet. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support publish audio raw frames. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support compile @abstr_hyperlink , @abstr_hyperlink . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , all wiki translated to English. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , srs-librtmp drop duplicated sps/pps(sequence header). @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , srs-librtmp drop any video before sps/pps(sequence header). @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix memory leak of h. @abstr_number raw packet send in srs-librtmp. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , deadloop when read/write @abstr_number and ETIME. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , writev multiple msgs, support @abstr_number k+ @abstr_number kbps clients. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , optmized st for timeout recv. pulse to @abstr_number ms. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , remove the confuse code st_usleep( @abstr_number ). @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , configure --export-librtmp-project and --export-librtmp-single. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , srs-librtmp support write h @abstr_number raw packet. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , AMF @abstr_number support @abstr_number x @abstr_number B the date type codec. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , hotfix for bug # @abstr_number , drop connect args when not object. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , rename wiki/xxx to wiki/v @abstr_number _CN_xxx. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support AnnexB in RTMP body for HLS. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , remove supports for OSX(darwin). @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , revert github srs README to English. @abstr_number . @abstr_number . @abstr_number .
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , always reap ts whatever audio or video packet. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , failed if no epoll. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , crash for multiple edge publishing the same stream. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix hls bug, refine config and log, according to clion of jetbrains. @abstr_number . @abstr_number . @abstr_number . 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , dvr segment add config dvr_wait_keyframe. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , add openssl includes to utest. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , max connections is @abstr_number , for st use mmap default. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , forward should forward the sequence header when retry. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , refine dh wrapper, ensure public key is @abstr_number bytes. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , support forward/edge to flussonic, disable debug_srs_upnode to make flussonic happy. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , refine for osx, with ssl/http, disable statistics. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , simplify the RTMP handshake key generation. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support identify the srs edge. @abstr_number . @abstr_number . @abstr_number .
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix the reload remove edge assert bug. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , use lock(acquire/release publish) to avoid duplicated publishing. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix the segment-dvr sequence header missing. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , refine ffmpeg log, check abitrate for libaacplus. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix retrieve sys stat bug for all linux. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix http hooks bug, regression bug. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix tcp stat slow bug, use /proc/net/sockstat instead, refer to 'ss -s'. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support tun @abstr_number (vpn network device) ip retrieve. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support partially build on OSX(Darwin). @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , api connections add udp, add disk iops. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , complete config utest. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , gop cache support disable video in publishing. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , srs_info detail log compile failed. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , use iformat and oformat for ffmpeg transcode. @abstr_number . @abstr_number . @abstr_number .
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine the bandwidth check/test, add as/js library, use srs-librtmp for linux tool. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , complete rtmp stack utest. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix HLS codec info, IOS ok. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support all aac sample rate. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , complete kernel utest. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , always use @abstr_number bits timestamp. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , response the call message with null. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , thread start segment fault, thread cycle stop destroy thread. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , fix the system jump time, adjust system startup time. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , SRS online @abstr_number days with RTMP/HLS.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , support config time jitter for encoder non-monotonical stream. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support report summaries in heartbeat. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , performance refine, support @abstr_hyperlink connections( @abstr_number kbps). @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support edge @abstr_hyperlink , fix @abstr_hyperlink . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add connections count to api summaries. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add srs bytes and kbps to api summaries. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add network bytes to api summaries. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , workaround for librtmp ping(fmt= @abstr_number ,cid= @abstr_number fresh stream). @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support flv inject and flv http streaming with start=bytes. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , add source id for full trackable log. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , unpublish when edge disconnect. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , config to /dev/null to disable ffmpeg log. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , allow edge vhost to add or remove. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , Johnny contribute @abstr_hyperlink . karthikeyan start to translate wiki to English.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , st joinable thread must be stop by other threads, @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support amf @abstr_number StrictArray( @abstr_number x @abstr_number a). @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support flv parser, add amf @abstr_number to librtmp. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , add tcUrl for http callback on_connect, @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support http heartbeat, @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support http api json, to PUT/POST. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , also need stream_id for send_and_free_message. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , rename struct to class. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink pithy print, stage must has a age. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix mem leak for delete[] SharedPtrMessage array. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine the kbps calc module. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix bug @abstr_hyperlink : install_dir=DESTDIR+PREFIX
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink : never directly use *(int @abstr_number _t*) for arm.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink : support aggregate message
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , edge support FMS origin server. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink , ubuntu @abstr_number build error.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support mips linux.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix bug @abstr_hyperlink : convert signal to io thread. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine RTMP protocol completed, to @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support full edge RTMP server. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support basic edge(play/publish) RTMP server. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add donation page. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support android app to start srs for internal edge. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support tool over srs-librtmp to ingest flv/rtmp. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support dvr(record live to flv file for vod). @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add speex @abstr_number . @abstr_number to transcode flash encoder stream. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support reload ingesters(add/remov/update). @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support @abstr_hyperlink file/stream/device.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support @abstr_hyperlink and @abstr_hyperlink .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , implements http framework and api/v @abstr_number /version.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix bug for st detecting epoll failed, force st to use epoll.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add wiki @abstr_hyperlink .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add release binary package for raspberry-pi. 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support RTMP ATC for HLS/HDS to support backup(failover).
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support daemon, default start in daemon.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support make install/install-api and uninstall.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add ./etc/init.d/srs, refine to support make clean then make.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , write pid to ./objs/srs.pid.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine hls code, support pure audio HLS.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add vn/an for FFMPEG to drop video/audio for radio stream.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine handshake, client support complex handshake, add utest.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix bug on arm of st, the sp change from @abstr_number to @abstr_number , for respberry-pi, @see @abstr_hyperlink 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support ARM( @abstr_hyperlink ) with rtmp/ssl/hls/librtmp.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , finish utest for amf @abstr_number codec.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add gperftools for mem leak detect, mem/cpu profile.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add gest framework for utest, build success.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add wiki @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , srs-librtmp, client publish/play library like librtmp.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , modularity, extract core/kernel/rtmp/app/main module.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support arm build(SRS/ST), add ssl to @abstr_number rdparty package.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add wiki @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add wiki @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add wiki @abstr_hyperlink 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add wiki @abstr_hyperlink , @abstr_hyperlink 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix jw/flower player pause bug, which send closeStream actually.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add wiki @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , change listen( @abstr_number ), chunk-size( @abstr_number ), to improve performance.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , merge from wenjie, the bandwidth test feature.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix the bitrate bug(in Bps), use enhanced microphone.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , demo video meeting or chat(SRS+cherrypy+jquery+bootstrap).
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , merge from wenjie, support banwidth test.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , merge from wenjie: support set chunk size at vhost level
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add @abstr_hyperlink for play and publish.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , ensure the HLS(ts) is continous when republish stream.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix the hls reload bug, feed it the sequence header.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine protocol, use int @abstr_number _t timestamp for ts and jitter.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support set the live queue length(in seconds), drop when full.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix the forwarder reconnect bug, feed it the sequence header.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support reload the hls/forwarder/transcoder.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , refine the thread model for the retry threads.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , auto install depends tools/libs on centos/ubuntu.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support @abstr_hyperlink : on_connect/close/publish/unpublish/play/stop.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support multiple http hooks for a event.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support http callback hooks, on_connect.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support network based cli and json result, add CherryPy @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , update http/hls/rtmp load test tool @abstr_hyperlink , use SRS rtmp sdk.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support max_connections, drop if exceed.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support log_dir, write ffmpeg log to file.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix the forward/hls/encoder bug.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support dead-loop detect for forwarder and transcoder.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support all ffmpeg filters and params.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support live stream transcoder by ffmpeg.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support --with/without -ffmpeg, build ffmpeg- @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add ffmpeg- @abstr_number . @abstr_number , x @abstr_number -core @abstr_number , lame- @abstr_number . @abstr_number . @abstr_number , libaacplus- @abstr_number . @abstr_number . @abstr_number .
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add performance summary, @abstr_number clients, @abstr_number Mbps, CPU @abstr_number . @abstr_number %, @abstr_number MB.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support forward stream to other edge server.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support forward stream to other origin server.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix memory leak bug, aac decode bug.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support --with or --without -hls and -ssl options.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support AAC @abstr_number HZ sample rate for iphone, adjust the timestamp.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support HLS(m @abstr_number u @abstr_number ), fragment and window.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support record to ts file for HLS.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add ts_info tool to demux ts file.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , add rtmp players(OSMF/jwplayer @abstr_number /jwplayer @abstr_number ).
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support config and reload the pithy print.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support reload config(vhost and its detail).
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support reload config(listen and chunk_size) by SIGHUP( @abstr_number ).
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support longtime(> @abstr_number . @abstr_number hours) publish/play.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support config the chunk_size.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support pause for live stream.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support refer/play-refer/publish-refer.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support vhosts specified config.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support listen multiple ports.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support config file in nginx-conf style.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support pithy print log message specified by stage.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support librtmp without extended-timestamp in @abstr_number xCX chunk packet.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support cache last gop for client fast startup.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support flash publish.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support h @abstr_number /avc codec by rtmp complex handshake.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support time jitter detect and correct algorithm
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support decode codec type to cache the h @abstr_number /avc sequence header.
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support basic amf @abstr_number codec, simplify the api using c-style api.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support shared ptr msg for zero memory copy.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support vp @abstr_number codec with rtmp protocol specified simple handshake.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support multiple flash client play live streaming.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support FMLE/FFMPEG publish live streaming.
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support rtmp message @abstr_number chunk protocol(send_message).
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , support rtmp chunk @abstr_number message protocol(recv_message).



## Performance

Performance benchmark history, on virtual box.

  * See also: @abstr_hyperlink 
  * See also: @abstr_hyperlink 
  * About multiple-process performance, read @abstr_hyperlink .



### Play RTMP benchmark

The play RTMP benchmark by @abstr_hyperlink :

| Update | SRS | Clients | Type | CPU | Memory | Commit | | ------------- | --------- | ------------- | ------------- | --------- | -------- | ------------ | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number M | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink |

### Publish RTMP benchmark

The publish RTMP benchmark by @abstr_hyperlink :

| Update | SRS | Clients | Type | CPU | Memory | Commit | | ------------- | --------- | ------------- | ------------- | --------- | -------- | ------------ | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | publishers | @abstr_number % | @abstr_number MB | @abstr_hyperlink |

### Play HTTP FLV benchmark

The play HTTP FLV benchmark by @abstr_hyperlink :

| Update | SRS | Clients | Type | CPU | Memory | Commit | | ------------- | --------- | ------------- | ------------- | --------- | -------- | ------------ | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | - | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number k( @abstr_number ) | players | @abstr_number % | @abstr_number MB | @abstr_hyperlink |

### Latency benchmark

The latency between encoder and player with realtime config( @abstr_hyperlink , @abstr_hyperlink ): | 

| Update | SRS | VP @abstr_number | H. @abstr_number | VP @abstr_number +MP @abstr_number | H. @abstr_number +MP @abstr_number | | ------------- | --------- | --------- | --------- | --------- | -------- | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number s | @abstr_number . @abstr_number s | @abstr_number . @abstr_number s | @abstr_number . @abstr_number s | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_hyperlink | @abstr_hyperlink | @abstr_number . @abstr_number s | @abstr_number . @abstr_number s | | @abstr_number - @abstr_number - @abstr_number | @abstr_number . @abstr_number . @abstr_number | @abstr_number . @abstr_number s | @abstr_number . @abstr_number s | @abstr_hyperlink | @abstr_hyperlink |

> @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink , Refine HTTP-FLV latency, support realtime mode. @abstr_number . @abstr_number . @abstr_number 

We use FMLE as encoder for benchmark. The latency of server is @abstr_number . @abstr_number s+, and the bottleneck is the encoder. For more information, read @abstr_hyperlink .

### HLS overhead

About the HLS overhead of SRS, we compare the overhead to FLV by remux the HLS to FLV by ffmpeg.

| Bitrate | Duration | FLV(KB) | HLS(KB) | Overhead | | ------- | -------- | ------- | -------- | --------- | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % | | @abstr_number kbps | @abstr_number s | @abstr_number | @abstr_number | @abstr_number . @abstr_number % |

The HLS overhead is calc by: (HLS - FLV) / FLV * @abstr_number %.

The overhead is larger than this benchmark( @abstr_number kbps audio is best overhead), for we fix the @abstr_hyperlink .

## Architecture

SRS always use the most simple architecture to support complex transaction. * System arch: the system structure and arch. * Modularity arch: the main modularity of SRS. * Stream arch: the stream dispatch arch of SRS.

### System Architecture
    
    
    +------------------------------------------------------+
    |             SRS(Simple RTMP Server)                  |
    +---------------+---------------+-----------+----------+
    |   API/hook    |   Transcoder  |  HLS/HDS  | RTMP/FLV |
    |  http-parser  |  FFMPEG/x @abstr_number   |  NGINX/ts | protocol |
    +---------------+---------------+-----------+----------+
    |              Network(state-threads)                  |
    +------------------------------------------------------+
    |    All Linux/Unix(RHEL,CentOS,Ubuntu,Fedora...)      |
    +------------------------------------------------------+
    

### Modularity Architecture
    
    
    +------------------------------------------------------+
    |             Main(srs/ingest-hls/librtmp)             |
    +------------------------------------------------------+
    |           App(Server/Client application)             |
    +------------------------------------------------------+
    |         RTMP/HTTP/RawStream(Protocol stack)          |
    +------------------------------------------------------+
    |      Kernel(depends on Core, provides error/log)     |
    +------------------------------------------------------+
    |         Core(depends only on system apis)            |
    +------------------------------------------------------+
    

### Stream Architecture
    
    
                       +---------+              +----------+
                       | Publish |              |  Deliver |
                       +---|-----+              +----|-----+
    +----------------------+-------------------------+----------------+
    |     Input            | SRS(Simple RTMP Server) |     Output     |
    +----------------------+-------------------------+----------------+
    |    Encoder( @abstr_number )        |   +-> RTMP/HDS  --------+-> Flash player |
    |  (FMLE,FFMPEG, -rtmp-+->-+-> HLS/HTTP ---------+-> M @abstr_number u @abstr_number  player  |
    |  Flash,XSPLIT,       |   +-> FLV/MP @abstr_number /Aac/Ts ---+-> HTTP player  |
    |  ......)             |   +-> Fowarder ---------+-> RTMP server  |
    |                      |   +-> Transcoder -------+-> RTMP server  |
    |                      |   +-> DVR --------------+-> Flv file     |
    |                      |   +-> BandwidthTest ----+-> flash        |
    +----------------------+                         |                |
    |  MediaSource( @abstr_number )      |                         |                |
    |  (RTSP,FILE,         |                         |                |
    |   HTTP,HLS,   --pull-+->-- Ingester( @abstr_number ) -(rtmp)-+-> SRS          |
    |   Device,            |                         |                |
    |   ......)            |                         |                |
    +----------------------+                         |                |
    |  MediaSource( @abstr_number )      |                         |                |
    |  (RTSP,FILE,         |                         |                |
    |   HTTP,HLS,   --push-+->-- Streamer( @abstr_number ) -(rtmp)-+-> SRS          |
    |   Device,            |                         |                |
    |   ......)            |                         |                |
    +----------------------+-------------------------+----------------+
    
    Remark:
    ( @abstr_number ) Encoder: encoder must push RTMP stream to SRS server.
    ( @abstr_number ) MediaSource: any media source, which can be ingest by ffmpeg.
    ( @abstr_number ) Ingester: SRS will fork a process to run ffmpeg(or your application) 
    to ingest any input to rtmp, push to SRS. Read  @abstr_hyperlink .
    ( @abstr_number ) Streamer: SRS will listen for some protocol and accept stream push 
    over some protocol and remux to rtmp to SRS. Read  @abstr_hyperlink .
    

Beijing, @abstr_number . @abstr_number   
Winlin
