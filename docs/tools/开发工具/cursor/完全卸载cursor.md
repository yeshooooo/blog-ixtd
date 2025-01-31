---
title: 完全卸载cursor
author: 马超
date: 2025/1/31 23:23
categories:
  - tools
tags:
  - tools
  - cursor
  - 开发工具
---

# 完全卸载cursor



## windows

先卸载后再清除下列文件夹

删除下列文件夹

```powershell
rm -r -fo $env:USERPROFILE\AppData\Local\Programs\cursor*
rm -r -fo $env:USERPROFILE\AppData\Local\cursor* 
rm -r -fo $env:env:USERPROFILE\AppData\Roaming\Cursor* 
rm -r -fo $env:USERPROFILE\.cursor*
```



## mac

```shell
rm -rf ~/Library/Application\ Support/Cursor
```

```shell
rm -rf ~/.cursor*
```

## linux

```shell
rm -rf ~/.cursor 
```

```shell
rm -rf ~/.config/Cursor/
```

