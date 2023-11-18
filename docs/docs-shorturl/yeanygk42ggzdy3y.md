
# VitePress短路由模式
本文档默认的部署方案，其文档站点的 URL 是以下格式，因为 URL 中存在中文，会导致 URL 很长，且可读性比较差。  
`https://yuque-vitepress.vercel.app/docs/%E5%85%A5%E9%97%A8%E6%8C%87%E5%BC%95/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B`  
如果你很介意，可以参考[示例仓库](https://github.com/LetTTGACO/yuque-vitepress)进行配置

## 配置信息

### 修改工具函数
打开`utils/route.ts`文件，注释现有的函数方法，放开生成短路由函数的注释

### 修改 VitePress 配置文件

1. 导入短路由方法函数
2. `nav`，放开配置短路由入口文档路由注释
3. `sidebar`，放开生成短路由的函数注释
```javascript
import { defineConfig } from 'vitepress'
// 导入短路由方法
import { genYuqueSideBarWithShortUrl } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Yuque-VitePress",
  description: "语雀 + Elog + VitePress + GitHub Actions + Vercel 文档站点解决方案",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    outline: [2,6],
    nav: [
      { text: '首页', link: '/' },
      // { text: '配置文档', link: '/docs/入门指引/快速开始', activeMatch: '/docs/' },
      // 配置短路由入口文档路由
      { text: '短路由模式', link: '/docs-shorturl/ssuhngw0yb3dgkkg', activeMatch: '/docs-shorturl/' }
    ],
    sidebar: {
      // "/docs/": await genYuqueSideBar('/docs'),
      // 生成短路由
      "/docs-shorturl/": await genYuqueSideBarWithShortUrl('/docs-shorturl')
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: { svg: YuQueSVG }, link: "https://www.yuque.com/1874w/yuque-vitepress-template" },
      { icon: 'github', link: 'https://github.com/elog-x/yuque-vitepress' }
    ],
    footer: {
      message: 'Powered by <a href="https://www.yuque.com/1874w/yuque-vitepress-template" target="_blank">语雀</a>  & <a href="https://vitepress.dev" target="_blank">VitePress</a> with <a href="https://github.com/LetTTGACO/elog" target="_blank">Elog</a>',
      copyright: 'Copyright © 2023-present'
    },
  }
})

```

### 修改本地同步命令
```javascript
// 由原来的npm run elog:sync-local 改为以下同步命令

npm run elog:sync-local-short
```

### 修改 Github Actions 文件
打开`.github/workflows/sync.yaml`文件，找到**拉取文档**的步骤，放开`npm run elog:sync-short`的注释，将原有的`npm run elog:sync`注释

## 


