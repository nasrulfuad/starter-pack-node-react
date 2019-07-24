import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Tasks from './components/Tasks'

export default class extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Tasks />
        </header>
      </div>
    )
  }
}
