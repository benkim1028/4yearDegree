import request from 'superagent'

export function getCourses() {
 return {
   type: 'GET_CPSC_COURSES',
   payload: request.get('http://localhost:3001/api/faculty')
   .then(res => res.body)
 }
}
