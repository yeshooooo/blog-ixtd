---
title: wsl和windows相互访问文件
author: 马超
date: 2025/3/20 10:05
categories:
  - tools
tags:
  - tools
  - windows
  - wsl
---

# wsl和windows相互访问文件

[官方文档](https://learn.microsoft.com/zh-cn/windows/wsl/filesystems)

## wsl中访问windows下的文件

windows下的文件默认挂载在`/mnt/`下

## windows下访问wsl中的文件

可以在wsl当前目录下输入命令`explorer.exe .`

也可以在windows的文件系统中直接打开

![image-20250320101126298](https://pic.ixtd.com/images/2025/03/20/image-20250320101126298.png)