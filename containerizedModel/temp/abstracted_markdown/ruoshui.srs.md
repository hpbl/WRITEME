# Simple-RTMP-Server

SRS/ @abstr_number . @abstr_number , @abstr_hyperlink 

SRS定位是运营级的互联网直播服务器集群，追求更好的概念完整性和最简单实现的代码。  
SRS is industrial-strength live streaming cluster, for the best conceptual integrity and the simplest implementation. 

Download from github.io: @abstr_hyperlink , @abstr_hyperlink   
Download from ossrs.net: @abstr_hyperlink , @abstr_hyperlink   
Website for SRS/ @abstr_number . @abstr_number , read SRS @abstr_number . @abstr_number @abstr_hyperlink or @abstr_hyperlink .

@abstr_hyperlink @abstr_hyperlink 

## About

SRS(SIMPLE RTMP Server) over state-threads created in @abstr_number . @abstr_number .

SRS delivers rtmp/hls live on x @abstr_number /x @abstr_number /arm/mips linux, supports origin/edge/vhost and transcode/ingest and dvr/forward and http-api/http-callback/reload, introduces tracable session-oriented log, exports client srs-librtmp, provides EN/CN wiki and the most simple architecture.

## AUTHORS

There are three types of people that have contributed to the SRS project: * AUTHORS: Contribute important features. Names of all PRIMARY response in NetConnection.connect and metadata. * CONTRIBUTORS: Submit patches, report bugs, add translations, help answer newbie questions, and generally make SRS that much better.

About all PRIMARY, AUTHORS and CONTRIBUTORS, read @abstr_hyperlink .

A big THANK YOU goes to: * chnvideo co-founders( @abstr_hyperlink , @abstr_hyperlink , @abstr_hyperlink ) for @abstr_hyperlink . * Genes amd Mabbott for creating @abstr_hyperlink ( @abstr_hyperlink ). * Michael Talyanksy for introducing us to use st. * Roman Arutyunyan for creating @abstr_hyperlink for SRS to refer to. * Joyent for creating @abstr_hyperlink for http-api for SRS. * Igor Sysoev for creating @abstr_hyperlink for SRS to refer to. * @abstr_hyperlink and @abstr_hyperlink group for SRS to use to transcode. * Guido van Rossum for creating Python for api-server for SRS.

## Mirrors

Github: @abstr_hyperlink , the GIT usage( @abstr_hyperlink , @abstr_hyperlink )

@abstr_code_section 

CSDN: @abstr_hyperlink , the GIT usage( @abstr_hyperlink , @abstr_hyperlink )

@abstr_code_section 

OSChina: @abstr_hyperlink , the GIT usage( @abstr_hyperlink , @abstr_hyperlink )

@abstr_code_section 

Gitlab: @abstr_hyperlink , the GIT usage( @abstr_hyperlink , @abstr_hyperlink )

@abstr_code_section 

## Usage

**Step @abstr_number :** get SRS 
    
    
    git clone https://github.com/simple-rtmp-server/srs &&
    cd srs/trunk
    

**Step @abstr_number :** build SRS, **Requires Centos @abstr_number .x/Ubuntu @abstr_number @abstr_number / @abstr_number bits, others see Build( @abstr_hyperlink , @abstr_hyperlink ).**
    
    
    ./configure && make
    

**Step @abstr_number :** start SRS 
    
    
    ./objs/srs -c conf/srs.conf
    

**See also:** * Usage: How to delivery RTMP?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to delivery HLS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to delivery HLS for other codec?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to transode RTMP stream by SRS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to forward stream to other server?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to deploy low lantency application?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to deploy SRS on ARM?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to ingest file/stream/device to SRS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to use SRS-HTTP-server to delivery HTTP/HLS stream?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: How to show the demo of SRS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: Solution using SRS?( @abstr_hyperlink , @abstr_hyperlink ) * Usage: Why SRS?( @abstr_hyperlink , @abstr_hyperlink )

## Wiki

SRS @abstr_number . @abstr_number wiki

Please select your language: * @abstr_hyperlink * @abstr_hyperlink 

## Donation

Donation:  
@abstr_hyperlink 

