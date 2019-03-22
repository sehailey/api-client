import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components'
import Navbar from './components/navbar'
import Footer from './components/footer'

ReactDOM.render(
  <div>
    <Navbar />
    <Main />
    <Footer />
  </div>,
  document.getElementById('app')
)
