import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

export function ShowRestaurant() {
  const params = useParams()
  // If we were using Class components, we would have to
  // use this code:  this.props.match.params.id
  const id = params.id

  const [restaurant, setRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
  })

  useEffect(() => {
    const fetchRestaurant = async () => {
      const response = await fetch(`/api/Restaurants/${id}`)
      const apiData = await response.json()

      setRestaurant(apiData)
    }

    fetchRestaurant()
  }, [])

  return (
    <div className="taco-listing">
      <div className="media mb-5">
        <span className="pr-3 display-2" role="img" aria-label="taco">
          🌮
        </span>
        <div className="media-body">
          <h1 className="mt-0">{restaurant.name}</h1>
          {restaurant.description}
          <address className="mt-3">
            <Link to="maps.google.com">{restaurant.address}</Link>
          </address>
          <a href={`tel:${restaurant.telephone}`}>{restaurant.telephone}</a>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h3>Reviews</h3>
          <ul className="timeline">
            <li>
              <p className="mb-2">
                Wow, great food
                <span className="float-right">21 March, 2014</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
            <li>
              <p className="mb-2">
                Wow, great food
                <span className="float-right">21 March, 2014</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula....
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Enter your own review</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                aria-describedby="summaryHelp"
              />
              <small id="summaryHelp" className="form-text text-muted">
                Enter a brief summary of your review. Example:{' '}
                <strong>Great food, good prices.</strong>
              </small>
            </div>
            <div className="form-group">
              <label for="review">Review</label>
              <textarea type="text" className="form-control" id="review" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
