/*
 * @Description:
 * @Author: yeshooo@马超
 * @version:
 * @Date: 2025-01-26 11:05:08
 * @LastEditors: yeshooo@马超
 * @LastEditTime: 2025-01-28 11:51:15
 */
import { defineConfig } from 'vitepress';
import nav from './nav.mjs';
// 自动生成侧边栏插件
import AutoSiderbar from 'vite-plugin-vitepress-auto-sidebar';
// 自动引入代码组图标插件
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ix途岛',
  description: 'coding!coding!还是TMD conding!',
  // 配置favico等
  head: [['link', { rel: 'icon', href: '/super64.ico' }]],

  srcDir: 'docs',
  // 只有打开了 lastUpdated 这个开关，themeConfig 里的 lastUpdated 才会生效
  lastUpdated: true,
  themeConfig: {
    // 配置左上角logo
    logo: '/super.png',
    // 配置是否显示左上角标题，false为隐藏
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    // 在文章中显示最后修改时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        // dateStyle: 'full',
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],

    // 页脚备案号
    // https://vitepress.dev/zh/reference/default-theme-config#footer
    // footer: {
    //   copyright: `Copyright © 2024-${new Date().getFullYear()}&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/#/Integrated/index" style="text-decoration:none;" target="_blank">粤ICP备2024313431号</a>`,
    // },
    footer: {
      message: `本博客由<a href="https://www.dogecloud.com/?iuid=11480" target="_blank" style="background-image: linear-gradient(120deg, #007bff 0%, #6610f2 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent; margin: 0 5px; text-decoration: none">多吉云</a>提供安全防护和加速服务，
      由<a href="https://www.rainyun.com/Mjg4MDQ0_" target="_blank" style="
      background-image: linear-gradient(120deg, #007bff 0%, #6610f2 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin: 0 5px; text-decoration: none">雨云</a>
      和<a href="https://www.aliyun.com/minisite/goods?userCode=f1tn1sci" target="_blank" style="
      background-image: linear-gradient(120deg, #007bff 0%, #6610f2 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      
      margin: 0 5px; text-decoration: none">阿里云</a>提供云计算服务`,
      copyright: `Copyright © 2024-${new Date().getFullYear()}&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备2024313431号</a>`,
    },

    // 修改上一篇下一篇为中文
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    // 其他地方的中文配置
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    // 页面导航
    outline: {
      label: '页面导航',
      // 生成markdown标题
      // https://vitepress.dev/zh/reference/default-theme-config#outline
      level: 'deep',
    },

    // 打开搜索功能
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
    // ----

    // 跳转到其他站的社交链接
    // https://vitepress.dev/zh/reference/default-theme-config#sociallinks
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yeshooooo/blog-ixtd' },
      {
        icon: {
          svg: '<svg t="1737882080197" class="icon" viewBox="0 0 1225 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4201" width="200" height="200"><path d="M623.23256465 142.02549966c8.530011-0.9765 17.411849 0.933419 24.541732 5.808736 10.741495 6.936019 18.345268 17.526732 24.764317 28.368749 29.144205 48.84652 58.482273 97.585337 87.612117 146.446218C798.93786865 387.98133266 837.73936665 453.30628266 876.42598265 518.71021466c26.767577 45.234907 53.599775 90.441094 80.546856 135.57548 17.749316 30.149425 36.051503 59.982923 53.018183 90.584696 7.309387 12.809377 11.323087 27.600474 10.719955 42.384391-0.423628 11.430789-2.49869 23.177505-8.50129 33.086103-8.422309 13.97256-22.538472 23.838078-37.846539 28.979061-8.163824 2.936679-16.729736 4.932759-25.439251 4.94712-95.007666-0.035901-190.015331 0.028721-285.015816 0.02154-8.171004-0.208224-16.478431-1.148823-24.146825-4.107042-5.607692-2.390988-11.129223-5.334847-15.516291-9.635754-7.48889-7.409909-12.342668-17.921639-11.043061-28.598513 0.674934-7.46017 2.49869-14.819817 5.571791-21.655315 2.97976-7.015001 7.172964-13.405329 10.813297-20.082862 15.889659-28.340028 32.533233-56.256428 49.84456-83.75638 5.543071-8.652074 10.368128-18.000621 18.036522-25.037162 8.149463-7.46017 18.381169-13.311987 29.589373-14.073083 9.011081-0.373367 17.871378 2.742815 25.381809 7.575052 8.47257 4.96866 15.142924 13.240186 17.375949 22.890299 3.223885 12.213425-0.244125 25.044342-5.421009 36.202286-5.808737 12.672954-14.087443 24.175545-18.531952 37.465992-0.811356 3.022841-1.909918 6.835497 0.344647 9.49933 2.290466 2.154043 5.47127 3.0013 8.45103 3.748036 8.616173 1.917098 17.505191 1.421669 26.272147 1.479109 32.310648-0.00718 64.621296 0 96.931944 0 6.397508-0.107702 12.802197 0.215404 19.199705-0.157963 4.616833-0.531331 9.650114-1.285246 13.240186-4.50913 2.369448-2.096602 2.663833-5.636413 1.766315-8.508471-1.967359-6.361608-5.356387-12.155984-8.702334-17.871378-86.154548-147.128331-171.828026-294.543868-258.887273-441.148049-2.843337-4.710174-5.284586-9.822437-9.355728-13.627913-2.01044-1.931459-4.9902-3.030021-7.733015-2.233025-2.333547 0.840077-3.913178 2.893598-5.464089 4.717355-3.834197 4.889678-7.266306 10.095282-10.418389 15.45167-14.999321 24.376589-29.352429 49.140906-44.050184 73.696998-84.653898 142.475598-169.322156 284.944015-253.968874 427.426793-5.248685 9.664474-10.834837 19.149444-16.923599 28.311308-5.349207 7.869438-11.840057 15.243446-20.204926 19.982341-9.858338 5.701034-22.035862 7.96278-33.086103 4.695814-8.063302-2.49151-15.860938-6.548291-21.633774-12.809377-7.309387-7.237585-10.547632-17.828298-10.174264-27.959481 0.373367-10.669694 3.941899-21.066543 9.319827-30.228406 51.395471-87.303371 103.121228-174.420058 155.040849-261.421864 26.710136-45.091304 53.298209-90.24723 80.159128-135.245192 27.169665-45.593914 54.403951-91.144748 81.451554-136.810464 15.092663-25.719276 30.293028-51.381111 46.153966-76.640858 4.875318-8.005861 11.186664-15.186005 18.783256-20.714715 6.232365-4.250645 13.225825-7.898158 20.858319-8.573092z" fill="#70C6BE" p-id="4202"></path><path d="M618.91011765 479.49226866c12.802197-2.060701 26.365489 0.99804 36.977742 8.458209 8.056122 6.218005 13.649454 15.537832 15.264986 25.597214 1.098562 7.668394 0.351827 15.616813-2.46997 22.861578-2.168403 6.268266-5.277406 12.163164-8.738235 17.813938-49.37067 82.988105-98.72698 165.983389-148.10483 248.971493-6.318527 10.389668-12.077002 21.159884-19.357669 30.924881-5.291766 6.541111-11.904679 12.098543-19.537172 15.717335-16.133784 8.594632-37.185966 3.353127-49.456832-9.571132-6.218005-6.239545-9.865518-14.812637-10.339407-23.579593-0.703654-9.075702 1.299606-18.251926 5.406648-26.343949 3.611612-7.869438 7.883798-15.401409 12.342668-22.811317 21.698395-36.503852 43.202927-73.122587 64.836701-109.66234 29.610914-50.246648 59.710078-100.19891 89.507675-150.330675 3.166444-5.701034 7.115523-10.9569 11.552852-15.724515 5.98106-6.074402 13.570472-10.98562 22.114843-12.321127z" fill="#1BA0D8" p-id="4203"></path></svg>',
        },
        link: 'https://pan.ixtd.com',
      },
    ],
  },

  // 配置markdown属性
  markdown: {
    // 显示行号
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    // 配置代码组图标
    markdown: {
      config(md) {
        md.use(groupIconMdPlugin);
      },
    },
  },

  // 引入AutoSidebar
  // https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar
  vite: {
    plugins: [
      // 自动生成侧边栏
      AutoSiderbar({
        collapsed: true,
      }),
      // 代码组图标
      groupIconVitePlugin(),
    ],
  },
});
