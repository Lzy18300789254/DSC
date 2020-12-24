<!--  -->
<template>
  <div class="home-page">
    <div class="home-hello" :class="{homeActive:showSwiper}">
      <Homeheader></Homeheader>
      <div class="navbar">
        <ly-tab
          v-model="selectedId"
          :items="items"
          :options="options"
          @change="changeTab"
        ></ly-tab>
        <div class="category-btn">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </div>
      </div>
    </div>
    <div class="bg" v-if="this.$route.path != '/home/index'"></div>
    <div>
      <router-view></router-view>
    </div>

    <footer1></footer1>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import footer1 from "@/components/Footer";
import Homeheader from "./components/Homeheader";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    footer1,
    Homeheader,
  },
  data() {
    //这里存放数据
    return {
      showSwiper:false,
      selectedId: 0,
      items: [
        {
          label: "首页",
        },
        {
          label: "家用电器",
        },
        {
          label: "男装女装",
        },
        {
          label: "鞋靴箱包",
        },
        {
          label: "手机数码",
        },
        {
          label: "电脑办公",
        },
        {
          label: "家居家纺",
        },
        {
          label: "个人化妆",
        },
      ],
      options: {
        activeColor: "#fff",
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      routerDatas: [
        "/home/index",
        "/home/household",
        "/home/clothing",
        "/home/shoebag",
        "/home/mobilephones",
        "/home/computer",
        "/home/hometextiles",
        "/home/personalmakeup",
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeTab(item, index) {
      console.log(item);
      console.log(index);
      this.$router.push(this.routerDatas[index]);
    },
    scrollpage() {
      if (document.documentElement.scrollTop > 255) {
        this.showSwiper = true;
      } else if (document.documentElement.scrollTop < 255) {
        this.showSwiper = false;
      }
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.routerDatas.forEach((item, index) => {
      if (item == this.$route.path) {
        this.routerDatas == index;
      }
    });
     window.addEventListener("scroll", this.scrollpage, false);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang=less>
.home-page {
  .homeActive{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f00;
    height: 8.8rem;
    width: 100%;
    z-index: 55;
    
  }
  
  .bg {
    height: 8.8rem;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: red;
    z-index: -1;
  }
  .navbar {
    display: flex;
    position: absolute;
    top: 4.4rem;
    background: transparent;
    z-index: 99;
    .ly-tab {
      width: 85%;
      /* height: 4.4rem; */

      .ly-tabbar {
        height: 4.4rem;
        background-color: transparent;
        border-bottom: 0px solid #eee;
        box-shadow: 0 0px 0 0 rgba(0, 0, 0, 0);

        .ly-tab-list {
          a {
            color: #fff;
          }
        }
      }
    }
    .category-btn {
      width: 15%;
      height: 4.4rem;
      text-align: center;
      line-height: 4.4rem;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99;
      i {
        font-size: 2rem;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>