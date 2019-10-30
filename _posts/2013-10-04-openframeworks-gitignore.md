---
layout: post
title: openframeworks -> .gitignore
date: 2013-10-04 19:59:43.000000000 +02:00
categories: [work]
---
gitignore default...

<pre>

# ignore bin folders’ contents, except data folder therein
/bin/*
!/bin/data/

# Some general ignore patterns
build/
obj/
*.o
Debug*/
Release*/
*.mode*
*.app/
*.pyc
.svn/
addons.make

#XCode
*.plist
*.xcconfig
*.xcodeproj
*.pbxuser
*.perspective
*.perspectivev3
*.mode1v3
*.mode2v3
#XCode 4
xcuserdata
*.xcworkspace

#Code::Blocks
*.cbp
*.workspace
*.depend
*.layout

#Visual Studio
*.sdf
*.opensdf
*.suo
ipch/

#Eclipse
.metadata
local.properties
.externalToolBuilders

# OS-specific ignore patterns

#Linux
*~
# KDE
.directory

#OSX
.DS_Store
*.swp
*~.nib
# Thumbnails
._*

#Windows
# Windows image file caches
Thumbs.db
# Folder config file
Desktop.ini

#Android
.csettings
/libs/openFrameworksCompiled/project/android/paths.make

# Miscellaneous
.mailmap

</pre>
