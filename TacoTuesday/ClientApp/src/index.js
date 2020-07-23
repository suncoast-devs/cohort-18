import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { RecoilRoot } from 'recoil'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  rootElement
)
