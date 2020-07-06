import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#">
        <span className="mr-2" role="img" aria-label="taco">
          🌮
        </span>
        Taco Tuesday
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Link className="btn btn-success mr-2" to="/restaurants/add">
            + Add
          </Link>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </span>
        </form>
      </div>
    </nav>
  )
}
