import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios';

class FacultyDropDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        axios.get('http://localhost:3001/api/faculty').then((response) => {
            this.setState({options: response.data});
        });
    }

    handleChange(event) {
        this.props.onChange(event.target.firstChild.innerHTML);
    }

    render() {
        return (
            <Dropdown
                placeholder='Select Faculty'
                fluid
                search
                selection
                options={this.state.options.map((elem, i) => {
                    return {
                        text: elem.name,
                        value: elem.name
                    }
                })}
                onChange={this.handleChange}/>
        );
    }
}

export default FacultyDropDown;