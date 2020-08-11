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