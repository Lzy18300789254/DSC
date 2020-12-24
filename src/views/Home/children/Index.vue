<!--  -->
<template>
  <div class="index-page">
    <div v-infinite-scroll="loadMore">
      <Loading v-if="isShowLoading"></Loading>
      <div class="index-header" :style="objColor"></div>
      <div class="index-Swiper" >
        <Swiper @changeColor="getColor"></Swiper>
      </div>
      

      <div>
        <QuickNav />
      </div>
      <div>
        <HomeNews />
      </div>

      <div>
        <Timelimit />
      </div>
      <div>
        <Seckill :seckilldatas="seckilldatas" />
      </div>
      <div>
        <div class="tabs">
          <ul>
            <li
              v-for="(items, index) in tabsDatas"
              :key="index"
              @click="changeTab(index, items.url, items.type)"
            >
              <h3>{{ items.title }}</h3>
              <h6 :class="{ active: activeIndex == index }">
                {{ items.tips }}
              </h6>
            </li>
          </ul>
        </div>
        <List :listdatas="listdatas" />
      </div>
    </div>
    <div style="height: 5rem"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "@/components/Swiper";
import QuickNav from "../components/QuickNav";
import HomeNews from "../components/HomeNews";
import Timelimit from "../components/Timelimit";
import Seckill from "../components/Seckill";
import { getHomeList } from "@/api/api";

import List from "@/components/List";
console.log(getHomeList);
import Loading from "@/components/Loading";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    QuickNav,
    HomeNews,
    Timelimit,
    Seckill,
    List,
    Loading,
  },
  data() {
    //这里存放数据
    return {

      activeIndex: 0,
      tabsDatas: [
        {
          id: 1,
          title: "精选",
          tips: "为你推荐",
          type: "is_best",
          url: "/goods/type_list",
        },
        {
          id: 1,
          title: "社区",
          tips: "新奇好物",
          type: "",
          url: "/goods/type_list",
        },
        {
          id: 1,
          title: "新品",
          tips: "潮流上新",
          type: "is_new",
          url: "/goods/type_list",
        },
        {
          id: 1,
          title: "热卖",
          tips: "火热爆款",
          type: "is_hot",
          url: "/goods/type_list",
        },
      ],
      objColor: {
        background: "#ec5151",
      },
      colorArr: [
        {
          background: "red",
        },
        {
          background: "#00958C",
        },
        {
          background: "#1063F1",
        },
      ],
      listdatas: [],
      page: 1,
      size: 10,
      type: "is_best",
      isShowLoading: false,
      url: "/goods/type_list",
      seckilldatas: [],
    };
  },

  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeTab(index, url, type) {
      this.page = 1;
      this.listdatas = [];
      this.activeIndex = index;
      this.getBestDatas(url, this.page, this.size, type);
    },

    async getBestDatas(url, page, size, type) {
      this.isShowLoading = true;
      let result = await getHomeList(url, {
        page: page,
        size: size,
        type: type,
      });
      // console.log(result);
      if (result.data) {
        this.listdatas = this.listdatas.concat(result.data);
        this.isShowLoading = false;
      }
    },
    loadMore() {
      this.getBestDatas(this.url, this.page, this.size, this.type);

      this.page++;
    },

    getColor(index) {
      this.objColor = this.colorArr[index];
    },
  
    // 秒杀
    async getmiaosha() {
      let result = await getHomeList("/visual/visual_seckill", {
        page: "",
        size: "",
        type: "",
      });
      this.seckilldatas = result.data.time_list;
      // console.log(this.seckilldatas);
    },
    // 拼团专区
    // async getMakeup() {
    //   let result = await getHomeList("/visual_team_goods", {
    //     page: "",
    //     size: "",
    //     type: "",
    //   });
    //   console.log(this.result);
    // },
  },

  mounted() {
    this.getBestDatas(this.url, this.page, this.size, this.type);
    // console.log(this.$refs.home);
    this.getmiaosha();
    // this.getMakeup()
    
   
  },
};
</script>
<style lang="less">
.index-page {
  .index-header {
    width: 100%;
   
    background-color: transparent;
    height: 15rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    transition: all 0.5s;
  }
  .index-Swiper {
    position: relative;
    top: -6rem;
  }
  .tabs {
    width: 100%;
    height: 6rem;
    margin-top: 1rem;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
        border-right: 1px solid #efefef;
        &:last-child {
          border-right: 0px solid #efefef;
        }
        h3 {
          font-size: 14px;
          color: 666;
          margin-bottom: 3px;
        }
        h6 {
          font-size: 1.2rem;
          color: 999;
          font-weight: normal;
        }
        .active {
          width: 80%;
          background: red;
          border-radius: 1rem;
          margin-left: 10%;
          color: #fff;
        }
      }
    }
  }
}
</style>