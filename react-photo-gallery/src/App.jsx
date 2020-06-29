import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

//
// This code uses the `bulma` CSS Framework.
//
// It also uses the Font Awesome icon set.
//

class CategoryList extends Component {
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
          {/*
             
             */}
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
          {/* 
              
              */}
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
          {/* 
              
              */}
        </div>
      </div>
    )
  }
}

class PhotoList extends Component {
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
          {/* 
          
          
          */}
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
          {/* 
          
          
          */}
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
          {/* 
          
          
          */}
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
          {/*  
          
          
          */}
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
          {/*
          
          
          */}
        </div>
      </div>
    )
  }
}

class PhotoDetail extends Component {
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

class App extends Component {
  render() {
    return (
      <Router>
        <main>
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

          <section className="section">
            <CategoryList />
          </section>
        </main>
      </Router>
    )
  }
}

export default App
