---
layout: post
title: Sprials Formula
date: 2010-02-26 10:27:31.000000000 +01:00
categories: [code, quartzcomposer, work]
---
<p>Sprials Formula 를 이용하여 만든 QuartzCompose Composition 입니다.</p>
<p>공식 자체는 어려운게 아니지만 자세히 읽어보지 않고 대충 구현하거라서 엉망이기는 합니다. 참고한 곳은 <a href="http://www.mathematische-basteleien.de/spiral.htm">http://www.mathematische-basteleien.de/spiral.htm</a> 입니다.</p>
<p>GL Structure의 색은 Javascript 안의 Code를 아래와 같이 사용하면 색도 제어가 가능합니다. 단 GL Line 에서는 색이 표현되지 않습니다.</p>
<p><pre>
function (__structure Circle) main (__number inputStep, __number tX, __number tY) {
  	var Circle = new Array();
 	var OuterCircle = new Array();
 	var size = 6000;
 	var tX;
 	var tY;
 	 	
for (i=0;i&lt;=inputStep; i+=1) { 	
points = new Object(); 	
points. X = Math.cos(i*i*3.14*tX/(180))/size*(i*i/360); 	
points. Y = Math.sin(i*i*3.14*tY/(180))/size*(i*i/360);  /* 아래와 같이 RGBA를 지정해 주면 됩니다. 이 변수를 지정하기 위해 Array사용하는 방법을 바꾸었습니다. 훨씬 코드가 보기 좋네요. 	

points. R = 1.0; 	
points. G = 1.0; 	
points. B = 1.0; 	
points. A = 1.0; */ 	

OuterCircle[i] = points; 	}  	 	

var result = new Object(); 	
result. Circle = OuterCircle; 	
return result; } </pre>
<p><a href="http://jeonghopark.de/media/LineAbstract.qtz">QTZ Download - Link</a></p>
<p>[vimeo 9748199]</p>
<p><img src="/assets/LineAbstract025016e91f8d4f4.jpg" alt="LineAbstract025016e91f8d4f4.jpg" width="640" height="360" class="alignnone size-full wp-image-2928" /></p>
<p><img src="/assets/LineAbstract055016e921019e0-600x337.jpg" alt="LineAbstract055016e921019e0.jpg" width="600" height="337" class="alignnone size-medium wp-image-2931" /></p>
<p><img src="/assets/LineAbstract065016e92163fb2.jpg" alt="LineAbstract065016e92163fb2.jpg" width="640" height="360" class="alignnone size-full wp-image-2932" /></p>
<p><img src="/assets/LineAbstract035016e921c5dc3.jpg" alt="LineAbstract035016e921c5dc3.jpg" width="640" height="360" class="alignnone size-full wp-image-2933" /></p>
<p><img src="/assets/LineAbstract045016e920869c1.jpg" alt="LineAbstract045016e920869c1.jpg" width="640" height="360" class="alignnone size-full wp-image-2930" /></p>
<p><img src="/assets/LineAbstract015016e920110bb.jpg" alt="LineAbstract015016e920110bb.jpg" width="640" height="360" class="alignnone size-full wp-image-2929" /></p>
