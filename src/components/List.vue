<!--  -->
<template>
  <div class="list">
    <ul class="list-wrap">
      <li v-for="(list, index) in listdatas" :key="index">
        <router-link :to="'/Detail/' + list.goods_id">
          <img :src="list.goods_thumb" alt="" />
          <div class="list-title">{{ list.title }}</div>
          <div class="list-price">{{ list.shop_price }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    listdatas: Array,
  },
  //   props:{
  // listdatas:Array
  //   },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.list {
  width: 100%;
  .list-wrap {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      text-align: center;
      img {
        width: 17rem;
        height: 17rem;
      }
      .list-title {
        text-align: left;
        width: 17rem;
        font-size: 1.4rem;
        height: 4rem;
        line-height: 2rem;
        overflow: hidden;
        margin: 0.5rem 0;
        margin-left: 1.5rem;
        width: calc(100% - 3rem);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .list-price {
        color: red;
        font-size: 1.8rem;
        line-height: 3rem;
        &::before {
          content: "￥";
        }
      }
    }
  }
}
</style>