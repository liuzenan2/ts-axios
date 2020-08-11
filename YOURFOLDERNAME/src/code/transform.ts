import defaults from "../defaults";
import { AxiosTransformer } from "../types";

export default function transform(data: any, headers: any, fns?:any ):any {
  if (!fns) {
    return data
  }
  if (Array.isArray(fns)) {
    fns = [fns]
  }
  console.log(fns)
  fns.forEach(fn => {
    fn.forEach(f => {
      data = f(data,headers)
    });
  });
  return data
}