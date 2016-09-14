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
    this.state = {
      pay: 12,
      rate: 'hourly',
      timing: false,
      timePunches: []
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <MenuIcon />
        <Filter />
        <TimePunchContainer />
        <TimePuncherContainer />
        <TimerContainer />
      </div>
    )
  }
}

export default App
