---
layout: post
title: Source Control XCode 4. openframeworks
date: 2012-07-06 12:37:21.000000000 +02:00
categories: [work]
---
oF에서 SourceControl 기능을 사용하기 위한 방법.
이 기능이 유효한지는 좀더 써봐야 할 듯...    
1. project copy    
2. terminal : git init    
3. make file : .gitignore    
<pre><code># hidden/temp files
.DS_Store
*.swp
*~.nib    
# Build dir
build/    
# Xcode project files except for the project file
*.xcodeproj/
!*.xcodeproj/project.pbxproj
</code></pre>    
4. terminal : git add .    
5. terminal : git status    
6. terminal : git commit -m "initial commit."    
from <a href="http://yoppa.org/blog/3110.html">http://yoppa.org/blog/3110.html</a>    
