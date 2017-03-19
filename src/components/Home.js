import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {browserHistory} from 'react-router';

import './Home.css'
import FacultyDropDown from './FacultyDropdown.js'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        browserHistory.push('/'+encodeURI(this.state.value));
        console.log(this.state.value);
    }

    handleChange(value) {
        this.setState({value: value});
    }

    render() {
        let props = {
            onChange: this.handleChange
        };
        return (
            <div className="DropDownContainer">
                <FacultyDropDown {... props}/>
                <div className="ButtonGroups">
                    <Button className="NextButton" content='Next' icon='right arrow' labelPosition='right' onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Home;
