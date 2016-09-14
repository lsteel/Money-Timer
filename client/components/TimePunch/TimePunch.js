import React, { Component } from 'react'

class TimePunch extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="timePunch col-xs-12">
        <div className="well col-xs-12">
          <div className="col-xs-6">
            <div>8h 16m</div>
            <div>9:48am - 6:04pm</div>
          </div>
          <div className="col-xs-6 text-right">
            $200.69
          </div>
        </div>
      </div>
    )
  }

}

export default TimePunch
