# anyRTC-RTMP-OpenSource

@abstr_image 本次开源的客户端基于RTMP协议的推流拉流客户端，采用跨平台架构设计，一套代码支持Android、iOS、Windows等平台。 直播涉及的流程：『音视频采集->编码->传输->解码->音视频渲染』本项目统统包含，这不是软文，这是实实在在的商业级实战代码；无论是你新手还是老司机，我们都热烈欢迎您前来筑码。

# 近期公司战略调整,此开源项目将会更名

# 项目特点

_* @abstr_number ，商业级开源代码，高效稳定 *****_ @abstr_number ，超小内存占有率，移动直播针对性极致优化，代码冗余率极低 _* @abstr_number ，打破平台壁垒，真正的跨平台，一套核心代码支持Android、iOS、Windows等 *****_ @abstr_number ，超过 @abstr_number +Android手机、iOS全平台适配，硬件编解码可保证 @abstr_number %的可用性 _* @abstr_number ，接口极简，推流： @abstr_number 个 拉流： @abstr_number 个 *****_ @abstr_number ，底层库C++核心库代码风格采用：Google code style _* @abstr_number ，极简内核，无需再去深扒复杂的FFMpeg代码 *****_ @abstr_number ，实用主义，那些什么坑什么优化等概念请搜索相关文章 _* @abstr_number ，OpenH @abstr_number 软件编码，FFMpeg软件解码，FAAC/FAAD软件编解码，适配不同系统的硬件编解码统统包含 *****_ @abstr_number ，支持SRS、Nginx-RTMP等标准RTMP服务；同时支持各大CDN厂商的接入 _* @abstr_number ，更多协议支持; ???计划支持rtsp播放???_ *

## 项目展示

@abstr_image . @abstr_image . @abstr_image 

# 为什么开源？

本公司此次开源移动直播解决方案的根本目的：回馈开源社区，特别是SRS和WebRTC项目，大家也可以看到本次开源项目的框架使用了WebRTC，RTMP协议部分使用的是srs_librtmp；这两个开源项目可以说在流媒体领域给予了大家太多，所以适当的回馈是理所应当。

## 编译环境

Android Studio、NDK(支持Windows、Linux、MacOS等Android开发环境) XCode VS @abstr_number 

## 支持的系统平台

Android @abstr_number . @abstr_number 及以上 iOS @abstr_number . @abstr_number 及以上 Windows @abstr_number 及以上

## 支持的CPU架构

Android armv @abstr_number arm @abstr_number iOS armv @abstr_number armv @abstr_number s arm @abstr_number Windows win @abstr_number 、x @abstr_number 

## 第三方库版本

libfaac @abstr_number . @abstr_number libfaad @abstr_number @abstr_number . @abstr_number ffmpeg @abstr_number . @abstr_number libyuv newest openh @abstr_number @abstr_number . @abstr_number . @abstr_number 

## 技术支持

anyRTC官方网址：https://www.anyrtc.io QQ技术交流群： @abstr_number (已满) @abstr_number 群： @abstr_number 联系电话: @abstr_number - @abstr_number - @abstr_number Email:hi@dync.cc

## 版权声明

若本开源项目涉及到其他软件的版权，请及时联系作者进行修正。

## 捐赠

本项目不接受任何形式的捐赠，您的支持就是最大的动力。

## 直播新动向之-在线娃娃机

美女主播的时代逐渐远去，anyRTC把握市场方向推出H @abstr_number 无插件抓娃娃解决方案 https://www.anyrtc.io/home/wawaji 

## 冲顶大会用实时直播效果更好哦

实时直播包含“主播”与“游客”两种模式。 同时支持Web，Android，iOS三端实时直播。 https://www.anyrtc.io/demo/rtcp

## anyRTC开源新动态

公司考虑结合自身的技术特点对此开源项目进行升级改造

## License

AnyRTC-RTMP is available under the GNU license. See the LICENSE file for more info.
