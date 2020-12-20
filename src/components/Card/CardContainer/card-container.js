import React from "react"

import styles from "./card-container.module.css"

const CardContainer = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>
}

export default CardContainer
