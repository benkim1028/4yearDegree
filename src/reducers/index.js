import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import faculty from './FacultyReducer'
import courses from './YearCoursesReducer'

const rootReducer = combineReducers({
  faculty,
  courses,
  routing: routerReducer
})

export default rootReducer
