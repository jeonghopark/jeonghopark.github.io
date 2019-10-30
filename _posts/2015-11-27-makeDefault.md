---
layout: post
title: make Default - update
date: 2015-11-27 00:00:00.000000000 +01:00
categories: [work]
---
make 방식의 Defaul Setting

필요한 파일과 구조는 다음과 같다.

	project folder
		config.make
		Makefile
	
		src folder
			main.cpp

		bin folder
			data folder


일단 main.cpp 를 가장 간단하게 적어보면 다음과 같다.

<script src="https://gist.github.com/jeonghopark/809f9e0a2aa2c8f6a847.js"></script>


oF 0.9 에서 테스트해 보았다.


config.make 와 Makefile 은 기본 oF 0.9 에서 복사해오면 된다.    
사실 큰 내용은 없다. (config.make 파일도 없어도 된다.)

Makefile 의 내용은 다음과 같다.

<script src="https://gist.github.com/jeonghopark/89c7e418e347485ffdf4.js"></script>


만약 프로젝트 폴더를 다른 곳에 저장한다던지 혹은 실행하고 싶으면 (예를 들어 바탕화면에서 잠깐 실행...)    
OF_ROOF 의 경로를 바꾸어주면된다.


그리고나서 Terminal 에서     
make Debug 혹은 make Release 로 Build 한 후에     
make run 을 해도 된다. 아니면 bin folder 에서 실행 파일을 찾아도 된다.


