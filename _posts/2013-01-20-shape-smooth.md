---
layout: post
title: shape smooth
date: 2013-01-20 15:05:56.000000000 +01:00
categories: [code]
---
<pre><code>int main(){
...
window.setGlutDisplayString("rgba double depth alpha samples>=4");
...
}
</code></pre>
ofEnableSmoothing 으로 Anti Aliasing의 적용이 안 되는 shape 들의 경우 그를 적용하기 위한 방법.

on !
<img src="/assets/onEnable.jpg" alt="onEnable" width="417" height="324" class="alignnone size-full wp-image-3564" />
<img src="/assets/onEnable_2.jpg" alt="onEnable_2" width="600" height="434" class="alignnone size-large wp-image-3571" />

off !
<img src="/assets/offEnable.jpg" alt="offEnable" width="417" height="324" class="alignnone size-large wp-image-3565" />
<img src="/assets/offEnable_2.jpg" alt="offEnable_2" width="604" height="437" class="alignnone size-full wp-image-3570" />
