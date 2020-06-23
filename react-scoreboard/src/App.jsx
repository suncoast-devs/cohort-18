import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>My Score Board</h1>
        </header>
        <main>
          <section className="team1">
            <h2>Team 1</h2>
            <h3>0</h3>
            <fieldset>
              <input type="text" placeholder="Name" />
            </fieldset>

            <fieldset>
              <i className="add fas fa-2x fa-plus-circle"></i>
              <i className="subtract fas fa-2x fa-minus-circle"></i>
            </fieldset>
          </section>

          <section className="team2">
            <h2>Team 2</h2>
            <h3>0</h3>
            <fieldset>
              <input type="text" placeholder="Name" />
            </fieldset>

            <fieldset>
              <i className="add fas fa-2x fa-plus-circle"></i>
              <i className="subtract fas fa-2x fa-minus-circle"></i>
            </fieldset>
          </section>
        </main>
      </>
    )
  }
}

export default App
