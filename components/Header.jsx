import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>
            Where in the world?
        </h1>
        <button>
            Dark Mode
        </button>
    </div>
  )
}
