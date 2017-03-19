import request from 'superagent'

export function getUserActions(token) {
 return {
   type: types.FETCH_COURSES,
   payload: request.get('/search').end((err, res) => {
   	return res.json()
   })
 }
}