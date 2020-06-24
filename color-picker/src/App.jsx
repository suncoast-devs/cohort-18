import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: 3,
    saturation: 99,
    lightness: 16,
  }

  render() {
    const hslColorStyle = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

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
        <code>{hslColorStyle}</code>
      </main>
    )
  }
}

export default App
