import React, { Component } from 'react'
export class PetList extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={this.props.filterText}
            onChange={this.props.handleFilterTextChange}
          />
        </li>
        {this.props.petsToRender}
      </ul>
    )
  }
}
