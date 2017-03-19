import request from 'superagent'

export function getCourses() {
 return {
   type: 'GET_CPSC_COURSES',
   payload: request.get('https://jsonplaceholder.typicode.com/posts').then((err, res) => {
     console.log(res);
     return res.body()
   })
 }
}
