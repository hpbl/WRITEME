# Udp @abstr_number raw-tunnel

A Tunnel which turns UDP Traffic into Encrypted FakeTCP/UDP/ICMP Traffic by using Raw Socket, helps you Bypass UDP FireWalls(or Unstable UDP Environment). It can defend Replay-Attack and supports Multiplexing. It also acts as a Connection Stabilizer.

@abstr_image 

When used alone,udp @abstr_number raw tunnels only UDP traffic. Nevertheless,if you used udp @abstr_number raw + any UDP-based VPN together,you can tunnel any traffic(include TCP/UDP/ICMP),currently OpenVPN/L @abstr_number TP/ShadowVPN and @abstr_hyperlink are confirmed to be supported.

@abstr_image 

简体中文(内容更丰富)

@abstr_hyperlink 

# Support Platforms

Linux host (including desktop Linux,Android phone/tablet,OpenWRT router,or Raspberry PI) with root access.

For Windows and MacOS users, use the udp @abstr_number raw in @abstr_hyperlink .

~~For Windows and MacOS You can run udp @abstr_number raw inside @abstr_hyperlink @abstr_number . @abstr_number mb virtual machine image(make sure network adapter runs at bridged mode).~~

# Features

### Send/Receive UDP Packets with ICMP/FakeTCP/UDP headers

ICMP/FakeTCP headers help you bypass UDP blocking, UDP QOS or improper UDP NAT behavior on some ISPs. In ICMP header mode,udp @abstr_number raw works like an ICMP tunnel.

UDP headers are also supported. In UDP header mode, it behaves just like a normal UDP tunnel, and you can just make use of the other features (such as encryption, anti-replay, or connection stalization).

### Simulated TCP with Real-time/Out-of-Order Delivery

In FakeTCP header mode,udp @abstr_number raw simulates @abstr_number -way handshake while establishing a connection,simulates seq and ack_seq while data transferring. It also simulates following TCP options: `MSS`, `sackOk`, `TS`, `TS_ack`, `wscale`.Firewalls will regard FakeTCP as a TCP connection, but its essentially UDP: it supports real-time/out-of-order delivery(just as normal UDP does), no congestion control or re-transmission. So there wont be any TCP over TCP problem when using OpenVPN.

### Encryption, Anti-Replay

  * Encrypt your traffic with AES- @abstr_number -CBC.
  * Protect data integrity by HMAC-SHA @abstr_number (or weaker MD @abstr_number /CRC @abstr_number ).
  * Defense replay attack with an anti-replay window, smiliar to IPSec and OpenVPN.



### Failure Dectection & Stablization (Connection Recovery)

Conection failures are detected by heartbeats. If timed-out, client will automatically change port number and reconnect. If reconnection is successful, the previous connection will be recovered, and all existing UDP conversations will stay vaild.

For example, if you use udp @abstr_number raw + OpenVPN, OpenVPN won't lose connection after any reconnect, **even if network cable is re-plugged or WiFi access point is changed**.

### Other Features

  * **Multiplexing** One client can handle multiple UDP connections, all of which share the same raw connection.

  * **Multiple Clients** One server can have multiple clients.

  * **NAT Support** All of the @abstr_number modes work in NAT environments.

  * **OpenVZ Support** Tested on BandwagonHost VPS.

  * **Easy to Build** No dependencies.To cross-compile udp @abstr_number raw,all you need to do is just to download a toolchain,modify makefile to point at the toolchain,run `make cross` then everything is done.(Note:Pre-compiled binaries for Desktop,RaspberryPi,Android,some Openwrt Routers are already included in @abstr_hyperlink )




### Keywords

`Bypass UDP QoS` `Bypass UDP Blocking` `Bypass OpenVPN TCP over TCP problem` `OpenVPN over ICMP` `UDP to ICMP tunnel` `UDP to TCP tunnel` `UDP over ICMP` `UDP over TCP`

# Getting Started

