'use client'

import React, { useEffect, useState} from 'react'
import styles from './Countries.module.css'
import CountriesRender from './CountriesRender';
import { BsSearch } from "react-icons/bs";

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [countriesPased, setCountriesPased] = useState(countries)
    const [countrySearch, setCountrySearch] = useState("");
    const [regionValue, setRegionValue] = useState("");
    const [nameValue, setNameValue] = useState("");

    const handleChangeSearcher = e => {
      setNameValue(e.target.value)
      setCountrySearch(e.target.value)
      if (regionValue === ""){
        filterByName(e.target.value)
      } else {
        filterByNameAndRegion(e.target.value, regionValue)
      }
      
      
    }

    const handleChangeSelector = e => {
      setRegionValue(e.target.value)
      if (nameValue === ""){
        filterByRegion(e.target.value)
      } else {
        filterByNameAndRegion(nameValue, e.target.value)
      }
      
    }

    const filterByName = (search) => {
      var searchResults = countries.filter((element) => {
        if (element.name.common.includes(search)){
          return element;
        }
      })
      setCountriesPased(searchResults)
    }

    const filterByNameAndRegion = (search, region) => {
      var searchResults = countries.filter((element) => {
        if (element.name.common.includes(search) && element.region.includes(region)){
          return element;
        }
      })
      setCountriesPased(searchResults)
    }

    const filterByRegion = (search) => {
      const countriesArray = []
      countries.filter((element) => {
        if (element.region.includes(search)){
          countriesArray.push(element)
        }
      })
      console.log(countriesArray)
      setCountriesPased(countriesArray)
    }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data)
        setCountriesPased(data)
      })
  },[])

  return (
    <>
      <div className={styles.containerSearcher}>
        <div className={styles.searcher}>
          <BsSearch className={styles.icon}/>
          <input 
          placeholder='Search for a country...'
          value={countrySearch}
          onChange={handleChangeSearcher}
          className={styles.input}
          />
        </div>
        <select
        onChange={handleChangeSelector}
        className={styles.select}
        placeholder="Region"
        >
          <option hidden defaultValue value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className={styles.container}>
          <CountriesRender countries={countriesPased} />
      </div>
    </>
  )
}

const fetchCountries = () => {
    return fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
  }