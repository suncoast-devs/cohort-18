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

  handleChangingSlider = event => {
    // const value = event.target.value
    // const name = event.target.name

    // This line is the same as the two above
    // HERE: I am *destructuring* an object
    const { value, name } = event.target

    // This syntax means take the *CONTENTS* of the variable
    // name and use the *CONTENTS* as the key to change in state.
    this.setState({ [name]: value })
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
              name="hue"
              type="range"
              min="0"
              max="360"
              value={this.state.hue}
              onChange={this.handleChangingSlider}
            />
            <input
              name="saturation"
              type="range"
              min="0"
              max="100"
              value={this.state.saturation}
              onChange={this.handleChangingSlider}
            />
            <input
              name="lightness"
              type="range"
              min="0"
              max="100"
              value={this.state.lightness}
              onChange={this.handleChangingSlider}
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
