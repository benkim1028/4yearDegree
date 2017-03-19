import request from 'superagent'

export function getCourses() {
 return {
   type: 'GET_COURSES',
   payload: request.get('http://localhost:3001/api/faculty/department/.../year1') 
   .then(res => res.body)
 }
}
