<!-- 搜索页面 -->
<template>
  <div class="category-header">
    <div class="header">
      <a
        href="javascript:;"
        class="iconfont icon-jiantou3"
        onclick="window.history.back()"
      ></a>
      <form>
        <input type="text" placeholder="请输入关键字" v-model="keywords"  @click="gotosearth" />
        <i class="iconfont icon-sousuo2" @click="searchkeywords"></i>
      </form>
    </div>
    <div class="search-content">
      <div class="search-wrap">
        <div class="search-wrap-title">
          <div class="title">最近搜索</div>
          <div class="iconfont icon-shanchu1" @click="deleKeywords"></div>
        </div>
        <ul class="search-list">
          <li v-if="keywordsDatas.length==0">暂无</li>
           <li v-for="(keywordsData,index) in keywordsDatas" :key="index">{{keywordsData}}</li>
         <!-- <router-link :to="'/searchlist?keywords='+keywordsData">{{keywordsData}}</router-link> -->
        </ul>
      </div>
       <div class="search-wrap">
        <div class="search-wrap-title">
          <div class="title">热门搜索</div>
        </div>
        <ul class="search-list">
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
          <li>手机</li>
        
        </ul>
      </div>
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
    return {
      keywords:"手机"
    };
  },
  //监听属性 类似于data概念
  computed: {
    keywordsDatas(){
      return this.$store.state.searchkeywords
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    deleKeywords(){
    this.$store.commit("deleKeywords")
    },
    gotosearth() {
      this.$router.push("/search");
    },
    searchkeywords(){ 
      this.$store.state.categoryListDatas=[];
      if(this.keywords){
        
        this.$store.commit("searchkeywords",this.keywords)
        
        this.$router.push("/searchlist?keywords="+this.keywords);
        
      }
    }
  },
};
</script>
<style lang="less">
.search-content {
  margin: 0rem 0 5rem 0;
  .search-wrap {
    width: 100%;
    margin: 0 1rem;
    width: calc(100% - 2rem);
    .search-wrap-title {
      height: 4.4rem;
      align-items: center;
      font-size: 1.4rem;
      display: flex;
      justify-content: space-between;
    }
    .search-list {
      display: flex;
      flex-wrap: wrap;
      li{
        width: 20%;
        border: 1px solid #efefef;
        border-radius: 1rem;
        background-color: #efefef;
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        margin: 1% 2.5%;
        box-sizing: border-box;
      }
    }
  }
}
.category-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: #fff;
  border-bottom: 1px solid #eee;

  .header {
    display: flex;
    a {
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      display: block;
    }
    form {
      width: 85%;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        margin-top: 0.7rem;
        border: 1px solid #eee;
        border-radius: 1.5rem;
        text-indent: 1rem;
      }
      i {
        position: absolute;
        top: 0;
        right: 1rem;
        height: 4.4rem;
        line-height: 4.4rem;
      }
    }
  }
}
</style>