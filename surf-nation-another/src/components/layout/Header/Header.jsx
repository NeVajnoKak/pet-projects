import React from 'react'
import styles from "./Header.module.css"
import Logo from '../../icons/Logo'

const Header = () => {
  return (
    <header>
        <div className={styles.logo}>
            <Logo/>
        </div>
    </header>
  )
}

export default Header