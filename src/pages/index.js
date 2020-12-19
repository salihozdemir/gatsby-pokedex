import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import CardContainer from "../components/PokeCard/CardContainer"
import Card from "../components/PokeCard"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <CardContainer>
      {data.pokemonApi.pokemons.map(pokemon => (
        <Card key={pokemon.id}>{pokemon.name}</Card>
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
      }
    }
  }
`

export default IndexPage
