import { log } from 'console'
import axios, { AxiosError } from '../../src/index'


// axios({
//   method: 'get',
//   url: '/error/get1'
// })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e)
//   })

// axios({
//   method: 'get',
//   url: '/error/get'
// })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(e => {
//     console.log(e)
//   })

// setTimeout(() => {
//   axios({
//     method: 'get',
//     url: '/error/get'
//   })
//     .then(res => {
//       console.log(res)
//     })
//     .catch(e => {
//       console.log(e)
//     })
// }, 5000)

// axios({
//   method: 'get',
//   url: '/error/timeout',
//   timeout: 2000
// })
//   .then(res => {
//     console.log(res)
//   })
//   .catch((e:AxiosError) => {
//     console.log(e.message)
//     console.log(e.code)
//     console.log(e.config)
//   })


// axios({
//   url: '/base/post',
//   method: 'post',
//   data: {
//     msg: 'hi'
//   }
// }).then((res) => {
//   console.log(res)
// })


// axios.request({
//   url: '/error/post',
//   method: 'post',
//   data: {
//     msg: 'hello'
//   }
// })


// axios.get('/base/get')

// axios.options('/extend/options')

// axios.post('/base/post', {
//   msg:123
// }).then((res) => {
//   console.log(res)
// })


// axios.put('/extend/put', { msg: 'put' })

// interface ResponseData<T = any> {
//   code: number
//   result: T
//   message:string
// }

// interface User {
//   name: string
//   age:number
// }

// function getUser<T>() {
//   return axios.get<ResponseData<T>>('/error/user')
//     .then((res) => res.data)
// }

// async function test() {
//   const user = await getUser<User>()
//   if (user) {
//     console.log(user.result.name)
//   }
// }

// test()

import qs from 'qs'


axios.defaults.headers.common['test2'] = 123
axios({
  url: '/config/post',
  method: 'post',
  data: qs.stringify({
    a:1
  }),
  headers: {
    test:'213'
  }
}).then((res) => {
  console.log(res)
})