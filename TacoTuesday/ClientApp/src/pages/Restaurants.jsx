import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    </Link>
  )
}

export function Restaurants(props) {
  const [restaurants, setRestaurants] = useState([])

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
      headers: { 'content-type': 'application/json' },
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
