import React from 'react'
import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navToggle}>
        T
      </div>
      <div className={styles.phoneNumContainer}> 
        <p>(619) 289-7805</p>
      </div>
      <nav>

      </nav>
    </div>
  )
}
