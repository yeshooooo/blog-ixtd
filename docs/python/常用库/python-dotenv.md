---
title: python-dotenv
author: 马超
date: 2025/3/24 17:07
categories:
  - python
tags:
  - python
  - packages
---
# python-dotenv

将环境变量放在.env中，而不是设置全局环境变量或者硬编码到代码中

python-dotenv还可以与其他工具集成使用，如docker-compose，flask等

## 变量格式

key=value

key="value"

key='value'

key=value #注释

## 安装

```shell
pip install python-dotenv
```

## 使用

将环境变量写入.env文件，每个key=value一行

```python
from dotenv import load_dotenv
import os

load_dotenv()
XXXXX = os.getenv("XXXXX")
```

加载所有.env种的环境变量

```python
from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv(), verbose=True) 
```





如在flask中

```python
from flask import Flask
from dotenv import load_dotenv

...
# 将.env文件中的环境变量加载到系统中
load_env()
# 使用
app.config["XXXX"] = os.getenv("XXXX")

```
