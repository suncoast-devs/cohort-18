import React, { useState } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from '../auth'
import { useRecoilState } from 'recoil'
import { activeFilterAtom } from '../atoms/activeFilter'

export function NavBar() {
  // This like const [activeFilter, setActiveFilter] = useState('')
  const [activeFilter, setActiveFilter] = useRecoilState(activeFilterAtom)

  const [filterText, setFilterText] = useState('')

  const handleClickSearch = event => {
    console.log(`We clicked the search! Searching for ${filterText}`)

    setActiveFilter(filterText)
  }

  const handleLogout = () => {
    // Forget the auth key
    logout()

    // Force reload the home page
    window.location = '/'
  }

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

        {isLoggedIn() || (
          <Link className="btn btn-success mr-2" to="/signin">
            Signin
          </Link>
        )}

        {isLoggedIn() || (
          <Link className="btn btn-success mr-2" to="/signup">
            Signup
          </Link>
        )}

        <Route exact path="/">
          <form className="form-inline mr-2 my-2 my-lg-0">
            {isLoggedIn() && (
              <Link className="btn btn-success mr-2" to="/restaurants/add">
                + Add
              </Link>
            )}
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={filterText}
              onChange={event => setFilterText(event.target.value)}
            />
            <span
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={handleClickSearch}
            >
              Search
            </span>
          </form>
        </Route>

        {isLoggedIn() && (
          <span className="btn btn-success" onClick={handleLogout}>
            Sign out
          </span>
        )}
      </div>
    </nav>
  )
}
