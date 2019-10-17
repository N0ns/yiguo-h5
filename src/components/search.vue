<template>
  <div class="container weui-flex f flex-sb">
        <div @click="select">
            收货地：{{city}}
        </div>
        <div class="search weui-flex">
            <img class="btn" src="https://img07.yiguoimg.com/d/web/190515/00191/152133/home-search.png" alt="" >
            <span>点击搜索商品</span>
        </div>
  </div>
</template>

<script>
export default {
    props:['city'],
    methods:{
        select(){
            this.$router.push('list')
            this.title = '选择收货城市'
        }
    }
}
</script>

<style scoped lang="less">
    @mainColor:#01b27a;
    .container{
        height:.8rem;
        width:100%;
        line-height:.6rem;
        padding:.1rem;
        box-sizing: border-box;
        background-color: @mainColor;
        color:#fff;
        position: fixed;
        top:0;
        left:0;
        .search {
            width:5rem;
            background-color: #fff;
            border-radius: .4rem;
            color:#999;
            .btn{
                width:.6rem;
                height:.6rem;
                padding:.1rem;
                box-sizing: border-box;
            }
        }
    }
    
</style>