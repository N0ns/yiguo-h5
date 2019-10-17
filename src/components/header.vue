<template>
  <mt-header :title="title?title:'易果'">
    <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!-- <mt-button @click="handleClose">关闭</mt-button> -->
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>

<script>
export default {
  props:['title']
}
</script>

<style>

</style>