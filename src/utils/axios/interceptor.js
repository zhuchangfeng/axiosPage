import { AxiosCanceler } from './axiosCancel';
const axiosCanceler = new AxiosCanceler();
// 请求后返回
export const interceptorsResponse = (res) => {
  res && axiosCanceler.removeAllPending(res.config);
  return res;
};
// 请求后失败
export const interceptorsCatch = (error) => {
  const { response, code, message } = error || {};
  console.log(response);
  const msg = response?.data?.msg ?? response?.statusText;
  const err = error?.toString?.() ?? '';
  console.log(msg, err);
  let errMessage = '';
  try {
    if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
      errMessage = 'timeout';
    }
    if (err?.includes('Network Error')) {
      errMessage = 'Network Error';
    }
    if (errMessage) {
      return Promise.reject(error);
    }
  } catch (error) {
    throw new Error(error);
  }
  return Promise.reject(error);
};

export const interceptorsRequest = (config) => {
  const {
    headers: { ignoreCancelToken },
  } = config;
  console.log(config, 'interceptorsRequest');
  // 检查ignoreCancel是否存在？存在赋值，不存在去配置找
  !ignoreCancelToken && axiosCanceler.addPending(config);
  return config;
};
