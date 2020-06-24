import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: 100,
    saturation: 26,
    lightness: 76,
  }

  render() {
    const hslColorStyle = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

    return (
      <main>
        <h1>Color Picker</h1>
        <section>
          {/* The outer brackets on the next line are for JSX!
          The inner brackets make an object. */}
          <div
            className="color"
            style={{
              backgroundColor: hslColorStyle,
            }}
          ></div>
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
