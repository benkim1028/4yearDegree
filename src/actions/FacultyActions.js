import request from 'superagent'

export function getFaculty() {
 return {
   type: 'GET_FACULTY',
   payload: request.get('http://localhost:3001/api/faculty')
   .then(res => res.body)
 }
}