### Installing

Download binary release from https://github.com/wangyu-/udp @abstr_number raw-tunnel/releases

### Running

Assume your UDP is blocked or being QOS-ed or just poorly supported. Assume your server ip is @abstr_number . @abstr_number . @abstr_number . @abstr_number , you have a service listening on udp port @abstr_number .

@abstr_code_section (The above commands need to be run as root. For better security, with some extra steps, you can run udp @abstr_number raw as non-root. Check @abstr_hyperlink for more info )

###### Server Output:

@abstr_image 

###### Client Output:

@abstr_image 

Now,an encrypted raw tunnel has been established between client and server through TCP port @abstr_number . Connecting to UDP port @abstr_number at the client side is equivalent to connecting to port @abstr_number at the server side. No UDP traffic will be exposed.

### Note

To run on Android, check Android_Guide

`-a` option automatically adds an iptables rule (or a few iptables rules) for you, udp @abstr_number raw relys on this iptables rule to work stably. Be aware you dont forget `-a` (its a common mistake). If you dont want udp @abstr_number raw to add iptables rule automatically, you can add it manually(take a look at `-g` option) and omit `-a`.

# Advanced Topic

### Usage

@abstr_code_section 

### Iptables rules,`-a` and `-g`

This program sends packets via raw socket. In FakeTCP mode, Linux kernel TCP packet processing has to be blocked by a iptables rule on both sides, otherwise the kernel will automatically send RST for an unrecongized TCP packet and you will sustain from stability / peformance problems. You can use `-a` option to let the program automatically add / delete iptables rule on start / exit. You can also use the `-g` option to generate iptables rule and add it manually.

### `--cipher-mode` and `--auth-mode`

It is suggested to use `aes @abstr_number cbc` \+ `hmac_sha @abstr_number` to obtain maximum security. If you want to run the program on a router, you can try `xor` \+ `simple`, which can fool packet inspection by firewalls the most of time, but it cannot protect you from serious attacks. Mode none is only for debugging purpose. It is not recommended to set the cipher-mode or auth-mode to none.

### `--seq-mode`

