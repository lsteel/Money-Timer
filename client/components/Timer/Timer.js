import React, { Component } from 'react'

class Timer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-12">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h1>$20.27</h1>
          </div>
          <div className="col-xs-12">
            <h3>01H05M</h3>
          </div>
          <div className="col-xs-12">
          <div className="input-group">
            <span className="input-group-addon">#</span>
            <input type="text" className="form-control" placeholder="separate tags with commas" />
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <button className="btn btn-lrg btn-danger">
              <span className="glyphicon glyphicon-stop"></span>
            </button>
          </div>
        </div>
      </div>
    )
  }

}

export default Timer
