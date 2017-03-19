import React, { Component } from 'react'

import FacultyDropDown from './FacultyDropdown.js'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="DropDownContainer">
        <FacultyDropDown />
      </div>
    )
  }
}

export default Home
