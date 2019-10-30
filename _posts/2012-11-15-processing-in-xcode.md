---
layout: post
title: Processing in XCode
date: 2012-11-15 02:53:52.000000000 +01:00
categories: [work]
---
<p>프로세싱을 Xcode 에서 동작하게 하는 법.<br />
장점은 그냥 편한 에디터에서 작업한다는 것과 좀 있어보인다는 것... 전체 프로젝트로 클래스가 나누어질때 관리가 좀 편하다는 것... 또한 버젼관리가 무지 편해젔다는 점...<br />
단점은 굳이 이렇게 까지 써야 하나? 하는 고민. 코드에 입혀지는 글자색이 지원이 안되어서 불편 (이건 대충 하나 만들어서 쓰고 있음...), 몇번의 귀찮은 셋팅을 해야 하고... (이것도 기본 템플릿을 복사해서 쓰는 중...)<br />
그렇지만 버젼관리 때문에 계속 사용할 듯...<br />
방법은... 좀 까다로운 편... (물론 템플릿을 만들어서 openframeworks 처럼 복사해서 사용하면 편리.)</p>
<p>결론은 버젼관리가 깨끗해졌다는 것과 변수명등 이것저것 찾는 기능이 좋은 XCode 덕분에 Class 사용이 좀 더 편해졌다는 것...<br />
작은 것들 특히 학생들을 위한 작은 샘플 버젼들은 그냥 IDE 사용이 편리.</p>
<p>=======================================================<br />
0. 프로세싱 최신 베타 버젼을 설치 후에... "Processing-Java" 를 Processing Tools 에서 설치.</p>
<p>1. XCode 에서 처음 프로젝트를 만들 때 in Other 에서 "External Build System" 을 선택</p>
<p>2. Build Tool 에 /usr/bin/processing-java</p>
<p><img src="/assets/Screen-Shot-2012-11-15-at-2.10.57-AM.png" width="528" height="186" /></p>
<p>&nbsp;</p>
<p>3. local git 로 Source Control 을 하고 싶으면 이것을 꺼서 수동으로 셋팅.</p>
<p><img src="/assets/Screen-Shot-2012-11-15-at-2.12.52-AM.png" width="481" height="98" /></p>
<p>&nbsp;</p>
<p>4. Target Build Setting 에서 Add Build Setting 를 하여 아래와 같이 셋팅.</p>
<p><img src="/assets/Screen-Shot-2012-11-15-at-2.15.30-AM.png" width="692" height="145" /></p>
<p><img src="/assets/Screen-Shot-2012-11-15-at-2.16.21-AM-620x140.png" width="620" height="140" /></p>
<p>&nbsp;</p>
<p>5. Edit Scheme 에서 아래 그림과 같이 똑같이 만들 것.<br />
Executable 에서 Processing-Java 를 잘 찾을 것. (usr/bin/ 에 있음.)</p>
<p><img src="/assets/Screen-Shot-2012-11-15-at-2.18.27-AM-620x285.png" width="620" height="285" /></p>
<p><a href="/assets/Screen-Shot-2012-11-15-at-2.18.18-AM.png"><br />
<img src="/assets/Screen-Shot-2012-11-15-at-2.18.18-AM.png" width="557" height="203" /></p>
<p>&nbsp;</p>
<p>6. Edit Scheme 의 Arguments 의 셋팅도 아래 그림과 같이.<br />
output 은 다른 폴더로 해도 되지만 프로세싱 스케치 폴더와 같으면 에러가 남.</p>
<p><img src="/assets/Screen-Shot-2012-11-15-at-2.21.48-AM-620x376.png" width="620" height="376" /></p>
<p>&nbsp;</p>
<p>7. 새로운 Empty File 을 만들어서 폴더 이름과 똑같이 파일.pde 를 만들어서 프로세싱 코드를 쓰고 XCode 상에서 Run</p>
<p>8. 제대로 모든 셋팅이 잘 되었으면 프로세싱 IDE 없이 바로 실행 됨. 또한 디버그 메세지 혹은 기타 println 메시지도 output 에서 볼 수 있음.</p>
<p><img src="/assets/Screen-Shot-2012-11-15-at-2.24.23-AM1-620x385.png" width="620" height="385" /></p>
<p>=======================================================<br />
만약 Source Control 를 하고 싶으면...<br />
9. 먼저 local git 를 설정<br />
Terminal 에서 해당 폴더로 cd 한 후에<br />
.gitignore 파일을 만들어서 git에 연결시키지 않을 파일들의 목록을 적어 넣고...<br />
(대략 *.jpg, *.jpeg, *.mov, *.xcodeproj, build-tmp/*, *.tif, data/, data/* 이 정도?)<br />
git init<br />
git add .<br />
git status 를 최종적으로 하면 *.pde 가 설정된 것을 확인할 수 있고<br />
이제 Xcode 에서 편집하면서 git commit 를 local 로 설정하고 버젼관리와 좀더 쾌적한 환경에서 작업 가능...</p>
<p>=======================================================<br />
10. sublime text2 는 좀 비쌈. Textmate 는 Command line Tool 로 가능한데... 실행하면서 동시에 편집이 불가능함...(이건 확실하지는 않음.) 혹은 옛날 Buildsetting 을 쓰면 되기는 하는데... 뭔가 안 좋음...</p>
<p>11. Eclipse 나 Netbean 은 core.jar 등을 붙여야 하고 프로세싱 코드가 IDE 상에서의 코드랑 살짝 틀려져서 귀찮음.</p>
<p>12. 사실 Syntax Coloring 이 지원이 안되기 때문에 Syntax 를 하나 설정해 주어야 만 함.<br />
보통은 C++ 나 C 가 가장 잘 맞는데 Java 는 Indent 가 안 맞음 :-(.<br />
만약 Processing 을 위해 쓰고 싶으면 다른 언어의 셋팅을 가져와서 편집하면 됨. <a href="https://github.com/bastos/lua-xcode-coloring">https://github.com/bastos/lua-xcode-coloring</a> 여기서 참고하였고 본인은 GLSL 의 언어 셋팅을 변경해서 위의 방법으로 설치하였음.</p>
<p>13. 모든 설정이 잘 되면 변수명 함수명 등을 자동으로 쓸 수 있고 (물론 설명이나 기타 기능은 없음.) 만들어 놓은 변수명도 또한 찾을 수 있음.<br />
<img src="/assets/Screen-Shot-2012-11-16-at-8.18.11-PM.png" width="299" height="183" /></p>
