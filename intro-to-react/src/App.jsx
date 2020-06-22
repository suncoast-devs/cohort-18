import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  render() {
    return (
      <div className="all-main-content">
        <main>
          <article className="intro-article">
            <h2 className="article-title">SDG Announces Hackathon!</h2>
            <p>
              SDG announces the 2020 Summer Hackathon. Join us for an exciting
              weekend
            </p>
            <a className="read-more" href="#here">
              read more about SDG Announces Hackathon!
            </a>
          </article>
          <article className="intro-article">
            <h2 className="article-title">
              Student Graduation is Right Around the Corner
            </h2>
            <p>
              Our next cohort of students will be graduating in just over a
              week.
            </p>
            <a className="read-more" href="#here">
              read more about Student Graduation is Right Around the Corner
            </a>
          </article>
        </main>
      </div>
    )
  }
}

export default App
