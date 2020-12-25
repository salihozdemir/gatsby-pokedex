import React from "react"

import styles from "./type-tag-container.module.css"

const TypeTagContainer = ({ flexWrap = "nowrap", children }) => {
  return (
    <div
      className={styles.typeTagContainer}
      style={{ flexWrap: `${flexWrap}` }}
    >
      {children}
    </div>
  )
}

export default TypeTagContainer
