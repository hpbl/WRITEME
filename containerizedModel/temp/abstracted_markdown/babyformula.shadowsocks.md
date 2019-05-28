# shadowsocks

@abstr_hyperlink @abstr_hyperlink @abstr_hyperlink 

A fast tunnel proxy that helps you bypass firewalls.

Features: \- TCP & UDP support \- User management API \- TCP Fast Open \- Workers and graceful restart \- Destination IP blacklist

## Server

### Install

Debian / Ubuntu:
    
    
    apt-get install python-pip
    pip install shadowsocks
    

CentOS:
    
    
    yum install python-setuptools && easy_install pip
    pip install shadowsocks
    

Windows:

See [Install Server on Windows]

### Usage
    
    
    ssserver -p  @abstr_number  -k password -m aes- @abstr_number -cfb
    

To run in the background:
    
    
    sudo ssserver -p  @abstr_number  -k password -m aes- @abstr_number -cfb --user nobody -d start
    

To stop:
    
    
    sudo ssserver -d stop
    

To check the log:
    
    
    sudo less /var/log/shadowsocks.log
    

Check all the options via `-h`. You can also use a [Configuration] file instead.

## Client

  * [Windows] / [OS X]
  * [Android] / [iOS]
  * [OpenWRT]



Use GUI clients on your local PC/phones. Check the README of your client for more information.

## Documentation

You can find all the documentation in the [Wiki].

## License

Copyright @abstr_number clowwindy

Licensed under the Apache License, Version @abstr_number . @abstr_number (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
    
    
    http://www.apache.org/licenses/LICENSE- @abstr_number . @abstr_number
    

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## Bugs and Issues

  * [Troubleshooting]
  * [Issue Tracker]
  * [Mailing list]



# shadowsocks
