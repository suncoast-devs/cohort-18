import React, { Component } from 'react'

class Pet extends Component {
  render() {
    return (
      <li className="list-group-item">
        Pet 1
        <span className="hover-buttons float-right">
          <span className="ml-2 badge badge-pill badge-primary">0</span>
          <span className="ml-2 badge badge-pill badge-primary">0</span>
          <button type="button" className="ml-2 close text-danger">
            &times;
          </button>
        </span>
        <p className="hover-buttons">
          <button type="button" className="mr-2 btn btn-sm btn-primary">
            Feed
          </button>
          <button type="button" className="mr-2 btn btn-sm btn-primary">
            Scold
          </button>
          <button type="button" className="mr-2 btn btn-sm btn-primary">
            Play
          </button>
        </p>
      </li>
    )
  }
}

class App extends Component {
  render() {
    return (
      <main className="container p-4">
        <div className="jumbotron bg-info text-white-50">
          <h1 className="display-4">Tamagotchi</h1>
          <p className="lead">These are all my pets</p>
        </div>
        <ul className="list-group">
          <Pet />
          <Pet />
          <Pet />
          <Pet />
          <Pet />
          <Pet />
          <Pet />
          <Pet />
          <Pet />
          <Pet />
          <Pet />
        </ul>
      </main>
    )
  }
}

export default App
