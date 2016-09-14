import React, { Component } from 'react'
import Timer from '../Timer/Timer'

class TimerContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <Timer />
      </div>
    )
  }

}

export default TimerContainer
