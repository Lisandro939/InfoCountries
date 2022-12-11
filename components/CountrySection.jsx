import React from 'react'
import styles from './CountrySection.module.css'
import Image from 'next/image'
import CountriesButtons from './CountriesButtons';

export default function CountrySection({ data }) {

    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return str.join(".");
    }

    let claves1 = Object.keys(data.currencies);
    const currencie = data.currencies[claves1[0]].name;

    let claves2 = Object.keys(data.name.nativeName);
    const nativeName = data.name.nativeName[claves2[0]].official;

    let claves3 = Object.keys(data.languages);
    const language = data.languages[claves3[0]];

  return (
    <section className={styles.section}>
        <Image src={data.flags.png} alt='' width={100} height={100} priority unoptimized={true} className={styles.image}/>
        <div className={styles.dataContainer}>
            <h1 className={styles.name}>{data.name.common}</h1>
            <div className={styles.subDataContainer}>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Native name:</h4><p className={styles.p}>{nativeName}</p>
                </section>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Top Level Domain:</h4><p className={styles.p}>{data.tld[0]}</p>
                </section>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Population:</h4><p className={styles.p}>{separator(data.population)}</p>
                </section>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Currencies:</h4><p className={styles.p}>{currencie}</p>
                </section>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Region:</h4><p className={styles.p}>{data.region}</p>
                </section>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Languages:</h4><p className={styles.p}>{language}</p>
                </section>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Sub Region:</h4><p className={styles.p}>{data.subregion}</p>
                </section>
                <section className={styles.dataLine}>
                    <h4 className={styles.h4}>Capital:</h4><p className={styles.p}>{data.capital}</p>
                </section>
            </div>
            <div className={styles.borders}>
                <h4 className={styles.h4border}>Border countries:</h4>
                <div className={styles.borderCountries}>
                    <CountriesButtons codes={data.borders} />
                </div>
            </div>
        </div>
    </section>
  )
}
