import React, { Component } from 'react'
import TimePunch from '../TimePunch/TimePunch'

class TimePunchContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <TimePunch />
      </div>
    )
  }

}

export default TimePunchContainer
