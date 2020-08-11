import { AxiosRequestConfig } from './types'
import { transformRequest, transformResponse } from './utils/data'
import { processHeaders } from './utils/headers'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },

  transformRequest: [
    function (data: any, headers: any): any{
      processHeaders(headers, data)
      return transformRequest(data)
    }
    
  ],
  transformResponse: [
    function (data:any):any {
      return transformResponse(data)
    }
  ]
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(methods => {
  defaults.headers[methods] = {}
})

const methodsWithData = ['post', 'put']

methodsWithData.forEach(methods => {
  defaults.headers[methods] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
console.log(defaults)
export default defaults