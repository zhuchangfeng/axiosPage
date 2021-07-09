# axiosPage
这是一个基于axios封装的请求方法
# 文件地址
https://github.com/zhuchangfeng/axiosPage/tree/axios-class-vearson/src/utils/axios
# 代码使用
```
    createAxios()
      .get(
        {
          url: "地址",
        },
        { responseData: "default", headers: { ignoreCancelToken: true } }
      )
      .then((r) => {
        console.log(r);
      });
```
