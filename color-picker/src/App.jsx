import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  }

  // This method is called the first time our
  // component is placed ("MOUNTED") onto the page
  componentDidMount() {
    this.randomizeColor()
  }

  handleChangingHue = event => {
    const hue = event.target.value

    // Object that is
    //
    //    { keyName: keyName }
    //
    // Where the variable name on right is the same as
    // the keyname on the left
    //
    // We a shortcut!
    //
    //      { keyName }
    //
    // This is the same!
    //
    this.setState({ hue })
  }

  handleChangingSaturation = event => {
    const saturation = event.target.value

    this.setState({ saturation })
  }

  handleChangingLightness = event => {
    const lightness = event.target.value

    this.setState({ lightness })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  randomizeColor = event => {
    const hue = this.getRandomInt(361)
    const saturation = this.getRandomInt(101)
    const lightness = this.getRandomInt(101)

    this.setState({
      hue,
      saturation,
      lightness,
    })
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
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.handleChangingHue}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.handleChangingSaturation}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.handleChangingLightness}
            />
          </fieldset>
        </section>
        <code>{hslColorStyle}</code>
        <button onClick={this.randomizeColor}>Randomizer!</button>
      </main>
    )
  }
}

export default App
