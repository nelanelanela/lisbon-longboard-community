module.exports = {
  siteMetadata: {
    title: `Lisbon longboard community`,
    description: `Hi! Welcome to the community of Lisbon Longboarders! We're hosting a meetup every two weeks. If you're from around or passing by Lisboa - join us!`,
      author: `@nelanelanela`,
  },
  plugins: [
  // in gatsby-config.js
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/images/favicon.png",

      // WebApp Manifest Configuration
      appName: null, // Inferred with your package.json
      appDescription: null,
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/?homescreen=1',
      version: '1.0',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    },
  },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
