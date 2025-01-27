/*
 * @Description:
 * @Author: yeshooo@马超
 * @version:
 * @Date: 2025-01-27 13:11:10
 * @LastEditors: yeshooo@马超
 * @LastEditTime: 2025-01-27 14:07:40
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
import { useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,
  // ...DefaultTheme, //或者这样写也可
  enhanceApp({ app, router }) {
    // app.component('DataPanel', DataPanel); //注册全局组件
    // if (inBrowser) {
    //   router.onAfterRouteChanged = () => {
    //     busuanzi.fetch();
    //   };
    // }
    app.component('Confetti', Confetti); //注册全局组件
  },

  // 图片缩放插件
  setup() {
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
  },
};
