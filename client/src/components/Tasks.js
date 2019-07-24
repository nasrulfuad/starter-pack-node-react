import React, { Component } from 'react'
import axios from 'axios'
import './Tasks.css'
    
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[]
    }
  }

  componentDidMount() {
    axios.get('/api/tasks')
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err)) 
  }

  render() {
    return(
      <div>
        { this.state.users.map(v => <div key={ v.id }> { v.name } </div>) }
      </div>
    )
  }
}
