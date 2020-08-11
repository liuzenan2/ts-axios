import { resolve } from 'dns'
import { AxiosPromise, AxiosRequestConfig,AxiosResponse,Method, RejectedFn, ReslovedFn } from '../types'
import dispatchRequest from './dispatchRequest'
import interceptorManager from './interceptorManger'
import mergeConfig from './mergeConfig'
interface Interceptors {
  request: interceptorManager<AxiosRequestConfig>
  response:interceptorManager<AxiosResponse>
}

interface PromiseChain<T> {
  resloved: ReslovedFn<T> | ((config: AxiosResponse) => AxiosPromise)
  rejected?:RejectedFn
}

export default class Axios {
  defaults: AxiosRequestConfig
  Interceptors: Interceptors

  constructor(initConfig: AxiosRequestConfig) {
    this.defaults = initConfig
    this.Interceptors = {
      request: new interceptorManager<AxiosRequestConfig>(),
      response: new interceptorManager<AxiosResponse>()
    }
  }

  request(url?: any, config?: any): AxiosPromise {
    if (typeof url === 'string'){
      if (!config) {
        config = {}
      }
      config.url = url
    } else {
      config = url
    } 

    config = mergeConfig(this.defaults,config)

    const chain:PromiseChain<any>[] = [{
      resloved: dispatchRequest,
      rejected: undefined
    }]

    this.Interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor)
    })

    this.Interceptors.response.forEach(interceptor => {
      chain.push(interceptor)
    })

    let promise = Promise.resolve(config)
    while (chain.length) {
      const { resloved, rejected } = chain.shift()!
      promise = promise.then(resloved, rejected)
    }
    return promise
  }

  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('get',url,config)

  }


  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
   return this._requestMethodWithoutData('delete',url,config)
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('post',url,data,config)
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('put',url,data,config)
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('patch',url,data,config)
  }

  _requestMethodWithoutData(method:Method,url:string,config?:AxiosRequestConfig) {
    return this.request(Object.assign(config || {}, {
      method: method,
      url
    }))
  }

  _requestMethodWithData(method:Method,url:string,data?:any,config?:AxiosRequestConfig) {
    return this.request(Object.assign(config || {}, {
      method: method,
      url,
      data
    }))
  }
}