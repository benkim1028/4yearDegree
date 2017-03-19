import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios';

class MajorDropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: []
        };
    }

    componentWillMount() {
      console.log(this.props);
        axios.get('http://localhost:3001/api/' + this.props.param.facultyID + '/' + this.props.param.departmentID).then((response) => {
            this.setState({options: response.data});
        });
    }

    render() {
        return (
            <Dropdown
                placeholder='Select Major'
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

export default MajorDropdown;
