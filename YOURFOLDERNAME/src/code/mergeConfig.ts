import { AxiosRequestConfig } from "../types";
import { deepMerge, isPlainObject } from "../utils/util";

const strats = Object.create(null)


function defaultStart(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1
}

function fromVal2Start(va11: any, val2: any): any {
  if (typeof val2 !== 'undefined') {
    return val2
  }
}

function deepMergeStart(val1: any, val2: any): any {
  if (isPlainObject(val2)) {
    return deepMerge(val1,val2)
  } else if (typeof val2 !== 'undefined') {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else if (typeof val1 !== 'undefined') {
    return val1
  }
}



const startKeysFormVal2 = ['url', 'params', 'data']
startKeysFormVal2.forEach(key => {
  strats[key] = fromVal2Start
}) 

const startKeysDeepMerge = ['headers']
startKeysDeepMerge.forEach(key => {
  strats[key] = deepMergeStart
})
export default function mergeConfig(config1: AxiosRequestConfig,config2:AxiosRequestConfig) {
  if (!config2) {
    config2 = {}
  }

  const config = Object.create(null)
  
  for (let key in config2) {
    mergeField(key)
  }

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strat = strats[key] || defaultStart
    config[key] = strat(config1[key],config2[key])
  }

  return config
}