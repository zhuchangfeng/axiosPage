<template>
  <div id="InputFocus">
    <input type="text" v-focus="isFocus" v-model="inputValue">
    {{ inputValue|capitalize(1,2)}}
    <components-a></components-a>
    <components-b></components-b>
  </div>
</template>

<script>
import Test1 from "./test1";
import Test2 from "./test2";
export default {
  data() {
    return {
      isFocus: true,
      inputValue: ""
    };
  },
  directives: {
    focus: {
      inserted: function(el, binding, vnode) {
        if (binding.value == undefined || binding.value) {
          el.focus();
        }
      },
      update: function(el, binding, vnode) {
        if (binding.value == undefined || binding.value) {
          el.focus();
        } else {
          el.blur();
        }
      }
    }
  },

  filters: {
    capitalize: function(el, arr) {
      console.log(el);
      console.log(arr);
      if (!el) return "";
      var value = el.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  components: {
    componentsA: Test1,
    componentsB: Test2
  }
};
</script>

<style scoped>
</style>