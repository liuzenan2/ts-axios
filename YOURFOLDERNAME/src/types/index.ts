export type Method = "get" | "Get" | "delete" | "Delete" | "head" | "HEAD" | "options" | "OPTIONS" | "post" | "POST" | "put" | "PUT" | "patch" | "PATCH"

export interface AxiosRequestConfig {
  url?: string,
  method?: Method,
  data?: any,
  params?: any,
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
  [propName: string]: any
  transformRequest?:AxiosTransformer | AxiosTransformer[]
  transformResponse?:AxiosTransformer | AxiosTransformer[]
  cancelToken?:CancelToken 
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise<T =any> extends Promise<AxiosResponse<T>> {

}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
}

export interface Axios {
  defaults: AxiosRequestConfig
  Interceptors: {
    request: AxiosInterceptorMangger<AxiosRequestConfig>,
    response: AxiosInterceptorMangger<AxiosResponse>
  }

  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  
  get<T = any>(url:string, config?:AxiosRequestConfig):AxiosPromise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  head<T = any>(url:string, config?:AxiosRequestConfig):AxiosPromise<T>
  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  
}


export interface AxiosInstance extends Axios {
  <T=any>(config: AxiosRequestConfig): AxiosPromise<T>
  
  <T = any>(url: string, config: AxiosResponse): AxiosPromise<T>
  
}

export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance
  
  CancelToken: CancelTokenStatic
  Cancel: CancelStatic
  isCancel:(value:any) => boolean
}

export interface AxiosInterceptorMangger<T> {
  use(resolved: ReslovedFn<T>, rejected?: RejectedFn): number
  
  eject(id:number): void
}

export interface ReslovedFn<T> {
  (val:T):T|Promise<T>
}

export interface RejectedFn {
  (error:any):any
}

export interface AxiosTransformer {
  (data: any, headers?: any): any 

}

export interface CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel

  throwIfRequested():void
}

export interface Canceler {
  (messages?: string): void
}

export interface CancelExecutor {
  (cancel:Canceler):void
}


export interface CancelTokenSource {
  token: CancelToken
  cancel:Canceler
}

export interface CancelTokenStatic {
  new(executor: CancelExecutor): CancelToken
  
  source():CancelTokenSource
}

export interface Cancel {
  message?:string
}

export interface CancelStatic {
  new(message?:string):Cancel
}