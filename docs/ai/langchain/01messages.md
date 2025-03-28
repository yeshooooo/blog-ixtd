---
title: 01messages
author: 马超
date: 2025/3/28 17:52
categories:
  - ai
tags:
  - ai
  - langchain
---
# 01messages

这里仅仅是个人的理解，详细用法参考[官方文档](https://python.langchain.com/docs/concepts/messages/#overview)

messages用于表示聊天模型的输入和输出，以及可能与对话相关联的任何附加上下文或元数据。这里强调聊天模型是因为LLM本身的输入输出就是字符串，并没有各种角色的问题。

message的重要作用就是屏蔽各种大模型之间的字段差异。比如assist,ai,human,user等，还有content中的差异。

langchain将不同的写法抽象成message,message由role和content两部分组成

其中，各种message抽象类是content中的内容

## role

role有system, user, assistant, tool, function(openai传统方式，现在建议使用tool角色)

## langchain中的5种主要消息类

使用的时候，直接在实例化类的时候传入字符串即可，如

* SystemMessage
  系统消息 --用于传递引导对话的内容
* AIMessage

  模型响应中的内容。
* HumanMessage

  用户输入的内容。
* ToolMessage

  工具角色。
* AIMessageChunk

  助手角色，用于流响应。
