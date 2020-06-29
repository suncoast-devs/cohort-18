import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import photos from '../photos.json'

class Category extends Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>
                <Link to={`/${this.props.categoryName}`}>
                  {this.props.title}
                </Link>
              </h2>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={this.props.imageURL} alt={this.props.title} />
            </figure>
          </div>
        </div>
      </div>
    )
  }
}

export class CategoryList extends Component {
  render() {
    const categoryNames = Object.keys(photos)

    console.log(categoryNames)

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
          {categoryNames.map((categoryName, index) => {
            const categoryDetails = photos[categoryName]
            const firstPhoto = categoryDetails.photos[0]

            return (
              <Category
                key={index}
                categoryName={categoryName}
                title={categoryDetails.title}
                description={categoryDetails.description}
                imageURL={firstPhoto.imageURL}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
