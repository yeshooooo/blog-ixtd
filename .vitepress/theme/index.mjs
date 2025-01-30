/*
 * @Description:
 * @Author: yeshooo@马超
 * @version:
 * @Date: 2025-01-27 13:11:10
 * @LastEditors: yeshooo@马超
 * 参考自 https://github.com/Yiov/vitepress-doc/blob/main/docs/.vitepress/theme/index.ts
 * @LastEditTime: 2025-01-30 11:32:54
 */
import DefaultTheme from 'vitepress/theme';
import './style/index.css'; //引入自定义的样式

// 不蒜子访问量统计插件，这里没开启
// import { inBrowser } from 'vitepress';
// import busuanzi from 'busuanzi.pure.js';
// import DataPanel from './components/DataPanel.vue';

// 五彩纸屑插件
import Confetti from './components/Confetti.vue';

// 图片缩放插件
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
// import { useRoute } from 'vitepress';

// 配置giscus
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

// 配置自定义Layout
import MyLayout from './components/MyLayout.vue';

// 配置归档
// import ArticleList from './components/ArticleList.vue'; // 测试归档
import Archive from './components/Archive.vue'; // 归档 https://docs.yuzaicn.com/blog/%E5%8D%9A%E5%AE%A2%E5%8E%86%E7%A8%8B/2024-05-15-%E5%BD%92%E6%A1%A3%E4%B8%8E%E6%A0%87%E7%AD%BE.html

export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
  //  自定义Layout
  Layout: MyLayout,

  enhanceApp({ app, router }) {
    // app.component('DataPanel', DataPanel); //注册全局组件
    // if (inBrowser) {
    //   router.onAfterRouteChanged = () => {
    //     busuanzi.fetch();
    //   };
    // }
    app.component('Confetti', Confetti); //注册全局组件
    // app.component('ArticleList', ArticleList);

    app.component('Archive', Archive); // 全局注册归档组件
  },

  setup() {
    // 图片缩放
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // giscus配置
    // Get frontmatter and route --- discus
    const { frontmatter } = useData();
    giscusTalk(
      {
        repo: 'yeshooooo/blog-ixtd', //仓库
        repoId: 'R_kgDONvu7Sw', //仓库ID
        category: 'Announcements', // 讨论分类
        categoryId: 'DIC_kwDONvu7S84CmX5h', //讨论分类ID
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
      },
      {
        frontmatter,
        route,
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
};
