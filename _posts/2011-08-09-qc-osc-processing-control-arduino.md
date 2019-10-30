---
layout: post
title: QC(Quartz Composer) + OSC + Processing ===> control Arduino !!
date: 2011-08-09 22:48:31.000000000 +02:00
categories: [work, quartzcomposer]
---
<p>결국 새로운 프로젝트를 위해 이것저것 해보다가 이 방법이 일단은 제일 간편한 듯... OSC로 연결하여 QC 에서 Arduino의 Output 등을 콘트롤 하는 방법인데 이번 프로토타입이 끝나면 코드 공개... 이렇게 되면 Processing 의 오디오 기능과 몇가지 인터액티브 관련 Library 를 이용할 수 있겠군...</p>
<p>간단하게 좀더 이야기 하면 Processing 에 oscP5 로 OSC Library 를 설치하여 QC의 oscsender 와 oscreceiver 로 데이터를 교환하는 방식이다. (이 두개의 Patch 가 에러가 있기는 하지만...)</p>
