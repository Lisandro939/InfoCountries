import React from 'react'
import Countries from '../components/Countries'
import styles from './page.module.css'
import Head from 'next/head'

export default function page() {
  return (
    <>
      <Head>
        <title>Info Countries</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <Countries />
      </div>
    </>
  )
}
