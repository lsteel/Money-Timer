import React, { Component } from 'react'

class TimePunch extends React.Component {

  constructor(props) {
    super(props)
    this.getHourMin = this.getHourMin.bind(this)
    this.getTotalTime = this.getTotalTime.bind(this)
    this.getTotalPay = this.getTotalPay.bind(this)
  }

  getHourMin(date) {
    var hourMin = new Date(date).toLocaleTimeString("en-US", {hour: 'numeric', minute: "2-digit"})
    hourMin = hourMin.replace(' ', '').toLowerCase()
    return hourMin
  }

  getTotalTime(dateDifference) {
    var hours = parseInt(((dateDifference / 1000) / 60) / 60)
    var mins = parseInt(Math.round((dateDifference / 1000) / 60))
    var totalString = hours + 'h ' + mins + 'm'
    return totalString
  }

  getTotalPay(hourly, difference) {
    var num =  hourly * (((difference / 1000) / 60) / 60)
    return Math.round((num + 0.00001) * 100) / 100
  }

  render() {
    var difference = this.props.timePunch.timeEnd - this.props.timePunch.timeStart
    var totalTime = this.getTotalTime(difference)
    var totalPay = this.getTotalPay(this.props.hourly, difference)
    var timeStart = this.getHourMin(this.props.timePunch.timeStart)
    var timeEnd = this.getHourMin(this.props.timePunch.timeEnd)
    return (
      <div className="timePunch col-xs-12">
        <div className="well col-xs-12">
          <div className="col-xs-9">
            <div>{totalTime}</div>
            <div>{timeStart} - {timeEnd}</div>
          </div>
          <div className="col-xs-3 text-right">
            {'$' + totalPay}
          </div>
        </div>
      </div>
    )
  }

}

export default TimePunch
