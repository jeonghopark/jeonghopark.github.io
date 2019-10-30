---
layout: post
title: git 과 processing
date: 2013-05-24 23:35:02.000000000 +02:00
categories: [work]
---
프로그래머가 아닌 단지 프로그램을 도구로 사용하는 저의 경우에는 아직 모든 코딩(사실 이렇게 쓰는 것도 좀 어색하지만,...)이 익숙치 않습니다. 그렇지만 5-6개의 언어를 다루다 보니 버젼 별로 늘어나는 프로젝트 파일들을 관리하는 문제가 매우 심각해졌습니다. 보통은 번호를 붙여서 버젼 관리를 하지만 이것도 나중이 되면 도대체 뭐가 뭔지 구별이 안되고 결국은 그냥 보관을 해 놓는다는 정도의 의미 밖에 없는 경우가 대부분이어서 한번 일반 프로그래머들이 사용하는 버젼관리툴을 사용해 보기로 했습니다. 처음에는 소스코드가 없어진다던지 혹은 잘못되면 큰일 날거라고 생각이 들고 불안했지만 몇번의 시행착오와 문제들이 지나간 후에는 이젠 안 쓰면 오히려 이상하고 불안해집니다. 상식적으로는 보통 프로그래머들이 사용하는 것이라고 생각하기 쉽지만, html, css, javascript, processing, arduino, openframeworks, cinder, markdown, max/msp, puredata 등등... 텍스트 형식으로 저장되는 모든 문서를 관리할 수 있습니다.

그래서 소개하고자 하는 것은

git 을 사용하여 processing (혹은 openframeworks) 을 이용하는 방식인데,
혼자서 자신의 컴퓨터안에 설치하여 사용하는 경우를 일단 먼저 기본으로 설명하고자 합니다.


일단 git 을 자신의 컴퓨터에 설치하였다고 가정하고 진행합니다.

[http://git-scm.com/book/ko](http://git-scm.com/book/ko)


이곳의 글을 읽어보면 매우 도움이 됩니다.

모든 것이 설치되고 실험적으로 몇개의 Repository 를 만들어 보았다면,
바로 프로세싱에 적용할 수 있습니다.

우선은 다음과 같이 프로세싱 폴더와 파일을 만든 후에
![/assets/images/processing_folder.png](/assets/images/processing_folder.png)

terminal 에서 경로를 프로세싱의 작업 폴더로 바꾸어주고

![/assets/images/path_.png](/assets/images/path_.png)

git init 라고 git 초기화 합니다.

![/assets/images/git_init.png](/assets/images/git_init.png)

다음은 git status 로 현재의 파일 상황을 git 상태에서 어떤 파일들이 추가되고 버려졌는지 확인합니다.

지금은 당연히 한 개의 .pde 파일만 추가 되었습니다.

![/assets/images/git_status.png](/assets/images/git_status.png)

git add . 로 현재의 상황을 git 의 stage 로 올립니다. 이 과정은 마치 준비과정과 같습니다. 다시 git status 로 확인하면 이제서야 비로소 git 상에 하나의 파일이 새로 추가 되었다는 것을 알 수 있습니다.

![/assets/images/git_add_new.png](/assets/images/git_add_new.png)

다음은 git commit -m "커밋 내용" 으로 git directory에 추가합니다.

![/assets/images/commit.png](/assets/images/commit.png)

<hr />

지금까지가 가장 기초적인 내용입니다만, 여기에 branch 를 추가하는 기능과 다시 과거 작업내용으로 되돌아 가는 방법만 알아도 혼자서 사용하기에는 별 무리가 없습니다. 특히 저 같이 프로그래머가 아닌 경우에는 더욱 그렇습니다. 또한 만약 온라인에 올려서 공유를 한다던지 개인 저장소를 활용하려면 몇가지 추가를 해야 하지만 그것도 간단합니다.

다만 공동작업의 경우 간혹 몇가지 문제가 생길 수 있지만, 그것도 차근차근 보면 해결되는 문제들입니다.

<hr />

한번 프로세싱을 편집하고 나서 어떻게 상황이 되는지 보겠습니다.

프로세싱 코드를 새로 작성하여 v01 에서 v02 로 버젼이 업되었습니다.

![/assets/images/v01.png](/assets/images/v01.png)
![/assets/images/v02.png](/assets/images/v02.png)

만약 예전 같으면 이러한 경우 번호를 붙인다던지 이름을 변경하여 다른 폴더에 저장하는데 git 관리하에서는 그냥 코드를 작성하면 됩니다.

일단 git 에서 어떻게 적용되었는지 보려면

항상 git status 입니다.

![/assets/images/new_git_status.png](/assets/images/new_git_status.png)

그림과 같이 modified 되었다고 나옵니다.

그럼 위의 과정 처럼 git add . , git commit -m "change size" 라는 식으로 commit 을 하면 됩니다. 그러면 변경된 혹은 버젼이 변경된 파일이 그대로 git history 와 directory에 저장됩니다. 그런 후에 git log 로 보면 다음과 같이 누가(지금은 오직 혼자) 언제 (시간) 어떤 내용 (commit 의 " " 안의 내용입니다.) 으로 보여집니다.

![/assets/images/change_log.png](/assets/images/change_log.png)

어떤 내용이 달라졌는지 보기 위해서는... git log -p -2 (혹은 git log -p) 로 확인해보면 다음과 같습니다.

![/assets/images/git_log_p_2.png](/assets/images/git_log_p_2.png)

이제는 프로세싱작업을 파일을 만들면서 파일이름과 폴더등으로 버젼을 높이는 것이 아니고 하나의 파일에서 계속적으로 commit 을 하면서 모든 버젼이 기록으로 남겨 둘 수 있습니다. 또한 나중에 간편하게 되돌릴 수도 있습니다.

위의 경우는 git checkout 081a31b15bd4aff6dd23be03c1c4b605c7bfea49 로 first commit 로 돌아갈 수 있습니다.

그러면 프로세싱 코드도 자연히 과거의 상태로 돌아갑니다.

그리고 다시 최신으로 돌아가기 위해서는 git checkout master 로 현재의 위치로 되돌아 갑니다.
그러나 보통은 과거의 버젼들로 돌아가는 방식이 아니라 과거의 코드를 확인하고 복사해오는 방식을 선호하게 됩니다. 마치 Xcode 의 snapshot 이나 xcode 상의 git 과 비슷합니다. 제일 좋은 방식은 새로운 branch 를 계속 만들어 나가면서 확장하고 수정하는 방식이 편리합니다. 몇 번의 프로젝트를 실제로 적용해 보면 나름의 방식이 생기게 됩니다.

branch 는 git checkout -b 이름 이런식으로 만들어 가면 됩니다.

<hr />

저의 경우는 크게 기능이나 작업 방향이 달라지는 경우에만 아예 폴더를 따로 만들어 예전 처럼 관리를 하고, 기능추가, 에러 수정등은 git 로 관리합니다.

그런데 이렇게 만들어 가다 보면 결국은 Terminal에서 관리하는 것에 한계가 옵니다.

그래서 저는 terminal 환경에서 몇번 사용하다가 바로 sourcetree 로 넘어왔습니다.

바로 이런 식으로 보여지는 것입니다.

![/assets/images/sourceTree_test.png](/assets/images/sourceTree_test.png)

[http://www.sourcetreeapp.com](http://www.sourcetreeapp.com)

다음에는 sourcetree 와 bitbucket.org 로 관리하는 법을 올려보겠습니다.
