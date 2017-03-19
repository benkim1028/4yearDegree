import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import YearCourses from './components/YearCourses'

// Add the reducer to your store on the `routing` key

// Create an enhanced history that syncs navigation events with the store

const Routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/courses" component={YearCourses}/>
      </Route>
    </Router>
)

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
