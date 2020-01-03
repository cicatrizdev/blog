module.exports = {
  siteMetadata: {
    siteTitle: 'Pedro Mello - Blog',
    siteDescription: 'De dev para dev. Seu kick-start como desenvolvedor!',
    siteImage: '/banner.png',
    siteUrl: 'https://pedro-mello.netlify.com',
    pathPrefix: '/',
    siteLanguage: 'pt',
    ogLanguage: `pt_BR`,
    author: 'Pedro Mello',
    authorDescription: 'front-end dev 🏈🍺💻',
    avatar: '/perfil.jpg',
    twitterSite: '',
    twitterCreator: '',
    social: [
      {
        icon: `github`,
        url: `https://github.com/cicatrizwp`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/pedro-c-mello`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          feedShowMoreButton: 'mostrat mais',
          feedSearchPlaceholder: 'pesquisa aí!',
          cardReadMoreButton: 'leia mais →',
          allTagsButton: 'todas as tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
