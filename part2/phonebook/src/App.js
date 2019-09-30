import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ])
  const [ newPerson, setNewPerson ] = useState({
    name: '',
    number: '',
  })

  const showPersons = () => persons.map(person =>
    <Person
      key={person.name}
      person={person}
    />
  )

  const handleChangeName = (event) => {
    const _person = {
      name: event.target.value,
      number: newPerson.number
    };
    setNewPerson(_person);
  }

  const handleChangeNumber = (event) => {
    const _person = {
      number: event.target.value,
      name: newPerson.name
    };
    setNewPerson(_person);
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    // make sure newName is not already added
    const alreadyExists = persons.filter(p => p.name === newPerson.name);
    if ((alreadyExists || []).length > 0) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(newPerson));
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newPerson.name} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newPerson.number} onChange={handleChangeNumber} />
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
