import React, { Component } from 'react'
import './Users.css'

export default class extends Component{
  constructor(props) {
    super(props)
    this.state = {
      users:[]
    }
  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => this.setState({users: data}))
  }

  render() {
    return(
      <div>
        { this.state.users.map(v => <div key={ v.id }> { v.name } </div>) }
      </div>
    )
  }
}
