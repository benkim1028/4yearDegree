import React, { Component } from 'react';
import YearCourses from './YearCourses'
import './App.css';
import './Banner.css'
import axios from 'axios'

class App extends Component {

	componentWillMount() {
    axios.get('http://localhost:3001/api/faculty').then((response) => {
      this.setState({options: response.data});
    });
	}

	
  render() {
    // var props1 = {
    //     name= 'Year 1',
    //     content= 'asd'
    //   }

    //   var props2 = {
    //     name= 'Year 2',
    //     content= 'asd'
    //   }

    //   var props3 = {
    //     name= 'Year 3',
    //     content= 'asd'
    //   }

    //   var props4 = {
    //     name= 'Year 4',
    //     content= 'asd'
    //   }

    return (
      <div>
      

      <YearCourses
        name="Year 1"
        content="asd"
      	
      />

      <YearCourses
        name="Year 2"
        content="asd"
        
      />

      <YearCourses
        name="Year 3"
        content="asd"
        
      />

      <YearCourses
        name="Year 4"
        content="asd"
        
      />
      
  
  
      </div>
    );
  }
}

export default App;
