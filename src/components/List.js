import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as courseActions from '../actions/CourseActions'

class ListComponent extends Component {

  componentWillMount() {
    this.props.fetchCourses()
  }

  render() {
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
  courses: state.courses
})

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: () => dispatch(courseActions.getCourses())
})

const List = connect(mapStateToProps, mapDispatchToProps)(ListComponent)

export default List
