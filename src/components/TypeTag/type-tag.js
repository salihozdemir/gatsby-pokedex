import React from "react"

import styles from "./type-tag.module.css"

const whiteColorTypes = [
  "Poison",
  "Fire",
  "Dragon",
  "Psychic",
  "Water",
  "Bug",
  "Fighting",
  "Rock",
  "Ghost",
]

const TypeTag = ({ name }) => {
  const textColor = () => {
    if (whiteColorTypes.indexOf(name) === -1) {
      return "--c-text"
    }
    return "--c-light"
  }

  const style = {
    "--bgColor": `var(--c-${name.toLowerCase()})`,
    "--textColor": `var(${textColor()})`,
  }

  return (
    <span className={styles.typeTag} style={style}>
      {name}
    </span>
  )
}

export default TypeTag
