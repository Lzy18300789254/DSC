<!-- 内容区域 -->
<template>
  <div class="category-content">
    <CategoryLeft :categoryLeftDatas="categoryLeftDatas" />
    <CategoryRight :categoryRightDatas="categoryRightDatas "/>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryLeft from "./CategoryLeft";
import CategoryRight from "./CategoryRight";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryLeft,
    CategoryRight,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  mounted() {
    this.$store.dispatch("ChangeCategoryLeft");
    this.$store.dispatch("actChangeCategoryRight", "858");
  },
  //监听属性 类似于data概念
  computed: {
    categoryLeftDatas() {
      return this.$store.state.categoryLeftDatas;
    },
    categoryRightDatas() {
      return this.$store.state.categoryRightDatas;
    },
  },
 
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
};
</script>
<style lang="less">
.category-content {
  margin: 4.4rem 0 4.9rem 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: calc(100% - 9.3rem);
  display: flex;
  overflow: hidden;
}
</style>