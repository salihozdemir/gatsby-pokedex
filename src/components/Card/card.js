import React from "react"
import { Link } from "gatsby"

import Image from "../image"
import TypeTag, { TypeTagContainer } from "../TypeTag"

import styles from "./card.module.css"

const Card = ({ name, number, types }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to={`/${name}`}>
          <Image filename={`pokemons/${number}.png`} alt={name} />
        </Link>
      </div>
      <div className={styles.pokemonInfo}>
        <p className={styles.number}>#{number}</p>
        <Link to={`/${name}`}>
          <h3 className={styles.name}>{name}</h3>
        </Link>
        <TypeTagContainer>
          {types.map(type => (
            <TypeTag key={type} name={type} />
          ))}
        </TypeTagContainer>
      </div>
    </div>
  )
}

export default Card
