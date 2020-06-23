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

    // OOops, cant directly assign to state
    // this.state.score = newScore

    // you *MUST* call this.setState
    //
    // Provide it with a new version of the object
    // at least with the property and value to change
    this.setState({ score: newScore })
  }

  render() {
    return (
      <section className="team1">
        <h2>{this.props.teamName}</h2>
        <h3>{this.state.score}</h3>
        <fieldset>
          <input type="text" placeholder="Name" />
        </fieldset>

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
