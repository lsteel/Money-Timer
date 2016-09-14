import React, { Component } from 'react'
import TimePuncher from '../TimePuncher/TimePuncher'

class TimePuncherContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <TimePuncher />
      </div>
    )
  }

}

export default TimePuncherContainer
