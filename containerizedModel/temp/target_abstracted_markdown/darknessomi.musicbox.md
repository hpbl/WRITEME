# NetEase-MusicBox

**感谢为 MusicBox 的开发付出过努力的 @abstr_hyperlink ！**

高品质网易云音乐命令行版本，简洁优雅，丝般顺滑，基于Python编写。

@abstr_hyperlink 

@abstr_hyperlink 

## 功能特性

@abstr_number . @abstr_number kbps的高品质音乐 @abstr_number . 歌曲，艺术家，专辑检索 @abstr_number . 网易 @abstr_number 个歌曲排行榜 @abstr_number . 网易新碟推荐 @abstr_number . 网易精选歌单 @abstr_number . 网易主播电台 @abstr_number . 私人歌单，每日推荐 @abstr_number . 随心打碟 @abstr_number . 本地收藏，随时加❤ @abstr_number . 播放进度及播放模式显示 @abstr_number . 现在播放及桌面歌词显示 @abstr_number . 歌曲评论显示 @abstr_number . 一键进入歌曲专辑 @abstr_number . 定时退出 @abstr_number . Vimer式快捷键让操作丝般顺滑 @abstr_number . 可使用数字快捷键 @abstr_number . 可使用自定义全局快捷键

### 键盘快捷键

| Key | Effect | | | ----- | --------------- | --------- | | j | Down | 下移 | | k | Up | 上移 | | h | Back | 后退 | | l | Forword | 前进 | | u | Prev page | 上一页 | | d | Next page | 下一页 | | f | Search | 快速搜索 | | [ | Prev song | 上一曲 | | ] | Next song | 下一曲 | | = | Volume + | 音量增加 | | - | Volume - | 音量减少 | | Space | Play/Pause | 播放/暂停 | | ? | Shuffle | 手气不错 | | m | Menu | 主菜单 | | p | Present/History | 当前/历史播放列表 | | i | Music Info | 当前音乐信息 | | ⇧+p | Playing Mode | 播放模式切换 | | a | Add | 添加曲目到打碟 | | ⇧+a | Enter album | 进入专辑 | | g | To the first | 跳至首项 | | ⇧+g | To the end | 跳至尾项 | | z | DJ list | 打碟列表 | | s | Star | 添加到收藏 | | c | Collection | 收藏列表 | | r | Remove | 删除当前条目 | | ⇧+j | Move Down | 向下移动当前项目 | | ⇧+k | Move Up | 向上移动当前项目 | | ⇧+c | Cache | 缓存歌曲到本地 | | , | Like | 喜爱 | | . | Trash FM | 删除 FM | | / | Next FM | 下一FM | | q | Quit | 退出 | | t | Timing Exit | 定时退出 | | w | Quit&Clear | 退出并清除用户信息 |

## 安装

### 必选依赖

@abstr_number . `mpg @abstr_number` 用于播放歌曲，安装方法参见下面的说明

### 可选依赖

@abstr_number . `aria @abstr_number` 用于缓存歌曲 @abstr_number . `libnotify-bin` 用于支持消息提示（Linux平台） @abstr_number . `pyqt python-dbus dbus qt` 用于支持桌面歌词 (Mac 用户需要 `brew install qt --with-dbus` 获取支持 DBus 的 Qt)

### PyPi安装（*nix系统）
    
    
    $ pip( @abstr_number ) install NetEase-MusicBox
    

### Git clone安装master分支（*nix系统）
    
    
    $ git clone https://github.com/darknessomi/musicbox.git && cd musicbox
    $ python( @abstr_number ) setup.py install
    

### macOS安装
    
    
    $ pip( @abstr_number ) install NetEase-MusicBox
    $ brew install mpg @abstr_number
    

### Linux安装

#### Fedora

首先添加 @abstr_hyperlink 源，然后`sudo dnf install musicbox`（通过此方法安装可能仍然需要`pip install -U NetEase-MusicBox`更新到最新版）。

#### Ubuntu/Debian
    
    
    $ (sudo) pip install NetEase-MusicBox
    
    $ (sudo) apt-get install mpg @abstr_number
    

