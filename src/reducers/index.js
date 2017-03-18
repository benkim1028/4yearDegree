import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import names from './NameReducer'

const rootReducer = combineReducers({
  names,
  routing: routerReducer
})

export default rootReducer
