import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'

function App() {
  const [photoDetails, setPhotoDetails] = useState({})

  // Use a *ternary* that says:
  //
  // if photoDetails.copyright is "TRUTHY" (in this case anything other than undefined)
  // make a string with a byline text, otherwise make it blank
  const byLine = photoDetails.copyright ? `by ${photoDetails.copyright}` : ''

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
        <p className="lead">{photoDetails.date}</p>
      </div>
      <div className="media">
        <img
          src={photoDetails.thumbnail_url}
          className="mr-3"
          alt={photoDetails.title}
        />
        <div className="media-body">
          <h5 className="mt-0">{photoDetails.title}</h5>
          <h5 className="mt-0">{byLine}</h5>
          {photoDetails.description}
        </div>
      </div>
    </div>
  )
}

export default App
