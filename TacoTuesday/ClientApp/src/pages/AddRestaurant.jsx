import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDropzone } from 'react-dropzone'

import { authHeader } from '../auth'

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
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newRestaurant),
    })
      .then(response => {
        if (response.status === 401) {
          return { status: 401, errors: { login: 'Not Authorized ' } }
        } else {
          return response.json()
        }
      })
      .then(apiData => {
        console.log(apiData)

        if (apiData.errors) {
          const newMessage = Object.values(apiData.errors).join(' ')
          setErrorMessage(newMessage)
        } else {
          // Go back to the home page
          history.push('/')
        }
      })
  }

  const onDropFile = async acceptedFiles => {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    // Use fetch to send an authorization header and
    // a body containing the form data with the file
    const response = await fetch('/api/Uploads', {
      method: 'POST',
      headers: {
        ...authHeader(),
      },
      body: formData,
    })

    // If we receive a 200 OK response, set the
    // URL of the photo in our state so that it is
    // sent along when creating the restaurant,
    // otherwise show an error
    if (response.status === 200) {
      const apiResponse = await response.json()

      const url = apiResponse.url

      setNewRestaurant({ ...newRestaurant, photoURL: url })
    } else {
      setErrorMessage('Unable to upload image')
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

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

          <div className="alert alert-primary">
            <div {...getRootProps()}>
              <input {...getInputProps()} />

              {isDragActive
                ? 'Drop the files here ...'
                : 'Drag a new file here to upload!'}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
