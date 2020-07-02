import React from 'react'
import { PhotoDetails } from './components/PhotoDetails'
import { Route, Switch } from 'react-router'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
      </div>
      {/* Putting a question mark after a path component makes it OPTIONAL */}
      <Route path="/:date?">
        <PhotoDetails />
      </Route>
    </div>
  )
}

export default App