Donations:  
[https://github.com/simple-rtmp-server/srs/blob/develop/DONATIONS.txt] (https://github.com/simple-rtmp-server/srs/blob/develop/DONATIONS.txt)

## System Requirements

Supported operating systems and hardware: * All Linux , both @abstr_number and @abstr_number bits * All hardware with x @abstr_number /x @abstr_number _ @abstr_number /arm/mips cpu.

## Summary

@abstr_number . 简洁稳定：Simple, also stable enough. @abstr_number . 高性能： @abstr_hyperlink : single-thread, async socket, event/st-thread driven. @abstr_number . 高并发： @abstr_hyperlink , @abstr_number connections( @abstr_number kbps), @abstr_number Mbps, CPU @abstr_number . @abstr_number %, @abstr_number MB @abstr_number . RTMP源站：Support @abstr_hyperlink . @abstr_number . CDN边缘(上下行加速)：Support @abstr_hyperlink for CDN, push/pull stream from any RTMP server @abstr_number . 单进程(无多进程)：Support single process; no multiple processes. @abstr_number . 支持Vhost：Support @abstr_hyperlink , support __defaultVhost__. @abstr_number . 直播(无点播)：Support @abstr_hyperlink live streaming; no vod streaming. @abstr_number . 苹果HLS：Support Apple @abstr_hyperlink live streaming. @abstr_number . 支持纯音频HLS：Support @abstr_hyperlink live streaming. @abstr_number . 支持Reload：Support @abstr_hyperlink config to enable changes. @abstr_number . 支持GopCache：Support @abstr_hyperlink for flash player to fast startup. @abstr_number . 侦听多端口：Support listen at multiple ports. @abstr_number . 长时间推流：Support long time(> @abstr_number . @abstr_number hours) publish/play. @abstr_number . 转发流：Support @abstr_hyperlink in master-slave mode. @abstr_number . 流转码：Support live stream @abstr_hyperlink by ffmpeg. @abstr_number . 支持FFMPEG滤镜：Support @abstr_hyperlink filters(logo/overlay/crop), x @abstr_number params, copy/vn/an. @abstr_number . 只转码音频：Support audio @abstr_hyperlink only, speex/mp @abstr_number to aac @abstr_number . 支持HTTP回调：Support @abstr_hyperlink (for authentication and injection). @abstr_number . 带宽测速：Support @abstr_hyperlink api and flash client. @abstr_number . 演示页面：Player, publisher(encoder), and @abstr_hyperlink . @abstr_number . 视频会议演示： @abstr_hyperlink video meeting or chat(SRS+cherrypy+jquery+bootstrap). @abstr_number . 中文Wiki：Full documents in @abstr_hyperlink , in Chineses. @abstr_number . 客户端库：Support RTMP(play-publish) library: @abstr_hyperlink @abstr_number . 支持ARM平台：Support ARM( @abstr_hyperlink ) with rtmp/ssl/hls/librtmp. @abstr_number . 支持Init.d脚本：Support @abstr_hyperlink and packge script, log to file. @abstr_number . 支持ATC：Support @abstr_hyperlink for HLS/HDS to support backup(failover) @abstr_number . 支持HTTP-RESTful-API：Support @abstr_hyperlink . @abstr_number . 采集流：Support @abstr_hyperlink FILE/HTTP/RTMP/RTSP(RTP, SDP) to RTMP using external tools(e.g ffmepg). @abstr_number . 支持录制：Support @abstr_hyperlink , record live to flv file for vod. @abstr_number . 可追溯日志：Support @abstr_hyperlink . @abstr_number . 支持FMS-Token穿越：Support DRM @abstr_hyperlink for fms origin authenticate. @abstr_number . 全面的Utest：Support system full utest on gtest. @abstr_number . Stable @abstr_hyperlink and @abstr_hyperlink .

## Releases

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

  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , use time jitter off for hls and forward. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix @abstr_hyperlink the USER_HZ maybe not @abstr_number . @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , fix hls aac adts bug, in aac mux. @abstr_number . @abstr_number . @abstr_number .
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , remove the osx for @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , the join maybe failed, should use a variable to ensure thread terminated. @abstr_number . @abstr_number . @abstr_number .
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , dev code HuKaiqun for @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , for @abstr_hyperlink , the aac profile must be object plus one. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , refine the pcr start at @abstr_number , dts/pts plus delay. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , refine pcr=dts- @abstr_number ms and use dts/pts directly. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , use absolutely overflow to make jwplayer happy. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , use iformat only for rtmp input. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , fix hls bug ignore type- @abstr_number send aud. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix to remove the pageUrl for http callback. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , trim the last @abstr_number of log. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , http-callback post in application/json content-type. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , memory leak for http client post. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , the forward dest ep should use server. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , the hls pcr is negative when startup. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , ignore NALU when sequence header to make HLS happy. @abstr_number . @abstr_number . @abstr_number 
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , support disconnect publish connect when hls error. @abstr_number . @abstr_number . @abstr_number 
  * **v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , @abstr_hyperlink released. @abstr_number lines.**
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , traverse the token before response connect. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , update PRIMARY, AUTHORS, CONTRIBUTORS of SRS. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , all wiki translated to English. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , deadloop when read/write @abstr_number and ETIME. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , use number for macro VERSION_MAJOR, VERSION_MINOR and VERSION_REVISION. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , drop connect args when not object. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , rename wiki/xxx to wiki/v @abstr_number _CN_xxx. @abstr_number . @abstr_number . @abstr_number .
  * v @abstr_number . @abstr_number , @abstr_number - @abstr_number - @abstr_number , hotfix @abstr_hyperlink , donot support AnnexB when decoding RTMP body for HLS. @abstr_number . @abstr_number . @abstr_number .
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

Performance benchmark history, on virtual box:

  * @abstr_number - @abstr_number - @abstr_number , SRS @abstr_number . @abstr_number . @abstr_number , @abstr_number clients, @abstr_number %CPU, @abstr_number MB. @abstr_hyperlink 
  * @abstr_number - @abstr_number - @abstr_number , SRS @abstr_number . @abstr_number . @abstr_number , @abstr_number clients, @abstr_number %CPU, @abstr_number MB. @abstr_hyperlink 
  * @abstr_number - @abstr_number - @abstr_number , SRS @abstr_number . @abstr_number . @abstr_number , @abstr_number clients, @abstr_number %CPU, @abstr_number MB. @abstr_hyperlink 
  * @abstr_number - @abstr_number - @abstr_number , SRS @abstr_number . @abstr_number . @abstr_number , @abstr_number clients, @abstr_number %CPU, @abstr_number MB. ( @abstr_number . @abstr_number equals @abstr_number . @abstr_number . @abstr_number )



Latest benchmark( @abstr_number - @abstr_number - @abstr_number ):

@abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number KB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB. @abstr_number . @abstr_number connections, @abstr_number Mbps, @abstr_number kbps, CPU @abstr_number . @abstr_number %, MEM @abstr_number MB.
    
    
    [winlin@dev @abstr_number  srs]$ dstat
    ----total-cpu-usage---- -dsk/total- ---net/lo-- ---paging-- ---system--
    usr sys idl wai hiq siq| read  writ| recv  send|  in   out | int   csw 
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number    @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number    @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number    @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number    @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number     @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number    @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number    @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number       @abstr_number  |  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
      @abstr_number    @abstr_number    @abstr_number     @abstr_number     @abstr_number    @abstr_number |    @abstr_number     @abstr_number B|  @abstr_number M   @abstr_number M|    @abstr_number       @abstr_number  | @abstr_number    @abstr_number  
    

  * See also: @abstr_hyperlink 
  * See also: @abstr_hyperlink 



## Architecture

SRS always use the most simple architecture to support complex transaction. * System arch: the system structure and arch. * Modularity arch: the main modularity of SRS. * Stream arch: the stream dispatch arch of SRS. * RTMP cluster arch: the RTMP origin and edge cluster arch. * Multiple processes arch (by wenjie): the multiple process of SRS. * CLI arch: the cli arch for SRS, api to manage SRS. * Bandwidth specification: the bandwidth test specification of SRS.

### System Architecture
    
    
    +------------------------------------------------------+
    |             SRS(Simple RTMP Server)                  |
    +---------------+---------------+-----------+----------+
    |   API/hook    |   Transcoder  |    HLS    |   RTMP   |
    |  http-parser  |  FFMPEG/x @abstr_number   |  NGINX/ts | protocol |
    +---------------+---------------+-----------+----------+
    |              Network(state-threads)                  |
    +------------------------------------------------------+
    |      All Linux(RHEL,CentOS,Ubuntu,Fedora...)         |
    +------------------------------------------------------+
    

### Modularity Architecture
    
    
    +------------------------------------------------------+
    |             Main(srs/bandwidth/librtmp)              |
    +------------------------------------------------------+
    |           App(Server/Client application)             |
    +------------------------------------------------------+
    |               RTMP(Protocol stack)                   |
    +------------------------------------------------------+
    |      Kernel(depends on Core, provides error/log)     |
    +------------------------------------------------------+
    |         Core(depends only on system apis)            |
    +------------------------------------------------------+
    

### Stream Architecture
    
    
                       +---------+              +----------+
                       + Publish +              +  Deliver |
                       +---|-----+              +----|-----+
    +----------------------+-------------------------+----------------+
    |     Input            | SRS(Simple RTMP Server) |     Output     |
    +----------------------+-------------------------+----------------+
    |    Encoder( @abstr_number )        |   +-> RTMP protocol ----+-> Flash Player |
    |  (FMLE,FFMPEG, -rtmp-+->-+-> HLS/NGINX --------+-> m @abstr_number u @abstr_number  player  |
    |  Flash,XSPLIT,       |   +-> Fowarder ---------+-> RTMP Server  |
    |  ......)             |   +-> Transcoder -------+-> RTMP Server  |
    |                      |   +-> DVR --------------+-> FILE         |
    |                      |   +-> BandwidthTest ----+-> Flash/StLoad |
    +----------------------+                         |                |
    |  MediaSource( @abstr_number )      |                         |                |
    |  (RTSP,FILE,         |                         |                |
    |   HTTP,HLS,    ------+->-- Ingester ----(rtmp)-+-> SRS          |
    |   Device,            |                         |                |
    |   ......)            |                         |                |
    +----------------------+-------------------------+----------------+
    
    Remark:
    ( @abstr_number ) Encoder: encoder must push RTMP stream to SRS server.
    ( @abstr_number ) MediaSource: any media source, which can be ingest by ffmpeg.
    ( @abstr_number ) Ingester: SRS will fork a process to run ffmpeg(or your application) 
    to ingest any input to rtmp, push to SRS.
    

###  @abstr_hyperlink 
    
    
                            +----------+        +----------+
                   +--ATC->-+  server  +--ATC->-+ packager +-+   +---------+
    +----------+   | RTMP   +----------+ RTMP   +----------+ |   | Reverse |    +-------+
    | encoder  +->-+                                         +->-+  Proxy  +-->-+  CDN  +
    +----------+   |        +----------+        +----------+ |   | (nginx) |    +-------+
                   +--ATC->-+  server  +--ATC->-+ packager +-+   +---------+
                     RTMP   +----------+ RTMP   +----------+
    

###  @abstr_hyperlink 

Remark: cluster over edge, see @abstr_hyperlink Remark: cluster over forward, see @abstr_hyperlink 
    
    
    +---------+       +-----------------+     +-----------------------+ 
    + Encoder +--+-->-+  SRS(RTMP Edge) +--->-+     (RTMP Origin)     | 
    +---------+  |    +-----------------+     |   SRS/FMS/NGINX-RTMP  |
                 |                            |    Red @abstr_number /HELIX/CRTMP   |
                 +-------------------------->-+         ......        |
                                              +-----------------------+ 
    Schema# @abstr_number : Any RTMP encoder push RTMP stream to RTMP (origin/edge)server,
        where SRS RTMP Edge server will forward stream to origin.
    
    
    +-------------+    +-----------------+      +--------------------+
    | RTMP Origin +-->-+  SRS(RTMP Edge) +--+->-+  Client(RTMP/HLS)  |
    +-------------+    +-----------------+  |   |  Flash/IOS/Android |
                                            |   +--------------------+
                                            |
                                            |   +-----------------+
                                            +->-+  SRS(RTMP Edge) +
                                                +-----------------+
    Schema# @abstr_number : SRS RTMP Edge server pull stream from origin (or upstream SRS 
        RTMP Edge server), then delivery to Client.
    

### Bandwidth Test Workflow
    
    
       +------------+                    +----------+
       |  Client    |                    |  Server  |
       +-----+------+                    +-----+----+
             |                                 |
             |   connect vhost------------->   |
             |   <-----------result(success)   |
             |                                 |
             |   <----------call(start play)   |
             |   result(playing)---------->    |
             |   <-------------data(playing)   |
             |   <-----------call(stop play)   |
             |   result(stopped)---------->    |
             |                                 |
             |   <-------call(start publish)   |
             |   result(publishing)------->    |
             |   data(publishing)--------->    |
             |   <--------call(stop publish)   |
             |   result(stopped)( @abstr_number )------->    |
             |                                 |
             |   <--------------------report   |
             |   final( @abstr_number )----------------->    |
             |           <END>                 |
    
    @See: class SrsBandwidth comments.
    

Beijing, @abstr_number . @abstr_number   
Winlin
