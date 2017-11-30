import React, { Component } from 'react'
import Razzer from './Razzer.js'
import logo from '../Images/wtf.gif'
import '../Styles/App.css'

class BaseLayout extends Component {
  render() {
    return (
      <div className="baseLayout">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PourPholio</h1>
        </header>
        <p className="App-intro">To get started, do something besides nothing.</p>
        <Razzer />
      </div>
    )
  }
}

export default BaseLayout
