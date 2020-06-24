import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <main>
        <h1>Color Picker</h1>
        <section>
          <div className="color"></div>
          <fieldset>
            <input type="range" min="0" max="360" />
            <input type="range" min="0" max="100" />
            <input type="range" min="0" max="100" />
          </fieldset>
        </section>
        <code>hsl(80, 12%, 14%)</code>
      </main>
    )
  }
}

export default App
