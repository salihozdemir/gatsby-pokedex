import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Pokemon = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>{data.pokemonApi.pokemon.name}</p>
    <p>{data.pokemonApi.pokemon.number}</p>
    <img src={data.pokemonApi.pokemon.image}/>
    <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${data.pokemonApi.pokemon.number}.png`} />
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    pokemonApi {
      pokemon(name: $slug) {
        id
        name
        number
        image
        classification
        types
        resistant
        fleeRate
        maxCP
        maxHP
        height {
          minimum
          maximum
        }
        weight {
          minimum
          maximum
        }
        evolutionRequirements {
          name
          amount
        }
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }
  }
`

export default Pokemon
