import React from 'react'

const Name = ({ names, toggleDelete }) => {
  return (
    <div>
      {names.map((name) => (
        <p key={name.id}>
          {name.name} {name.number}
          
          <button onClick={() => {
            if (window.confirm(`Delete ${name.name}?`)) {
              toggleDelete(name.id)
            }
          }}>Delete</button>
        </p>
      ))}
    </div>
  )
}

export default Name
