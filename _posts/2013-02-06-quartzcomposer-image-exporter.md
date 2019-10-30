---
layout: post
title: QuartzComposer Image Exporter
date: 2013-02-06 14:45:57.000000000 +01:00
categories: [work]
---
<p>QuartzComposer 상에서 viewer 에 보이는 상을 그대로 이미지로 저장하고 싶다면<br />
보통은 snap shot 기능 (viewer에서 실행되는 기능... 일반 os상에서 캡쳐 하는 것이 아닌...)을 이용해도 되지만,</p>
<p>프로그램을 실행중에서 실시간으로 저장하고 불러오고 싶은 경우가 있습니다.<br />
이 경우 Apple에서 기본으로 제공되는 patch 가 있지 않아서 방법이 없지만,</p>
<p>App Development Site 에서 다운 받은 plug-in sample code로 build 하면 그 플러그인을 사용 가능합니다.<br />
다운로드 링크는 아래입니다.<br />
<a href="https://developer.apple.com/library/mac/#samplecode/ImageExporter/Introduction/Intro.html" title="image export">Sampel Code Download</a></p>
<p>다운 받으면 다음과 같이 보입니다.<br />
<img src="/assets/sampleCode.png" alt="sampleCode" width="314" height="239" class="alignnone size-full wp-image-3638" /></p>
<p>다운 받은 후에 자신의 시스템 버젼에 맞게 빌드해야 하는데,<br />
ImageExporter.xcodeproj 를 xcode 로 연 후에,<br />
SDK Version 을 자신의 시스템에 맞게 맞춘 후,<br />
<img src="/assets/sdkVersion-800x262.png" alt="sdkVersion" width="600" height="196" class="alignnone size-large wp-image-3639" /></p>
<p>Xcode 상에서 Run 하면 plugin product 가 생깁니다.<br />
<img src="/assets/runProduct.png" alt="runProduct" width="467" height="280" class="alignnone size-full wp-image-3640" /></p>
<p>이것을</p>
<blockquote><p>자신의 <strong>/library/Graphics/Quartz Composer Plug-Ins</strong> 에 복사합니다.</p></blockquote>
<p>만약 어디에 있는지 못 찾을 경우에는 오른쪽 버튼을 클릭하여 show in finder 로 찾아갑니다.<br />
<img src="/assets/productPosition.png" alt="productPosition" width="386" height="209" class="alignnone size-full wp-image-3650" /></p>
<p>그 이후에 QuartzComposer 에서 Patch Library 로 보면<br />
다음과 같이 있습니다.<br />
<img src="/assets/patchQuartz.png" alt="patchQuartz" width="649" height="363" class="alignnone size-full wp-image-3642" /></p>
<p>파일 형식은 기본으로 png 인데, 이것이 더 편리할 것입니다.<br />
예를들어 QuartzComposer 상에서 Clear Patch의 색상의 Alpha 값을 0으로 했다면, 그러한 설정도 그래도 png 로 저장되기 때문입니다.</p>
<p>이것을 이용하여 실시간 캡쳐를 하기도 하고 실시간 불러오기도 할 수 있습니다.<br />
예제 Composition 은 다음 기회에...<br />
그리고 영상의 경우도 가능한데, 그것도 다음 기회에...</p>
