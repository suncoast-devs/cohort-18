import React, { useState, useEffect } from 'react'
import { today } from './today'

function App() {
  const [photoDetails, setPhotoDetails] = useState({
    thumbnail_url: undefined,
    hdurl: undefined,
    image_thumbnail: undefined,
    copyright: undefined,
    date: undefined,
    title: undefined,
    description: undefined,
  })
  const [currentDate, setCurrentDate] = useState(today())
  const [inputDate, setInputDate] = useState(currentDate)

  // Use a *ternary* that says:
  //
  // if photoDetails.copyright is "TRUTHY" (in this case anything other than undefined)
  // make a string with a byline text, otherwise make it blank
  const byLine = photoDetails.copyright ? `by ${photoDetails.copyright}` : ''

  const loadPhotoFromApi = () => {
    const url = `https://apodapi.herokuapp.com/api?image_thumbnail_size=300&absolute_thumbnail_url=true&thumbs=true&date=${currentDate}`
    console.log(`Loading from ${url}`)

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
  useEffect(loadPhotoFromApi, [currentDate])

  // Whenever the currentDate changes also refresh
  // the inputDate
  useEffect(() => {
    setInputDate(currentDate)
  }, [currentDate])

  // useEffect(function, arrayToWatch)
  // The function is the work to do
  //
  // The array is a set of values for
  // useEffect to monitor. If any of
  // those values *CHANGE* the function
  // is called!

  const imageURLToShow =
    photoDetails.thumbnail_url ||
    photoDetails.hdurl ||
    photoDetails.image_thumbnail ||
    'http://flickr.com/foo.jpg'

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
        <p className="lead">{photoDetails.date}</p>
      </div>
      <p>
        <input
          type="date"
          className="mr-2"
          value={inputDate}
          onChange={(event) => {
            setInputDate(event.target.value)
          }}
        />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setCurrentDate(inputDate)}
        >
          Go
        </button>
      </p>
      <p>
        <button
          onClick={() => setCurrentDate(today())}
          className="btn btn-primary"
        >
          Today
        </button>
      </p>
      <div className="media">
        <img
          width={300}
          src={imageURLToShow}
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
