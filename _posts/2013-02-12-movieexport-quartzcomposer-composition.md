---
layout: post
title: MovieExport 를 이용한 quartzComposer Composition
date: 2013-02-12 14:32:30.000000000 +01:00
categories: [work]
---
<p>movie exporter 는 실 시간으로 movie 형식으로 저장하는 Plugin 입니다.<br />
예전에는 Apple Development 에서 다운로드 받으 수 있었는데, 지금은 없네요.<br />
그래서 예전에 받아 놓은 것을 올립니다. (아마도 kineme.net 에서 찾을 수 있습니다.)<br />
Xcode와 Build 는 10.8용으로 되어 있습니다.<br />
H264 포맷을 지원하지 않습니다. 보통은 MPEG4 포맷으로 저장하면 됩니다.<br />
<a href="https://db.tt/ff0AGEha"><span style="color: #ff0000;">Download MovieExporter</span></a></p>
<p>특별한 것은 없고 실시간 캡쳐되는 영상의 크기만 잘 조정하면 끊김없이 잘 동작합니다.<br />
저장되는 곳은 아래 그림처럼 composition이 있는 폴더에 같이 MyMovie.mov 로 저장됩니다.<br />
그리고 Export_signal 를 클릭하면 영상이 저장됩니다.<br />
<img src="/assets/exportClick.png" alt="exportClick" width="512" height="153" class="alignnone size-full wp-image-3791" /></p>
<p>예제는 하나의 영상을 네 개의 구역으로 나누어 매 초마다 저장하는 예제입니다.<br />
만약 각 billboard 를 프로젝션 맵핑으로 이곳저곳의 물체에 영사한다면<br />
몇일 전 영상이나 몇 시간 영상을 여러 물체에 재생하기도 할 수 있는 방식도 가능합니다.<br />
<img src="/assets/movieexport-800x500.png" alt="movieexport" width="600" height="375" class="alignnone size-large wp-image-3792" /></p>
