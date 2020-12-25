const path = require("path")

const POKEMONS_QUANTITY = 151

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
      component: path.resolve("./src/templates/Pokemon/pokemon.js"),
      context: {
        slug: name,
      },
    })
  })
}
