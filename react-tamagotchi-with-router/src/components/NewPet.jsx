import React, { Component } from 'react'
export class NewPet extends Component {
  state = {
    newPetName: '',
  }

  render() {
    return (
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          value={this.state.newPetName}
          placeholder="Enter a new pet"
          onChange={event => this.setState({ newPetName: event.target.value })}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => this.props.handleAddNewPet(this.state.newPetName)}
        >
          Add
        </button>
      </div>
    )
  }
}
