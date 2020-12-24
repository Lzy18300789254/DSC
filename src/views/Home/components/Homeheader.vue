<!--  -->
<template>
<div class='home-header'>
    <header>
        <form action="">
            <input type="text" placeholder="请输入查询的商品" @click="gotoshear">
            <i class="iconfont icon-sousuo"></i>
        </form>
        <a href="" class="iconfont icon-xiaoxi"></a>
    </header>
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

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
gotoshear(){
    this.$router.push("/Search")
}
},

}
</script>
<style lang="less">
.home-header{
    width: 100%;
    height: 4.4rem;
   position: absolute;
   top: 0;
   left: 0;
   background-color: transparent;
   z-index: 99;
   header{
       display: flex;
       form{
           width: 90%;
           position: relative;
           input{
               width: 100%;
               height: 3rem;
               margin: 0.7rem  1rem;
               border-radius: 1.5rem;
               text-indent: 1.5rem;
               width: calc(100% - 1rem);     //注意事项:减号两边要有空格
           }
           i{
               position: absolute;
               right: 0;
               top: 0;
               width: 4.4rem;
               height: 4.4rem;
               text-align: center;
               line-height: 4.4rem;
           }
       }
       a{
           display: block;
           width: 10%;
           height: 4.4rem;
           text-align: center;
           line-height: 4.4rem;
           color: #fff;
           font-size: 2rem;
       }
   }
}
</style>