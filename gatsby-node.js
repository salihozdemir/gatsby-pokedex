const path = require("path")

// const POKEMONS_QUANTITY = process.env.LIMITED ? 20 : 151
const POKEMONS_QUANTITY = 20

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      pokemonApi {
        pokemons(first: ${POKEMONS_QUANTITY}) {
          name
        }
      }
    }
  `)

  result.data.pokemonApi.pokemons.forEach(({ name }) => {
    actions.createPage({
      path: name,
      component: path.resolve("./src/templates/pokemon.js"),
      context: {
        slug: name,
      },
    })
  })
}
