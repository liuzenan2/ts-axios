

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })


// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: '@:$, '
//   }
// })


  
// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })

// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type':'application/json',
//     'Accept': 'application/json, text/plain, */*'
//   },
//   data: {
//     a: 1,
//     b: 2
//     }
// }).then((res) => {
//   console.log(res)
// })


// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 3,
//     b: 4
//   }
// }).then((res) => {
//   console.log(res)
// })
import axios, { Cancel } from '../../src/index'

const CancelToken = axios.CancelToken
const sourcs = CancelToken.source()


axios.get('/cancel/get', {
  cancelToken:sourcs.token
}).catch(function (e) {
  if (axios.isCancel(e)) {
    console.log(e)
  }
})



setTimeout(() => {
  sourcs.cancel('Operation canceled')

  axios.post('/cancel/post', { a: 1 }, {
    cancelToken:sourcs.token
  }).catch(function (e) {
    if (axios.isCancel(e)) {
      console.log(e)
    }
  })
}, 100);