import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss'

import SignIn from './views/SignIn/SignIn'
import Chat from './views/Chat/Chat'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/chat" exact component={Chat} />
      </Router>
    )
  }
}

export default App
