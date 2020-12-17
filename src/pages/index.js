import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.pokemonApi.pokemons.map(pokemon => (
        <li>
          <Link key={pokemon.id} to={`/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
