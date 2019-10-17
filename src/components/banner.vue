<template>
  <div class="container">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(it,idx) in banners" :key="idx"><img  :src="it.pictureUrl" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    props:['banners']
}
</script>

<style scoped lang="less">
    .container{
        height: 4rem;
    }
    img{
        width:100%;
        height: 100%;
    }
</style>