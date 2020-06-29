import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CategoryList } from './components/CategoryList'
import { PhotoList } from './components/PhotoList'
import { PhotoDetail } from './components/PhotoDetail'
import { Header } from './components/Header'

//
// This code uses the `bulma` CSS Framework.
//
// It also uses the Font Awesome icon set.
//

class Dog {
  name = 'Riley'

  speak() {
    console.log(`${this.name} says WOOF`)
  }
}

class App extends Component {
  // state is a class level attribute of the App
  //
  // So we must always refer to it as `this.state`
  state = {
    favoritesCount: 0,
  }

  functionToCallToIncrementTheFavoriteCount = () => {
    const newState = { favoritesCount: this.state.favoritesCount + 1 }

    this.setState(newState)
  }

  render() {
    // this is a local variable, so no need to say this.message, just message
    const message = 'Wow, great app'

    return (
      <Router>
        <main>
          <Header />

          <section className="section">
            <p>Favorite Count: {this.state.favoritesCount}</p>
            <Switch>
              {/*  IF we are on the "/" page, the
                   home page, put the Category List
                   right here */}
              <Route exact path="/" component={CategoryList} />
              <Route
                exact
                path="/:theNameOfTheCategoryWeWantToLookAt"
                component={PhotoList}
              />
              <Route
                path="/:theNameOfTheCategoryWeWantToLookAt/:arrayIndexOfThePhoto"
                render={props => (
                  <PhotoDetail
                    // Adding back in the match that react router gives us
                    // match={props.match}

                    // Adding back in *ALL* the properties react router gives us
                    {...props}
                    //
                    // Pass the function DOWN to the child component
                    // so it may call it. The only way to get functions
                    // into the child component is to pass them.
                    functionToCallToIncrementTheFavoriteCount={
                      this.functionToCallToIncrementTheFavoriteCount
                    }
                  />
                )}
              />
            </Switch>
          </section>
        </main>
      </Router>
    )
  }
}

export default App
