---
layout: post
title: RandomBoxLine JavsScript Code
date: 2010-02-21 10:49:07.000000000 +01:00
categories: [quartzcomposer, work]
---
<p>JavaScript 를 이용한 randomBoxLine을 그리는 QuartzComposer Composition. Kineme Core PlugIn 이 필수입니다.</p>
<p>JavaScript는 내 마음대로 코드이므로 참고용이라고 보시면 됩니다. 코드는 9개 점의 (X,Y) 값을 Array 로 저장하고 그 Array 를 Index 를 Random으로 불러와 Structure를 만들어 줍니다.</p>
<p>GL Line Structure 는 두 점의 좌표가 주어졌을때 하나의 직선을 그려줍니다. 좌표가 그려지는 순서는 OpenGL의 Line을 그리는 방법을 참고하면 됩니다. 여기서는 Line Strip 을 사용하고 두 점의 순서가 Array 에서 쌍으로 이루어져야 하기 때문에 JavaScript 에서 Array의 순서를 교대로 정해주었습니다.</p>
<p>GL Structure 로 그림을 그리려고 했을때 처음엔 무척이나 헷갈렸습니다. 동작 방법에 대한 참고할만한 텍스트도 없었고 제대로 동작하기 위해서는 JavaScript 와 OpenGL 에 대한 아주 초보적인 기초지식이 필요하기 때문이죠.</p>
<p>QuartzComposer 에서 GL Structure 를 이용하여 Line, Triangle, Quad 를 그릴때 다른 프로그램의 경우 Run 이나 Build 가 필요하지만 QuartzComposer 에서는 실시간으로 변하는 것을 확인 가능해서 편리합니다만, 간혹 JavaScript 코드가 무한루프등의 에러를 만들면 작업중 에러를 발생시킵니다. Processing 보다도 선의 모습이 깨끗합니다.</p>
<p><a href="http://jeonghopark.de/media/randomBoxLine.qtz">QTZ Download - Link</a></p>
<p><img src="/assets/randomBoxLine021.jpg" alt="randomBoxLine02.jpg" width="450" height="253" class="alignnone size-full wp-image-2141" /></p>
