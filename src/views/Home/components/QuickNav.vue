<!--  -->
<template>
  <div class="QuickNav-nav">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item, index) in QuickNavdatas" :key="index">
        <ul>
          <li v-for="(value, index) in item" :key="index">
            <img :src="value.imgsrc" />
            <span>{{ value.title }}</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
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
      QuickNavdatas: [
        [
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            title: "潮流服饰",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png?imageView2/2/format/webp",
            title: "箱包配饰",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "美容护肤",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/8vjN7XPR9BD1BGqGYDGmJiQvk1UPH4duF4csjuaV.png?imageView2/2/format/webp",
            title: "母婴儿童",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xypYud8p2sTivnyrf3cSmVwLt5ZalTtHraQqGYCl.png?imageView2/2/format/webp",
            title: "手机数码",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xnzngK6mJ1VamCDXKd5GH51C3asWfCnd8btRiZn2.png?imageView2/2/format/webp",
            title: "微社区",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/3QggHJzSCrK1osf8DUYQxCUC3RhxaUySDkc5EMoC.gif?imageView2/2/format/webp",
            title: "拼团",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/JMambFMHt5z76qndHS0I0mjDCEr2u20JM7zDtMlr.gif?imageView2/2/format/webp",
            title: "预售",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/jUsageRXcEmvz0G8QutdBJ9IJgUxFsxgWAgdpHeA.png?imageView2/2/format/webp",
            title: "拍卖",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/KhlceHTjkqz49Bzijf4HWtumIuIf1E45a7l1aOAJ.gif?imageView2/2/format/webp",
            title: "超值礼包",
          },
        ],
        [
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/q9h1Y4UvaW7y5VnH79Cqr2BdtRZt3gEttYdgR1MR.png?imageView2/2/format/webp",
            title: "家具装修",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/oMGz9EagOpfLL3XlSBn6vHPgBZgU0QwKKaLPXDUt.png?imageView2/2/format/webp",
            title: "休闲零食",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/pCf41B18W9euGsTSrIkJs5eK3HhEALVLPdWoAOXk.png?imageView2/2/format/webp",
            title: "水果生疏",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            title: "萌宠",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/UymsBalqZUL3wq4oFBJDFWaXLhgryFGobEu1RhDI.png?imageView2/2/format/webp",
            title: "大家电",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/UQTRBJwNLVDG039wMG5CXynqkcx3oF3HGzoGV5ny.png?imageView2/2/format/webp",
            title: "店铺街",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/UpTTTRthFaAEpTJ1GiZewv4xVFXrd5gB2XeLBaP0.png?imageView2/2/format/webp",
            title: "品牌特卖",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/WqxgnvKS6BfKXB0lx70X6tGqNaDWTqHi9KH406vV.png?imageView2/2/format/webp",
            title: "天天特价",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/sNAwNBmaAczicgHB4N0xwM7kHKs2ZnKHiv4mjZ1l.png?imageView2/2/format/webp",
            title: "限时团购",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/1rJ3qEFi4OPajG698A9QdskNFKYClR4Qa7S4Mw39.png?imageView2/2/format/webp",
            title: "积分商城",
          },
        ],
        [
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "限时秒杀",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "到家o2o",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "拍卖",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "促销活动",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "酒水饮料",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "母婴专区",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "图书文娱",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "中西乐器",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "花卉绿植",
          },
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png?imageView2/2/format/webp",
            title: "香水香氛",
          },
        ],
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.QuickNav-nav {
  height: 20rem;
  position: relative;

  ul {
    height: 18rem;
    display: flex;
    flex-wrap: wrap;
    li {
      height: 9rem;
      width: 20%;
      text-align: center;
      img {
        width: 7rem;
        height: 7rem;
        width: 100%;
      }
    }
  }
  .mint-swipe {
    position: absolute;
    top: -4rem;
    width: 100%;
  }
  .mint-swipe-indicators {
    bottom: 0;
  }
  .mint-swipe-indicator {
    opacity: 1;
    width: 16px;
    border-radius: 10px;
    float: left;
    margin: 0;
    background: rgba(255, 0, 0, 0.5);
  }
  .mint-swipe-indicator.is-active {
    background: red;
  }
}
</style>