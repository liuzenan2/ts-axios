import { createError } from '../utils/error'
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../utils/headers'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve,reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout,cancelToken } = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }
    if (timeout) {
      request.timeout = timeout
    }

    request.open(method.toUpperCase(), url!, true)

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      if (request.status === 0) {
        return
      }
        const reponseHeaders =parseHeaders(request.getAllResponseHeaders())

        const responseData = responseType !== 'text' ? request.response : request.responseText
        const response: AxiosResponse = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: reponseHeaders,
          config,
          request
        }
        handleResponse(response)
      
    }

    request.onerror = function handleError() {
      reject(createError('netword error', config,null,request))
    }

    request.ontimeout = function handleTimeout() {
      reject(createError('time out ',config,'EC',request))
    }
    Object.keys(headers).forEach(name => {
     
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    if (cancelToken) {
      cancelToken.promise.then(reason => {
        request.abort()
        reject(reason)
      })
    }

    request.send(data)

    function handleResponse(response: AxiosResponse):void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(createError(`request failed with status code ${response.status}`, config,null,request,response))
      }
    }
  })
  
}
