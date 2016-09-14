import React, { Component } from 'react'

class Filter extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="filter by tag" />
            <span className="input-group-addon"><span className="glyphicon glyphicon-filter"></span></span>
          </div>
        </div>
      </div>
    )
  }

}

export default Filter
