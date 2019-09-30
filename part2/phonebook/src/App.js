import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const showPersons = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    // make sure newName is not already added
    const alreadyExists = persons.filter(p => p.name === newName);
    if ((alreadyExists || []).length > 0) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson));
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { showPersons() }
      </ul>
    </>
  )
}

export default App
