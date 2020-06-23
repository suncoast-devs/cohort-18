import React, { Component } from 'react'

// // If this where a component
// function greet(name) {
//   // This would this.props.name
//   //
//   // Because properties are *similar to* arguments
//   console.log(name)
// }

export class Scoreboard extends Component {
  // Initialize our state
  state = {
    score: 0,
    name: this.props.teamName,
  }

  handleClickAddToScore = () => {
    const newScore = this.state.score + 1

    // OOops, cant directly assign to state
    // this.state.score = newScore

    // you *MUST* call this.setState
    //
    // Provide it with a new version of the object
    // at least with the property and value to change
    this.setState({ score: newScore })
  }

  handleClickSubtractFromScore = () => {
    const newScore = this.state.score - 1

    if (newScore < 0) {
      // Don't update the state
      return
    }

    // OOops, cant directly assign to state
    // this.state.score = newScore

    // you *MUST* call this.setState
    //
    // Provide it with a new version of the object
    // at least with the property and value to change
    this.setState({ score: newScore })
  }

  handleChangingName = event => {
    const inputFieldThatIsChanging = event.target
    const valueOfThatInputField = inputFieldThatIsChanging.value

    this.setState({ name: valueOfThatInputField })
  }

  handleUpdateSliderLongForm = event => {
    const sliderThatChanged = event.target
    const valueOfTheSlider = parseInt(sliderThatChanged.value)

    this.setState({ score: valueOfTheSlider })
  }

  handleUpdateSlider = event => {
    this.setState({ score: event.target.value })
  }

  render() {
    return (
      <section className="team1">
        <h2>{this.state.name}</h2>
        <h3>{this.state.score}</h3>
        <fieldset>
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChangingName}
          />
        </fieldset>

        <input
          type="range"
          min="0"
          max="100"
          value={this.state.score}
          // onChange={event =>
          //   this.setState({ score: parseInt(event.target.value) })
          // }
          onChange={this.handleUpdateSlider}
        />

        <fieldset>
          <i
            onClick={this.handleClickAddToScore}
            className="add fas fa-2x fa-plus-circle"
          ></i>
          <i
            onClick={this.handleClickSubtractFromScore}
            className="subtract fas fa-2x fa-minus-circle"
          ></i>
        </fieldset>
      </section>
    )
  }
}
