import React, { Component } from 'react'
import styles from './App.css'
import MenuIcon from '../MenuIcon/MenuIcon'
import Search from '../Search/Search'
import TimePunchContainer from '../TimePunchContainer/TimePunchContainer'
import TimePuncherContainer from '../TimePuncherContainer/TimePuncherContainer'
import TimerContainer from '../TimerContainer/TimerContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container-fluid">
        <MenuIcon />
        <Search />
        <TimePunchContainer />
        <TimePuncherContainer />
        <TimerContainer />
      </div>
    )
  }
}

export default App
