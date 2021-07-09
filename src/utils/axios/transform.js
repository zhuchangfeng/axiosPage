import { isString } from '../is';
// 请求之前数据处理
export const transformBeforeRequest = (config, options) => {
  const { urlPrefix } = options;
  const params = config.params || {};
  const data = config.data || {};
  if (urlPrefix && isString(urlPrefix)) {
    config.url = `${urlPrefix}${config.url}`;
  }
  if (config.method?.toUpperCase() === 'GET') {
    if (!isString(params)) {
      config.params = Object.assign(params, { t: +new Date() });
    } else {
      config.url = config.url + params + `?t=${+new Date()}`;
    }
  } else {
    if (!isString(params)) {
      config.data = Object.assign(data, params);
    } else {
      config.url = config.url + params;
      config.params = null;
    }
  }
  return config;
};

export const transformRequest = (res, options) => {
  const { responseData } = options;
  if (responseData === 'transform') return res.data;
  return res;
};
