import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import * as courseActions from '../actions/CourseActions'

class DropDownComponent extends Component {

  componentWillMount() {
    this.props.getFaculty()
  }

  render() {
    const faculty = this.props.faculty.isLoaded ?
    (
      <Dropdown
        placeholder='Select Faculty'
        fluid
        search
        selection
        options={this.props.faculty.body.map((elem, i) => {
          return {
            text: elem.name,
            value: elem.name
          }
        })} />)
    : <div></div>

    return (
      <div>
        {faculty}
      </div>
    );
  }
}
// gets relevant props (for list) from global state
const mapStateToProps = (state) => ({
  faculty: state.faculty
})

const mapDispatchToProps = (dispatch) => ({
  fetchFaculty: () => dispatch(courseActions.getFaculty())
})

const FacultyDropDown = connect(mapStateToProps, mapDispatchToProps)(DropDownComponent)

export default FacultyDropDown
