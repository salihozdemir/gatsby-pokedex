import React from "react"

import Image from "../image"

import styles from "./card.module.css"

const Card = ({ name, number, types }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image filename={`pokemons/${number}.png`} alt={name} />
      </div>
      <div className={styles.pokemonInfo}>
        <p className={styles.number}>#{number}</p>
        <h3 className={styles.name}>{name}</h3>
        <div>
          {types.map(type => (
            <span>{type}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
