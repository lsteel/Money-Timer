import React, { Component } from 'react'

class MenuIcon extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <button className="btn btn-default">
            <span className="glyphicon glyphicon-cog"></span>
          </button>
        </div>
      </div>
    )
  }

}

export default MenuIcon
