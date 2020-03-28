const { version, repository, homepage } = require('./package.json');

module.exports = {
  plugins: [
    { 
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5e7f678d69e9320caabdf7d9",
        // get this from the tawk script widget
      },
    },
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        GATrackingId: `UA-XXXXXXXXX-X`,
        pathPrefix: '/g2',
        // antd 主题：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        theme: {
          'primary-color': '#db4241',
        },
        pwa: true, // 是否开启 gatsby-plugin-offline
        cname: true, // 是否自动从 siteUrl 中提取 CNAME 文件
        codeSplit: true, // 是否开启 gatsby 按路由的代码分割，默认为 false

      },
    },
  ],
  siteMetadata: {
    title: 'Ucan',
    description: 'staff transport solutions',
    siteUrl: homepage,
    githubUrl: repository.url,
    navs: [
     
    /* {
        slug: 'docs/specification/getting-started',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
      },
      {
        slug: 'docs/other',
        title: {
          zh: '其他文档',
          en: 'other',
        },
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
          en: 'Examples',
        },
      },
      {
        slug: 'independent',
        title: {
          zh: '独立',
          en: '',
        },
        // target: '_blank',
      },*/
    ],
    docs: [
    /* {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1',
        },
        order: 4,
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
          en: 'three level',
        },
        order: 2,
      },
      {
        slug: 'other/category',
        title: {
          zh: '分类二',
          en: 'category2',
        },
        order: 4,
      },*/
    ],
    examples: [
     /* {
        slug: 'category',
        icon: 'pie',
        title: {
          zh: '饼图分类',
          en: 'Category',
        },
      },*/
    ],
    versions: {
      [version]: 'https://ucanshuttle.co.za',
    },
    playground: {
      container: '<div id="container" class="ok" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
      dependencies: {
        '@antv/l7': 'beta',
      },
      htmlCodeTemplate: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
  </head>
  <body>
    <div id="container" />
    <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g2-3.5.1/dist/g2.min.js"></script>
    <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.10.1/dist/data-set.min.js"></script>
    <script>
{{code}}
    </script>
  </body>
</html>`,
    },
    redirects: [],
  },
};
