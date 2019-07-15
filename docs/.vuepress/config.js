module.exports = {
    title: 'GDG Fribourg',
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
        ]
    }
  }