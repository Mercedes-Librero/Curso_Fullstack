import React, { useState, useEffect } from 'react'
import countrieService from './services/servCountries'
import InputField from './components/InputField'
import CountryList from './components/CountryList'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    countrieService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterCountry = (event) => {
    event.preventDefault()
    const filterValue = event.target.value
    setFilterCountry(filterValue)

    const filteredResults = countries.filter((resultCountry) =>
      resultCountry.name.common.toLowerCase().includes(filterValue.toLowerCase())
    )

    setFilteredCountries(filteredResults)
  }

  const viewCountryOf = (id) => {
    const filteredResult = countries.find(country => country.ccn3 === id)
    setFilteredCountries([filteredResult])
  }

  return (
    <div>
      <InputField label="Find countries" value={filterCountry} onChange={handleFilterCountry} />

      {filteredCountries.length < 2  
      ? (<Country countries={filteredCountries} />) 
      : (<CountryList countries={filteredCountries} viewCountry={viewCountryOf} />) }
  
    </div>
  )
}

export default App