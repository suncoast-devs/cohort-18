import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SingleRestaurantForList(props) {
  return (
    <Link
      to="/restaurants/42"
      className="list-group-item list-group-item-action"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.restaurant.name}</h5>
        <small>5 Reviews</small>
      </div>
      <p className="mb-1">{props.restaurant.address}</p>
      <small className="mr-3">
        <button className="btn btn-success btn-sm">
          <span className="mr-2" role="img" aria-label="upvote">
            👍🏻
          </span>
          5
        </button>
      </small>
      <small className="mr-3">
        <button className="btn btn-danger btn-sm">
          <span className="mr-2" role="img" aria-label="downvote">
            👎🏻
          </span>{' '}
          3
        </button>
      </small>
    </Link>
  )
}

export function Restaurants() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    // code to do when the dependencies change
    fetch('/api/Restaurants')
      .then(response => response.json())
      .then(apiData => {
        // Finally have data from the API
        console.log('The API said....')
        console.log(apiData)
        setRestaurants(apiData)
      })
  }, []) // <== [] is the list of dependencies, right now there are none, so only runs code at start

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
      <div className="list-group">
        {restaurants.map(restaurant => (
          <SingleRestaurantForList
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </>
  )
}
