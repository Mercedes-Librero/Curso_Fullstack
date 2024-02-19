import React from 'react'

const CountryList = ({ countries,viewCountry }) => {
  return (
    <div>
      {countries.map((country) => (
        <p key={country.ccn3} >
          {country.name.common} 
          <button onClick={() => viewCountry(country.ccn3)} >
        Ver
      </button>
        </p>
      ))}
    </div>
  )
}

export default CountryList