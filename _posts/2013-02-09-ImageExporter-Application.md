---
layout: post
title: ImageExporter 를 이용한 Application 만들기.
date: 2013-02-09 02:06:32.000000000 +01:00
categories: [work]
---
<p>이번 Composition과 Application은 맥용 Folder Icon 을 만드는 것 입니다.<br />
(거창한 것은 아니지만 그냥 재미 삼아 뚝딱 만들었습니다.)<br />
실행하면 이런 폴더를 만들 수 있습니다.<br />
<img src="/assets/gogh_01.jpg" alt="gogh_01" width="512" height="417" class="alignnone size-full wp-image-3715" /></r />
혹은 이렇게<br />
<img src="/assets/folder_collection.png" alt="folder_collection" width="302" height="737" class="alignnone size-full wp-image-3686" /></p>
<p><a href="https://dl.dropboxusercontent.com/u/17382777/iconMaker.app.zip"><strong><span style="color: #ff0000;">iconMaker Download</span></strong></a></p>
<p>10.8 or 10.7 Mac OS</p>
<p>이 Application의 사용 방법은 간단합니다.<br />
0. Application 을 실행 한 후에<br />
1. <strong><span style="color: #dd1111;">cmd + i</span></strong> 를 동시에 누르면 Parameter 창이 나오고<br />
Folder Image 를 Double Click 또는 그림 파일을 Drag and Drop 하여 선택하면 됩니다.<br />
2. 몇 가지 간단한 옵션으로 위치, 크기 그리고 색깔을 조정 한 후에 맨 밑의 save to desktop 을 클릭하면 Desktop 에 .png로 저장됩니다.<br />
3. 저장된 png 를 preview 로 열어서 (그냥 더블 클릭...) <strong><span style="color: #dd1111;">cmd + a</span></strong> 전체 선택하여 <strong><span style="color: #dd1111;">cmd + c</span></strong> 로 복사 한 후에<br />
4. 이미지를 바꾸고자 하는 폴더를 선택하여 <strong><span style="color: #dd1111;">cmd + i</span></strong>로 정보 보기 하여 제일 위의 왼쪽 아이콘을 클릭 한 후에 <strong><span style="color: #dd1111;">cmd + v</span></strong> 하면 아이콘의 원하는 이미지로 바뀝니다.</p>
<p>[vimeo width="630" height="440"]https://vimeo.com/59273980[/vimeo]</p>
<p>보통은 폴더 아이콘을 그냥 두거나 색 정도를 바꾸던지 하고,<br />
좀더 꾸미던지 확실히 구별하기 위해 폴더 아이콘을 바꾸기도 합니다.<br />
자유롭게 사용 가능한 폴더 아이콘을 찾기도 쉽지 않고 막상 찾았다 하더라도 입맛에 딱 맞는 아이콘을 찾기도 힘듭니다.</p>
<p>보통의 폴더 아이콘입니다.<br />
<img src="/assets/normalFolder.jpg" alt="normalFolder" width="490" height="368" class="alignnone size-full wp-image-3680" /></p>
<p>이 폴더의 아이콘을 그냥 이미지에서 복사 붙여넣기를 하면 아래와 같습니다.<br />
<img src="/assets/copypasteFolder.jpg" alt="copypasteFolder" width="490" height="368" class="alignnone size-full wp-image-3679" /></p>
<p>폴더라기 보다는 그냥 그림이미지 같습니다.</p>
<p>그래서 원하는 이미지를 폴더 이미지에 덧붙이기 위해서는 폴더 아이콘을 만드는 프로그램을 사던지 혹은 그래픽 프로그램으로 만들면 되겠지만,</p>
<p>이번에 ImageExporter 와 QuartzBuilder 를 이용하여 하나 만들어 보기로 했습니다.</p>
<p>QuartzComposer 로 Application 을 만드는 방법은 Xcode를 이용하면 되지만,<br />
간단하게는 kineme 에서 판매하는 QuartzBuilder ($25)를 구입하여 사용해 도 됩니다.<br />
만약 컴포지션에 들어간 patch 가 몇 개 안 된다면 그냥 데모 버젼을 사용 할 수 도 있습니다.</p>
<p>다운 받으시면 네 개의 파일이 있습니다.<br />
iconMaker.app 는 QuartzBuilder 로 만든 배포용 Application.<br />
iconMaker.qtz 는 Quartzcomposer 원본입니다.<br />
ImageExporter.plugin 는 ImageExporter 플러그인입니다.</p>
<hr />
<p>컴포지션에 대한 설명입니다.<br />
<img src="/assets/iconMakerQtz_edit-800x733.png" alt="iconMakerQtz_edit" width="600" height="549" class="alignnone size-large wp-image-3721" /></p>
<ol>
<li>
<p>위쪽의 빨간색 부분은 백그라운드를 처리하는 부분입니다.</p>
</li>
<li>
<p>오른쪽의 녹색 부분이 이미지를 저장하는 Image Exporter 패치이고, 또 다른 패치는 폴더이미지와 폴더로 만들고자 하는 이미지를 섞어주는 Render in Image 입니다.</p>
</li>
<li>
<p>가운데 Render in Image 는 폴더로 만들고자 하는 이미지의 위치 크기를 조정하여 다시 이미지 형식으로 보내주는 패치입니다.</p>
</li>
<li>
<p>원리는 원하는 이미지의 크기와 위치를 파란색 Render in Image 에서 조정한 후 이것을 다시 이미지 형식으로 다시 녹색의 Render in Image 로 보내줍니다.<br />
그리고 녹색의 Render in Image 에서는 Bilboard 에 있는 Image 와 Mask Image 를 이용하여 서로 겹치게 되는 것이죠.</p>
</li>
<li>
<p>왼쪽 및의 보라색 부분은 이미지로 저장 Signal이 On 되어 있는 경우 계속해서 수 많은 이미지들이 저장되지 않도록 하기 위한 간단한 논리적인 장치입니다.</p>
</li>
<li>
<p>밑의 노란색 3D Sound Player 는 소리를 재생하는 패치입니다.</p>
</li>
<li>
<p>이번 패치는 약간 복잡합니다. 이미지를 Render in Image 에서 다시 처리하여 밖으로 보내 주는 경우가 있어서 더 그렇고, 이미지를 어떻게 하면 쉽게 섞을 수 있을까도 고민을 해야 합니다. 또한 Application 으로 만들 경우 오동작이나 굳이 다른 설명을 붙이지 않아도 되도록 해야 하므로 좀더 장치가 필요하여 복잡하게 보입니다. 혼자서 쓰는 경우라면 전혀 상관없겠죠.</p>
</li>
<li>
<p>마구 분해하시고 뜯어서 사용해 보시면 감이 오실 겁니다.</p>
</li>
</ol>
<hr />
<p>이번에는 QuartzBuilder 를 이용하여 Apllication을 만드는 방법입니다.</p>
<ol>
<li>
<p>QuartzBuilder 는 <a href="http://kineme.net" title="kineme.net">kineme.net</a> 에서 다운 받으시면 됩니다. 패치 갯수가 몇 개 안되는 경우는 굳이 안사셔도 됩니다.<br />
(혹은 직접 XCode 상에서 만드셔도 됩니다만... 굳이 그렇게 까지는...)</p>
</li>
<li>
<p>중요한 점은 QuartzComposer 상의 Parameter 들을 어플리케이션 상에서도 조정하고자 한다면 QuartzComposer 편집 상태에서 Publish Input 을 그림처럼 설정해야만 합니다.<br />
<img src="/assets/publishinput.png" alt="publishinput" width="557" height="499" class="alignnone size-full wp-image-3694" /></r />
오른쪽 버튼으로 Publish Input 을 만들고자 하는 parameter 를 체크하면 그림처럼 녹색으로 Input Point 의 색이 바뀝니다. 그럼 QuartzBilder 에서 Builder 후에 다음과 같이 Parameter 들을 조정 할 수 있는 창을 Application에서 직접 볼 수 있습니다.<br />
<img src="/assets/parameter1.png" alt="parameter" width="314" height="433" class="alignnone size-full wp-image-3703" /></p>
</li>
<li>
<p>QuartzBuilder 는 아주 간단한 프로그램이고 몇가지 옵션을 선택하여 좀더 변화를 줄 수 있습니다. 예를 들어 paramneter 들을 저장한다던지, 테두리를 없앤다던지... 이번 IconMaker 에서는 다음과 같이 옵션을 사용하였습니다. HUD로 Parameter 들을 조정하고 512x512 크기로 창 비율을 고정하는 것입니다.<br />
<img src="/assets/quartzBuilder_1.png" alt="quartzBuilder_1" width="235" height="556" class="alignnone size-full wp-image-3699" /></p>
</li>
<li>
<p>또한 기본 옵션으로 아이콘과 이름 기타등등이 있습니다.<br />
<img src="/assets/quartzBuilderIcon.png" alt="quartzBuilderIcon" width="481" height="259" class="alignnone size-full wp-image-3701" /></p>
</li>
</ol>
<hr />
<p>그렇게 해서 만들어진 아이콘 들입니다.<br />
<img src="/assets/davi_02.jpg" alt="davi_02" width="512" height="417" class="alignnone size-full wp-image-3711" /></p>
<p><img src="/assets/davi_01.jpg" alt="davi_01" width="512" height="417" class="alignnone size-large wp-image-3712" /></p>
<p><img src="/assets/reno_01.jpg" alt="reno_01" width="512" height="417" class="alignnone size-large wp-image-3713" /></p>
<p><img src="/assets/gogh_02.jpg" alt="gogh_02" width="512" height="417" class="alignnone size-large wp-image-3714" /></p>
<p><img src="/assets/gogh_01.jpg" alt="gogh_01" width="512" height="417" class="alignnone size-large wp-image-3715" /></p>
<hr />
<p>대충 주섬주섬 설명과 그림을 넣었는데, 좀 복잡해 보이지만 직접 해보시면 쉽게 됩니다.<br />
사용은 언제나 그렇듯이 마음대로 하셔도 됩니다.</p>