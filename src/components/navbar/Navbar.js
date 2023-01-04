import React, { useState } from 'react'
import styles from './navbar.module.scss'
import menu from '../../images/menu.png'

export default function Navbar() {
  const [openNav, toggleOpenNav] = useState(false);
  return (
    <div className={styles.navContainer}>
      <div className={styles.navToggle}>
        <img src={menu} alt="" />
      </div>
      <div className={styles.phoneNumContainer}>
        <p>(619) 289-7805</p>
      </div>
      {openNav &&
        <nav>

        </nav>
      }
    </div>
  )
}
