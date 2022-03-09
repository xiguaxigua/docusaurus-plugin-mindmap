# docusaurus-plugin-mindmap

> support to use mindmap in your website

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/xiguaxigua/docusaurus-plugin-mindmap/build/master)
![npm](https://img.shields.io/npm/v/docusaurus-plugin-mindmap)
![npm](https://img.shields.io/npm/dw/docusaurus-plugin-mindmap)
![GitHub top language](https://img.shields.io/github/languages/top/xiguaxigua/docusaurus-plugin-mindmap)
![GitHub](https://img.shields.io/github/license/xiguaxigua/docusaurus-plugin-mindmap)

## Install

```
npm i docusaurus-plugin-mindmap
```

## Add plugin

```js
  plugins: [
    ['mindmap', {}],
  ],
```

## Quick Start

in \*.mdx file

<!-- prettier-ignore -->
```jsx
import Mindmap from '@theme/Mindmap';

<Mindmap
  content={`
- 前端
-- HTML
-- CSS
-- JS
--- 闭包
--- 原型链
`}
/>
```

## Docs

https://xiguaxigua.com/docusaurus-plugin-mindmap

## License

[MIT](./LICENSE)
