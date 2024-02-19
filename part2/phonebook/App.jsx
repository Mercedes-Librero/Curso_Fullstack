import { useState, useEffect } from 'react'
import personService from './services/servPersons'
import Name from './components/Name'
import InputField from './components/InputField'
import InputForm from './components/InputForm'


const App = () => {

  // //// const
  const [names, setNames] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [filterName,setFilterName] = useState('')
  const [filteredNames, setFilteredNames] = useState([])
  // FIN   const


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setNames(initialPersons)
      })
  }, [])

  // //// ACCIONES

  // Añadir
  const addName = (event) => {
    event.preventDefault()  // evita recarga documento
    
    // si ya existe y deseamos cambiar numero
    if (names.some((existingName) => existingName.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one`)) {
        const person = names.find (n => n.name ===  newName)
        const changePerson = {...person, number:newNumber}

        personService
          .update(changePerson.id,changePerson)
          .then(() =>{
            setNames(names.map(person=> person.id !== changePerson.id ))

              personService
              .getAll()
              .then(initialPersons => {
                setNames(initialPersons)
              })            

              setNewName('')
              setNewNumber('')

          })
          .catch(error => {
            alert(`Error`)
          })
      }else{
        setNewName('')
        setNewNumber('')
      }

    }else{
      const nameObject = {
        name: newName,
        number: newNumber,
      }
       personService
        .create(nameObject)
        .then(returnedPerson => {
          setNames(names.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  // Eliminar
  const toggleDeleteOf = (id) => {
    const name = names.find (n=> n.id === id)

    personService
      .remove(id)
      .then(() => {
        setNames(names.filter(name => name.id !== id ))

        personService
        .getAll()
        .then(initialPersons => {
          setNames(initialPersons)
        })

      })

      .catch(error => {
        alert(`error '${name.name}```)
      })
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    event.preventDefault()  // evita recarga documento
    const filterValue = event.target.value
    setFilterName(filterValue)

    // Filtrar nombres que coincidan con el valor del filtro
    const filteredResults = names.filter((resultName) =>
      resultName.name.toLowerCase().includes(filterValue.toLowerCase())
    )

    setFilteredNames(filteredResults)
  }
  // FIN ACCIONES

  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <InputField label="Filter shown with" value={filterName} onChange={handleFilterChange} />
      </div>

      <h2>Add a new</h2>

      <InputForm
        onSubmit={addName}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />

      <h2>Numbers</h2>
      
      {/* Mostrar los resultados filtrados si hay un filtro, de lo contrario, mostrar todos los nombres */}
      <Name key={filteredNames.length > 0 
              ? filteredNames[0].id 
              : names.length} 

            names={filteredNames.length > 0 
              ? filteredNames 
              : names}     
            toggleDelete={toggleDeleteOf}
      />
    </div>
  )
}

export default App