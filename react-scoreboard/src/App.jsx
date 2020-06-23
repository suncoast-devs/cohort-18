import React, { Component } from 'react'
import { Scoreboard } from './Scoreboard'

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
          <Scoreboard teamName="SDG Alumni" />
        </main>
      </>
    )
  }
}

export default App
