import React, { Component } from 'react'
import { Accordion, Panel } from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap'
import './YearCourses.css'


//import { Accordion } from 'semantic-ui-react'
import axios from 'axios';
import './Home.css'
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
        console.log(props);

        this.state = {
            options: []
        }
    }



    // componentWillMount() {
    //     console.log('http://localhost:3001/api/' + this.props.param.facultyID + '/' + this.props.param.departmentID + '/' + this.props.param.majorID);
    //     axios.get('http://localhost:3001/api/' + this.props.param.facultyID + '/' + this.props.param.departmentID + '/' + this.props.param.majorID).then((response) => {
    //         this.setState({options: response.data});
    //     });
    // }

    

    render() {
      

        return (
            <div className="DropDownContainer"> 
            <PageHeader className="head"><small>{this.props.name}</small></PageHeader>
              
              <div> {this.props.data.map((course, idx) => 
                <Panel collapsible defaultCollapsed key={idx} header={course.code}>
                {course.prereqs}
                </Panel>

                )

              } </div>
            </div>
        );
    }
}

export default YearCourses;
