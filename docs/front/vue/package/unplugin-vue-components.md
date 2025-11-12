---
title: unplugin-vue-components
author: 马超
date: 2025/1/31 0:24
categories:
  - 前端
tags:
  - 前端
  - vue
---

# unplugin-vue-components

[vue按需自动导入组件库](https://github.com/unplugin/unplugin-auto-import)

省流：自动导入vue组件

主要有两个作用：

1. 在使用第三方ui组件库的时候，不需要在每次使用的使用都import具体组件，直接使用即可
2. 使用自定义组件的时候，不需要在使用组件前先import组件，直接使用组件即可

## 安装

::: code-group

```npm
npm i unplugin-vue-components -D
```

```pnpm
pnpm add -D unplugin-vue-components
```

```yarn
yarn add -D unplugin-vue-components
```

:::

## 使用

### 自动导入常用ui库示例

[每种ui库的具体导入方式详见官方文档](https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file#importing-from-ui-libraries)

```js
//  vite.config.js
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  VantResolver,
  ElementUiResolver
} from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    Components({
      // ui库解析器，也可以自定义
      resolvers: [
        ElementPlusResolver(), 
        AntDesignVueResolver(),
        VantResolver()
      ]
    })
  ]
})

```

### 自动导入自定义组件

默认会递归搜索相对于vite.config.js而言的 `src/components` 及其所有子目录，如果想搜索其他目录，可自定添加，如

```js
// vite.config.ts
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Components({ 
      dirs: [ // [!code focus:4]
        'src/components',
        'src/views/components'
      ]
    }),
  ],
})
```





### 插件的所有默认配置

```js
// 插件的所有默认配置
Components({
  // relative paths to the directory to search for components.
  // 要搜索组件的目录的相对路径
  dirs: ['src/components'],
  
  // valid file extensions for components.
  // 组件的有效文件扩展名。
  extensions: ['vue'],
  
  // Glob patterns to match file names to be detected as components.
  // When specified, the `dirs`, `extensions`, and `directoryAsNamespace` options will be ignored.
  // If you want to exclude components being registered, use negative globs with leading `!`.
  globs: ['src/components/*.{vue}'],
   
  // search for subdirectories
  // 搜索子目录
  deep: true,
  
  // resolvers for custom components
  // 自定义组件的解析器
  // 第三方ui库一般在这里配
  resolvers: [],

  // generate `components.d.ts` global declarations, 
  // also accepts a path for custom filename
  // 生成 `components.d.ts` 全局声明，
  // 这里就是配置文件生成目录
  // 也接受自定义文件名的路径
  dts: false,

  // Allow subdirectories as namespace prefix for components.
  // 允许子目录作为组件的命名空间前缀。
  directoryAsNamespace: false,
    
  // Collapse same prefixes (camel-sensitive) of folders and components
  // to prevent duplication inside namespaced component name.
  // works when `directoryAsNamespace: true`
  collapseSamePrefixes: false,
  
  // 忽略命名空间前缀的子目录路径
  // 当`directoryAsNamespace: true` 时有效
  // Subdirectory paths for ignoring namespace prefixes
  // works when `directoryAsNamespace: true`
  globalNamespaces: [],

  // auto import for directives
  // default: `true` for Vue 3, `false` for Vue 2
  // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
  // To install Babel, run: `npm install -D @babel/parser @babel/traverse`
  // 自动导入指令
  // 默认值：Vue 3 的`true`，Vue 2 的`false`
  // 需要 Babel 来为 Vue 2 进行转换，出于性能考虑，它默认处于禁用状态。
  directives: true,
  
  // Transform path before resolving
  importPathTransform: v => v,

  // Allow for components to override other components with the same name
  allowOverrides: false,

  // Filters for transforming targets (components to insert the auto import)
  // Note these are NOT about including/excluding components registered - use `globs` or `excludeNames` for that
  include: [/\.vue$/, /\.vue\?vue/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

  // Filters for component names that will not be imported
  // Use for globally imported async components or other conflicts that the plugin cannot detect
  excludeNames: [/^Async.+/],

  // Vue version of project. It will detect automatically if not specified.
  // Acceptable value: 2 | 2.7 | 3
  version: 2.7,

  // Only provide types of components in library (registered globally)
  types: []
})

```

