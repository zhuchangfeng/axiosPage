<template>
  <div id="app">
    <img src="./assets/logo.png" v-if="Boolean(isShow)">
    {{ test }}
    <router-view/>
    <input type="text" v-model="testValue" ref="inputDome">
    <button @click="changTestValue()">提交</button>
    <nav class="nav">
      <div class="nav_containt">
        <div class="nav_containt_heard">
          <div class="nav_containt_heard_logo">
            <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="logo">
          </div>
          <ul class="nav_containt_heard_ul">
            <li v-for="(item,index) in navItem" :key="index" class="nav_containt_heard_li">
              <router-link :to="item.path">{{ item.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="nav_containt_fuction">
          <div class="fuction_input">
            <input type="text" name="search_value" id="search">
            <img
              src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg"
              alt="搜索"
            >
          </div>
          <div class="fuction_write">
            <img
              src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg"
              alt="write_icon"
            >
            <router-link class="write" to="/">写文章</router-link>
          </div>
          <div class="fuction_auth">
            <router-link class="login" to="/">登录</router-link>
            <router-link class="register" to="/">注册</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"; //先要引入
export default {
  name: "App",
  data() {
    return {
      testValue: "",
      navItem: [
        {
          name: "首页",
          path: "/a"
        },
        {
          name: "动态",
          path: "/b"
        },
        {
          name: "话题",
          path: "/"
        },
        {
          name: "小册",
          path: "/"
        },
        {
          name: "活动",
          path: "/"
        }
      ]
    };
  },
  computed: {
    // ...mapState({
    //   isShow: state => state.imageStatus.imageState
    // }),
    ...mapGetters("imageStatus", {
      isShow: "getImageState",
      test: "getTest"
    })
  },
  methods: {
    ...mapMutations("imageStatus", ["SHOW_IMAGE", "HIDE_IMAGE", "CHANG_TEST"]),
    ...mapActions("imageStatus", ["show", "hide"]),
    changTestValue() {
      this.CHANG_TEST(this.testValue);
      this.testValue = "";
      this.$nextTick(() => {
        this.$refs.inputDome.focus();
      });
    }
  },
  watch: {
    $route() {
      if (this.$route.path == "/") {
        this.SHOW_IMAGE();
      } else if (this.$route.path == "/a") {
        this.HIDE_IMAGE();
      }
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f1f1f1;
  .nav {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    top: 0;
    .nav_containt {
      max-width: 960px;
      margin: auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .nav_containt_heard {
        display: flex;
        align-items: center;
        .nav_containt_heard_logo {
          min-width: 98px;
          margin-right: 20px;
          img {
            width: auto;
            height: auto;
            border: 0;
            display: block;
          }
        }
        .nav_containt_heard_ul {
          flex: 1;
          display: flex;
          align-items: center;
          height: 100%;
          a {
            color: #000;
            &:hover {
              text-decoration: none;
              color: rgb(41, 122, 230);
            }
            &.active {
              color: rgb(41, 122, 230);
            }
          }
          .nav_containt_heard_li {
            padding: 0 16px;
          }
        }
      }
      .nav_containt_fuction {
        display: flex;
        align-items: center;
        a{
          color: rgb(41, 122, 230);
          &:hover{text-decoration: none;}

        }
        .fuction_input {
          border: 1px solid hsla(0, 0%, 59.2%, 0.2);
          background-color: rgba(227, 231, 236, 0.2);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 2px;
          margin-right: 12px;
          input {
            border: none;
            width: 80px;
            padding: 8px 10px;
            box-shadow: none;
            outline: none;
            font-size: 12px;
            color: #666;
            background-color: transparent;
          }
        }
        .fuction_write {
          display: flex;
          align-items: center;
          margin-left: 12px;
          position: relative;
          margin-right: 12px;
          &::after {
            content: "|";
            position: absolute;
            top: 3px;
            left: 100%;
            color: hsla(0, 0%, 59.2%, 0.4);
            margin-left: 10px;
          }
        }
        .fuction_auth {
          margin-left: 10px;
          .login {
            &::after {
              content: "·";
              margin: 0px 4px;
            }
          }
        }
      }
    }
  }
}
</style>

