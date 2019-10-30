---
layout: post
title: GPS log data…
date: 2010-05-09 23:25:32.000000000 +02:00
categories: [work, quartzcomposer]
---
<p>예전부터 한번 구현해볼까?... 하다가 이번에 한번...</p>

<iframe src="//player.vimeo.com/video/11605304" width="500" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<p><img src="/assets/Screen-shot-2010-05-10-at-12.11.46-AM1.jpg" alt="Screen-shot-2010-05-10-at-12.11.46-AM.jpg" width="450" height="225" class="alignnone size-full wp-image-2111" /></p>
<p><img src="/assets/Screen-shot-2010-05-10-at-12.11.39-AM1.jpg" alt="Screen-shot-2010-05-10-at-12.11.39-AM.jpg" width="450" height="225" class="alignnone size-full wp-image-2110" /></p>
<p>Sony GPS CS1 의 데이터를 KML Data 로 변환한 후에 이것을 간단하게 XML 으로 변환해보니 Quartz Composer 에서 간단하게 불러 올 수 있었습니다. 다만 GPS Log 데이터에 여러가지 값들이 많아서 이를 걸러내는 것과 실제 지도와의 스케일을 맞추는 것이 약간 필요했지만... 그냥 간단하게 처리하고 나중에 다시 한번 제대로 구현해 봐야 할 것 같습니다. qtz 파일를 올릴까 하다가... 그냥 구현한 방식만 간단하게 기술하면... 여러가지 값들을 걸러내는 것은 Structure Index Number 와 StringSubrange 로 그냥 걸러버리고 실제 지도와의 스케일은 그냥 3D Transformation 에서 스케일과 포지션으로 바꾸어 버렸습니다.</p>
<p>기회되는대로 보관되어 있는 GPS Log 파일들 전체를 한번 해봐야 겠군요.</p>
