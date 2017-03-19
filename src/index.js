import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import rootReducers from './reducers/index.js'
import App from './components/App'
import Home from './components/Home'
import YearCourses from './components/YearCourses'

// Add the reducer to your store on the `routing` key
const store = createStore(rootReducers, {}, applyMiddleware(thunkMiddleware, promiseMiddleware() ));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const Routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/courses" component={YearCourses}/>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
