---
layout: post
title: Xcode 없이 Build
date: 2015-10-31 23:50:00.000000000 +01:00
categories: [work]
---
Xcode 없이(?) Build 하는 두 가지 방법.
이 방법이 꼭 필요한 것은 아니지만, 간단히 스케치로 작업할 경우, Xcode 셋팅이 귀찮을 경우에 간단히 활용 가능하다.
특히 SublimeText 또는 Atom으로 코드 작성시 또는 main.cpp 에 모든 코드를 몰아 넣었을 경우 같을 때...

**첫번째 방법은**  
````
xcodebuild -configuration Debug  -sdk macosx10.11  
````  
이 경우는 기본적인 Xcode 셋팅이 되어 있는 상태에서 Xcode 를 열 필요없이 바로 Build 할 경우 유용하다.  

**두번재 방법은**  
````
make RunDebug  
````  
이 경우는 Xcode 설정없이 단지 소스코드, 몇개의 필요한 파일들 그리고 폴더들만으로도 가능하다.
간혹 addons 의 libs 경로를 못 찾는 경우에는 addon의 기본 설정을 정확히 맞추어준다.
