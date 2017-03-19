import React, { Component } from 'react';


class List extends Component {
  componentWillMount() {

  }
  render() {
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
  data: state.data
})

const mapDispatchToProps = (dispatch) => ({
  fetchCourses: dispatch()
})

const List = connect(mapStateToProps, mapDispatchToProps)(List)

export default List;