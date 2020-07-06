import React from 'react'

export function AddRestaurant() {
  return (
    <div className="card">
      <div className="card-header">Add a Restaurant</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea type="text" className="form-control" id="description" />
            <small id="descriptionHelp" className="form-text text-muted">
              Enter a brief description of the restaurant.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="description">Address</label>
            <textarea type="text" className="form-control" id="address" />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input type="text" className="form-control" id="telephone" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
