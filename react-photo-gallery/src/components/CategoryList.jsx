import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CategoryList extends Component {
  render() {
    return (
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li className="is-active">
              <Link to="/">
                <span className="icon">
                  <i className="fas fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="columns is-mobile">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h2>
                    <Link to="/pandas">Panda Bears</Link>
                  </h2>
                  <p>
                    Pandas are bears native to south-central China, and are
                    objectively the cutest animals on earth.
                  </p>
                </div>
              </div>
              <div className="card-image">
                <figure className="image">
                  <img
                    src="https://things-i-like.netlify.app/images/baby_panda.jpg"
                    alt="Panda Bears"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <h2>
                    <Link to="/miniatures">Miniature Painting</Link>
                  </h2>
                  <p>
                    I enjoy painting miniatures from board games. I've been
                    painting since early 2018, here's some of my work.
                  </p>
                </div>
              </div>
              <div className="card-image">
                <figure className="image">
                  <img
                    src="https://things-i-like.netlify.app/images/city_of_kings.jpg"
                    alt="Miniature Painting"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
