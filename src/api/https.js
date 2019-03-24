import axios from 'axios'
import Vue from 'vue'
var BaseUrl = ""
if (process.env.NODE_ENV == 'development') {
    //开发用的
    BaseUrl = '';
}
else if (process.env.NODE_ENV == 'debug') {
    // 调试用的
    BaseUrl = '';
}
else if (process.env.NODE_ENV == 'production') {
    // 线上环境
    BaseUrl = 'https://echarts.baidu.com/examples/';
}
axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 40103:
                    router.replace({ path: '/login' });
                    localStorage.removeItem("tokenValue");
                    break;
            }
            return Promise.reject(error.response.data)
        }
    }
);
// 请求超时时间
axios.defaults.timeout = 10000;
function requestFN(o) {
    //o.method //请求类型//基础请求方法
    //o.type //请求类型
    //o.url //请求路径
    // o.params //地址带参数
    // or
    // o.data //请求带参数
    var obj = {
        method: o.type, //请求的类型
        url: BaseUrl + o.url //请求地址
    }
    if (o.hasOwnProperty("params")) {
        obj.params = o.params; //url后面带参数 如 https://echarts.baidu.com/examples/a/a?test="1"
    } else if (o.hasOwnProperty("data")) {
        obj.data = o.data; // data 带参数
    }
    //返回axios的基础方法
    return axios(obj).then(r => {
        return r.data; //方法请求的数据
    })
}
async function getFN(o) {
    //get方法
    var result = await requestFN(o);
    return result;
}
async function postFN(o) {
    //get方法
    var result = await requestFN(o);
    return result;
}
const install = () => {
    Vue.prototype.getFN = getFN;
    Vue.prototype.postFN = postFN;
}
export default install;
