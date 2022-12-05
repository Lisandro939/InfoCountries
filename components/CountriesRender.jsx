import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './CountriesRender.module.css'

export default function CountriesRender({countries}) {

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
}

  return (countries.slice(0, 10).map(country => (
    <Link key={country.name.common} href={`/${country.name.common}`}>
      <article  className={styles.article}>
          <Image src={country.flags.png} alt='' width={100} height={100} className={styles.image} priority unoptimized={true}/>
          <h4 className={styles.h4}>{country.name.common}</h4>
          <section className={styles.section}>
            <h5 className={styles.h5}>Population:</h5>
            <p className={styles.p}>{separator(country.population)}</p>
          </section>
          <section className={styles.section}>
            <h5 className={styles.h5}>Region:</h5>
            <p className={styles.p}>{country.region}</p>
          </section>
          <section className={styles.section}>
            <h5 className={styles.h5}>Capital:</h5>
            <p className={styles.p}>{country.capital}</p>
          </section>
      </article>
    </Link>
    
))
  )
}
