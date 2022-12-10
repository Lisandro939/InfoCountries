import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import CountrySection from '../../components/CountrySection'
import Head from 'next/head'

export default async function page({ params }) {
  const { country } = params
  const data = await fetchCountries(country)
  return (
    <div className={styles.container}>
      <Head>
        <title>Info {country}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        <Link href='/' className={styles.link}>
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
          Back
        </Link>
      </header>
      <CountrySection data={data[0]} />
    </div>
  )
}

// https://restcountries.com/v3.1/name/{name}

const fetchCountries = (country) => {
  return fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
}