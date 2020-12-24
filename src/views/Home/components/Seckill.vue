<!-- 秒杀 -->
<template>
  <div class="Seckill">
    <div class="Seckillimg">
      <img :src="Seckillmiao" alt="" />
      <div class="distanceTime">
        <span>{{ message }}</span>
        {{ hours }}-{{ mins }}-{{ sec }}

      </div>
    </div>
    <div class="Seckilldatas">
      <ul>
        <li
          v-for="(item, index) in seckilldatas"
          :key="index"
          :class="{ active: activeIndex == index }"
          @click="changeTab(index)">
      
          <div>{{ item.title }}</div>
          <div>{{ item.status ? "抢购中" : "即将开始" }}</div>
        </li>
      </ul>
    </div>
    <div class="killCommodity">
      <h2>查看更多秒杀商品</h2>
       <i class="iconfont icon-jiantou1"></i>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    seckilldatas: Array,
  },
  //import引入的组件需要注入到对象中才能使用

  components: {},
  data() {
    //这里存放数据
    return {
     
      message: "距结束还剩时间:",
      hours: 0,
      mins: 0,
      sec: 0,
      timer: null,
      Seckillmiao:
        "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp",
         activeIndex: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    miaoshaFn() {
      var newTime = new Date();

      var targetTimer = new Date("Tues Nov 22 2020 16:00:00 GMT+0800");
      console.log(targetTimer);
      this.oTime = (targetTimer - newTime) / 1000;
      this.hours = parseInt((this.oTime % (60 * 60 * 24)) / 3600);

      this.mins = parseInt(((this.oTime % (60 * 60 * 24)) % 3600) / 60);

      this.sec = parseInt(((this.oTime % (60 * 60 * 24)) % 3600) % 60);
      console.log(this.hours);
      
    },
    changeTab(index) {
      this.activeIndex = index;
    },
  },
};
</script>
<style lang="less">
.Seckill {
  width: 98%;
  margin: auto;

  .Seckillimg {
    width: 100%;
    height: 5.5rem;
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    img {
      width: 10rem;
      height: 2.2rem;
    }
    .distanceTime {
      margin-left: 10rem;
    }
  }
  .Seckilldatas {
    ul {
      width: 100%;
      height: 5.8rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      // margin-top: rem;

      li {
        width: 25%;
        text-align: center;
        line-height: 100%;
        color: #999;
        padding: 0 0 1rem 0 ;
        border-bottom: 2px solid #eee;
       
        div {
          &:first-child {
            font-size: 1.8rem;
            margin-bottom: 1rem;
           
          }
          &:last-child {
            font-size: 1.4rem;
             
          }
        }
      }
      .active {
       
          color: red;
           border-bottom: 2px solid red;
        
      }
    }
  }
  .killCommodity {
    display: flex;
    h2 {
      height: 5rem;
      text-align: right;
      line-height: 5rem;
      width: 65%;
    }
    i{
      font-size: 1.8rem;
      line-height: 5rem;
    }
  }
}
</style>