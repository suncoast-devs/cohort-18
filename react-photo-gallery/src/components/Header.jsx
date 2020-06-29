import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <Link to="/">Things I Like</Link>
            </h1>
            <h2 className="subtitle">A Photo Gallery</h2>
          </div>
        </div>
      </section>
    )
  }
}
