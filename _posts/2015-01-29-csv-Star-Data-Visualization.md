---
layout: post
title: csv Star Data Visualization
subtitle:   "csv Star Data Visualization..."
date: 2015-01-29
categories: [work]
---
csv Star Data의 다운로드는 다음 링크 참조.    

http://www.astronexus.com/hyg

텍스터에디터로 열어서 데이터 구조 파악.    
(용량이 크므로 시간이 필요하다.)

<img src="/assets/images/csvDataRow.png" />

테이터의 구조는 첫번째 줄에 있음.    
StarID 는 별들의 번호이고, ProperName 은 지정된 별의 이름 그리고 우리가 사용할 RA,Dec,Distance 또는 X,Y,Z 이다.    
3차원 좌표계로 사용시에는 X, Y, Z.    

```cpp
csv.data[i][17]; 
csv.data[i][18]; 
csv.data[i][19];
```

별들의 색은 14번과 15번, 이 수치는 밝기와 스펙트럼을 나타냄.    
다음 링크 참조.    

http://en.wikipedia.org/wiki/Hertzsprung–Russell_diagram    

```cpp
switch (tempColor.at(0)) {
    case 'O':
        _hColor = ofColor(120,120,255,tempBright);
        break;
    case 'B':
        _hColor = ofColor(192,207,255,tempBright);
        break;
    case 'A':
        _hColor = ofColor(247,246,255,tempBright);
        break;
    case 'F':
        _hColor = ofColor(253,255,203,tempBright);
        break;
    case 'G':
        _hColor = ofColor(255,243,145,tempBright);
        break;
    case 'K':
        _hColor = ofColor(253,146,64,tempBright);
        break;
    case 'M':
        _hColor = ofColor(250,70,67,tempBright);
        break;
    default:
        _hColor = ofColor(255,255,255,tempBright);
        break;
}
```

 