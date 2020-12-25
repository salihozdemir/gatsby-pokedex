import React from "react"
import { graphql, Link } from "gatsby"

import Image from "../../components/image"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import TypeTag, { TypeTagContainer } from "../../components/TypeTag"
import Card from "../../components/Card"

import styles from "./pokemon.module.css"

const Pokemon = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.card}>
      <Link to="/" className={styles.back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>
        <span>Back</span>
      </Link>
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