The FakeTCP mode does not behave @abstr_number % like a real tcp connection. ISPs may be able to distinguish the simulated tcp traffic from the real TCP traffic (though it's costly). seq-mode can help you change the seq increase behavior slightly. If you experience connection problems, try to change the value.

### `--lower-level`

`--lower-level` allows you to send packet at OSI level @abstr_number (link level),so that you can bypass any local iptables rules. If you have a complicated iptables rules which conflicts with udp @abstr_number raw and you cant(or too lazy to) edit the iptables rules,`--lower-level` can be very useful. Try `--lower-level auto` to auto detect the parameters,you can specify it manually if `auto` fails.

Manual format `if_name#dest_mac_adress`,ie:`eth @abstr_number # @abstr_number : @abstr_number : @abstr_number : @abstr_number : @abstr_number :b @abstr_number`.

### `--keep-rule`

Monitor iptables and auto re-add iptables rules(for blocking kernel tcp processing) if necessary.Especially useful when iptables rules may be cleared by other programs(for example,if you are using openwrt,everytime you changed and commited a setting,iptables rule may be cleared and re-constructed).

### `--conf-file`

You can also load options from a configuration file in order to keep secrets away from `ps` command.

For example, rewrite the options for the above `server` example (in Getting Started section) into configuration file:

`server.conf`

@abstr_code_section 

Pay attention to the `-k` parameter: In command line mode the quotes around the password will be removed by shell. In configuration files we do not remove quotes.

Then start the server with

@abstr_code_section 

### `--fifo`

Use a fifo(named pipe) for sending commands to the running program. For example `--fifo fifo.file`.

At client side,you can use `echo reconnect >fifo.file` to force client to reconnect.Currently no command has been implemented for server.

# Peformance Test

#### Test method:

iperf @abstr_number TCP via OpenVPN + udp @abstr_number raw (iperf @abstr_number UDP mode is not used because of a bug mentioned in this issue: https://github.com/esnet/iperf/issues/ @abstr_number . Instead, we package the TCP traffic into UDP by OpenVPN to test the performance. Read @abstr_hyperlink for details.

#### iperf @abstr_number command:

@abstr_code_section 

#### Environments

  * **Client** Vultr $ @abstr_number . @abstr_number /monthly plan (single core @abstr_number . @abstr_number GHz cpu, @abstr_number MB RAM, Tokyo, Japan)
  * **Server** BandwagonHost $ @abstr_number . @abstr_number /annually plan (single core @abstr_number . @abstr_number GHz cpu, @abstr_number MB RAM, Los Angeles, USA)



### Test @abstr_number

raw_mode: faketcp cipher_mode: xor auth_mode: simple

@abstr_image 

(reverse speed was simliar and not uploaded)

### Test @abstr_number

raw_mode: faketcp cipher_mode: aes @abstr_number cbc auth_mode: md @abstr_number 

@abstr_image 

(reverse speed was simliar and not uploaded)

# Application

## Tunneling any traffic via raw traffic by using udp @abstr_number raw +openvpn

@abstr_image @abstr_number . Bypasses UDP block/UDP QOS

@abstr_number . No TCP over TCP problem (TCP over TCP problem http://sites.inka.de/bigred/devel/tcp-tcp.html ,https://community.openvpn.net/openvpn/ticket/ @abstr_number )

@abstr_number . OpenVpn over ICMP also becomes a choice

@abstr_number . Supports almost any UDP-based VPN

More details at @abstr_hyperlink 

## Speed-up tcp connection via raw traffic by using udp @abstr_number raw+kcptun

kcptun is a tcp connection speed-up program,it speeds-up tcp connection by using kcp protocol on-top of udp.by using udp @abstr_number raw,you can use kcptun while udp is QoSed or blocked. (kcptun, https://github.com/xtaci/kcptun)

## Speed-up tcp connection via raw traffic by using udp @abstr_number raw+finalspeed

finalspeed is a tcp connection speed-up program similiar to kcptun,it speeds-up tcp connection by using kcp protocol on-top of udp or tcp.but its tcp mode doesnt support openvz,you can bypass this problem if you use udp @abstr_number raw+finalspeed together,and icmp mode also becomes avaliable.

# How to build

read build_guide

# Other

### Easier installation on ArchLinux

@abstr_code_section 

# Related work

### kcptun-raw

udp @abstr_number raw was inspired by kcptun-raw,which modified kcptun to support tcp mode.

https://github.com/Chion @abstr_number /kcptun-raw

### relayRawSocket

kcptun-raw was inspired by relayRawSocket. A simple udp to raw tunnel,wrote in python

https://github.com/linhua @abstr_number /some_kcptun_tools/tree/master/relayRawSocket

### kcpraw

another project of kcptun with tcp mode

https://github.com/ccsexyz/kcpraw

### icmptunnel

Transparently tunnel your IP traffic through ICMP echo and reply packets.

https://github.com/DhavalKapil/icmptunnel

### Tcp Minion

Tcp Minion is a project which modifid the code of tcp stack in kernel,and implemented real-time out-order udp packet delivery through this modified tcp stack.I failed to find the implementation,but there are some papers avaliable:

https://arxiv.org/abs/ @abstr_number . @abstr_number 

http://korz.cs.yale.edu/ @abstr_number /tng/papers/pfldnet @abstr_number .pdf

https://pdfs.semanticscholar.org/ @abstr_number e @abstr_number f/e @abstr_number f @abstr_number b @abstr_number eb @abstr_number d @abstr_number fcab @abstr_number e @abstr_number d @abstr_number ba @abstr_number .pdf

# wiki

Check wiki for more info:

https://github.com/wangyu-/udp @abstr_number raw-tunnel/wiki
