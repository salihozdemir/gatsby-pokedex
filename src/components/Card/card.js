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
        <p>{number}</p>
        <h5>{name}</h5>
      </div>
    </div>
  )
}

export default Card
