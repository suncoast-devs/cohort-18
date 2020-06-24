import React, { Component } from 'react'
import { Pet } from './components/Pet'

class App extends Component {
  state = {
    pets: [],
    filterText: '',
  }

  fetchAllThePets = async () => {
    const response = await fetch('https://sdg-tamagotchi.herokuapp.com/Pets', {
      method: 'GET',
    })

    const petsFromTheApi = await response.json()

    this.setState({ pets: petsFromTheApi })
  }

  handleDeletePet = async id => {
    // Given a pet ID, delete that pet from the API
    await fetch(`https://sdg-tamagotchi.herokuapp.com/Pets/${id}`, {
      method: 'DELETE',
    })

    // RELOAD ALL THE PETS!
    this.fetchAllThePets()
  }

  handleFeedPet = async id => {
    // Given a pet ID, feed that pet from the API
    await fetch(`https://sdg-tamagotchi.herokuapp.com/Pets/${id}/Feed`, {
      method: 'POST',
    })

    // RELOAD ALL THE PETS!
    this.fetchAllThePets()
  }

  // This is run ONCE when the component first
  // is put on the page. Perfect spot to fetch some pets
  async componentDidMount() {
    this.fetchAllThePets()
  }

  handleFilterTextChange = event => {
    const value = event.target.value

    this.setState({ filterText: value })
  }

  render() {
    // Destructure state to a few local variables
    const { pets, filterText } = this.state

    const filteredListOfPetsToRender = pets.filter(pet =>
      pet.name.includes(filterText)
    )

    // Sorting by alphabetical name
    //
    const sortedAndFilteredListOfPetsToRender = filteredListOfPetsToRender.sort(
      (pet1, pet2) => pet1.name.localeCompare(pet2.name)
    )

    // Sorting by ID
    // const sortedAndFilteredListOfPetsToRender = filteredListOfPetsToRender.sort(
    //   (pet1, pet2) => pet1.id - pet2.id
    // )

    const petsToRender = sortedAndFilteredListOfPetsToRender.map(pet => (
      <Pet
        key={pet.id}
        id={pet.id}
        name={pet.name}
        hungerLevel={pet.hungerLevel}
        happinessLevel={pet.happinessLevel}
        handleDeletePet={this.handleDeletePet}
        handleFeedPet={this.handleFeedPet}
      />
    ))

    return (
      <main className="container p-4">
        <div className="jumbotron bg-info text-white-50">
          <h1 className="display-4">Tamagotchi</h1>
          <p className="lead">These are all my pets</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={filterText}
              onChange={this.handleFilterTextChange}
            />
          </li>
          {petsToRender}
        </ul>
      </main>
    )
  }
}

export default App
