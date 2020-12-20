import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import CardContainer from "../components/Card/CardContainer"
import Card from "../components/Card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <CardContainer>
      {data.pokemonApi.pokemons.map(pokemon => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          number={pokemon.number}
          types={pokemon.types}
        />
      ))}
    </CardContainer>
  </Layout>
)

export const query = graphql`
  {
    pokemonApi {
      pokemons(first: 151) {
        id
        name
        number
        types
      }
    }
  }
`

export default IndexPage
