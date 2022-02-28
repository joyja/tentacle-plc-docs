const { path } = require('@vuepress/utils')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Tentacle PLC',
  description: 'A modern software programmable logic controller',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://res.cloudinary.com/jarautomation/image/upload/c_scale,h_53/v1620021619/logos/tentacle-light.png',
    logoDark: 'https://res.cloudinary.com/jarautomation/image/upload/c_scale,h_53/v1595057073/logos/tentacle.png',
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/directory-structure.md'
          ],
        },
      ],
    }
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  alias: {
    '@theme/Home.vue': path.resolve(__dirname, './components/TentacleHome.vue'),
  },
}