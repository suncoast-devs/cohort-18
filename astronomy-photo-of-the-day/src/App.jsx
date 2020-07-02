import React from 'react'
import { PhotoDetails } from './components/PhotoDetails'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
      </div>
      <PhotoDetails />
    </div>
  )
}

export default App
