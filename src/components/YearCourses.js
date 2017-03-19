import React, { Component } from 'react'
import { connect } from 'react-redux'

import R from 'ramda'
import { Accordion } from 'semantic-ui-react'



export default AccordionExampleStyled

class YearCourses extends Component {

  componentWillMount() {
    
  }

  render() {

    const panels = R.times(1, () => ({
      title: this.props.name,
      content: ,
    }))

    const AccordionExampleStyled = () => (
      <Accordion panels={panels} styled />
    )

    const courses = this.props.courses.isLoaded ? this.props.courses.body.map((elem,i) => {
      return (
        <li key={i}>
          {elem.name}
        </li>
      )
    }) : <li></li>

    return (
      <div>
        <ul>
          {courses}
        </ul>
      </div>
    );
  }
}
// gets relevant props (for list) from global state
const mapStateToProps = (state) => ({
  yearName:
  courses: state.courses
})

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: () => dispatch(courseActions.getCourses())

})

const YearCourses = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default YearCourses
