module.exports = {
  siteMetadata: {
    title: `Name Generator`,
    description: `Insert your description here.`,
    author: `@UnoCloud`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-excel`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
