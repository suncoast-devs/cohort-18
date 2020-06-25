import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Pet extends Component {
  render() {
    // Destructure the properties into local variables
    // so we can `name` instead of `this.props.name`
    const { id, name, happinessLevel, hungerLevel } = this.props

    const urlPathForPet = `/pets/${id}`

    return (
      <li className="list-group-item">
        <Link to={urlPathForPet}>{name}</Link>
        <span className="hover-buttons float-right">
          <span className="ml-2 badge badge-pill badge-primary">
            {happinessLevel}
          </span>
          <span className="ml-2 badge badge-pill badge-primary">
            {hungerLevel}
          </span>
          <button
            type="button"
            className="ml-2 close text-danger"
            onClick={this.props.handleDeletePet}
          >
            &times;
          </button>
        </span>
        <p className="hover-buttons">
          <button
            type="button"
            className="mr-2 btn btn-sm btn-primary"
            onClick={this.props.handleFeedPet}
          >
            Feed
          </button>
          <button
            type="button"
            className="mr-2 btn btn-sm btn-primary"
            onClick={this.props.handleScoldPet}
          >
            Scold
          </button>
          <button
            type="button"
            className="mr-2 btn btn-sm btn-primary"
            onClick={this.props.handlePlayPet}
          >
            Play
          </button>
        </p>
      </li>
    )
  }
}
