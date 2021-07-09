import { getType } from './index';

export const isObject = (val) => val !== null && getType(val) === 'object';
export const isFunction = (val) => typeof val === 'function';
export const isString = (val) => typeof val === 'string';
export const isSymbol = (val) => typeof val === 'symbol';
export const isArray = Array.isArray;
export const isMap = (val) => getType(val) === 'map';
export const isSet = (val) => getType(val) === 'set';
export const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
export const isDef = (val) => typeof val === 'undefined';
export const isUnDef = (val) => !isDef(val);
export const isNull = (val) => val === null;
export const isNullAndUnDef = (val) => isUnDef(val) && isNull(val);
export const isNullOrUnDef = (val) => isUnDef(val) || isNull(val);
export const isNumber = (val) => typeof val === 'number' && val === val;
