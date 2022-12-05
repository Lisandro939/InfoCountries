import React from 'react'
import styles from './Searcher.module.css'

export default function Searcher() {
  return (
    <div className={styles.container}>
        <input placeholder='Search for a country'/>
        <button>
            Filter by Region
        </button>
    </div>
  )
}