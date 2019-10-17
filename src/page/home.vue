<template>
  <div class="home">
      <!-- <div class="weui-flex f"> -->
          <!-- <div @click="select">{{city?city:'广州'}}</div>
          <div>搜索</div> -->
      <!-- </div> -->
    <Search :city="city?city:'广州'"></Search>
    <Banner :banners="banners"></Banner>
    <Nav :navs="navs"></Nav>
  </div>
</template>

<script>
import Search from '@/components/search.vue'
import Banner from '@/components/banner.vue'
import Nav from '@/components/nav.vue'
import {GetTemplateComponentInfo} from '@/js/api.js'
//export let,const,function定义的变量，常量，函数，类
export default {
    components:{
        Search,
        Banner,
        Nav
    },
    data(){
        return {
            msg:'home 路由组件',
            city:'',
            value:'',
            banners:[],
            navs:[]
        }
    },
    mounted(){
        this.city = sessionStorage.getItem('city')||''
         this.getInfo()
    },
    methods:{
        select(){
            this.$router.push('list')
            this.title = '选择收货城市'
        },
        async getInfo(){
            let params = {
                operationType: 0,
                previewTime: ""
            }
            let res = await GetTemplateComponentInfo(params)
            let data = res.Data.templateComponentList
            this.banners = data[0].carouselPictures
            this.navs = data[0].navComponentList
            console.log(data)
        }
    }
}
</script>

<style scoped>
    .home{
        padding-top:.8rem;
    }
</style>