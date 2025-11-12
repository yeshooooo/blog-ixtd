---
title: langchain接入各种模型
author: 马超
date: 2025/3/28 13:52
categories:
  - ai
tags:
  - ai
  - langchain
---
# langchain接入各种模型

langchain适配的各种大模型可能会不能适配各家最新版本，这时候需要自己去封装

## 智谱ai的Chat models

### 智谱官方调用api

[官方控制台](https://open.bigmodel.cn/console/overview)

我这里选用的是免费的GLM-4-FLASH

![image-20250328143348208](https://pic.ixtd.com/images/2025/03/28/image-20250328143348208.png)

[接口文档](https://www.bigmodel.cn/dev/api/normal-model/glm-4)

设置环境变量或者.env中

环境变量的名字是自定义的,我这里为了后续跟langchain对齐，使用的名字为langchain中定义的

```shell
ZHIPUAI_API_KEY=
```



[安装最新版python sdk](https://www.bigmodel.cn/dev/api/devguide/sdk-install)

```shell
pip install --upgrade zhipuai
```

```python
from zhipuai import ZhipuAI
import os
from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv(), verbose=True)

zhipuai_api_key = os.getenv("ZHIPUAI_API_KEY")
client = ZhipuAI(api_key = zhipuai_api_key)

prompt = "为什么天空是蓝色的？"

response = client.chat.completions.create(
  model = "glm-4-flash",
  messages = [
    {"role": "user", "content": "你好"},
    {"role": "assistant", "content": "你好，我是气象学家"},
    {"role": "user", "content": prompt}
  ]
)

print(response.choices[0].message)
```

### langchain适配的

[langchain关于智谱ai的文档](https://python.langchain.com/docs/integrations/chat/zhipuai/)

安装依赖

```shell
pip install --upgrade zhipuai
# 因为zhipuai依赖 PyJWT版本为2.8-2.9
pip uninstall PyJWT
pip install PyJWT==2.8
pip install --upgrade httpx httpx-sse
pip install --upgrade langchain-community langchain-core
```



```shell
from langchain_community.chat_models import ChatZhipuAI
from langchain_core.messages import AIMessage, HumanMessage, SystemMessage
from dotenv import load_dotenv,find_dotenv

_ = load_dotenv(find_dotenv(), verbose=True)

chat = ChatZhipuAI(
  model="glm-4-flash",
  temperature=0.5,
)
messages = [
    AIMessage(content="Hi."),
    SystemMessage(content="Your role is a poet."),
    HumanMessage(content="Write a short poem about AI in four lines."),
]

response = chat.invoke(messages)
print(response.content)  # Displays the AI-generated poem
```

