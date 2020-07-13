import React, { useState, useEffect } from 'react'
import ReactMapGL, { Popup, Marker } from 'react-map-gl'
import { Link } from 'react-router-dom'
import { authHeader, isLoggedIn } from '../auth'

function SingleRestaurantForList(props) {
  return (
    <Link
      to={`/restaurants/${props.restaurant.id}`}
      className="list-group-item list-group-item-action"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.restaurant.name}</h5>
        <small>{props.restaurant.reviews.length} Reviews</small>
      </div>
      <p className="mb-1">{props.restaurant.address}</p>

      {isLoggedIn() && (
        <small className="mr-3">
          <button
            className="btn btn-success btn-sm"
            onClick={event =>
              props.handleVote(event, props.restaurant.id, 'upvote')
            }
          >
            <span className="mr-2" role="img" aria-label="upvote">
              👍🏻
            </span>
            {props.restaurant.upvoteCount}
          </button>
        </small>
      )}

      {isLoggedIn() && (
        <small className="mr-3">
          <button
            className="btn btn-danger btn-sm"
            onClick={event =>
              props.handleVote(event, props.restaurant.id, 'downvote')
            }
          >
            <span className="mr-2" role="img" aria-label="downvote">
              👎🏻
            </span>{' '}
            {props.restaurant.downvoteCount}
          </button>
        </small>
      )}
    </Link>
  )
}

export function Restaurants(props) {
  const [restaurants, setRestaurants] = useState([])

  const [viewport, setViewport] = useState({
    width: 500,
    height: 500,
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 3,
  })

  // null if we have no selected restaurant
  //
  // or a restaurant object representing which taco restaurant we want to show
  //
  const [selectedMapRestaurant, setSelectedMapRestaurant] = useState(null)

  console.log(props)

  function loadRestaurants() {
    const url =
      props.activeFilter.length === 0
        ? `/api/Restaurants`
        : `/api/Restaurants?filter=${props.activeFilter}`

    console.log(`The URL for fetching restaurants is ${url}`)

    // code to do when the dependencies change
    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        // Finally have data from the API
        console.log('The API said....')
        console.log(apiData)
        setRestaurants(apiData)
      })
  }

  const handleVote = (event, id, type) => {
    event.preventDefault()

    const url = `/api/RestaurantVotes/${id}/${type}`

    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
    }).then(() => {
      loadRestaurants()
    })
  }

  useEffect(() => {
    loadRestaurants()
  }, [props.activeFilter]) // <== [props.activeFilter] is the list of dependencies, so this runs when the component is first used **AND** when props.activeFilter _changes_

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {restaurants.length} Taco Joints Found
          </li>
        </ol>
      </nav>

      <div className="my-3 d-flex justify-content-center">
        <ReactMapGL
          {...viewport}
          // onViewportChange={newViewport => setViewport(newViewport)}
          onViewportChange={setViewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          {selectedMapRestaurant && (
            <Popup
              latitude={selectedMapRestaurant.latitude}
              longitude={selectedMapRestaurant.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setSelectedMapRestaurant(null)}
              offsetTop={-5}
            >
              <div className="card my-3">
                <div className="card-header">
                  <Link to={`/restaurants/${selectedMapRestaurant.id}`}>
                    {selectedMapRestaurant.name}
                  </Link>
                </div>
                <div className="card-body">
                  {selectedMapRestaurant.description}
                </div>
              </div>
            </Popup>
          )}

          {restaurants
            .filter(
              restaurant =>
                restaurant.latitude != 0.0 && restaurant.longitude != 0.0
            )
            .map(restaurant => (
              <Marker
                key={restaurant.id}
                latitude={restaurant.latitude}
                longitude={restaurant.longitude}
              >
                <span
                  role="img"
                  aria-label="taco"
                  onClick={() => setSelectedMapRestaurant(restaurant)}
                >
                  🌮
                </span>
              </Marker>
            ))}
        </ReactMapGL>
      </div>

      <div className="list-group">
        {restaurants.map(restaurant => (
          <SingleRestaurantForList
            key={restaurant.id}
            restaurant={restaurant}
            handleVote={handleVote}
          />
        ))}
      </div>
    </>
  )
}
