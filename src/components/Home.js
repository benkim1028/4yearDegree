import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {browserHistory} from 'react-router';

import './Home.css'
import FacultyDropDown from './FacultyDropdown.js'

class Home extends Component {

    handleClick() {
        browserHistory.push('/courses');
    }

    render() {
        return (
            <div className="DropDownContainer">
                <FacultyDropDown />
                <div className="ButtonGroups">
                    <Button className="NextButton" content='Next' icon='right arrow' labelPosition='right' onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Home;
