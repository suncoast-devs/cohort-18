import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './custom.scss'

import { Restaurants } from './pages/Restaurants'
import { Header } from './components/Header'
import { AddRestaurant } from './pages/AddRestaurant'
import { ShowRestaurant } from './pages/ShowRestaurant'
import { NavBar } from './components/NavBar'

export function App() {
  return (
    <>
      <NavBar />
      <main className="container-fluid p-4">
        <Header />
        <Switch>
          <Route exact path="/">
            <Restaurants />
          </Route>
          <Route path="/restaurants/add">
            <AddRestaurant />
          </Route>
          <Route path="/restaurants/:id">
            <ShowRestaurant />
          </Route>
        </Switch>
      </main>
    </>
  )
}
