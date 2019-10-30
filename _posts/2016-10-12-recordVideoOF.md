---
layout: post
title: 2016-10-12 10:41 Video Record openFrameworks
date: 2016-10-12 10:41 +01:00
categories: [work]
---
**2016-10-13 21:31**    
ofxVideoRecorder 제법 쓸만하다.

**2016-10-12 10:41**        
비디오 레코딩 관련.         
quicktime 문제로 더이상 기본 example에 있는 videorecord 는 동작 안 함.         

ofxAVFVideoRecorder 의 경우에는 처음만 녹화가 되고 두번째 부터는 동작 안 함.    
개발자도 손 놓고 있음.           

일단 현재로서는        
FFmpeg 을 이용한 [ofxVideoRecorder](https://github.com/timscaffidi/ofxVideoRecorder) 가 안정적인 듯.       
    
    brew install ffmpeg
    
로 FFmpeg codec 을 먼저 인스톨 할 것.            
