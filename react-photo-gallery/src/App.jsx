import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
            <Switch>
              {/*  IF we are on the "/" page, the
                   home page, put the Category List
                   right here */}
              <Route exact path="/" component={CategoryList} />
            </Switch>
          </section>
        </main>
      </Router>
    )
  }
}

export default App
