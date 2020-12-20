import React from "react"

import styles from "./type-tag-container.module.css"

const TypeTagContainer = ({ children }) => {
  return <div className={styles.typeTagContainer}>{children}</div>
}

export default TypeTagContainer
