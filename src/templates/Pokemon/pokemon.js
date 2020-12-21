import React from "react"
import { graphql } from "gatsby"

import Image from "../../components/image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

import styles from "./pokemon.module.css"

const Pokemon = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          filename={`pokemons/${data.pokemonApi.pokemon.number}.png`}
          alt={data.pokemonApi.pokemon.name}
        />
      </div>
      <p>{data.pokemonApi.pokemon.name}</p>
    </div>
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
        types
        resistant
        weaknesses
        classification
        evolutions {
          number
          name
        }
      }
    }
  }
`

export default Pokemon
