import React from 'react'
import styles from './CountriesButtons.module.css'
import Link from 'next/link'

export default async function CountriesButtons({ codes }) {

    const codigos = codes.join(',')

    const countries = await fetchCountries(codigos)
    
  return countries.map(country => (
    <Link key={country.name.common} className={styles.button} href={`/${country.name.common}`}>
        {country.name.common}
    </Link>
  ))
}

const fetchCountries = (codes) => {
    return fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
      .then(response => response.json())
  }
