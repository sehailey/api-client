import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Footer, Main } from './components'

ReactDOM.render(
  <div>
    <Navbar />
    <Main />
    <Footer />
  </div>,
  document.getElementById('app')
)
