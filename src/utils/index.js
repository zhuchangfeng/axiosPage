import { isObject } from './is';
const typer = Object.prototype.toString;
/**
 * @description 获取值的类型
 */

export const getType = (value) => {
  let typeStr = typer.call(value);
  typeStr = typeStr.replace(/.*\s(\w+)\]/g, '$1');
  return typeStr.toLowerCase();
};
/**
 * @description 数组去重
 */
export const uniq = (arr) => {
  let result = [];
  if (getType(arr) === 'array') {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      if (!obj[elem]) {
        result.push(elem);
        obj[elem] = 1;
      }
    }
  }
  return result;
};
/**
 * @description 对象深层合并
 */
export function deepMerge(src = {}, target = {}) {
  for (let key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : target[key];
  }
  return src;
}
/**
 * @description 转化为number
 */
export const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

export const cloneLoop = (x) => {
  const root = {};
  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x,
    },
  ];

  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {};
    }

    for (let k in data) {
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }

  return root;
};
/**
 * @description url参数拼接
 */
export const setObjToUrlParams = (baseUrl, obj) => {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
};
/**
 * @description 防抖
 */
export const debounce = (fuc, wait) => {
  var timeout, result;
  var debounce = function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    var self = this;
    var args = arguments;
    timeout = setTimeout(function () {
      result = fuc.apply(self, args);
    }, wait);
    return result;
  };
  debounce.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounce;
};
/**
 * @description 节流 options leading 代表首次是否执行，trailing 代表结束后是否再执行一次
 */
export const throttle = (func, wait, options) => {
  var timeout, context, args;
  var previous = 0;
  if (!options) options = {};
  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };
  var throttled = function () {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
};
