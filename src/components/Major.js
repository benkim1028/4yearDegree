import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {browserHistory} from 'react-router';

import './Major.css'
import MajorDropdown from './MajorDropdown.js'

class Major extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        browserHistory.push('/' + this.props.params.facultyID + '/' + this.props.params.departmentID + '/' + this.state.value + '/users');
        console.log(this.state.value);
    }

    handleChange(value) {
        this.setState({value: value});
    }

    render() {
        let props = {
            onChange: this.handleChange,
            param: this.props.params
        };
        return (
            <div className="DropDownContainer">
                <MajorDropdown {... props}/>
                <div className="ButtonGroups">
                    <Button className="NextButton" content='Next' icon='right arrow' labelPosition='right' onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Major;
