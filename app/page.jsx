import React from 'react'
import Countries from '../components/Countries'
import Searcher from '../components/Searcher'
import styles from './page.module.css'

export default function page() {
  return (
    <div className={styles.container}>
      <Searcher />
      <Countries />
    </div>
  )
}
