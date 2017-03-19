import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Department from './components/Department'
import Major from './components/Major'
import YearCourses from './components/YearCourses'
import YearCoursesPage from './components/YearCoursesPage'
import UserCourse from './components/UserCourse'

import 'bootstrap/dist/css/bootstrap.min.css'

// Add the reducer to your store on the `routing` key

// Create an enhanced history that syncs navigation events with the store

const Routes = (
    // "/courses" for testing purposes

    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/:facultyID/:departmentID/:majorID/courses" component={YearCoursesPage}/> 
        <Route path="/:facultyID/:departmentID/:majorID/users" component={UserCourse}/>
        <Route path="/:facultyID" component={Department}/>
        <Route path="/:facultyID/:departmentID" component={Major}/>
        <Route path="/:facultyID/:departmentID/:majorID" component={YearCoursesPage}/>
        
      </Route>

    </Router>

);

ReactDOM.render(
    Routes,
    document.getElementById('root')
);
