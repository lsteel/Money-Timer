import React, { Component } from 'react'

class Search extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="filter" />
            <span className="input-group-addon"><span className="glyphicon glyphicon-filter"></span></span>
          </div>
        </div>
      </div>
    )
  }

}

export default Search
