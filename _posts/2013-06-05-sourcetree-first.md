---
layout: post
title: SourceTree 첫번째
date: 2013-06-05 23:24:45.000000000 +02:00
categories: [work]
---
<p>막상 쓰려고 해보니 내용이 많아서 몇 번에 나누어 올립니다.<br />
한가지 이 글은 디자이너나 예술작업을 하는 분들을 위한 것이므로 전문 프로그래머분들이 보시면 오류가 있을 수도 있습니다. 그때는 댓글로.. ^^</p>
<p>이번은 첫번째로 SourceTree 로 git init, add 그리고 commit 를 하는 방법입니다.<br />
<br />
먼저 프로세싱 파일을 만듭니다.<br />
<img src="/assets/processing_1st.png" alt="processing_1st" width="500" height="600" class="alignnone size-full wp-image-3978" /></p>
<p>그리고 프로세싱 폴더 전체를 그대로 sourcetree 의 bookmark 창으로 옮겨 넣습니다.<br />
그러면 다음과 같은 창을 볼 수 있고 Repository Type 만 git 로 해 놓으시면 됩니다.<br />
<img src="/assets/sc_draganddrop.png" alt="sc_draganddrop" width="574" height="399" class="alignnone size-full wp-image-3980" /></p>
<p>이 과정은 Terminal 에서의 git init 와 같습니다.<br />
참고로 어느 곳에 프로세싱 폴더를 만들던지 상관없습니다.<br />
만약 그 폴더를 다른 곳으로 옮기게 되면 이 bookmark 창에서는 자동적으로 그 폴더가 없다고 표시해주고 설정에서 그 폴더 위치만 새로 지정해주면 됩니다.<br />
혹은 bookmark 를 지우고 그냥 새로 떨구어 놓아도 됩니다.<br />
<img src="/assets/st_move.png" alt="st_move" width="482" height="172" class="alignnone size-full wp-image-3981" /></p>
<p>bookmark 를 두 번 클릭하여 보면 다음과 같은 창이 열리고,<br />
이 창에서 모든 것을 해주면 됩니다.<br />
보통은 Terminal 에서 해 준 순서대로<br />
add<br />
commit<br />
(push : remote 에 올리는 과정, 지금은 생략)<br />
두 개의 과정만 해주면 끝이고 이 화면에서 그 파일이 어떻게 변화가 되었는지도 확인 가능합니다.</p>
<hr />
<p>맨 처음의 상황입니다. 현재는 변경 추가된 파일이 스테이지에 안 올려진 상태입니다.<br />
<img src="/assets/st_main-800x535.png" alt="st_main" width="800" height="535" class="alignnone size-large wp-image-3983" /></p>
<hr />
<p>add 를 하면 확인하는 confirm 창이 열리고 계속을 진행을 하면<br />
아래와 같이 현재 변경된 혹은 추가된 파일이 stage 로 옮겨집니다.<br />
<img src="/assets/st_add-800x535.png" alt="st_add" width="800" height="535" class="alignnone size-large wp-image-3984" /></p>
<hr />
<p>이제 commit 를 하게 되면 또 하나의 창이 열리고 commit message 를 입력할 수 있습니다.<br />
메세지를 입력한 후에 commit 이 되면<br />
<img src="/assets/st_commit-800x542.png" alt="st_commit" width="800" height="542" class="alignnone size-large wp-image-3986" /></p>
<hr />
<p>stage 에서 사라지고 master branch에서 commit 과 버젼을 확인 할 수 있습니다.<br />
<img src="/assets/st_master-800x185.png" alt="st_master" width="800" height="185" class="alignnone size-large wp-image-4012" /></p>
<hr />
<p>이제 프로세싱에서 다시 코드를 추가하고 작업을 한 후에<br />
<img src="/assets/ps_2ndch.png" alt="ps_2ndch" width="500" height="302" class="alignnone size-full wp-image-3989" /></p>
<hr />
<p>다시 sourceTree 로 돌아와 보면 다음과 같이 바꾼 부분이 새로 생깁니다.<br />
창과 메뉴들의 이름들을 잘 보시면 이해가 빨리 되실 겁니다. 프로세싱에서의 변경과 sourcetree 의 변경이 똑같이 바뀌었습니다.</p>
<p><img src="/assets/st_1stch-800x535.png" alt="st_1stch" width="800" height="535" class="alignnone size-large wp-image-3990" /></p>
<hr />
<p>이것을 맨처음과 똑같은 add 와 commit 과정을 거치고 master branch 에서 확인하면 다음과 같이 버젼들이 나열되어서 보입니다.</p>
<p><img src="/assets/version-800x191.png" alt="version" width="800" height="191" class="alignnone size-large wp-image-4013" /></p>
<hr />
<p>이것이 가장 기본적인 사용법입니다.<br />
아주 간단하게 add 와 commit 를 할 수 있고 편리하게 관리 할 수 있습니다.</p>
<p>단 특정 위치의 commit 에서<br />
Reset Master to this commit 를 한 후에<br />
Reset 를 하지 마시기 바랍니다.<br />
그러면 master 의 위치를 변경해서 reset를 하게 되므로 프로세싱 코드가 예전 commit 위치로 변경이 됩니다.<br />
즉 저장이 안되는 경우와 마찬가지 입니다.</p>
<p><img src="/assets/reset_edit.png" alt="reset_edit" width="614" height="213" class="alignnone size-full wp-image-4014" /></p>
<p>즉 위의 그림처럼 모든 코드가 예전으로 돌아가게 됩니다.</p>
<p>저도 처음에는 commit 를 다시 돌리면서 작업을 하고 싶었습니다만,<br />
좀 지나서 부터는 모든 과정을 다 저장하고 있습니다.<br />
이 버릇은 아마도 예전의 폴더와 이름으로 버젼을 관리하던 습관 때문인 듯 합니다.</p>
<p>처음 초보 단계에서는 그냥 계속 commit 를 해나가시면 됩니다.<br />
보통 혼자 작업을 하게 되면 branch 를 만들 경우가 많지 않아서 다음과 같이 됩니다.<br />
<img src="/assets/histroy.png" alt="histroy" width="438" height="246" class="alignnone size-full wp-image-3998" /></p>
<p>즉 모든 과정이 남게되고 다음에 이야기 할 그 위치로 되돌아가기도 무척 수월해집니다.<br />
또한 이제 부터는 하나의 폴더로만 관리하게 되어서 불필요한 이름이나 폴더가 생기는 것을 방지할 수 있습니다.</p>
