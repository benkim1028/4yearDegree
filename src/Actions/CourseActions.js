import request from 'superagent'

export function getCourses() {
 return {
   type: 'GET_CPSC_COURSES',
   payload: request.get('https://jsonplaceholder.typicode.com/posts')
   .then(res => {
     return res.body
   })
 }
}
