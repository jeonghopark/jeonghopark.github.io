---
layout: post
title: QuartzComposer 글 업데이트. 그리고 Voice Synth Composition
date: 2013-02-04 11:39:33.000000000 +01:00
categories: [work]
---
<p>한 동안 쿼츠컴포저 관련 글을 안 올렸는데,<br />
이유는 애플에서 이 프로그램에 대한 지원도 신통치 않고 (곧 없어진다 아니다 라는 말이 키네메포럼에서 1년여 동안 있었는데...)<br />
원도우에서 실행도 불가능하여 학교 학생들에게 가르쳐 주기도 뭐 하고 (이건 결정적인 문제이다. 모두 다 맥을 사용한다면 문제없지만...)<br />
또한 그냥 훨훨 날리는 파티클은 가능한데 인터액티브 파티클 작업이 힘들기도 하고... (이건 플러그인들을 찾던지 만들면 되는데 귀찮고...)<br />
하여 쿼츠 컴포저와 소홀히 지냈는데,</p>
<p>가끔 여기 오시는 분들의 검색어가 쿼츠컴포저인 것을 보면<br />
그 동안 작업하느라 스케치 해 놓은 것 들을 자주 풀어 놓아야 할 것 같은 생각이 든다.</p>
<p>그래서 첫번째...<br />
항상 그렇듯이 대단한 것은 아니고...</p>
<p>textSynthesizer</p>
<p>text 파일을 읽어서 한 칸 띄어쓰기가 있으면 다음 단어로 건너 뛰어 다음 단어를 읽어준다.<br />
이 방식은 맥에 기본적으로 내장된 텍스트읽기와 동일하며 보이스의 선택도 가능하고<br />
보이스 갯수가 몇 개라도 상관 없을 듯... (합창???도 가능)</p>
<ol>
<li>필요한 플러그인은 kineme 기본 플러그인 (kineme.net 에서 다운 받아 설치) 이 반드시 필요.</li>
<li>압축된 파일안에 있는 SpeechSynthesis.plugin 플러그인을 graphics/quartz composer plug-ins 에 설치.<br />
혹은 kineme 또는 Apple Development 에서 source code를 찾을 수 있음.</li>
<li>텍스트 파일은 컴포지션 파일과 같은 폴더에 있는 것이 좋으면 다른 곳에 위치하려면 폴더 kineme string with file 에 같이 적어야 함.</li>
<li>
<p>한글은 아마도 가능은 하겠지만 텍스트 파일을 읽고 불러오는 것에 따라 문제가 있을 듯...</p>
</li>
<li>
<p>signal patch 또는 structure index member 의 index 를 다른 장치 (아르두이노, 미디...)과 연결하면 또 다른 방식으로 가능 함.<br />
<img src="/assets/trigger.png" alt="trigger" width="570" height="152" class="alignnone size-full wp-image-3626" /></p>
</li>
<li>
<p><a href="https://db.tt/A7jSadxU">textSpeech donwload</a></p>
</li>
</ol>
