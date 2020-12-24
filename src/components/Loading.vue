<!--  -->
<template>
<div class="Loading">
    <img src="@/assets/imgs/timg.gif" alt="">
    <div>玩命加载中...</div>
</div>
</template>

<script>

</script>
<style lang="less">
.Loading{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    background: rgba(0, 0, 0, .5);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        background: black;
    }
    div{
        color: #fff;
    }
}

</style>