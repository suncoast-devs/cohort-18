import React, { useState } from 'react'
import { useHistory } from 'react-router'

export function AddRestaurant() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState()

  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
  })

  const handleFormFieldChange = event => {
    const whichFieldChanged = event.target.id
    const newValue = event.target.value

    console.log(`The ${whichFieldChanged} was changed`)
    setNewRestaurant({
      ...newRestaurant,
      // The [] syntax used where the key of an object exists
      // means to take the value of the variable INSIDE the brackets
      // as the name of the property we are setting.
      [whichFieldChanged]: newValue,
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    console.log(newRestaurant)

    // Use fetch to POST a new restaurant
    fetch('/api/Restaurants', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRestaurant),
    })
      .then(response => response.json())
      .then(apiData => {
        console.log(apiData)

        if (apiData.status === 400) {
          const newMessage = Object.values(apiData.errors).join(' ')
          setErrorMessage(newMessage)
        } else {
          // Go back to the home page
          history.push('/')
        }
      })
  }

  return (
    <div className="card">
      <div className="card-header">Add a Restaurant</div>
      <div className="card-body">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={newRestaurant.name}
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              value={newRestaurant.description}
              onChange={handleFormFieldChange}
            />
            <small id="descriptionHelp" className="form-text text-muted">
              Enter a brief description of the restaurant.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              type="text"
              className="form-control"
              id="address"
              value={newRestaurant.address}
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="text"
              className="form-control"
              id="telephone"
              value={newRestaurant.telephone}
              onChange={handleFormFieldChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
