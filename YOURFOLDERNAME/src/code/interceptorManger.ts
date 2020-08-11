import { RejectedFn,ReslovedFn } from '../types'

interface Interceptor<T> {
  resloved: ReslovedFn<T>
  rejected?: RejectedFn
}

export default class interceptorManager<T> {
  private interceptors:Array<Interceptor<T> | null>

  constructor() {
    this.interceptors = []
  }

  use(resloved: ReslovedFn<T>, rejected?: RejectedFn): number{
    this.interceptors.push({
      resloved,
      rejected
    })
    return this.interceptors.length - 1
  }

  forEach(fn:(Interceptor:Interceptor<T>) => void):void {
    this.interceptors.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  };

  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}