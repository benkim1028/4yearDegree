import React, { Component } from 'react'

import { Accordion } from 'semantic-ui-react'
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
              <div> {this.props.name} </div>
              <div> {data.map((course, idx) => 
                <Accordion panels={_.times(1, () => ({
                  title: course.name,
                  content: course.credit,
                }))}/>)

              } </div>
            </div>
        );
    }
}

export default YearCourses;
