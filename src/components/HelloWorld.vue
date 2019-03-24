<template>
  <div class="hello">
    <div class="hello_text" v-for="(item,index) in shoppingLsit" :key="index">{{ item }}</div>
    <button @click="addShopping">add</button>
    <button @click="OBTAIN_SHOPPING">obtain</button>
    <div class="hello_input">
      <label for="inputValue">
        输入框的值：
        <input type="text" :value="inputValue" id="inputValue" @input="inputChange">
      </label>
      {{ inputValue }}
    </div>
    <div class="test_input">
      <label for="testValue"></label>
      测试v-mode：
      <input type="text" id="testValue" v-model="testValue">
      {{ testValue }}
    </div>
    <div v-for="(item,index) in objectValue " :key="index">{{ index }}: {{item}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"; //先要引入
export default {
  name: "HelloWorld",
  data() {
    return {
      objectValue: {
        name: "5555",
        age: "66666"
      }
    };
  },
  computed: {
    ...mapState({
      shoppingLsit1: state => state.shoppingCart.test
    }),
    ...mapGetters("shoppingCart", {
      shoppingLsit: "getShoppingList",
      inputValue: "getInputValue"
    }),
    testValue: {
      get() {
        return this.$store.getters["shoppingCart/getTestValue"];
      },
      set(value) {
        this.CHANGE_TESTVALUE(value);
      }
    }
  },
  methods: {
    ...mapMutations("shoppingCart", [
      "CHANG_SHOPPING_LIST",
      "OBTAIN_SHOPPING",
      "CHANGE_INPUT",
      "CHANGE_TESTVALUE"
    ]),
    addShopping() {
      const shoppingList = [
        {
          name: "5555",
          price: 6666,
          id: "1"
        },
        {
          name: "66660",
          price: 555,
          id: 2
        }
      ];
      this.CHANG_SHOPPING_LIST(shoppingList);
    },
    inputChange(e) {
      this.CHANGE_INPUT(e.target.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
