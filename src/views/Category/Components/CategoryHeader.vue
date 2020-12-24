<!-- 头部 -->
<template>
  <div class="category-header">
    <div class="header">
      <a href="javascript:;" class="iconfont icon-jiantou3" onclick="window.history.back()"></a>
      <form>
        <input type="text" placeholder="请输入关键字" v-model="keywords"  @click="gotosearth">
        <i class="iconfont icon-sousuo2"></i>
      </form>
      <a href="JavaScript:;" :class="toggle?'iconfont iconfont icon-leimupinleifenleileibie':'icon-leimupinleifenleileibie2'"
 v-if="showhide" @click="toggle"></a>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props :["showhide", "keywords"],
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      gotosearth(){
          this.$router.push("/search")
      },
      toggle(){
        this.$store.commit("changeToggStyle",!this.$store.state.toggleStyle)
      }
  },
};
</script>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: #fff;
  border-bottom: 1px solid #eee;

  .header {
    display: flex;
    a {
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      display: block; 

    }
    form {
      width: 85%;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        margin-top: 0.7rem;
        border: 1px solid #eee;
        border-radius: 1.5rem;
        text-indent: 1rem;
      }
      i{
          position: absolute;
          top: 0;
          right:1rem;
          height: 4.4rem;
          line-height: 4.4rem;
      }
    }
  }
}
</style>