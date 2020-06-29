import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PhotoList extends Component {
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
            <li className="is-active">
              <Link to={'/pandas'}>Panda Bears</Link>
            </li>
          </ul>
        </nav>
        <h3 className="title">Panda Bears</h3>
        <h4 className="subtitle">
          Pandas are bears native to south-central China, and are objectively
          the cutest animals on earth.
        </h4>
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <figure className="image">
                    <Link to="/pandas/0">
                      <img
                        src="https://things-i-like.netlify.app/images/baby_panda.jpg"
                        alt="Panda Waving"
                      />
                    </Link>
                    <figcaption>
                      <Link to="/pandas/0">Panda Waving</Link>
                    </figcaption>
                  </figure>
                </div>
                <div className="content" />
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <figure className="image">
                    <Link to="/pandas/1">
                      <img
                        src="https://things-i-like.netlify.app/images/grosser_panda.jpg"
                        alt="Großer Panda im Ocean Park, Hongkong"
                      />
                    </Link>
                    <figcaption>
                      <Link to="/pandas/1">
                        Großer Panda im Ocean Park, Hongkong
                      </Link>
                    </figcaption>
                  </figure>
                </div>
                <div className="content" />
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <figure className="image">
                    <Link to="/pandas/2">
                      <img
                        src="https://things-i-like.netlify.app/images/tree_panda.png"
                        alt="Wild pandas get a boost; the iconic species has been upgraded from 'endangered' to 'vulnerable.'"
                      />
                    </Link>
                    <figcaption>
                      <Link to="/pandas/2">
                        Wild pandas get a boost; the iconic species has been
                        upgraded from 'endangered' to 'vulnerable.'
                      </Link>
                    </figcaption>
                  </figure>
                </div>
                <div className="content" />
              </div>
            </div>
          </div>

          <div className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <div className="card-image">
                  <figure className="image">
                    <Link to="/pandas/3">
                      <img
                        src="https://things-i-like.netlify.app/images/rising_sun.png"
                        alt="Sacred Warrior, by Adrian Smith"
                      />
                    </Link>
                    <figcaption>
                      <Link to="/pandas/3">
                        Sacred Warrior, by Adrian Smith
                      </Link>
                    </figcaption>
                  </figure>
                </div>
                <div className="content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
