<!--  -->
<template>
  <div class="cart-page">
    <div class="cart-header">
      <div class="title">购物车</div>
    </div>

    <div class="cart-wrap">
      <div class="cart-list" v-if="cartData.length > 0">
        <ul>
          <li v-for="(cart, index) in cartData" :key="index">
            <div class="select" @click="changSelectStatus(cart, index)">
              <i class="iconfont icon-danxuankuang" v-if="!cart.isSelect"></i>
              <i
                class="iconfont icon-danxuankuangxuanzhong"
                style="color: red"
                v-else
              ></i>
            </div>
            <div class="cart-content">
              <div class="cart-img">
                <img :src="cart.goods_thumb" alt="" />
              </div>
              <div class="cart-text">
                <div class="cart-title">
                  {{ cart.goods_name }}
                </div>
                <div class="cart-text-wrap">
                  <div class="price">{{ cart.shop_price }}</div>
                  <div class="num-wrap">
                    <a href="Javascript:;" @click="jianCart(index)">-</a>
                    <input type="text" v-model="cart.value" />
                    <a href="Javascript:;" @click="addCart(index)">+</a>
                    <i class="iconfont icon-shoucang1"></i>
                    <i
                      class="iconfont icon-shanchu1"
                      @click="deleCart(index)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="nocart" v-else>
        <i class="iconfont icon-gouwuche"></i>
        <div>
          您的购物车还是空空的
          <router-link to="/home/index">去逛逛>>></router-link>
        </div>
      </div>
    </div>
    <div class="cart-footer" v-if="cartData.length>0">
      <div class="selectAll" @click="changeSelectAllStatus">
        <i class="iconfont icon-danxuankuang" v-if="selectAll"></i>
        <i
          class="iconfont icon-danxuankuangxuanzhong"
          style="color: red"
          v-else
        ></i>
        <span>全选</span>
      </div>                             
      <div class="totalPrice">
        <div class="price">合计<span>{{total.toFixed(2)}}</span></div>
        <div class="tips">(不含运费，节省 <span>123</span> )</div>
      </div>
      <div class="goBuy">去结算{{count}}</div>
    </div>
    <footer1></footer1>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import footer1 from "@/components/Footer";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    footer1,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    cartData() {
      return this.$store.state.cartDatas;
    },
    selectAll() {
      return !this.$store.state.selectAll;
    },
    total(){
      let totalPrice =0
      this.$store.state.cartDatas.map((item)=>{
        if(item.isSelect){
          totalPrice+=item.value*item.shop_price
        }
      })
      return totalPrice
    },  
    count(){
      let count =0
      this.$store.state.cartDatas.map((item)=>{
        if(item.isSelect){
          count+=item.value
        }
      })
      return count
    } 
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeNum() {
      this.$store.commit("changeNum");
    },
    // 点击购物车列表数据的选择框
    changSelectStatus(cart, index) {
      console.log(index);
      cart.isSelect = !cart.isSelect;
      this.$store.commit("changeSelectStatus", { cart: cart, index: index });
    },
    // 点击全选按钮
    changeSelectAllStatus() {
      this.$store.commit("changeSelectAllStatus");
    },
    addCart(index) {
      console.log(index);
      this.$store.commit("addCart",index)
    },
    jianCart(index) {
      console.log(index);
      this.$store.commit("jianCart",index)
    },
    deleCart(index) {
      console.log(index);
      this.$store.commit("deleCart",index)
    
    },
  },
};
</script>
<style lang="less">
.cart-page {
  .cart-footer {
    width: 100%;
    height: 4.4rem;
    position: fixed;
    bottom: 5rem;
    left: 0;
    display: flex;
    background: #fff;
    border-top: 1px solid #efefef;
    top: 1px solid #efefef;
    justify-content: center;
    align-items: center;
    .selectAll {
      width: 20%;
      text-align: center;
      font-size: 1.4rem;
    }
    .totalPrice {
      width: 50%;
      text-align: right;
      font-size: 1.4rem;
      margin-right: 1rem;
      width: calc(100% - 1rem);
      .tips {
        font-size: 1.2rem;
        color: #999;
        span {
          &::before {
            content: "￥";
            font-size: 1.2rem;
            color: #f44;
          }
        }
      }
      .price {
        span {
          font-size: 1.8rem;
          color: #f44;
          font-weight: bold;
          &::before {
            content: "￥";
            font-size: 1.4rem;
            color: #f44;
          }
        }
      }
    }
    .goBuy {
      width: 30%;
      font-size: 1.4rem;
      text-align: center;
      line-height: 4.4rem;
      background-color: #f44;
    }
  }
  .cart-header {
    width: 100%;
    height: 4.4rem;
    position: fixed;
    top: 0;
    left: 0;
    line-height: 4.4rem;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid #efefef;
    .title {
      font-size: 1.8rem;
    }
  }
  .cart-wrap {
    margin-top: 4.4rem;
    .cart-list {
      width: 100%;
      ul {
        li {
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #efefef;
          .select {
            width: 10%;
            text-align: center;
          }
          .cart-content {
            width: 90%;
            display: flex;
            align-items: center;
            .cart-img {
              width: 7rem;
              height: 7rem;

              img {
                width: 7rem;
                height: 7rem;
              }
            }
            .cart-text {
              width: 100%;
              width: calc(100% - 9rem);
              margin-right: 1rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .cart-title {
                font-size: 1.4rem;
                height: 4rem;
                line-height: 2rem;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin-bottom: 0.5rem;
              }
              .cart-text-wrap {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .price {
                  color: #f44;
                  font-size: 1.8rem;
                  &::before {
                    content: "￥";
                  }
                }
                .num-wrap {
                  display: flex;
                  .num {
                    display: flex;
                  }
                  input {
                    width: 3rem;
                    height: 2rem;
                    border: 1px solid #efefef;
                    text-align: center;
                  }
                  a {
                    display: black;
                    height: 2rem;
                    width: 2rem;
                    line-height: 2rem;
                    text-align: center;
                    background: #efefef;
                  }
                  i {
                    margin-left: 1rem;
                  }
                }
              }
            }
          }
        }
      }
    }
    .nocart {
      text-align: center;
      color: #666;

      i {
        font-size: 20rem;
        color: #efefef;
      }
      div {
        font-size: 1.4rem;
        margin-top: 3rem;
        a {
          color: #f44;
        }
      }
    }
  }
}
</style>