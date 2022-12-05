import React from 'react'
import styles from './Countries.module.css'
import CountriesRender from './CountriesRender';

export default async function Countries() {

    const countries = await fetchCountries();

  return (
    <div className={styles.container}>
        <CountriesRender countries={countries} />
    </div>
  )
}

const fetchCountries = () => {
    return fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
  }