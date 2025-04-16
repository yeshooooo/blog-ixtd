---
title: vscode配置python开发环境
author: 马超
date: 2025/4/16 17:33
categories:
  - python
tags:
  - python
  - tools
  - 开发工具
---

# vscode配置python开发环境

## 1. 安装插件

![image-20250416165012422](https://pic.ixtd.com/images/2025/04/16/image-20250416165012422.png)

![image-20250416165042047](https://pic.ixtd.com/images/2025/04/16/image-20250416165042047.png)

## 2. 配置pylance

打开设置`快捷键ctrl + ,`搜索以下设置进行配置，以下配置很多是我个人习惯

### python.languageServer

![image-20250416165321046](https://pic.ixtd.com/images/2025/04/16/image-20250416165321046.png)

### python.autoImportCompletions

启用智能建议和导入缺少的库

![image-20250416165413417](https://pic.ixtd.com/images/2025/04/16/image-20250416165413417.png)

### type checking mode

这里建议关了，因为他这个不咋好使

![image-20250416165535937](https://pic.ixtd.com/images/2025/04/16/image-20250416165535937.png)

## 修改工作目录

vscode中默认工作目录为根目录，不会像pycharm一样自动切换到py文件所在目录，需要设置一下工作目录才能让非根目录中的文件正确识别路径

### 修改coder-runner和debug的工作目录

勾选coder-runner.file directory as cwd ，这时候右上角的run code和右键文件里的run code就能正确执行了

![image-20250416165819911](https://pic.ixtd.com/images/2025/04/16/image-20250416165819911.png)

![image-20250416165831763](https://pic.ixtd.com/images/2025/04/16/image-20250416165831763.png)

### 修改vscode自带的调试器中的cwd

![image-20250416165855120](https://pic.ixtd.com/images/2025/04/16/image-20250416165855120.png)

主要是把cwd的值改为${fileDirname}，这样使用自带调试器的时候也能正确调试

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Current File",
      "type": "debugpy",
      "request": "launch",
      "cwd": "${fileDirname}",
      "program": "${file}",
      "console": "integratedTerminal",
      "justMyCode": true
    }
  ]
}
```

###  修改python设置中可以在终端自动切换工作目录

勾选python.Terminal.Execute in File Dir

![image-20250416170000430](https://pic.ixtd.com/images/2025/04/16/image-20250416170000430.png)

这样在右键执行python运行在终端的时候，也能正确运行

![image-20250416170020069](https://pic.ixtd.com/images/2025/04/16/image-20250416170020069.png)

### 补充方法

也可以在代码中使用os方法查询当前文件所在目录，然后切换到此目录, 不推荐这么做，因为pycharm中不需要这么做，而且写代码也麻烦

```python
current_dir = os.path.dirname(os.path.abspath(__file__))

os.chdir(current_dir)
```

## 开启自动导入功能

搜索`python.analysis.show Only Direct Dependencies In Auto Import`

这样就可以在错误修复中显示导入

![image-20250416170200399](https://pic.ixtd.com/images/2025/04/16/image-20250416170200399.png)

## debug

设置下面两张图的地方

![image-20250416170348424](https://pic.ixtd.com/images/2025/04/16/image-20250416170348424.png)

![image-20250416170401127](https://pic.ixtd.com/images/2025/04/16/image-20250416170401127.png)

## 导入同项目中其他模块

`ctrl+shift+p`打开配置文件

![image-20250416170529529](https://pic.ixtd.com/images/2025/04/16/image-20250416170529529.png)

在json中添加以下配置以此解决Python导入自定义模块运行程序时无法找到模块，由于运行程序时未将项目路径添加值PYTHONPATH

```shell
  // macOS
  "terminal.integrated.env.osx": {
    "PYTHONPATH": "${workspaceFolder}",
  },
  // Linux
  "terminal.integrated.env.linux": {
    "PYTHONPATH": "${workspaceFolder}",
  },
  // Windows
  "terminal.integrated.env.windows": {
    "PYTHONPATH": "${workspaceFolder}",
  },
```

