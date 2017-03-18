import R from 'ramda'

let temp_name = "Jimmy";
let temp_name_list = []

export default (state = {}, action) => {
  switch(action.type) {
  case 'GET_NAMES':
    let temp = temp_name_list.push(temp_name)
    return R.merge(state, { temp })
  default:
    return state
  }
}
