import React, { Component } from 'react'
import Containaire from './Containaire'
import Header from './Header'
import Menu from './Menu'
export default class Dashbord extends Component {
  render() {
    return (
      <div>
     <Header/>
        <Menu/>
<Containaire/>




      </div>
    )
  }
}
