import axios from "../../src/index";

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hi'
  }
})


axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    msg: 'hello'
  }
})


axios.get('/extend/get')

axios.options('/extend/options')

axios.post('/extend/post', {
  msg:123
})


axios.put('/extend/put', { msg: 'put' })
