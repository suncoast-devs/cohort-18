import React from 'react'
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Astronomy Pictures</h1>
        <p className="lead">2020-07-01</p>
      </div>
      <div className="media">
        <img
          src="https://img.youtube.com/vi/re3oEKX6Fks/0.jpg"
          className="mr-3"
          alt="Our Rotating Earth"
        />
        <div className="media-body">
          <h5 className="mt-0">Our Rotating Earth</h5>
          <h5 className="mt-0">by Bartosz WojczyÅ„ski</h5>
          Has your world ever turned upside-down? It would happen every day if
          you stay fixed to the stars. Most time-lapse videos of the night sky
          show the stars and sky moving above a steady Earth. Here, however, the
          camera has been forced to rotate so that the stars remain fixed, and
          the Earth rotates around them. The movie, with each hour is compressed
          to a second, dramatically demonstrates the daily rotation of the
          Earth, called diurnal motion. The video begins by showing an open
          field in Namibia, Africa, on a clear day, last year. Shadows shift as
          the Earth turns, the shadow of the Earth rises into the sky, the Belt
          of Venus momentarily appears, and then day turns into night. The
          majestic band of our Milky Way Galaxy stretches across the night sky,
          while sunlight-reflecting, Earth-orbiting satellites zoom by. In the
          night sky, you can even spot the Large and Small Magellanic Clouds.
          The video shows a sky visible from Earth's Southern Hemisphere, but a
          similar video could be made for every middle latitude on our blue
          planet.0
        </div>
      </div>
    </div>
  )
}

export default App
