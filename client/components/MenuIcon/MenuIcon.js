import React, { Component } from 'react'

class MenuIcon extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6">
          <button className="btn btn-lrg btn-info">
            <span className="glyphicon glyphicon-cog"></span>
          </button>
        </div>
        <div className="col-xs-6 text-right">
          <button className="btn btn-link btn-danger">
            edit
          </button>
        </div>
      </div>
    )
  }

}

export default MenuIcon
