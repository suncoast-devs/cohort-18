import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'

function App() {
  const [photoDetails, setPhotoDetails] = useState({
    apod_site: 'https://apod.nasa.gov/apod/ap200701.html',
    copyright: 'Bartosz WojczyÅ„ski',
    date: '2020-07-01',
    description:
      "Has your world ever turned upside-down? It would happen every day if you stay fixed to the stars. Most time-lapse videos of the night sky show the stars and sky moving above a steady Earth. Here, however, the camera has been forced to rotate so that the stars remain fixed, and the Earth rotates around them. The movie, with each hour is compressed to a second, dramatically demonstrates the daily rotation of the Earth, called diurnal motion. The video begins by showing an open field in Namibia, Africa, on a clear day, last year. Shadows shift as the Earth turns, the shadow of the Earth rises into the sky, the Belt of Venus momentarily appears, and then day turns into night. The majestic band of our Milky Way Galaxy stretches across the night sky, while sunlight-reflecting, Earth-orbiting satellites zoom by. In the night sky, you can even spot the Large and Small Magellanic Clouds. The video shows a sky visible from Earth's Southern Hemisphere, but a similar video could be made for every middle latitude on our blue planet.",
    image_thumbnail:
      'apodapi.herokuapp.com/image/?image=https://img.youtube.com/vi/re3oEKX6Fks/0.jpg&width=300',
    media_type: 'video',
    thumbnail_url: 'https://img.youtube.com/vi/re3oEKX6Fks/0.jpg',
    title: 'Our Rotating Earth',
    url: 'https://www.youtube.com/embed/re3oEKX6Fks?rel=0',
  })

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
          <h5 className="mt-0">by {photoDetails.copyright}</h5>
          {photoDetails.description}
        </div>
      </div>
    </div>
  )
}

export default App
