---
layout: post
title: 2016-02-10 Raspberry Pi + Mac
date: 2016-02-10 17:53 +01:00
categories: [work]
---
<hr>
**2016-02-16 14:18**    
여러가지 시행착오 끝에 다음과 같은 결론.  

- x11vnc 는 굳이 설치 할 필요가 없다.   
- 모든 RP2 셋팅은 sudo raspi-config 에서 할 것.   
- startx 자동 시작도 필요 없음.   
- 맥에서 cmd + k 로 afp://169.254.*.*  로 연결하고 코드는 맥에서 작성.  


<hr>
**2016-02-11 16:00**    
여섯번째로 Terminal 에서 이것저것 하기 보다는,   
맥에서 cmd + k 로 afp://169.254.*.*  로 연결하여   
맥 파인더 상에서 작업이 더 순조롭다.   


<hr>
**2016-02-11 15:51**    
일단 keyboard 입력은 TerminalListener 로 해결.   


ofApp.h    

~~~~~~
#include "TerminalListener.h"

class ofApp : public ofBaseApp, public KeyListener{

    // ...

    void onCharacterReceived(KeyListenerEventData& e);
	TerminalListener consoleListener;


}
~~~~~~    
    

ofApp.cpp    

~~~~~~
void ofApp::setup(){

	consoleListener.setup(this);
    //...
    
}


void ofApp::onCharacterReceived(KeyListenerEventData& e)
{
	keyPressed((int)e.character);
}
~~~~~~




<hr>
**2016-02-11 15:20**    
이런... run 이후에 keyboard 나 마우스등의 입력이 안된다.    


<hr>
#### Raspberry Pi 2 + Mac    
만약에 Raspberry Pi 2 를 키보드와 마우스등을 연결해서 사용하고 파일 공유정도로 ssh 를 연결한다면 다음과 같은 설정은 필요없을 것이다.   

여기서는 Raspberry Pi 2 를 서버처럼 사용하는 방법인데, 스크린을 공유하기 위해 쓴다.   
openFrameworks 의 작업시 스크린의 GL 작업들을 직접 봐야만 하는데, vnc나 ssh 의 경우는 실행이 되지 않는다.   
그래서 미러링 방식으로 Raspberry Pi 2를 리모트 조정하는 방식을 사용한다.   


[https://pihw.wordpress.com/guides/direct-network-connection/](https://pihw.wordpress.com/guides/direct-network-connection/)   


첫번째로    
링크의 내용처럼 Raspberry Pi 2의 ip를 설정한다.  

~~~~~~~
$ sudo vim /boot/cmdline.txt

// 맨 마지막에 줄에 다음과 같은 아이피 설정을 해준다.
ip=169.254.*.*
~~~~~~~

두번째로   
만약 Raspberry Pi 2를 재시동하게 되면 위의 아이피 주소로 설정되고   
다음과 같이 Mac의 Terminal 에서

~~~~~~~
$ ssh pi@169.254.*.*
~~~~~~~

ssh 로 연결할 수 있게 된다.    



세번째로    
x11vnc 를 설치한다. 보통은 tightVnc 를 설정하는 것 같은데, 그 경우 아마도 스크린 미러 방식이 지원 안되는 듯 하다.    
이후 자동으로 Raspberry Pi 2에 전원이 들어 왔을때 자동으로 x11vnc.desktop가 실행되도록 하기 위한 설정들을 한다.

~~~~~~~
$ sudo pat-get install x11vnc    
$ startx    
$ x11vnc -storepasswd    
$ mkdir /home/pi/.config/autostart    
$ vim /home/pi/.config/autostart/x11vnc.desktop    
    
    
// 아래 내용 입력
[Desktop Entry]    
Encoding=UTF-8     
Type=Application     
Name=X11VNC    
Exec=x11vnc -bg -nevershared -forever -tightfilexfer -usepw -display :0    
StartupNotify=false    
Terminal=false     
Hidden=false    
~~~~~~~

이렇게 되면 전원이 들어 오면 자동으로 x11vnc 로 부팅이된다.   



네번째로    
ssh 로 연결된 상테는 그대로 둔 상태로 Mac의 새 Terminal 창을 열어    

~~~~~~~
$ open vnc://pi@169.254.*.*:5900
~~~~~~~

을 입력하면   
Mac 의 Screen Sharing이 자동으로 실행되고, 이 창은 Raspberry Pi 2 의 LCD 와 Mirroring 상태가 되어서 마우스등 화면에 보이는 것이 그대로 보여진다.



다섯번째로    
oF 작업은 코드쓰는 작업은 실제 맥에서 다른 에디터로 하고, 빌드와 실행은 Screeen Sharing 의 상태에서 한다.
oF 의 대부분의 작업은 GL 이기 때문에 이것은 ssh 또는 vnc 로 다른 vnc 로 넘어 가지 않는다.



일단 Text 로 정리한다. 이미지는 나중에.
