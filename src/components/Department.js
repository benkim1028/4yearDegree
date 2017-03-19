import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import {browserHistory} from 'react-router';

import './Department.css'
import DepartmentDropdown from './DepartmentDropdown.js'

class Department extends Component {

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
        browserHistory.push('/'+encodeURI(this.state.value));
        console.log(this.state.value);
    }

    handleChange(value) {
        this.setState({value: value});
    }

    render() {
        let props = {
            onChange: this.handleChange,
            param: this.props.params.facultyID
        };
        return (
            <div className="DropDownContainer">
                <DepartmentDropdown {... props}/>
                <div className="ButtonGroups">
                    <Button className="NextButton" content='Next' icon='right arrow' labelPosition='right' onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Department;
