module.exports = {
    title: 'GDG Fribourg',
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    plugins: ['@vuepress/last-updated'],
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Past editions',
                items: [
                    { text: '2018', link: '/2018/' },
                    { text: '2017', link: '/2017/' }
                ]
            },
            { text: 'gdgfribourg.ch', link: 'https://gdgfribourg.ch' },
        ],
        algolia: {
            apiKey: '67205320043f2a22eac77452fd058808',
            indexName: 'gdgfribourg',
            algoliaOptions: { 'facetFilters': ["lang:en-US"] }
        }
    }
  }
  