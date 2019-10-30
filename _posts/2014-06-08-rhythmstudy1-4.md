---
layout: post
title: rhythmStudy#1
date: 2014-06-08 22:13:26.000000000 +02:00
categories: [work]
---
Rhythm Study


{% highlight c++ %} 
#pragma once
#include "ofMain.h"
class ofApp : public ofBaseApp{
public:
    void setup();
    void update();
    void draw();
    void keyPressed(int key);
    void keyReleased(int key);
    void mouseMoved(int x, int y );
    void mouseDragged(int x, int y, int button);
    void mousePressed(int x, int y, int button);
    void mouseReleased(int x, int y, int button);
    void windowResized(int w, int h);
    void dragEvent(ofDragInfo dragInfo);
    void gotMessage(ofMessage msg);
    ofEasyCam cam;
    vector<ofvec3f> startPoint;
    vector<ofvec3f> endPoint;
    vector<ofvec3f> movingVector;
    int number;
    float movingFacetor;
    ofBoxPrimitive box;
};
{% endhighlight %} 

{% highlight c++ %} 
#include "ofApp.h"
void ofApp::setup(){
    ofSetFrameRate(60);
    ofEnableAlphaBlending();
    ofBackground(30);
    cam.setDistance(-100);
    float _lineLength = 200;
    int _zSpace = 16;
    number = 50;
    startPoint.resize(number);
    endPoint.resize(number);
    for (int i=0; i&lt;number; i++) {
        float halfDegree = i * 180 / (float)number;
        startPoint[i].x = 0;
        startPoint[i].y = 0;
        startPoint[i].z = -i*_zSpace + (number*_zSpace)*0.5;
        endPoint[i].x = cos(ofDegToRad(halfDegree)) * _lineLength;
        endPoint[i].y = sin(ofDegToRad(halfDegree)) * _lineLength;
        endPoint[i].z = -i*_zSpace + (number*_zSpace)*0.5;
    }
    movingVector.resize(number);
    box.set( 10 );
}
void ofApp::update(){
    for (int i=0; i&lt;number; i++) {
        movingVector[i] = startPoint[i]-endPoint[i];
    }
    movingFacetor = movingFacetor + 1;
}
void ofApp::draw(){
    cam.begin();
    ofRotateZ(135);
    ofRotateX(-15);
    float _repeatF = ofMap(sin(ofDegToRad(movingFacetor)), -1, 1, -1, 0);
    for (int i=0; i&lt;number; i++) {
        ofPushMatrix();
        ofPushStyle();
        ofNoFill();
        ofSetColor(ofColor::fromHsb(0, 0, 255, 30) );
        box.setPosition(movingVector[i].x*_repeatF, movingVector[i].y*_repeatF, startPoint[i].z);
        box.draw();
        box.drawWireframe();
        ofPopStyle();
        ofPopMatrix();
    }
    for (int i=0; i&lt;number; i++) {
        ofPushMatrix();
        ofPushStyle();
        ofSetColor(ofColor::fromHsb(0, 0, 255, 120) );
        ofLine(startPoint[i].x, startPoint[i].y, startPoint[i].z, endPoint[i].x, endPoint[i].y, endPoint[i].z);
        ofPopStyle();
        ofPopMatrix();
    }
    for (int i=0; i&lt;number-1; i++) {
        ofPushMatrix();
        ofPushStyle();
        ofSetColor(ofColor::fromHsb(0, 0, 255, 255) );
        ofLine(endPoint[i].x, endPoint[i].y, endPoint[i].z, endPoint[i+1].x, endPoint[i+1].y, endPoint[i+1].z);
        ofLine(startPoint[i].x, startPoint[i].y, startPoint[i].z, startPoint[i+1].x, startPoint[i+1].y, startPoint[i+1].z);
        ofPopStyle();
        ofPopMatrix();
    }
    for (int i=0; i&lt;number; i++) {
        ofPushMatrix();
        ofPushStyle();
        ofSetColor(ofColor::fromHsb(0, 0, 255, 120) );
        ofLine(endPoint[i].x, endPoint[i].y, endPoint[i].z, endPoint[i].x, 0, endPoint[i].z);
        ofPopStyle();
        ofPopMatrix();
    }
    for (int i=0; i&lt;number-1; i++) {
        ofPushMatrix();
        ofPushStyle();
        ofSetColor(ofColor::fromHsb(0, 0, 255, 255) );
        ofLine(endPoint[i].x, 0, endPoint[i].z, endPoint[i+1].x, 0, endPoint[i+1].z);
        ofPopStyle();
        ofPopMatrix();
    }
    cam.end();
}
{% endhighlight %} 


<img src="/assets/wpid-rhythmCircle_08-2014-06-8-22-133.png" alt="wpid-rhythmCircle_08-2014-06-8-22-133.png" />
<img src="/assets/wpid-rhythmCircle_07-2014-06-8-22-132.png" alt="wpid-rhythmCircle_07-2014-06-8-22-132.png" />
<img src="/assets/wpid-rhythmCircle_05-2014-06-8-22-133.png" alt="wpid-rhythmCircle_05-2014-06-8-22-133.png" />
<img src="/assets/wpid-rhythmCircle_01-2014-06-8-22-133.png" alt="wpid-rhythmCircle_01-2014-06-8-22-133.png" />
<img src="/assets/wpid-rhythmCircle_02-2014-06-8-22-133.png" alt="wpid-rhythmCircle_02-2014-06-8-22-133.png" />
<img src="/assets/wpid-rhythmCircle_04-2014-06-8-22-132.png" alt="wpid-rhythmCircle_04-2014-06-8-22-132.png" />
<img src="/assets/wpid-rhythmCircle_03-2014-06-8-22-133.png" alt="wpid-rhythmCircle_03-2014-06-8-22-133.png" />
