import React, { Component } from 'react'

class TimePuncher extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-xs-12 text-center">
        <button className="btn btn-lrg btn-primary">
          <span className="glyphicon glyphicon-play"></span>
        </button>
      </div>
    )
  }

}

export default TimePuncher
