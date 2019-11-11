require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Travel to Paris, Antwerp, Dusseldorf, Cologne`,
    description: `This is a web to show my last travel through Nordern part of Europe.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: ['gatsby-source-cloud'],
      options:{
      cloudName: `martinez`,
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
      resourceType: `image`,
      maxResults: 100,
      tags: true,
      context: true
      
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
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
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
