import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import './custom.scss'

import { Restaurants } from './pages/Restaurants'
import { Header } from './components/Header'
import { AddRestaurant } from './pages/AddRestaurant'
import { ShowRestaurant } from './pages/ShowRestaurant'
import { NavBar } from './components/NavBar'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { EditRestaurant } from './pages/EditRestaurant'

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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/restaurants/add">
            <AddRestaurant />
          </Route>
          <Route exact path="/restaurants/:id/edit">
            <EditRestaurant />
          </Route>
          <Route exact path="/restaurants/:id">
            <ShowRestaurant />
          </Route>
        </Switch>
      </main>
    </>
  )
}
