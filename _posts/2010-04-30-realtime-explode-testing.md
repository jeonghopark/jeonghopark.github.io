---
layout: post
title: Realtime Explode Testing…
date: 2010-04-30 23:48:18.000000000 +02:00
categories: [work, code, quartzcomposer]
---
<p>유리가 깨지는 효과를 실시간으로 구현하는 것은 어떨까? 하는 호기심에 테스트 버젼을 만들어 봅니다.</p>
<p>Ich habe ein TestVesion-Installtion gemacht. hmmm... Das ist nur ein Spaß und eine Neugier für mich...! So entscheide ich nicht, ob ich die Installtion noch weiter mache oder nicht. Aber während ich sie gemacht habe, habe ich gute ein paar Beispiel und eine Programmierung gefunden.</p>

<iframe src="//player.vimeo.com/video/11366852" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


<p>1. Kineme Explode patch 의 PlugIn 효과는 편하고 좋기는 한데 단순합니다. 물론 미리 깨지게 되는 효과를 만드는 Objects들을 다양하게 변형할 수 있다면 좀 더 효과가 근사하겠지만 - 여기서는 3ds 로 세개 정도를 구현했습니다만 문제는 그 조각되어지는 단위가 결국은 3D 의 Tri 하나의 단위입니다. - 그 Objects들의 Output을 분석하여서 효과적으로 만들고 앉아 있는 건 별로 할 짓이 아닌 듯 싶습니다. - 참고로 어떤 친구가 아마도 이 방식으로 종이가 찢어지는 듯한 효과를 만들었었습니다. http://vimeo.com/6778516 )</p>
<p>2. 파편들이 날아가고 떨어지는 효과가 좀더 근사하기 위해서는 물리엔진이 필요할 듯해서 Javascript용 물리엔진 라이브러리를 찾아보았지만 이것을 QuartzComposer 내에서의 프로그램 방식으로 굳이 구현한다는 것도 괜한 짓 하는 것 같아 보입니다. - 덕분에 Javascript 용 물리엔진들을 잠시 살펴볼 기회를... http://box2d-js.sourceforge.net/</p>
<p>3. 이 영상을 찍은 날 잠시 웹에서 조사를 해보니... LCD 모니터에서 조그마한 Installtion으로 잘 구현된 게 있더군요... 그런데 아마도 그 작품들은 OpenFrameWorks 로 만들어 진 것 같네요. (궁금하시면.. 이리로.. http://vimeo.com/11160574. 4분15초 정도 부터 보셔도 됩니다.)</p>
<p>그래서 OpenFrameWorks 와 Object C 로 가야 하나? 또는 Cocoa 로 QuartzComposer 의 Standalone Application 을 만드는 방향으로 가야하나? 이 두가지 방향이 아닐까 하는 생각이 듭니다. 두가지가 뭐 결국은 같은 이야기네요...</p>
