---
layout: post
title: ‘Nan’ prototype version from New Project.
date: 2010-09-07 16:24:55.000000000 +02:00
categories: [work, quartzcomposer]
---
<p>7월말 작업이 끝나고 잠시 쉬다가 8월 컨퍼런스를 다녀오다보니 결국은 8월 post 는 하나도 없었습니다. 사실 8월동안 지흔이와 열심히 모형배를 만들고 있어서 그 재미에 푹 빠져 지낸 것도 있었구요. 그 모형배들도 한번 연관된 작업을 고민중인데 한번 프로토타입을 만들어 볼 것 같네요.</p>
<p>이번에 새로운 작업을 생각하면서 Javascript 코드를 열심히 짜맞추다가... (저에게는 코딩하다가 보다는 짜맞추다가 어울립니다.) 문득 이것을 따로 만들어도 좋겠다고 생각해서 잠시 만들어 보았습니다. 물론 이 Composition도 새로운 작업에 일부로 포함될 것입니다만, 이렇게 만들고 보니 따로 독립적으로 만들어도 괜찮을 것 같아 보입니다.</p>
<iframe src="//player.vimeo.com/video/14767639" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><img src="/assets/Screen-shot-2010-09-07-at-3.31.29-PM1.jpg" alt="Screen-shot-2010-09-07-at-3.31.29-PM.jpg" width="450" height="281" class="alignnone size-full wp-image-2089" /></p>
<p><img src="/assets/Screen-shot-2010-09-07-at-3.29.21-PM1.jpg" alt="Screen-shot-2010-09-07-at-3.29.21-PM.jpg" width="450" height="281" class="alignnone size-large wp-image-2088" /></p>
<p><img src="/assets/Screen-shot-2010-09-07-at-3.29.46-PM1.jpg" alt="Screen-shot-2010-09-07-at-3.29.46-PM.jpg" width="450" height="281" class="alignnone size-large wp-image-2087" /></p>
<p><img src="/assets/Screen-shot-2010-09-07-at-3.31.45-PM2.jpg" alt="Screen-shot-2010-09-07-at-3.31.45-PM.jpg" width="450" height="281" class="alignnone size-full wp-image-2086" /></p>
<p>이 Composition은 Bezier Curve 를  Structure로 구현하고 그것을 OpenGL Kineme GL 로 그리는 방식입니다. 전체 Composition 보다는 간단하게 변형한 것을 공유합니다. 관심있으신 분은 kineme GL plugins 을 설치 한 후에 테스트 해보시면 됩니다.</p>
<p>Sample 1 은 일반적인 LFO를 이용하여 단순 반복되는 형태이고 Sample 2 는 인터액션부분만 따로 분리하여 Sample 1 과 연결하였습니다..</p>
<p>Bezier Function Code 는 <a href="http://machinesdontcare.wordpress.com/2009/05/22/2-point-bezier-curve/">http://machinesdontcare.wordpress.com/2009/05/22/2-point-bezier-curve/</a> 에서 가져왔습니다.</p>
<p><a href="http://jeonghopark.de/media/orchid_sample_code.zip">Sample Code Download</a></p>
