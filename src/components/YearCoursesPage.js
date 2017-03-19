import React, { Component } from 'react';
import YearCourses from './YearCourses'
import './App.css';
import './Banner.css'
import axios from 'axios'

class YearCoursesPage extends Component {

	constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            options: []
        };
    }

    componentWillMount() {
        console.log('http://localhost:3001/api/' + this.props.params.facultyID + '/' + this.props.params.departmentID + '/' + this.props.paramsmajorID);
        axios.get('http://localhost:3001/api/' + this.props.params.facultyID + '/' + this.props.params.departmentID + '/' + this.props.params.majorID).then((response) => {
            this.setState({options: response.data});
        });
    }

    filterByCourseId(course) {
        const courseCode = course.code.split(' ')[1];
        if (courseCode >= 100 && courseCode < 200) return true;
        else return false;
    }
    filterByCourseId2(course) {
        const courseCode = course.code.split(' ')[1];
        if (courseCode >= 200 && courseCode < 300) return true;
        else return false;
    }
    filterByCourseId3(course) {
        const courseCode = course.code.split(' ')[1];
        if (courseCode >= 300 && courseCode < 400) return true;
        else return false;
    }
    filterByCourseId4(course) {
        const courseCode = course.code.split(' ')[1];
        if (courseCode >= 400 && courseCode < 500) return true;
        else return false;
    }

	
  render() {

    var options1 = this.state.options.filter(this.filterByCourseId);
    var options2 = this.state.options.filter(this.filterByCourseId2);
    var options3 = this.state.options.filter(this.filterByCourseId3);
    var options4 = this.state.options.filter(this.filterByCourseId4);



    let props = {
            name:"Year 1",
            onChange: this.handleChange,
            param: this.props.params
        };
    
    return (

      <div>
      

      <YearCourses
        name="Year 1"
        onChange={this.handleChange}
        param={this.props.params}
        data={options1}
      	
      />

      <YearCourses
      name="Year 2"
        onChange={this.handleChange}
        param={this.props.params}
        data={options2}
        
      />

      <YearCourses
        name="Year 3"
        onChange={this.handleChange}
        param={this.props.params}
        data={options3}
        
      />

      <YearCourses
        name="Year 4"
        onChange={this.handleChange}
        param={this.props.params}
        data={options4}
        
      />
      
  
  
      </div>
    );
  }
}

export default YearCoursesPage;
