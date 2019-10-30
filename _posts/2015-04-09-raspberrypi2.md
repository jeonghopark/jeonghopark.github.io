---
layout: post
title: Raspberry Pi 2 - update
date: 2015-04-09 13:11:00
categories: [work]
---
It will take about 45 mins to finish this.  Fast and simple :-)    

<hr>
**Install Rasberry Pi**    
default setting by Raspberry PI 2 Website
http://www.raspberrypi.org/downloads/

<hr>
**Install openFrameworks in direct RPI2**    
More better Method. (Update Drivers...)    
http://forum.openframeworks.cc/t/raspberry-pi-2-setup-guide/18690     

~~download linuxarm7 version from openFrameworks.cc~~      

~~cd /home/pi/openFrameworks/scripts/linux/debian/~~     
~~sudo ./install_dependencies.sh~~     

~~copy config.linuxarmv6l.default.mk (in linuxarm6 version) to libs/openFrameworksCompiled/project/linuxarmv7l~~     

~~change name to config.linuxarmv7l.rpi2.mk~~    

~~change armv6l to armv7-a in config.linuxarmv7l.rpi2.mk~~    

~~cd libs/openFrameworksCompiled/project~~     

```
$ export MAKEFLAGS="-j4 -s PLATFORM_VARIANT=rpi2"     
$ make Release~~     
```

then
example work     

![/assets/images/ofPi_01.jpg](/assets/images/ofPi_01.jpg)

![/assets/images/ofPi_02.jpg](/assets/images/ofPi_02.jpg)