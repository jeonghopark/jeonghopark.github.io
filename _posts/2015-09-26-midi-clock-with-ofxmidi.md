---
layout: post
title: MIDI Clock with ofxMIDI
date: 2015-09-26T19:06:26.000Z
categories: [work]
---

<a href="https://github.com/jeonghopark/ofxMidi" title="ofxMIDI">ofxMIDI download Link</a>
이 링크 버젼은 oF 0.9, Xcode 7, OS 10.11 에서 테스트 하였다.

MIDI Clock from other MIDI Applications (Ableton Live, Logic...)
required ofxMIDI <a href="https://github.com/jeonghopark/ofxMidi" title="ofxMIDI">ofxMIDI download Link</a>

I have used basic code from <a href="http://forum.openframeworks.cc/index.php/topic,8667.0.html" title="http://forum.openframeworks.cc/index.php/topic,8667.0.html">openframeworks forum thread link</a>

기본적인 셋팅은 exampleInput 과 같다.
다만, 타임코드를 싱크를 하기위해서 다음과 같이 기본 소스를 변경하였다.

다른 미디시쿼싱프로그램에서 미디타임코드를 맞추어주면 MIDI TimeCode 와 Clock 신호를 받을 수 있다.
이렇게 할 경우 단순한 Trigger 신호만 들어오므로 카운터로 처리를 하였다.

in "ofxMidiMessage.h"
<script src="https://gist.github.com/jeonghopark/f8147c8b8ddfbe64e55a.js"></script>

in "ofxMidiMessage.cpp"
<script src="https://gist.github.com/jeonghopark/f213a32f877257cb3a63.js"></script>

in "ofApp.h"
<script src="https://gist.github.com/jeonghopark/7ca5b7e3a32a1595d382.js"></script>

in "ofApp.cpp"
<script src="https://gist.github.com/jeonghopark/cadec2a5fe3d81e944ab.js"></script>
