---
layout: post
title: Moon Generator
date: 2015-07-14 10:21:00
categories: [work]
---
예전의 Lunar Prototype 의 영상이다. 이전에는 이미지만 게시하였는데, 이번에 Vimeo 계정을 바꾸면서 비디오 캡쳐도 올린다.

<iframe src="https://player.vimeo.com/video/133426230" width="700" height="481" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/133426230">Moon Generator.</a> from <a href="https://vimeo.com/jeonghopark">jeongho.park</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

SourceCode : https://github.com/jeonghopark/moonMac

한가지 재미있는 것은 3차원 원의 표면에 랜덤하게 입자를 위치시키고 싶으면, 그냥 랜덤으로는 만들어지지 않는다.
Uniform Spherical Distribution 으로 랜덤한 위치를 아래 링크의 수식으로 만들어야만 한다.

하지만, 그냥 이렇게 변환된 위치 보다는 그냥 랜덤한 함수로 만들어진 이미지가 오히려 더 인상적이다.
이유는 양극점에 모여진 모습이 마치 실제 달이나 행성처럼 보이는 착각 때문이기도 하다.
https://en.wikibooks.org/wiki/Mathematica/Uniform_Spherical_Distribution

<hr>     
아래는 그냥 3차원 표면에 랜덤하게 만든 경우이고    	
[<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Uniform_Spherical_Distribution_1.png" />](https://commons.wikimedia.org/wiki/File:Uniform_Spherical_Distribution_1.png)    

그러면 아래와 같이 양 극점에 많은 수의 점들이 분포하게 된다.    
[<img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Uniform_Spherical_Distribution_4.png" />](https://upload.wikimedia.org/wikipedia/commons/d/d1/Uniform_Spherical_Distribution_4.png)	

<hr>     
그러나 위의 방식으로 하면 아래와 같이 균일하게 분포된다.		

[<img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Uniform_Spherical_Distribution_5.png" />](https://upload.wikimedia.org/wikipedia/commons/d/d6/Uniform_Spherical_Distribution_5.png)	

[<img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Uniform_Spherical_Distribution_8.png" />](https://upload.wikimedia.org/wikipedia/commons/6/6e/Uniform_Spherical_Distribution_8.png)

Image : https://en.wikibooks.org/wiki/Mathematica/Uniform_Spherical_Distribution