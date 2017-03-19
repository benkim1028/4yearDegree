import React, { Component } from 'react'
import { Accordion, Panel } from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap'
import './YearCourses.css'


//import { Accordion } from 'semantic-ui-react'
import axios from 'axios';

import _ from 'lodash'

class YearCourses extends Component {


// const panels = _.times(1, () => ({
//   title: this.props.,
//   content: faker.lorem.paragraphs(),
// }))

// const AccordionExamplePanelsProp = () => (
//   <Accordion panels={panels} />
// )

//export default AccordionExamplePanelsProp

    constructor(props) {
        super(props);

        this.state = {
            courses: []
        }
    }


    componentWillMount() {
        
    }

    render() {

      var data = [
        {name:'cpsc110',credit:'3'},
        {name:'cpsc111',credit:'4'}
      ]

        return (
            <div> 
            <PageHeader className="head"><small>{this.props.name}</small></PageHeader>
              
              <div> {data.map((course, idx) => 
                <Panel collapsible defaultCollapsed header={course.name}>
                {course.credit}
                </Panel>

                )

              } </div>
            </div>
        );
    }
}

export default YearCourses;
