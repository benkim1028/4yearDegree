import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import courses from './CourseReducer'

const rootReducer = combineReducers({
  courses,
  routing: routerReducer
})

export default rootReducer
