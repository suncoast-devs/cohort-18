import React, { Component } from 'react'

export class ShowPet extends Component {
  render() {
    console.log(this.props)

    // Uses the properties passed to us to
    // get at the :petid part of
    //
    // path="/pets/:petid"
    const petId = this.props.match.params.petid

    return (
      <ul className="list-group">
        <li className="list-group-item">{petId}</li>
        <li className="list-group-item">Pet Name</li>
        <li className="list-group-item">Birthday</li>
        <li className="list-group-item">Deathday</li>
        <li className="list-group-item">Happiness</li>
        <li className="list-group-item">HungerLevel</li>
        <li className="list-group-item">Last Interacted</li>
      </ul>
    )
  }
}
