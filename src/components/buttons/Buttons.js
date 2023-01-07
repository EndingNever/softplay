import React from 'react'
import styles from './Buttons.module.scss'

export default function Buttons(props) {
  return (
    <button className={styles.button}>
      <p>{props.text}</p>
    </button>
  )
}
