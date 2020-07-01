import React, { useState, useEffect } from 'react'
import HelloWorld from './components/HelloWorld'

function App() {
  const [photoDetails, setPhotoDetails] = useState({})

  // Use a *ternary* that says:
  //
  // if photoDetails.copyright is "TRUTHY" (in this case anything other than undefined)
  // make a string with a byline text, otherwise make it blank
  const byLine = photoDetails.copyright ? `by ${photoDetails.copyright}` : ''

  const loadPhotoFromApi = () => {
    const url =
      'https://apodapi.herokuapp.com/api?image_thumbnail_size=300&absolute_thumbnail_url=true&thumbs=true'

    // Fetch the URL (get)
    fetch(url)
      // Then we turn the response into JSON
      .then((response) => response.json())
      // Then we have the API data as an object
      .then((apiData) => {
        setPhotoDetails(apiData)
      })
  }

  // Call loadPhotoFromApi the first
  // time our component renders.
  //
  // Then watch the array for any
  // changing values and if any
  // values array, change, call
  // loadPhotoFrom Api
  //
  // ... but the array is empty
  // and thus will never change
  // so we'll never see loadPhotoFromApi
  // called again.
  useEffect(loadPhotoFromApi, [])

  // useEffect(function, arrayToWatch)
  // The function is the work to do
  //
  // The array is a set of values for
  // useEffect to monitor. If any of
  // those values *CHANGE* the function
  // is called!

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
