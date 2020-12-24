<!--  -->
<template>
  <div>
    <div class="footer-wrap">
      <ul>
       <router-link tag="li" to="/home">
          <div class="nav-img">
            <i class="iconfont icon-1" v-if="!active.includes()!='/home'"></i>
            <i class="iconfont icon-shouye1" v-else></i>
            <p>首页</p>
          </div>
       </router-link>
      <router-link tag="li" to="/Category">
          <div class="nav-img">
            <i class="iconfont icon-leimupinleifenleileibie" v-if="active!='/Category'"></i>
            <i class="iconfont icon-leimupinleifenleileibie2" v-else></i>
            <p>分类</p>
          </div>
       </router-link>
        <router-link tag="li" to="/find">
          <div class="nav-img">
            <i class="iconfont icon-dongtaiweixuanzhong" v-if="active!='/find'"></i>
            <i class="iconfont icon-dongtaixuanzhong" v-else></i>
            <p>发现</p>
          </div>
       </router-link>
       <router-link tag="li" to="/cart">
          <div class="nav-img">
            <i class="iconfont icon-gouwuche" v-if="active!='/cart'"></i>
            <i class="iconfont icon-gouwucheman" v-else></i>
            <p>购物车</p>
          </div>
       </router-link>
        <router-link tag="li" to="/mine">
          <div class="nav-img">
            <i class="iconfont icon-profile" v-if="active!='/mine'"></i>
            <i class="iconfont icon-wodedangxuan" v-else></i>
            <p>我的</p>
          </div>
       </router-link>
      </ul>
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
      active: "/home",
    };
  },
  mounted(){
    this.active=this.$route.path;
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>


<style lang="less">
// lang="less" 指明css规则
.footer-wrap {
  height: 4.9rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-top: 1px solid #efefef;
  ul {
    display: flex;
    height: 4.9rem;
    justify-content: center;
    align-items: center;
    li {
      width: 30%;
      text-align: center;
      i {
        font-size: 2.2rem;
      }
    }
  }
}
.router-link-active{
  color: red;
}
</style>