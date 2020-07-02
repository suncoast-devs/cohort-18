import React from 'react'
import { PhotoDetails } from './components/PhotoDetails'
import { Route, Switch } from 'react-router'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <PhotoDetails />
        </Route>
        <Route path="/:date">
          <PhotoDetails />
        </Route>
      </Switch>
    </div>
  )
}

export default App
