module.exports = {
  siteMetadata: {
    title: `Chief of the Naval Staff Blue Economy Initiative`,
    description: ``,
    menuLinks:[
            {
               name:'Home',
               link:'/'
            },
            {
               name:'About',
               link:'/about'
            }
          ],
    author: `@author`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-embed-video`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slider`,
        path: `${__dirname}/src/pages/posts/slider`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slider`,
        path: `${__dirname}/src/pages/posts/themeticAreas`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
