import React, { Component } from 'react'

export class Pet extends Component {
  handleClickOnDelete = async event => {
    const idOfPetToDelete = this.props.id

    this.props.handleDeletePet(idOfPetToDelete)
  }

  render() {
    // Destructure the properties into local variables
    // so we can `name` instead of `this.props.name`
    const { name, happinessLevel, hungerLevel } = this.props

    return (
      <li className="list-group-item">
        {name}
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
            onClick={this.handleClickOnDelete}
          >
            &times;
          </button>
        </span>
        <p className="hover-buttons">
          <button
            type="button"
            className="mr-2 btn btn-sm btn-primary"
            onClick={() => this.props.handleFeedPet(this.props.id)}
          >
            Feed
          </button>
          <button
            type="button"
            className="mr-2 btn btn-sm btn-primary"
            onClick={() => this.props.handleScoldPet(this.props.id)}
          >
            Scold
          </button>
          <button
            type="button"
            className="mr-2 btn btn-sm btn-primary"
            onClick={() => this.props.handlePlayPet(this.props.id)}
          >
            Play
          </button>
        </p>
      </li>
    )
  }
}
