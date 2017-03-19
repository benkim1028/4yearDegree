import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import * as courseActions from '../actions/CourseActions'

class DropDownComponent extends Component {

  componentWillMount() {
    this.props.fetchCourses()
  }

  render() {
    if(this.props.courses.isLoaded ) {
      console.log(this.props.courses)
    }

    const courses = this.props.courses.isLoaded ?
    (
      <Dropdown
        placeholder='Select Faculty'
        fluid
        search
        selection
        options={this.props.courses.body.map((elem, i) => {
          return {
            text: elem.name,
            value: elem.name
          }
        })} />)
    : <div></div>

    return (
      <div>
        {courses}
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

const FacultyDropDown = connect(mapStateToProps, mapDispatchToProps)(DropDownComponent)

export default FacultyDropDown
