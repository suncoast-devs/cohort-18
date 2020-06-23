import React from 'react'

export class NewsArticle extends React.Component {
  // name = 'Riley'

  // props --- props is an object that React.Component gives us
  //           that contains an object with all the properties we
  //           were called with

  render() {
    return (
      <article className="intro-article">
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.body}</p>
        <p>
          <img
            width={this.props.pictureWidth || 50}
            src={`${this.props.picture}?preview=true`}
          />
        </p>
        <a className="read-more" href="#here">
          read more about {this.props.title}
        </a>
      </article>
    )
  }
}
