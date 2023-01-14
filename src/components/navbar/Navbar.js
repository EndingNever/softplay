import React, { useState } from 'react'
import styles from './navbar.module.scss'
import menu from '../../images/menu.png'

export default function Navbar() {
  const [openNav, toggleOpenNav] = useState(false);

  const handleNav = () => {
    toggleOpenNav(!openNav)
  }

// TODO Align nav open and close buttons to be more in line with each other when opening and closing

  return (
    <div className={styles.navContainer}>
      <div className={styles.navToggle}>
        <img onClick={handleNav} src={menu} alt="" />
        {openNav &&
          <nav className={styles.navMenu_mobile}>
            <div className={styles.navMenu_mobile_close}>
              <h1 onClick={handleNav}>X</h1>
            </div>
            <ul className={styles.navMenu_mobile_items}>
              <li>Home</li>
              <li>Packages</li>
              <li>FAQ</li>
              <li>About</li>
            </ul>
          </nav>
        }
      </div>
    </div>
  )
}
