
import axios from '../../src/index'



axios.Interceptors.request.use(config => {
  config.headers.test += '1'
  return config
})
axios.Interceptors.request.use(config => {
  config.headers.test += '2'
  return config
})
axios.Interceptors.request.use(config => {
  config.headers.test += '3'
  return config
})

axios.Interceptors.response.use(res => {

  res.data.data += '1'
  return res
})
let interceptor =  axios.Interceptors.response.use(res => {
  res.data.data += '2'
  return res
})
axios.Interceptors.response.use(res => {
  res.data.data += '3'
  return res
})

axios.Interceptors.response.eject(interceptor)

axios({
  url: '/interceptor/get',
  method: 'get',
  headers: {
    test:''
  }
}).then((res) => {
  console.log(res.data)
})