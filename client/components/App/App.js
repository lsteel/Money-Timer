import React, { Component } from 'react'
import Thing from '../Thing/Thing'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Thing />
      </div>
    )
  }
}

export default App
