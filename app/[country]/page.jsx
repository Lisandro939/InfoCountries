import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import CountrySection from '../../components/CountrySection'
import Head from 'next/head'
import { BsArrowLeft } from "react-icons/bs";

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
          <BsArrowLeft className={styles.icon}/>
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