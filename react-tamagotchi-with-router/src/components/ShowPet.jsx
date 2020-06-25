import React, { Component } from 'react'

export class ShowPet extends Component {
  render() {
    return (
      <ul className="list-group">
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
