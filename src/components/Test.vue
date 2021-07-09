<template>
  <div id="test"></div>
</template>

<script>
var axios = require("axios");
import { createAxios } from '@/utils/axios/index';
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this)
    createAxios()
          .get(
            {
              url: '/recommend/homepage3700?scheme=https&APPOS_VERSION=v3.9.1&page=1'
            },
            { responseData: 'default', headers: { ignoreCancelToken: true } }
          )
          .then((r) => {
            console.log(r);
          });
  }
};
</script>

<style>
#test {
  width: 800px;
  height: 500px;
}
</style>