<template>
  <div class="list">
      <mt-index-list>
        <mt-index-section  v-for="(el,index) in cities" :key="index" :index="el.FirstLetter">
          <mt-cell @click.native="select(e)" v-for="(e,i) in el.CityList" :key="i" :title="e.AreaName"></mt-cell>
        </mt-index-section>
      </mt-index-list>
      <!-- <Popup @getVisible="getVisible" :popupVisible.sync="popupVisible"><div v-for="(item,idx) in districtList" :key="idx" class="pop">{{item.AreaName}}</div></Popup> -->
  </div>
</template>

<script>

import {GetCityList,GetDistrictList} from '@/js/api.js'
import Popup from '@/components/popup.vue'
export default {
  components:{
    Popup
  },
  data(){
    return {
      cities:[],
      districtList:[],  
      popupVisible:false
    }
  },
  async mounted(){
    // let data = GetCityList().then(res=>{
    //   console.log(res)
    // })
    this.getData()
    
  },
  methods:{
    async getData(){
      let res = await GetCityList()
      this.cities = res.Data.CityList
    },
    select(e){
      sessionStorage.setItem('city',e.AreaName)
      this.$router.push('/')

    },
  }
}
</script>

<style scoped>
  .pop{
    width:100%;
    background-color: #fff;
    height:50%;
  }
  .list >>> .mint-indexsection-index {
    font-size:.4rem;
    padding:5px;
    box-sizing: border-box;
    line-height: .8rem;
    height: .8rem;
  }
</style>
