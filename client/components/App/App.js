import React, { Component } from 'react'
import styles from './App.css'
import MenuIcon from '../MenuIcon/MenuIcon'
import Filter from '../Filter/Filter'
import TimePunchContainer from '../TimePunchContainer/TimePunchContainer'
import TimePuncherContainer from '../TimePuncherContainer/TimePuncherContainer'
import TimerContainer from '../TimerContainer/TimerContainer'


class App extends Component {
  constructor(props) {
    super(props)
    this.createTimePunch = this.createTimePunch.bind(this)
    this.setPay = this.setPay.bind(this)
    this.setRate = this.setRate.bind(this)
    this.getHourly = this.getHourly.bind(this)
    this.state = {
      autoId: 1,
      pay: 12,
      rate: 'hourly',
      timing: false,
      activeTPId: 0,
      timePunches: [
        {
          id: 1,
          timeStart: new Date().getTime() - 100000,
          timeEnd: new Date().getTime(),
          active: false
        },
        {
          id: 2,
          timeStart: new Date().getTime() - 1000000,
          timeEnd: new Date().getTime() - 200000,
          active: false
        }
      ]
    }
  }

  createTimePunch(timeStart, timeEnd) {
    this.setState({
      autoId: this.state.autoId + 1,
      timePunches: [
        ...this.state.timePunches,
        {
          id: this.state.autoId,
          timeStart,
          timeEnd
        }
      ]
    })
  }

  setPay() {}

  setRate() {}

  getHourly(pay, rate) {
    if (rate === "yearly") {
      return pay / 2087
    }
    else {
      return pay
    }
  }

  render() {
    var hourly = this.getHourly(this.state.pay, this.state.rate)
    return (
      <div className="container-fluid">
        <MenuIcon pay={this.state.pay} rate={this.state.rate} />
        <Filter />
        <TimePunchContainer hourly={hourly} timePunches={this.state.timePunches} />
        <TimePuncherContainer timePunches={this.state.timePunches} timing={this.state.timing}/>
        <TimerContainer />
      </div>
    )
  }
}

export default App
