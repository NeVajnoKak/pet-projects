import React from 'react'
import styles from "./PagesLayout.module.css"

const PagesLayout = ({main: Component, image}) => {
  return (
    <div className={styles.page} style={{backgroundImage: `url(${image})`}}>
      <Component/>
    </div>
  )
}

export default PagesLayout