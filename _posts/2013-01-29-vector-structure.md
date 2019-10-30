---
layout: post
title: vector structure
date: 2013-01-29 09:09:07.000000000 +01:00
categories: [memo]
---
Vector Structure : openframeworks

Dynamic Structure

<pre><code>*.h
…
struct LineDraw {
    ofVec2f linePoint;
    float alphaPoint;
};
vector&lt;LineDraw&gt; pos;

*.cpp
…
for (int i = 0; i &lt; 100; i++) {
    Linedraw lineElement;
    lineElement.linePoint.x = i * 5;
    lineElement.linePoint.y = i * 5;
    lineElement.alphaPoint = i;
    pos.push_back(lineElement);
}
…

for (int i = 0; i &lt; pos.size(); i++) {
…
ofLine(pos[i].linePoint.x, 0,
       pos[i].linePoint.x, pos[i].linePoint.y);
…
}</code></pre>

<li>
간단한 Array는 Struct를 이용한 동적 벡터를 이용

</li>
<li>
동적 벡터에 벡터값을 입력하기 위해서 내부 벡터를 한 번 더 만들어 주어야 함.

</li>
<li>
한번은 clear 를 해주어야만 하나???

</li>
