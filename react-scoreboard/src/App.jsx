import React, { Component } from 'react'

// // If this where a component
// function greet(name) {
//   // This would this.props.name
//   //
//   // Because properties are *similar to* arguments
//   console.log(name)
// }

class Scoreboard extends Component {
  render() {
    return (
      <section className="team1">
        <h2>{this.props.teamName}</h2>
        <h3>0</h3>
        <fieldset>
          <input type="text" placeholder="Name" />
        </fieldset>

        <fieldset>
          <i className="add fas fa-2x fa-plus-circle"></i>
          <i className="subtract fas fa-2x fa-minus-circle"></i>
        </fieldset>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>My Score Board</h1>
        </header>
        <main>
          <Scoreboard teamName="SDG C#-ers" />
          <Scoreboard teamName="SDG JS-ers" />
          <Scoreboard teamName="SDG Staff" />
        </main>
      </>
    )
  }
}

export default App
