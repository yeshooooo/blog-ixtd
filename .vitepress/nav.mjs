/*
 * @Description:
 * @Author: yeshooo@马超
 * @version:
 * @Date: 2025-01-26 12:32:56
 * @LastEditors: yeshooo@马超
 * @LastEditTime: 2025-01-26 17:00:50
 */
export default [
  { text: '首页', link: '/' },
  // 子目录，把link改为items
  // 这里是默认找index，也可以把文章名称复制过来，注意不用带md后缀
  // activeMatch 选项后跟一个目录，可以有激活状态，就是蓝色高亮
  {
    text: 'cpp',

    items: [
      {
        text: 'cmake',
        items: [
          {
            text: 'conan',
            link: '/cpp/cmake/conan',
          },
        ],
      },
      {
        text: 'tools',
        link: '/cpp/tools',
      },
    ],
  },
  { text: 'python', link: '/' },
  { text: '前端', link: '/' },
  { text: 'cg', link: '/' },
  { text: 'cv', link: '/' },
  { text: 'tools', link: 'https://pan.ixtd.com' },
  { text: 'java', link: '/markdown-examples' },
  // 外部链接导航
  // 默认打开放生就是打开新的tag，可以使用target 控制， target: _self 是在本页
  // rel： seo用的也可以在这里设置
];
