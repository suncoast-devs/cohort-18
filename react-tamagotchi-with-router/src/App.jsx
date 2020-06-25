import React, { Component } from 'react'
import { Pet } from './components/Pet'
import { NewPet } from './components/NewPet'
import { PetList } from './components/PetList'
import { ShowPet } from './components/ShowPet'
import { Route, Link, Switch } from 'react-router-dom'

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

  handleInteractWithPet = async (id, interaction) => {
    // Given a pet ID, feed that pet from the API
    await fetch(
      `https://sdg-tamagotchi.herokuapp.com/Pets/${id}/${interaction}`,
      {
        method: 'POST',
      }
    )

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

  handleAddNewPet = async newPetName => {
    // Call the API to add a pet

    const newPetToSend = {
      name: newPetName,
    }

    const response = await fetch(`https://sdg-tamagotchi.herokuapp.com/Pets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newPetToSend),
    })

    // Get the newly created pet from the API response
    const newPetReceived = await response.json()

    // Append this pet to the list of existing pets
    // Reset our list of pets
    this.setState({ pets: [...this.state.pets, newPetReceived] })

    // Clear the input
    this.setState({ newPetName: '' })
  }

  render() {
    // const pets = this.state.pets
    // const filterText = this.state.filterText

    // Destructure state to a few local variables
    // This line replaces the two above
    const { pets, filterText } = this.state

    const filteredListOfPetsWithValidNames = pets.filter(
      pet => pet.name !== null
    )

    const filteredListOfPetsToRender = filteredListOfPetsWithValidNames.filter(
      pet => pet.name.includes(filterText)
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
        handleDeletePet={() => this.handleDeletePet(pet.id)}
        handleFeedPet={() => this.handleInteractWithPet(pet.id, 'Feed')}
        handleScoldPet={() => this.handleInteractWithPet(pet.id, 'Scold')}
        handlePlayPet={() => this.handleInteractWithPet(pet.id, 'Play')}
      />
    ))

    return (
      <main className="container p-4">
        <div className="jumbotron bg-info text-white-50">
          <h1 className="display-4">
            <Link to="/">Tamagotchi</Link>
          </h1>
          <p className="lead">These are all my pets</p>
          <Link to="/newpet" className="btn btn-secondary">
            Add a pet (link)
          </Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PetList
                petsToRender={petsToRender}
                filterText={filterText}
                handleFilterTextChange={this.handleFilterTextChange}
              />
            )}
          />
          <Route
            path="/newpet"
            render={() => <NewPet handleAddNewPet={this.handleAddNewPet} />}
          />
          {/*          /pets/1
           *           /pets/2
           *           /pets/42
           *           /pets/gavin
           *           /pets/jason      */}
          <Route path="/pets/:petid" component={ShowPet} />
        </Switch>
      </main>
    )
  }
}

export default App
