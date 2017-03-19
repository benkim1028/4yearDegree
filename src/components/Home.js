import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import './Home.css'
import FacultyDropDown from './FacultyDropdown.js'

class Home extends Component {
  render() {
    return (
      <div className="DropDownContainer">
        <FacultyDropDown />
        <div className="ButtonGroups">
          <Button content='Back' icon='left arrow' labelPosition='left' />
          <Button content='Next' icon='right arrow' labelPosition='right' />
        </div>
      </div>
    )
  }
}

export default Home
