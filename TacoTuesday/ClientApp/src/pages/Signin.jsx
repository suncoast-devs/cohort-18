import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { recordAuthentication } from '../auth'

export function SignIn() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState()

  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedUser = { ...loginUser, [fieldName]: value }

    setLoginUser(updatedUser)
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(loginUser),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          recordAuthentication(apiResponse)
          window.location = '/'
        }
      })
  }

  return (
    <div className="card">
      <div className="card-header">Login</div>
      <div className="card-body">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={loginUser.email}
              onChange={handleFieldChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={loginUser.password}
              onChange={handleFieldChange}
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
