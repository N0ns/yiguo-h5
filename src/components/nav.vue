<template>
  <div class="con weui-flex flex-sb">
      <div v-for="(el,idx) in navs" :key="idx" class="one f">
        <i><img :src="el.pictureUrl"></img></i>
        <p>{{el.navName}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['navs']
}
</script>

<style scoped lang="less">
    .con{
        padding:.1rem .3rem;
        .one{
            width:1.2rem;
            text-align: center;
            color:#333;
            img{
                width:1rem;
                height: 1rem;
            }

        }
    }
</style>