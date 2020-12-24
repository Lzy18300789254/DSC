<!--  -->
<template>
  <div class="detail-page">
    <!-- 头部 -->
    <div
      class="detail-header"
      ref="header"
      :style="'background: rgba(255, 255, 255, ' + bgOpacity + ')'"
    >
      <i class="iconfont icon-jiantou3" onclick="window.history.back()"></i>
      <div class="detail-tabs" :style="'opacity:' + bgOpacity">
        <ul>
          <li
            :class="navActive == index ? 'active' : ''"
            v-for="(item, index) in navList"
            :key="index"
            @click="changeNavTabs(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <i class="iconfont icon-fenxiang_2" @click="showShare"></i>
    </div>
    <!-- 轮播图 -->
    <div class="detail-swiper" id="title0">
      <mt-swipe :auto="2000" :show-indicators="true">
        <mt-swipe-item
          v-for="(detailData, index) in detailDatas.gallery_list"
          :key="index"
        >
          <img :src="detailData.img_url" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 详情页价格 -->
    <div class="w detail-price">
      <div class="price">{{ detailDatas.shop_price }}</div>
      <div class="dprice">{{ detailDatas.market_price }}</div>
    </div>
    <!-- 标题 -->
    <div class="w detail-title">
      {{ detailDatas.goods_name }}
    </div>
    <div class="w detail-sale-info">
      <span>累计销量{{ detailDatas.sales_volume }}</span>
      <span>库存{{ detailDatas.goods_number }}</span>
      <span
        >{{ detailInfoDatas.province_name
        }}{{ detailInfoDatas.city_name }}</span
      >
    </div>
    <div class="w yixuan" @click="showMaskfn">
      <span>已选{{ buyNum }}个</span>
      <span class="iconfont icon-jiantou1"></span>
    </div>
    <!-- 点击按钮显示蒙版 -->
    <div class="share-mask" v-show="shareMask" @click="closeShore"></div>
    <div class="share-content" v-show="shareMask">
      <div class="share-item" v-if="!weixinshowHide">
        <div class="iconfont icon-weixin"></div>
        <div class="text">发送给好友</div>
      </div>
      <div class="share-item">
        <div class="iconfont icon-haibaofenxiang"></div>
        <div class="text">发送给好友</div>
      </div>
    </div>
    <!-- 选择地址弹窗 -->
    <div class="address-mask">
      <mt-popup v-model="popupVisible" position="bottom">
        <div class="popBox">
          <div class="header" @click="popupVisible = false">
            <i>确定</i>
          </div>
          <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
        </div>
      </mt-popup>
    </div>
    <div class="w yixuan" @click="showPopUP">
      <span>送至{{ province }}-{{ city }}-{{ country }}</span>
      <span class="iconfont icon-jiantou1"></span>
    </div>

    <!-- tab切换 -->
    <div class="detail-tabs" id="title1">
      <mt-navbar v-model="selected">
        <mt-tab-item id="tab1">商品详情</mt-tab-item>
        <mt-tab-item id="tab2">规格参数</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tab1">
          <div
            class="detail-content"
            v-html="detailDatas.desc_mobile.replace(/\\/g, '')"
          ></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <div class="attr-params">
            <table>
              <tr
                v-for="(attr, index) in detailDatas.attr_parameter"
                :key="index"
              >
                <td>{{ attr.attr_name }}</td>
                <td>{{ attr.attr_value }}</td>
              </tr>
            </table>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <div style="height: 1000px; background: pink" id="title2">
      <h2>商品评价</h2>
    </div>
    <div style="height: 6rem"></div>
    <!-- 已选货物 -->
    <transition name="lzy">
      <div class="detail-mask" :class="showMaskfn1 ? 'trams' : ''">
        <div class="detail-goods-info" :class="showMaskfn1 ? 'trams' : ''">
          <div class="detail-goods-wrap">
            <div class="img">
              <img :src="detailDatas.goods_thumb" alt="" />
            </div>
            <div class="wrap">
              <div class="title">{{ detailDatas.goods_name }}</div>
              <div class="price">价格:{{ detailDatas.shop_price }}</div>
              <div class="goods_number">
                库存:{{ detailDatas.goods_number }}
              </div>
            </div>
            <div class="close" @click="hideMask">
              <i class="iconfont icon-round_delete"></i>
            </div>
          </div>
          <div class="num-wrap">
            <div>数量</div>
            <div class="num">
              <a href="JavaScript:;" @click="minusNum">-</a>
              <input type="text" v-model.number="buyNum" />
              <a href="JavaScript:;" @click="addNum">+</a>
            </div>
          </div>
          <div class="mask-footer">
            <div class="buy">立即购买</div>
            <div class="cart" @click="addCart">加入购物车</div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 详情页底部 -->
    <div class="detail-page-footer">
      <div>
        <i class="iconfont icon-xiaoxi"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="iconfont icon-shoucang1"></i>
        <span>收藏</span>
      </div>
      <div @click="tocart">
        <i class="iconfont icon-gouwuche"></i>
        <em>{{ countCart }}</em>
        <div :class="{ addNum: flag }" v-if="flag">+{{ buyNum }}</div>
        <span>购物车</span>
      </div>
      <div class="toCart" @click="addCart">加入购物车</div>

      <div class="toBuy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { isWeixin } from "@/utils/index";
