import React, { Component } from 'react'
import TimePunch from '../TimePunch/TimePunch'

class TimePunchContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    var hourly = this.props.hourly

    return (
      <div className="row">
        {this.props.timePunches.map((timePunch) => {
          return (
            <TimePunch key={timePunch.id} hourly={hourly} timePunch={timePunch} />
          )
        })}
      </div>
    )
  }

}

export default TimePunchContainer
