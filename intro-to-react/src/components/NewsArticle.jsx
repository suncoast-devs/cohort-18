import React from 'react'

export class NewsArticle extends React.Component {
  render() {
    return (
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
    )
  }
}
