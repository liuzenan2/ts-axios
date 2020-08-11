import { head } from 'shelljs'
import { Method } from '../types'
import { deepMerge, isPlainObject } from './util'
//把小写的Content-Type转换成大写
function normalizeHeaderName(headers: any, normalizName: string): void {
  console.log(normalizName)
  if (!headers) {
    return
  }
  Object.keys(headers).forEach((name) => {
    if (name !== normalizName && name.toUpperCase() === normalizName.toUpperCase()) {
      headers[normalizName] = headers[name]
      delete headers[name]
    }
  })
  return headers
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'appliction/json;charset=utf-8'
    }
  }
  
  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach((line) => {
    let [key, val] = line.split(":")
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })

  return parsed
}

//对headers做处理
export function flattenHeaders(headers: any, Method:Method): any {
  if (!headers) {
    return headers
  }
  headers = deepMerge(headers.common,headers[Method],headers)
  const methodsDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'pathc', 'common']
  methodsDelete.forEach(method => {
    delete headers[method]
  })
  return headers
}