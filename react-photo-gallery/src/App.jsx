import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CategoryList } from './components/CategoryList'
import { Header } from './components/Header'

//
// This code uses the `bulma` CSS Framework.
//
// It also uses the Font Awesome icon set.
//

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Header />

          <section className="section">
            <CategoryList />
          </section>
        </main>
      </Router>
    )
  }
}

export default App
