---
layout: post
title: 'ofxMaximilian #1'
date: 2012-06-25 08:47:49.000000000 +02:00
categories: [work]
---
ofxMaximilian...     
<span style="color: #0000ff;">iOS 에서 사용하기 위해서는 먼저 Accelerate.framework 를 프로젝트의 Build Phases 에서 Import 할 것.</span>

<pre><code>#include "maximilian.h"     
maxiOsc mySine;//let's create an oscillator and give it a name.     
void setup() {//some inits

	//nothing to go here this time

}     
void play(double *output) {

//this is where the magic happens. Very slow magic.

*output=mySine.sinewave(440);//simple as that!

}

</code></pre>     
실행방법.     
-------------------------------

<pre><code>testApp.h     
(생략)     
#include "ofxMaxim.h"     
(생략)     
~testApp();

//Function

void audioRequested (float * output, int bufferSize, int nChannels );     
int initialBufferSize;

int sampleRate;     
maxiOsc synthTest;  //오실레이터를 설정

mixiMix outputTwoChannel; // Mixer.

double outputSynth; //double 변수 설정

double outputTwoChannels[2]; // 최종 ouput Left, Right

-------------------------------

testApp.mm //(또는 testApp.cpp)     
testApp::~testApp() {     
}     
//--------------------------------------------------------------

void testApp::setup(){      
(생략)     
sampleRate = 44100;

initialBufferSize = 512;

ofSoundStreamSetup(2, 0, this, sampleRate, initialBufferSize, 4);

}     
(생략)     
//--------------------------------------------------------------

void testApp::audioRequested(float * output, int bufferSize, int nChannels){

  if( initialBufferSize != bufferSize ){

    ofLog(OF_LOG_ERROR, "your buffer size was set to %i -

    but the stream needs a buffer size of %i",

    initialBufferSize, bufferSize);

  return;

  }	     
  for (int i = 0; i &lt; bufferSize; i++){

    outputSynth = synthTest.sinewave(440); // 440Hz Signal

    outputTwoChannel.stereo(outputSynth, outputTwoChannels, 0.5); // Mixer     
    output[i*nChannels    ] = outputTwoChannels[0];

    output[i*nChannels + 1] = outputTwoChannels[1];

  }     
}

</code></pre>     
두 개의 시그널을 합치고 싶을 경우에는…

간단히 + 로 해결되고     
혹은 LFO 를 만들고 싶으면... 다음과 같이 * 를 이용.     
<pre><code>outputSynth = synthTest.sinewave(440) * otherSynthTest.sinewave(2);

</code></pre>     
