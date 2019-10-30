---
layout: post
title: ofxBox2d Windows 7
date: 2014-09-12 23:27:27.000000000 +02:00
categories: [work]
---
<p>ofxBox2d error in windows 7</p>
<p>write </p>

<p><pre><code>// in triangle_impl.hpp<br />
#define NO_TIMER<br />
</code></pre></p>
<p>comment Two lines in dpoint.hpp</p>
<p><pre><code>Assert( (D >= 1), "Dimension &lt; 1 not allowed" );<br />
Assert((this != &amp;q), "Error p = p");</code></pre></p>
