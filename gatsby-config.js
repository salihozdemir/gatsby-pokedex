module.exports = {
  siteMetadata: {
    title: `Gatsby Pokedex`,
    description: `It shows the Pokemon. The purpose of the production is to practice with Gatsbyjs.`,
    author: `@salihozdemir`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "pokemon",
        fieldName: "pokemonApi",
        url: "https://graphql-pokemon2.vercel.app",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-pokedex`,
        short_name: `pokedex`,
        start_url: `/`,
        background_color: `#ff3838`,
        theme_color: `#ff3838`,
        display: `minimal-ui`,
        icon: `src/images/pokeball.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`K2D`, `source sans pro\:400,500,600,700`],
        display: "swap",
      },
    },
  ],
}
