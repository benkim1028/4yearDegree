import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios';

class DepartmentDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: []
        };
    }

    componentWillMount() {
        axios.get('http://localhost:3001/api/' + encodeURI(this.props.param)).then((response) => {
            this.setState({options: response.data});
        });
    }

    render() {
        return (
            <Dropdown
                placeholder='Select Department'
                fluid
                search
                selection
                options={this.state.options.map((elem, i) => {
                    return {
                        text: elem.name,
                        value: elem.name
                    }
                })}
                onChange={(e, {value}) => this.props.onChange(value)}/>
        );
    }
}

export default DepartmentDropdown;
