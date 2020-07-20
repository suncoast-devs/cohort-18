import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

export function EditRestaurant() {
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  const [editingRestaurant, setEditingRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    telephone: '',
  })

  const params = useParams()
  // If we were using Class components, we would have to
  // use this code:  this.props.match.params.id
  const id = parseInt(params.id)

  const fetchRestaurant = async () => {
    const response = await fetch(`/api/Restaurants/${id}`)
    const apiData = await response.json()

    setEditingRestaurant(apiData)
  }

  useEffect(() => {
    fetchRestaurant()
  }, [])

  const handleFormFieldChange = event => {
    const whichFieldChanged = event.target.id
    const newValue = event.target.value

    setEditingRestaurant({
      ...editingRestaurant,
      // The [] syntax used where the key of an object exists
      // means to take the value of the variable INSIDE the brackets
      // as the name of the property we are setting.
      [whichFieldChanged]: newValue,
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    // Use fetch to PUT edit a restaurant
    fetch(`/api/Restaurants/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(editingRestaurant),
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

      setEditingRestaurant({ ...editingRestaurant, photoURL: url })
    } else {
      setErrorMessage('Unable to upload image')
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  return (
    <div className="card">
      <div className="card-header">Edit Restaurant</div>
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
              value={editingRestaurant.name}
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              className="form-control"
              id="description"
              value={editingRestaurant.description}
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
              value={editingRestaurant.address}
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="text"
              className="form-control"
              id="telephone"
              value={editingRestaurant.telephone}
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
