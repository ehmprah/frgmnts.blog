const path = require('path');

module.exports = {
  title: 'FRGMNTS',
  description: 'Mario "ehmprah" Kaiser\'s personal blog',
  markdown: {
    anchor: { permalink: false },
  },
  plugins: {
    alias: {},
    sitemap: {
      hostname: 'https://frgmnts.blog',
    },
    'vuepress-plugin-rss': {
      base_url: '/',
      site_url: 'https://frgmnts.blog',
      count: 20,
    },
  },
  themeConfig: {
    lastUpdated: true,
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set(
      '@components',
      path.resolve(__dirname, './components'),
    );
    config.resolve.alias.set('@theme', path.resolve(__dirname, './theme'));
  },
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: 'manifest.json' }],
    ['meta', { name: 'msapplication-TileColor', content: '#fff' }],
    ['meta', { name: 'theme-color', content: '#fff' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-102975947-1',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-102975947-1', { 'anonymize_ip': true });
    `,
    ],
  ],
};