console.log(isWeixin);
import cityDatas from "@/assets/json/city.json";
import debounce from "lodash.debounce"; //防抖 需要下载 cnpm install lodash.debounce --save
// console.log(debounce);
// console.log(cityDatas);
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      goods_id: 1153,
      buyNum: 1,
      showMaskfn1: false,
      selected: "tab1",
      popupVisible: false,
      visibleItemCount: 5,
      province: "选择省",
      city: "选择市",
      country: "市/区",
      navList: ["商品", "详情", "评论"],
      navActive: 0,
      bgOpacity: 0,
      shareMask: false,
      weixinshowHide: false,
      flag: false,
      flagTimer: null,
      slots: [
        {
          flex: 1,
          values: Object.keys(cityDatas),
          className: "solt1",
          defaultIndex: 0,
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 1,
          values: [],
          className: "solt3",
          defaultIndex: 1,
        },
        {
          divider: true,
          content: "-",
          className: "slot4",
        },
        {
          flex: 1,
          values: [],
          className: "solt5",
          defaultIndex: 2,
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    detailDatas() {
      return this.$store.state.detailDatas;
    },
    detailInfoDatas() {
      return this.$store.state.detailDatasInfo;
    },

    countCart() {
      let count = 0;
      this.$store.state.cartDatas.map((item) => {
        count += item.value;
        
      });
      return count
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 点击减号--
    minusNum() {
      if (this.buyNum > 1) {
        this.buyNum--;
      } else {
        this.buyNum = 1;
      }
    },
    // 点击加号++
    addNum() {
      this.buyNum = this.buyNum + 1;
    },
    closeShore() {
      this.shareMask = false;
    },
    showShare() {
      this.shareMask = true;
      if (isWeixin()) {
        this.weixinshowHide = true;
      }
    },
    scrollPage: debounce(function () {
      // 使用防抖模块
      const headerHeight = this.$refs.header.offsetHeight;
      console.log(headerHeight);
      const titles = [];
      titles.push(document.querySelector("#title0"));
      titles.push(document.querySelector("#title1"));
      titles.push(document.querySelector("#title2"));
      // console.log(titles);
      const { scrollY } = Window; //解构赋值---对象结构
      titles.reduce((total, title, index) => {
        if (
          !document.querySelector("#title0") &&
          !document.querySelector("#title1") &&
          !document.querySelector("#title2")
        ) {
          return;
        }

        if (total) return total;
        if (scrollY + headerHeight < title.offsetTop + title.offsetHeight) {
          console.log(1111);
          this.navActive = index;
          total = true;
        }
        return total;
      }, false);
    }, 500),
    scrollChangeOpacity() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(top);
      var opacity = top / 200;
      // console.log(opacity);
      if (opacity > 1) {
        opacity = 1;
      }
      this.bgOpacity = opacity;
    },
    // 商品tab切换  商品 详情  评论
    changeNavTabs(index) {
      this.$nextTick(() => {
        this.navActive = index;
        let element = document.querySelector("#title" + index);
        let top =
          element.offsetTop - window.scrollY - this.$refs.header.offsetHeight;
        window.scrollBy({ top: top, left: 0, behavior: "smooth" });
      });
    },
    // 送至地址
    onValuesChange(picker, values) {
      // console.log(picker);
      picker.setSlotValues(1, Object.keys(cityDatas[values[0]]));
      picker.setSlotValues(2, cityDatas[values[0]][values[1]]);
      // console.log(cityDatas[values[0]][values[1]]);
      this.province = values[0];
      this.city = values[1];
      this.country = values[2];
    },
    showPopUP() {
      this.popupVisible = true;
    },

    reqDetail() {
      let params = {
        url: "/goods/show",
        params: {
          goods_id: this.goods_id,
        },
        type: "post",
      };
      this.$store.dispatch("actChangeDetail", params);
    },
    showMaskfn() {
      this.showMaskfn1 = true;
      // console.log("showMaskfn");
    },
    hideMask() {
      this.showMaskfn1 = false;
      // console.log("hideMask");
      // if(e.target==this.$refs.cel){

      // }
    },
    addCart() {
      console.log(111);
      this.showMaskfn1 = false;
      this.flag = true;
      this.flagTimer = setTimeout(() => {
        this.flag = false;
      }, 1000);
      // 添加购物车
      let detailDatas = this.$store.state.detailDatas;
      var isCart = this.$store.state.cartDatas.find((item) => {
        if (item.goods_id == detailDatas.goods_id) {
          item.value++;
        }
        return item.goods_id == detailDatas.goods_id;
      });
      console.log(isCart);
      // 如果这个条件取反成立，说明购物车中不存在当前数据

      if (!isCart) {
        var addCartDatas = {
          goods_id: detailDatas.goods_id,
          goods_name: detailDatas.goods_name,
          shop_price: detailDatas.shop_price,
          market_price: detailDatas.market_price,
          goods_thumb: detailDatas.goods_thumb,
          value: 1,
          isSelect: false,
        };
      }
      this.$store.commit("setCartDatas", addCartDatas);
      // 判断是否存在当前数据
      // let arr=[]
      // arr.push(detailDatas)
      // localStorage.setItem("carts",JSON.stringify(arr))
    },
    tocart() {
      this.$router.push("/cart");
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  mounted() {
    let oTop=document.documentElement || document.body
    oTop.scrollTop=0
    // console.log(this.$route.params);
    let gid = this.$route.params.gid;
    this.goods_id = gid;
    this.reqDetail();
    this.$nextTick(() => {
      this.slots[0].defaultIndex = 2;
    });
    document.addEventListener("scroll", this.scrollPage, false);
    window.addEventListener("scroll", this.scrollChangeOpacity, false);
  },
  destroyed() {
    document.removeEventListener("scroll", this.scrollPage, false);
    window.removeEventListener("scroll", this.scrollChangeOpacity, false);
  },
};
</script>
<style lang="less">
.detail-page {
  // 分享样式
  .share-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  .share-content {
    height: 8rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .share-item {
      flex: 1;
      .iconfont {
        font-size: 3rem;
        color: #80d640;
      }
      .text {
        font-size: 1.4rem;
      }
    }
  }
  .address-mask {
    .mint-popup {
      width: 100%;
    }
    .popBox {
      .header {
        text-align: right;
        height: 4.4rem;
        line-height: 4.4rem;
        i {
          width: 6rem;
          height: 4.4rem;
          text-align: center;
          float: right;
          display: block;
          font-style: normal;
          font-size: 1.4rem;
          background: #efefef;
        }
      }
    }
  }
  .detail-tabs {
    .mint-tab-container-item {
      .attr-params {
        table {
          width: 96%;
          margin-left: 2%;
          border-collapse: collapse;
          td {
            border: 1px solid #efefef;
            height: 3rem;
            padding-left: 1rem;
            line-height: 3rem;
            &:first-child {
              width: 20%;
            }
          }
        }
      }
      .detail-content {
        .move-remove {
          display: none;
        }
        img {
          width: 96%;
          margin-left: 2%;
        }
      }
    }
    .mint-navbar {
      .mint-tab-item-label {
        font-size: 1.4rem;
      }
      .is-selected {
        color: #f44;
        border-bottom: 0;
        &::after {
          content: "";
          width: 5rem;
          height: 0.2rem;
          margin: 1rem auto;
          display: block;
          background: #f44;
        }
      }
    }
  }
  .detail-page-footer {
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5.6rem;
    display: flex;
    border-top: 1px solid #efefef;

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      i {
        font-size: 2.2rem;
      }
      em {
        position: absolute;
        min-width: 2rem;
        height: 2rem;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 2rem;
        border-radius: 50%;
        right: 0;
        top: 0;
        font-style: normal;
      }
      .addNum {
        color: #f44;
        font-size: 2rem;
        width: 100%;
        position: absolute;
        z-index: 99;
        font-weight: normal;
        font-family: Arial, Helvetica, sans-serif;
        top: 0rem;
        opacity: 0;
        animation: moveNum 1s linear;
      }
      @keyframes moveNum {
        0% {
          top: 0;
          opacity: 0;
        }
        50% {
          top: -2rem;
          opacity: 1;
        }
        100% {
          top: -2rem;
          opacity: 0;
        }
      }
    }
    .toCart {
      flex: 2;
      background: #f44;
      color: #fff;
    }
    .toBuy {
      flex: 2;
      background: #ff976a;
      color: #fff;
    }
  }
  .lzy-enter-active,
  .lzy-leave-active {
    transition: all 3s linear;
  }
  .lzy-enter,
  .lzy-leave-to {
    transform: translateY(-50%);
  }
  .yixuan {
    height: 4.4rem;
    border-top: 1rem solid #efefef;
    border-bottom: 1rem solid #efefef;
    line-height: 2.2rem;
    display: flex;
    justify-content: space-between;
    span {
      padding: 0 1rem;
      font-size: 1.4rem;
    }
  }
  .showhide {
    display: block !important;
  }
  .trams {
    // transform: translateY(40vh);
    display: block !important;
  }

  .detail-mask {
    display: none;
    position: fixed;
    top: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;

    .detail-goods-info {
      transition: all 0.5s;
      width: 100%;
      height: 30vh;
      background: #fff;
      position: absolute;
      bottom: 0;
      padding: 1rem;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      // width: calc(100% - 2rem);
      .mask-footer {
        height: 5rem;
        display: flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        left: 0;
        div {
          flex: 1;
          line-height: 5rem;
          text-align: center;
          font-size: 1.4rem;
          color: #fff;
        }
        .buy {
          background: #fba534;
        }
        .cart {
          background: #f92028;
        }
      }

      .num-wrap {
        width: 100%;
        height: 4.4rem;
        display: flex;
        margin-top: 2rem;
        justify-content: space-between;

        .num {
          display: flex;
          a {
            display: block;
            width: 3rem;
            height: 3rem;
            background: #efefef;
            text-align: center;
            line-height: 3rem;
            font-size: 1.4rem;
          }
          input {
            height: 3rem;
            width: 6rem;
            border: 1px solid #efefef;
            box-sizing: border-box;
            text-align: center;
          }
        }
      }

      .detail-goods-wrap {
        width: 100%;
        display: flex;
        .img {
          width: 30%;
          position: relative;
          img {
            width: 9.2rem;
            height: 9.2rem;
            position: absolute;
            top: -3rem;
            border-radius: 1rem;
          }
        }
        .wrap {
          width: 60%;
          .title {
            height: 4rem;
            line-height: 2rem;
            overflow: hidden;
            font-size: 1.4rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          .price {
            font-size: 1.8rem;
            color: red;
            line-height: 3rem;
          }
          .goods_number {
            font-size: 1.2rem;
            color: #666;
          }
        }
        .close {
          width: 10%;
          text-align: right;
        }
      }
    }
  }
  .detail-sale-info {
    justify-content: space-between;
    font-size: 1.2rem;
  }
  .detail-title {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
  .w {
    width: 100%;
    margin: 1rem;
    width: calc(100% - 2rem);
    display: flex;
  }
  .detail-price {
    height: 4.4rem;
    line-height: 4.4rem;
    div {
      font-weight: bold;
      &::before {
        content: "￥";
      }
    }
    .price {
      font-size: 2rem;
      color: red;
    }
    .dprice {
      text-decoration: line-through;
      color: #333;
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  }
  .detail-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 4.4rem;
    width: 100%;
    background: red;
    line-height: 4.4rem;
    font-size: 1.4rem;
    z-index: 99;

    i {
      width: 15%;
      display: block;
      text-align: center;
    }
    .detail-tabs {
      width: 70%;
      ul {
        display: flex;
        li {
          flex: 1;
          text-align: center;
        }
        .active {
          color: red;
          border-bottom: 2px solid #ff0000;
          box-sizing: border-box;
          height: 4.2rem;
        }
      }
    }
  }
  .detail-swiper {
    width: 100%;
    height: 37.5rem;
    img {
      width: 100%;
      height: 37.5rem;
    }
  }
}
</style>