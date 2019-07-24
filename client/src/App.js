import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './components/Users'

export default class extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Users />
        </header>
      </div>
    )
  }
}
