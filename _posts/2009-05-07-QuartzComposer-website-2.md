---
layout: post
title: QuartzComposer website 2
date: 2009-05-07 20:17:40.000000000 +02:00
categories: [memo]
---
[http://b-l-a-c-k-o-p.com/Qamera/Quartz-Composer](http://b-l-a-c-k-o-p.com/Qamera/Quartz-Composer)

Core Image Filter를 이용하여 특별한 PlugIns 을 필요로하지 않고 그냥 사용 가능하다.
예를들면

<pre>
{
	vec4 pixel = sample(input_image, samplerCoord(input_image));
	float average = 1.0-clamp((pixel.x+ pixel.y+ pixel.z)/3.0,0.0,1.0);
	pixel.r = average;
	pixel.g = average;
	pixel.b = average;
	return pixel;
}
</pre>

이런식으로...
응용하기 좋다...
