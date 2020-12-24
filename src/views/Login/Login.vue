<!--  -->
<template>
  <div class="login-wrap">
    <div class="login-content">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>
      <div class="tabs">
        <div
          class="tabs-itme"
          :class="{ active: loginFlag == 0 }"
          @click="changeLoginTabs(0)"
        >
          短信登录
        </div>
        <div
          class="tabs-itme"
          :class="{ active: loginFlag == 1 }"
          @click="changeLoginTabs(1)"
        >
          账号登录
        </div>
      </div>

      <div class="tabs-content">
        <!-- 短信登录 -->
        <div class="tabs-message" v-if="loginFlag == 0">
          <div class="tabs-input">
            <input type="text" placeholder="验证码" />
            <button>1234</button>
          </div>
          <div class="tabs-input">
            <input type="text" placeholder="验证码" />
            <button>获取验证码</button>
          </div>
          <div class="tabs-input">
            <input type="text" placeholder="输入验证码" style="width: 100%" />
          </div>
          <div class="tabs-input">
            <input
              type="button"
              value="立即登录"
              style="width: 100%; background: #f44; color: #fff"
            />
          </div>
        </div>
        <!-- 账号登录 -->
        <div class="tabs-message tabs-login" v-if="loginFlag == 1">
          <div class="tabs-input">
            <input type="text" placeholder="验证码" />
            <button>1234</button>
          </div>
          <div class="tabs-input">
            <input type="text" placeholder="用户名" />
          </div>
          <div class="tabs-input">
            <input type="text" placeholder="输入验证码" style="width: 100%" />
          </div>
          <div class="tabs-input">
            <input
              type="button"
              value="立即登录"
              style="width: 100%; background: #f44; color: #fff"
            />
          </div>
        </div>
      </div>
      <div class="toRegister">
          没有账号,
          <router-link to="/register">去注册>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      logo: require("@/assets/imgs/timg.gif"),
      loginFlag: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeLoginTabs(index) {
      this.loginFlag = index;
    },
  },
  mounted() {
    console.log(this.$route.query.id);
    this.loginFlag = this.$route.query.id;
  },
};
</script>
<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .toRegister {
    text-align: right;
    line-height: 4.4rem;
    color: #666;
    text-decoration: underline;
    a{
        color: red;
    }
  }
  .login-content {
    width: 100%;
    width: calc(100% - 2rem);
    margin: 0 1rem;
    .logo {
      width: 12rem;
      height: 12rem;
      border: 1rem solid #efefef;
      border-radius: 50%;
      margin: 0 auto;

      img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
      }
    }
    .tabs {
      width: 100%;
      height: 4.4rem;
      background: #efefef;
      display: flex;
      justify-content: center;
      align-content: center;
      text-align: center;
      font-size: 1.4rem;
      line-height: 4.4rem;
      margin-top: 2rem;
      .tabs-itme {
        flex: 1;
      }
      .active {
        background-color: #f44;
        color: #fff;
      }
    }
    .tabs-content {
      width: 100%;
      .tabs-message {
        width: 100%;
        .tabs-input {
          height: 4rem;
          margin: 1rem 0;
          input {
            border: 1px solid #efefef;
            height: 4rem;
            box-sizing: border-box;
            text-indent: 1rem;
            width: 75%;
          }
          button {
            height: 4rem;
            width: 25%;
            background: #efefef;
            border: 1px solid #efefef;
            outline: none;
          }
        }
      }
    }
  }
}
</style>