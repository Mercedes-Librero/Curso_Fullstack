import React from 'react'
import Language from './Language'
import Weather from './Weather'


const Country = ({ countries }) => {
   return (
    <div>
      {countries.map((country) => (
        <div key={country.ccn3} >
          <h1>{country.name.common} </h1>
          <p>Capital {country.capital}</p>
          <p>Area {country.area}</p>
        <h2>Languages</h2>      
            {Object.entries(country.languages).map(([languageCode, languageName]) => (
              <Language languageName={languageName} languageCode={languageCode} />
            ))}      
        <img src={country.flags.png}/>
        <h2>Wheather in {country.capital}</h2>
        <Weather lat={country.latlng[0]} lon={country.latlng[1]}/>
        </div>
      ))}
    </div>
  )
}

export default Country