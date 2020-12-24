<!-- 右面内容 -->
<template>
  <div class="category-right">
    <div v-if="!showLoading">
      <Loding />
    </div>
    <div class="category-right-content" v-else>
      <div class="ad">
        <img :src="this.$store.state.ad" alt="" />
      </div>
      <ul class="category-list">
        <li
          v-for="categoryRightData in categoryRightDatas"
          :key="categoryRightData.cat_id"
        >
          <h3><span>-</span>{{ categoryRightData.cat_name }}<span>-</span></h3>
          <ul class="child">
            <li
              v-for="category in categoryRightData.child"
              :key="category.cat_id"
            >
              <router-link :to="'/Categorylist/'+category.cat_id" >
                <img :src="category.touch_icon" alt="" />
                <h4>{{ category.cat_name }}</h4>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Loding from "@/components/Loading";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Loding,
  },
  props: {
    categoryRightDatas: Array,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念

  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  computed: {
    showLoading() {
      return this.$store.state.showLoading;
    },
  },
};
</script>
<style lang="less">
.category-right {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .category-right-content {
    .ad {
      width: 100%;
      img {
        width: 90%;
        margin-left: 5%;
      }
    }
    .category-list {
      li {
        h3 {
          font-size: 1.4rem;
          height: 4.4rem;
          line-height: 4.4rem;
          color: #666;
          text-align: center;
          font-weight: normal;
          span {
            color: #ccc;
          }
        }
        .child {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          li {
            width: 33%;
            height: 8.2rem;
            border-bottom: 1rem;
            img {
              width: 5.2rem;
              height: 5.2rem;
            }
            h4 {
              font-size: 1.2rem;
              font-weight: normal;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>