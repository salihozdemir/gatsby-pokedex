import React from "react"
import { graphql } from "gatsby"

import Image from "../../components/image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import TypeTag, { TypeTagContainer } from "../../components/TypeTag"
import Card, { CardContainer } from "../../components/Card"

import styles from "./pokemon.module.css"

const Pokemon = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.card}>
      <div className={styles.pokemonRow}>
        <div className={styles.pokemonImage}>
          <div>
            <h2>{data.pokemonApi.pokemon.name}</h2>
            <p>{data.pokemonApi.pokemon.classification}</p>
          </div>
          <Image
            filename={`pokemons/${data.pokemonApi.pokemon.number}.png`}
            alt={data.pokemonApi.pokemon.name}
          />
        </div>
        <div className={styles.pokemonInfo}>
          <h3>Type</h3>
          <TypeTagContainer flexWrap="wrap">
            {data.pokemonApi.pokemon.types.map(type => (
              <TypeTag key={type} name={type} />
            ))}
          </TypeTagContainer>
          <h3>Weaknesses</h3>
          <TypeTagContainer flexWrap="wrap">
            {data.pokemonApi.pokemon.weaknesses.map(weak => (
              <TypeTag key={weak} name={weak} />
            ))}
          </TypeTagContainer>

          <h3>Resistant</h3>
          <TypeTagContainer flexWrap="wrap">
            {data.pokemonApi.pokemon.resistant.map(resist => (
              <TypeTag key={resist} name={resist} />
            ))}
          </TypeTagContainer>
        </div>
      </div>
      {data.pokemonApi.pokemon.evolutions && (
        <div className={styles.evolutions}>
          <h3>Evolutions</h3>
          <div className={styles.container}>
            {data.pokemonApi.pokemon.evolutions.map(evolution => (
              <Card
                key={evolution.number}
                name={evolution.name}
                number={evolution.number}
                types={evolution.types}
              />
            ))}
          </div>
        </div>
      )}
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
          types
        }
      }
    }
  }
`

export default Pokemon
