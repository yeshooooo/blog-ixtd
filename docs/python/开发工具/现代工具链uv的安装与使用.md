---
title: 现代工具链uv的安装与使用
author: 马超
date: 2025/2/2 8:53
categories:
  - python
tags:
  - python
  - tools
  - 开发工具
---

# 现代工具链uv的安装与使用



## 安装

[官方其他安装方式](https://docs.astral.sh/uv/getting-started/installation/)

### 独立程序方式安装

::: code-group

```mac/linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```

```windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

:::

独立程序版本，linux下安装在了 `~/.local/bin`下有uv和uvx两个可执行程序

windows下安装在了 `%USERPROFILE%/.local/bin`下的uv.exe和uvx.exe两个文件

### pip安装



### 更新

::: code-group

```独立程序方式
uv self update
```

```pip
pip install --upgrade uv
```

:::

## 使用场景举例

### python版本管理器

查看可安装和已安装的python，这里图中的两个python，一个由安装包安装，一个由uv安装，uv均可检测到

```shell
uv python list
```

![image-20250202094720676](https://pic.ixtd.com/images/2025/02/02/image-20250202094720676.png)

### 创建python项目

使用uv创建项目后，还会自动使用git管理项目

`uv init 项目名 --python 版本`

更多参数使用 `uv init --help`查询

如果不带参数名，会默认使用[BUILD Systems](https://docs.astral.sh/uv/concepts/projects/config/#build-systems)自己推断

```shell
uv init projectx
```

![image-20250202095233482](https://pic.ixtd.com/images/2025/02/02/image-20250202095233482.png)

创建虚拟环境

`uv venv xxx --python 版本`

如:

```shell
uv venv myenv --python 3.11
```



初始化完项目之类立即执行,这时候会自动创建虚拟环境和uv.lock文件(uv.lock文件由uv自动管理，不要修改里面的内容)

如果没有创建虚拟环境，使用`uv sync`命令会自动创建`.venv`虚拟环境

```shell
uv sync
```

![image-20250202095544535](https://pic.ixtd.com/images/2025/02/02/image-20250202095544535.png)

### 运行脚本

```shell
uv run hello.py
```

### requirements.txt

这里很多种使用方式，具体根据需求参考官方文档

可以从pyproject.toml生成requirements.txt

```shell
uv pip compile pyproject.toml -o requirements.txt
```

从`requirements.txt`中安装依赖

```shell
uv pip install -r requirements.txt
```

当然也可以从`pyproject.toml`安装

```shell
uv pip install -r pyproject.toml
```



### 添加依赖

```shell
uv add 包名
```

也可以在原来的pip命令之前加上uv

```shell
uv pip install 包名
```



### uv还可以集成各种框架，CI/CD工具等

[进阶使用查看官方文档](https://docs.astral.sh/uv/guides/integration/fastapi/#migrating-an-existing-fastapi-project)

