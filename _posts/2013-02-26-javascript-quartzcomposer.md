---
layout: post
title: Javascript 과 QuartzComposer
date: 2013-02-26 19:15:06
categories: [work]
---
<p>기본적으로 내장된 Libary 중에서 Javascript 의 사용입니다.
Javascript 의 기본 문법을 사용하며, 아주 간단합니다.
그리고 실시간 변화를 눈으로 확인 가능하여 여러가지 기능을 익히기 좋습니다.</p>
<p>이런 작업을 위해서는 processing, openframeworks, javascript HTML 등으로도 가능하지만,
실시간으로 변화를 보면서 빠르게 작업 가능하다는 장점이 있겠죠.
또한 이 패치에서는 mesh 를 사용했는데, kineme 의 gl patch 를 써도 좋습니다.</p>
<p>어쨋든 quartzComposer에서 javascript는 Structure 또는 Array 를 다룰 때나
좀 더 복잡한 논리구조적인 프로그래밍을 할 경우 매우 유용합니다.
다만 매우 복잡한 패치의 경우 속도가 느려질 경우가 있습니다.</p>
<p>예제는 매우 기본적인 사용법은 아니고 약간의 프로그래밍 지식이 있다면 이해 되실 겁니다.</p>
<p><pre><code>
//function 과 main 에서 input과 output의 이름과 타입을 정합니다.
//이것을 정의하면 자동적으로 input과 output 이 패치상에 만들어 집니다.
//__number, __index, __boolean, __structure 등이 있습니다.
function (__structure outputStructure, __structure colorOutput)
main (__number size)
    {
    var outputXY = new Array();
    var outputColor = new Array();
    var num = 362;
    var size = 0.5;
    for(i=0; i&lt;num; i+=1)
    {
//object 로 정의하여 point 에 인자들을 덧붙 일 수 있습니다.
//z 를 붙이면 3차로 됩니다. 이 부분은 output Structure 로 확인 해 보면 간단히 이해됩니다.
        var point = new Object();
//이 부분의 수학적인 변화를 주면 다양한 그래프를 그릴 수 있습니다.
        point.x = Math.sin(Math.PI/180 * 2 * i) * size;
        point.y = Math.cos(Math.PI/180 * 2 * i) * size;
        outputXY[i] = point;
    }
    for(i=0; i&lt;num; i+=1)
    {
//color 를 위한 object 입니다만, output 에서 순서가 이상하게 엇갈립니다.
//왜 그런지는 저도 아직 확인 중 입니다.
        var point = new Object();
        point.r = 0;
        point.g = 0;
        point.b = 1;
        point.a = 1;
        outputColor[i] = point;
    }
    var result = new Object();
    result.outputStructure = outputXY;
    result.colorOutput = outputColor;
    return result;
    }
</code></pre></p>
<p>
<hr />
수학적으로 변화를 주면...
<pre><code>
point.x = Math.sin(Math.PI/180 * 2 * i) * size;
point.y = Math.cos(Math.PI/180 * 2 * i) * size;
</code></pre>
<img src="/assets/sin_cos.png" alt="sin_cos" width="626" height="600" class="alignnone size-full wp-image-3824" /></p>
<hr />
<p><pre><code>
        point.y = Math.tan(Math.PI/180 * 2 * i) * size;
        point.x = Math.sin(Math.PI/180 * 2 * i) * size;
</code></pre>
<img src="/assets/sin_tan.png" alt="sin_tan" width="626" height="600" class="alignnone size-full wp-image-3826" /></p>
<hr />
<p><pre><code>
        point.y = Math.cos(Math.PI/180 * 2 * i) * size * Math.sin(Math.PI/180 * 2 * i) * size;
        point.x = Math.sin(Math.PI/180 * 2 * i) * size;
</code></pre>
<img src="/assets/sin_cossin.png" alt="sin_cos*sin" width="626" height="600" class="alignnone size-full wp-image-3827" /></p>
<hr />
<p><pre><code>
        point.y = Math.sin(Math.PI/180 * 2 * i) * size * Math.log(Math.PI/180 * 2 * i) * size;
        point.x = Math.sin(Math.PI/180 * 2 * i) * size;
</code></pre>
<img src="/assets/sin_sinlog.png" alt="sin_sin*log" width="626" height="600" class="alignnone size-full wp-image-3828" /></p>
<hr />
<p>만약 javascript 에 input 으로 실시간 제어를 하고 싶다면,
다음과 같이 main 다음에 input을 만들어 주어서 원하는 곳에
변수를 연결해 주면 됩니다. 예제는 간단히 inputValue 을 만들어서 point.x 에 곱하였습니다.
<pre><code>
function (__structure outputStructure, __structure colorOutput)
main (__number inputValue)
{
    var outputXY = new Array();
    var outputColor = new Array();
    var num = 362;
    var size = 0.5;</p>
<pre><code>for(i=0; i&lt;num; i+=1) 
{ 
    var point = new Object();   
    point.x = Math.sin(Math.PI/180 * 2 * i * inputValue) * size * Math.log(Math.PI/180 * 2 * i) * size;  
    point.y = Math.sin(Math.PI/180 * 2 * i) * size;  
    outputXY[i] = point;
}

for(i=0; i&lt;num; i+=1) 
{ 
       var point = new Object();            
    point.r = 0;  
    point.g = 0;  
    point.b = 1;  
    point.a = 1;  
    outputColor[i] = point;
}  

var result = new Object();
result.outputStructure = outputXY;
result.colorOutput = outputColor;
return result;  
</code></pre>
<p>}
</code></pre>
<img src="/assets/javascriptInput.png" alt="javascriptInput" width="626" height="600" class="alignnone size-full wp-image-3830" /></p>

~~Sample Composition Download~~  

