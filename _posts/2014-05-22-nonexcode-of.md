---
layout: post
title: xCode 없이 oF
date: 2014-05-22 11:42:56.000000000 +02:00
categories: [work]
---
<p><strong>Updated - 23. Mai 2014</strong><br />
- 결국은 Error Message 를 보기가 불편하여 xCode 로 돌아갑니다.<br />
- 간편하고 oF를 소개하기에는 좋을 듯 합니다.</p>

<p><strong>old</strong><br />
기본적으로는 xCode 없이 Build 는 가능합니다.</p>
<p>Terminal 에서<br />
<pre><code><br />
make<br />
make Debug<br />
make RunDebug<br />
make RunRelease<br />
</code></pre><br />
로 간단한게 처리됩니다.</p>
<p>그런데 Editor 에서 auto completions 와 code navigation package 를 사용하기 위해서 xCode 를 사용해야 하지만,<br />
Sublime Text 에서 아래 두가지 패키지를 설치하면<br />
1. SublimeClang<br />
2. Terminal</p>
<p>그것도 가능합니다.</p>
<p>단 Build System을 Make로 변경해야 합니다.</p>
<p>관련 링크는</p>
<p>http://c.takashiaoki.com/post/69201477364</p>
<p>혹은</p>
<p>http://forum.openframeworks.cc/t/openframeworks-and-sublime-2/11118</p>
