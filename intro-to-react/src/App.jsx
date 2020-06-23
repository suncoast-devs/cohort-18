import React, { Component } from 'react'
import { NewsArticle } from './components/NewsArticle'
import articles from './articles'

class App extends Component {
  convertArticleObjectToComponent(article) {
    return (
      <NewsArticle
        key={article.id}
        picture={article.picture}
        pictureWidth={article.pictureWidth}
        title={article.title}
        body={article.body}
      />
    )
  }

  render() {
    const articlesWeCanPublish = articles.filter(
      article => article.draft === false
    )

    // map each object in the articles array into a NewsArticle Component
    // assign the title to that article's title and the body to that article's body
    const newsArticlesFromData = articlesWeCanPublish.map(
      this.convertArticleObjectToComponent
    )

    // newsArticlesFromData is an array (because of map)
    //
    // But it is an array of <NewsArticle/> components
    //
    // React is just a-ok with us dumping that right into the
    // JSX/HTML. No need to join or convert, or parse.
    //
    return (
      <div className="all-main-content">
        <main>{newsArticlesFromData}</main>
      </div>
    )
  }
}

export default App
