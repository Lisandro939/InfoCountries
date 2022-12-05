import React from 'react'
import styles from './CountriesButtons.module.css'

export default async function CountriesButtons({ codes }) {

    const codigos = codes.join(',')

    const countries = await fetchCountries(codigos)
    console.log(countries)
    
  return countries.map(country => (
    <button key={country.name.common} className={styles.button}>
        {country.name.common}
    </button>
  ))
}

const fetchCountries = (codes) => {
    return fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
      .then(response => response.json())
  }
