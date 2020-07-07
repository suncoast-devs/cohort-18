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

export function Restaurants(props) {
  const [restaurants, setRestaurants] = useState([])

  console.log(props)

  useEffect(() => {
    // let url = '/api/Restaurants'

    // if (props.activeFilter !== "") {
    //   url = `/api/Restaurants?filter=${props.activeFilter}`
    // }

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
