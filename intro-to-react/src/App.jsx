import React, { Component } from 'react'
import { NewsArticle } from './components/NewsArticle'
import articles from './articles'

class App extends Component {
  render() {
    // map each object in the articles array into a NewsArticle Component
    // assign the title to that article's title and the body to that article's body
    const newsArticlesFromData = articles.map(article => (
      <NewsArticle title={article.title} body={article.body} />
    ))

    return (
      <div className="all-main-content">
        <main>{newsArticlesFromData}</main>
      </div>
    )
  }
}

export default App
