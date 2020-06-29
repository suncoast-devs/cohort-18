import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PhotoDetail extends Component {
  render() {
    return (
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">
                <span className="icon">
                  <i className="fas fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/pandas">Panda Bears</Link>
            </li>
            <li className="is-active">
              <Link to="/pandas/0">Panda Waving</Link>
            </li>
          </ul>
        </nav>
        <h3 className="title">Panda Waving</h3>
        <figure className="image">
          <img
            src="https://things-i-like.netlify.app/images/baby_panda.jpg"
            alt="Panda Waving"
          />
        </figure>
        <p className="is-small">
          <a href="https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294">
            Source
          </a>
        </p>
      </div>
    )
  }
}
