import R from 'ramda'

export default (state = {}, action) => {
  switch(action.type) {
  case 'GET_FACULTY_PENDING':
    return R.merge(state, {
      isLoading: true
    });
  case 'GET_FACULTY_FULFILLED':
    return R.merge(state, {
      body: action.payload,
      isLoading: false,
      isLoaded: true
    });
  case 'GET_FACULTY_FAILED':
    return R.merge(state, {
      isLoaded: true,
      body: undefined
    });
  default:
    return state
  }
}
