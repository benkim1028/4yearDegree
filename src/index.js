import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import rootReducers from './reducers/index.js'
import App from './components/App'
import Home from './components/Home'

// Add the reducer to your store on the `routing` key
const store = createStore(rootReducers)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const Routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
