import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './Home.css'
import FacultyDropDown from './FacultyDropdown.js'

// If you want a button that goes back it'll look like this
// <Button className="NextButton" content='Back' icon='left arrow' labelPosition='left' />

class Home extends Component {
  render() {
    return (
      <div className="DropDownContainer">
        <FacultyDropDown />
        <div className="ButtonGroups">
          <Button className="NextButton" content='Next' icon='right arrow' labelPosition='right' />
        </div>
      </div>
    )
  }
}

export default Home
