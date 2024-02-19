import React from 'react'

const Language = ({languageName,languageCode}) => {
  console.log(languageCode)
  return (
    <div>
      <ul>
        <li key={languageCode}>{languageName}</li>
        </ul>
    </div>
  )
}
export default Language