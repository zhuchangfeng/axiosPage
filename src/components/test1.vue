<template>
  <div class="test1">
    <span @click="getData()">这是test1</span>
  </div>
</template>

<script>
import VueEvent from "./VueEvent.js";
export default {
  data() {
    return {
      value: "55222"
    };
  },
  methods: {
    getData() {
      VueEvent.$emit("postData", this.value);
    }
  }
};
</script>

<style scoped>
</style>