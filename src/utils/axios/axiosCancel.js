import axios from 'axios';
let pendingMap = new Map();
export const getPendingUrl = (config) => [config.method, config.url].join('&');
/**
 * @description
 * 逻辑如下，在Map字典中找到对应的key说明已经重复了，取消请求 调用new axios.CancelToken((cancel)=>cancel())
 */
export class AxiosCanceler {
  // 添加等待状态
  addPending(config) {
    this.removePending(config);
    const CancelToken = axios.CancelToken;
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel);
        }
      });
  }
  // 删除等待状态
  removePending(config) {
    const url = getPendingUrl(config);
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }
  // 清除等待状态
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && typeof cancel === 'function' && cancel();
    });
    pendingMap.clear();
  }
  // 重置等待状态
  reset() {
    pendingMap = new Map();
  }
}
