import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as courseActions from '../actions/CourseActions'

class ListComponent extends Component {

  componentWillMount() {
    this.props.fetchCourses()
  }

  render() {

    if(this.props.courses.isLoaded) {
      console.log('here');
      console.log(this.props.courses)
    }

    // const courses = this.props.courses.map((elem,i) => {
    //   return (
    //     <li key={i}>
    //       {elem}
    //     </li>
    //   )
    // })

    return (
      <div>
        <ul>
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
