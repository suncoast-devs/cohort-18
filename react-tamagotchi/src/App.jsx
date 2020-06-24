import React, { Component } from 'react'
import { Pet } from './components/Pet'

class App extends Component {
  state = {
    pets: [],
  }

  render() {
    const petsToRender = this.state.pets.map(pet => (
      <Pet
        key={pet.id}
        name={pet.name}
        hungerLevel={pet.hungerLevel}
        happinessLevel={pet.happinessLevel}
      />
    ))

    return (
      <main className="container p-4">
        <div className="jumbotron bg-info text-white-50">
          <h1 className="display-4">Tamagotchi</h1>
          <p className="lead">These are all my pets</p>
        </div>
        <ul className="list-group">{petsToRender}</ul>
      </main>
    )
  }
}

export default App
