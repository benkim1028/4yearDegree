import React, { Component } from 'react'

import { Accordion } from 'semantic-ui-react'

class YearCourses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }


    componentWillMount() {
        // enter get request to courses here just like faculty dropdown
    }

    render() {

        return (
            <div>
                <ul>
                    {this.state.courses.map((elem, i) => {
                        return (
                            <li key={i}>
                                {elem.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default YearCourses;
