<template>
  <div class="test2">
    <span>这是test2</span>
  </div>
</template>

<script>
import VueEvent from "./VueEvent.js";
export default {
  created: function() {
    this.getData();
  },
  methods: {
    getData() {
      VueEvent.$on("postData", value => {
        console.log(value);
      });
    }
  }
};
</script>

<style scoped>
</style>