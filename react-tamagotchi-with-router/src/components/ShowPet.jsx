import React, { Component } from 'react'

export class ShowPet extends Component {
  state = {
    pet: {},
  }

  async componentDidMount() {
    // Uses the properties passed to us to
    // get at the :petid part of
    //
    // path="/pets/:petid"
    const petId = this.props.match.params.petid

    // fetch based on the pet ID
    const response = await fetch(
      `https://sdg-tamagotchi.herokuapp.com/Pets/${petId}`
    )
    const petFromApi = await response.json()

    console.log(petFromApi)
    this.setState({ pet: petFromApi })
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">{this.state.pet.name}</li>
        <li className="list-group-item">{this.state.pet.birthday}</li>
        {this.state.pet.deathday && (
          <li className="list-group-item">{this.state.pet.deathday}</li>
        )}
        <li className="list-group-item">{this.state.pet.happinessLevel}</li>
        <li className="list-group-item">{this.state.pet.hungerLevel}</li>
        <li className="list-group-item">{this.state.pet.lastInteracted}</li>
      </ul>
    )
  }
}
