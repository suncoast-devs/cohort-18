import React, { Component } from 'react'

class Pet extends Component {
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
          <Pet name="Something 1" hungerLevel="0" happinessLevel={2} />
          <Pet name="Something 2" hungerLevel="2" happinessLevel={0} />
          <Pet name="Something 3" hungerLevel="0" happinessLevel={0} />
          <Pet name="Something 4" hungerLevel="4" happinessLevel={1} />
          <Pet name="Something 5" hungerLevel="3" happinessLevel={0} />
          <Pet name="Something 6" hungerLevel="0" happinessLevel={0} />
          <Pet name="Something 7" hungerLevel="0" happinessLevel={8} />
          <Pet name="Something 8" hungerLevel="5" happinessLevel={0} />
        </ul>
      </main>
    )
  }
}

export default App