#### Arch Linux
    
    
    $ pacaur -S netease-musicbox-git # or $ yaourt musicbox
    

#### Centos/Red Hat
    
    
    $ (sudo) pip( @abstr_number ) install NetEase-MusicBox
    $ (sudo) wget http://mirror.centos.org/centos/ @abstr_number /os/x @abstr_number _ @abstr_number /Packages/mpg @abstr_number - @abstr_number . @abstr_number . @abstr_number - @abstr_number .el @abstr_number .x @abstr_number _ @abstr_number .rpm
    $ (sudo) yum install mpg @abstr_number - @abstr_number . @abstr_number . @abstr_number - @abstr_number .el @abstr_number .x @abstr_number _ @abstr_number .rpm
    

## 配置和错误处理

配置文件地址: `~/.netease-musicbox/config.json` 可配置缓存，快捷键，消息，桌面歌词。 由于歌曲 API 只接受中国大陆地区访问，非中国大陆地区用户请自行设置代理（可用polipo将socks @abstr_number 代理转换成http代理）：

@abstr_code_section 

显示IP属于中国大陆地区即可。

### 已测试的系统兼容列表

| OS | Version | | -------- | --------------------- | | macOS | @abstr_number . @abstr_number / @abstr_number . @abstr_number / @abstr_number . @abstr_number | | Ubuntu | @abstr_number . @abstr_number | | Kali | @abstr_number . @abstr_number . @abstr_number / @abstr_number . @abstr_number / Rolling | | CentOS | @abstr_number | | openSUSE | @abstr_number . @abstr_number | | Fedora | @abstr_number | | Arch | Rolling |

### 错误处理

当某些歌曲不能播放时，总时长为 @abstr_number : @abstr_number 时，请检查是否为版权问题导致。

如遇到在特定终端下不能播放问题，首先检查 **此终端** 下mpg @abstr_number 能否正常使用，其次检查 **其他终端** 下musicbox能否正常使用，报告issue的时候请告知以上使用情况以及出问题终端的报错信息。

同时，您可以通过`tail -f ~/.netease-musicbox/musicbox.log`自行查看日志。 mpg @abstr_number 最新的版本可能会报找不到声音硬件的错误，测试了 @abstr_number . @abstr_number . @abstr_number 版本可以正常使用。

### 已知问题及解决方案

  * @abstr_hyperlink i @abstr_number wm下播放杂音或快进问题，此问题常见于Arch Linux。尝试更改mpg @abstr_number 配置。
  * @abstr_hyperlink @abstr_number 位Python下cookie时间戳超出了 @abstr_number 位整数最大值。尝试使用 @abstr_number 位版本的Python或者拷贝cookie文件到对应位置。
  * @abstr_hyperlink 暂停时间超过一定长度（数分钟）之后mpg @abstr_number 停止输出，导致切换到下一首歌。此问题是mpg @abstr_number 的bug，暂时无解决方案。
  * @abstr_hyperlink 版权问题，master分支已经修复



## 使用
    
    
    $ musicbox
    

Enjoy it !

## 更新日志

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 修复多处错误

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 修复多处播放错误

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 修复配置文件错误

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 全部迁移到新版api，大量错误修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 更新依赖，错误修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 更新获取歌曲列表的api

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 修正mpg @abstr_number 状态异常导致的cpu占用，增加歌词双行显示功能

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 修复通知可能造成的崩溃

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 邮箱用户登录修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 登录接口修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 新增背景色设置

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 已知错误修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 新增进入歌曲专辑功能

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 新增查看歌曲评论

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number keybinder 错误修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 已知错误修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 已知错误修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number Python @abstr_number 和 @abstr_number 支持

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 修复最后一行歌名过长的问题

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 缓存问题修复

@abstr_number - @abstr_number - @abstr_number 版本 @abstr_number . @abstr_number . @abstr_number . @abstr_number 解决通知在Gnome桌面持续驻留（# @abstr_number ）的问题

@abstr_hyperlink 

## MIT License

Copyright (c) @abstr_number omi 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
