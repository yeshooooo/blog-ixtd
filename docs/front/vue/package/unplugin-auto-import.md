---
title: unplugin-auto-import
author: 马超
date: 2025/1/31 0:24
categories:
  - 前端
tags:
  - 前端
  - vue
---

# unplugin-auto-import

[vue hooks自动导入](https://github.com/unplugin/unplugin-auto-import)

省流：

自动导入vue3中的api，如computed,ref,useState等以及vue-router,axios等各种api，可以无需导入，直接使用

## 安装

::: code-group

```npm
npm i -D unplugin-auto-import
```

```pnpm
pnpm add -D unplugin-auto-import
```

```yarn
yarn add -D unplugin-auto-import
```

:::

## 使用

### 导入官方预设的库api

```js
// vite.config.js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({ // [!code focus:3]
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'], 
    })
  ]
})
```

[其他配置及预设见官方文档](https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#configuration)

官方只为最流行的软件包提供预设

如果想让自己的库加入官方预设，可以参考[官方要求](https://github.com/unjs/unimport/blob/main/src/presets/README.md)

### 导入项目中的api

```js
// vite.config.js
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({ // [!code focus:3]
      // 其他设置
      dirs:你的文件夹路径 // [!code focus]
    })
  ]
})
```

### 自定义解析器

可以自定义一个Resolver，然后使用

```js
AutoImport({
  // targets to transform
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],

  // global imports to register
  imports: [
    // presets
    'vue',
    'vue-router',
    // custom
    {
      '@vueuse/core': [
        // named imports
        'useMouse', // import { useMouse } from '@vueuse/core',
        // alias
        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
      'axios': [
        // default imports
        ['default', 'axios'], // import { default as axios } from 'axios',
      ],
      '[package-name]': [
        '[import-names]',
        // alias
        ['[from]', '[alias]'],
      ],
    },
    // example type import
    {
      from: 'vue-router',
      imports: ['RouteLocationRaw'],
      type: true,
    },
  ],

  // Array of strings of regexes that contains imports meant to be filtered out.
  ignore: [
    'useMouse',
    'useFetch'
  ],

  // Enable auto import by filename for default module exports under directories
  defaultExportByFilename: false,

  // Options for scanning directories for auto import
  dirsScanOptions: {
    types: true // Enable auto import the types under the directories
  },

  // Auto import for module exports under directories
  // by default it only scan one level of modules under the directory
  dirs: [
    './hooks',
    './composables', // only root modules
    './composables/**', // all nested modules
    // ...

    {
      glob: './hooks',
      types: true // enable import the types
    },
    {
      glob: './composables',
      types: false // If top level dirsScanOptions.types importing enabled, just only disable this directory
    }
    // ...
  ],

  // Filepath to generate corresponding .d.ts file.
  // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
  // Set `false` to disable.
  dts: './auto-imports.d.ts',

  // Array of strings of regexes that contains imports meant to be ignored during
  // the declaration file generation. You may find this useful when you need to provide
  // a custom signature for a function.
  ignoreDts: [
    'ignoredFunction',
    /^ignore_/
  ],

  // Auto import inside Vue template
  // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
  vueTemplate: false,

  // Auto import directives inside Vue template
  // see https://github.com/unjs/unimport/pull/374
  vueDirectives: undefined,

  // Custom resolvers, compatible with `unplugin-vue-components`
  // see https://github.com/antfu/unplugin-auto-import/pull/23/
  resolvers: [ // [!code focus:3]
    /* ... */
  ],

  // Include auto-imported packages in Vite's `optimizeDeps` options
  // Recommend to enable
  viteOptimizeDeps: true,

  // Inject the imports at the end of other imports
  injectAtEnd: true,

  // Generate corresponding .eslintrc-auto-import.json file.
  // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
  eslintrc: {
    enabled: false, // Default `false`
    // provide path ending with `.mjs` or `.cjs` to generate the file with the respective format
    filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },

  // Generate corresponding .biomelintrc-auto-import.json file.
  // biomejs extends Docs - https://biomejs.dev/guides/how-biome-works/#the-extends-option
  biomelintrc: {
    enabled: false, // Default `false`
    filepath: './.biomelintrc-auto-import.json', // Default `./.biomelintrc-auto-import.json`
  },

  // Save unimport items into a JSON file for other tools to consume
  dumpUnimportItems: './auto-imports.json', // Default `false`
})
```



