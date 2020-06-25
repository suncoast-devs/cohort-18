import React, { Component } from 'react'

export class ShowPet extends Component {
  state = {
    pet: {
      id: 0,
      name: 'string',
      birthday: '2020-06-25T14:58:05.208Z',
      deathday: '2020-06-25T14:58:05.208Z',
      hungerLevel: 0,
      happinessLevel: 0,
      isDead: true,
      lastInteracted: '2020-06-25T14:58:05.208Z',
    },
  }

  render() {
    // Uses the properties passed to us to
    // get at the :petid part of
    //
    // path="/pets/:petid"
    const petId = this.props.match.params.petid

    return (
      <ul className="list-group">
        <li className="list-group-item">{petId}</li>
        <li className="list-group-item">{this.state.pet.name}</li>
        <li className="list-group-item">{this.state.pet.birthday}</li>
        <li className="list-group-item">{this.state.pet.deathday}</li>
        <li className="list-group-item">{this.state.pet.happinessLevel}</li>
        <li className="list-group-item">{this.state.pet.hungerLevel}</li>
        <li className="list-group-item">{this.state.pet.lastInteracted}</li>
      </ul>
    )
  }
}
