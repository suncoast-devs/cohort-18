import React, { Component } from 'react'
import { NewsArticle } from './components/NewsArticle'

class App extends Component {
  render() {
    return (
      <div className="all-main-content">
        <main>
          <NewsArticle />
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
