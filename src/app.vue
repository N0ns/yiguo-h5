<template>
    <div class="container">
        
        <Header :title="title" v-if="title!='首页'"></Header>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '@/components/header.vue'
import Axios from 'axios'
import { Indicator, Toast } from 'mint-ui';
//引入sass文件
    // import './scss/page.scss';
    import '@/styles/weui.css'
    export default {
        components:{
            Header
        },
        data(){
            return {
                username:'webpack 都学会了',
                title:'首页',
                city:''
            }
        },
        methods:{
            setAxios(){
                console.log(666)
                Axios.interceptors.request.use((request) => {
                    console.log(666)
                    Indicator.open({
                        text: '加载中...',
                        spinnerType: 'fading-circle'
                    });
                    return request;
                })

                // 添加响应拦截器
                Axios.interceptors.response.use(res => {
                    console.log(res)
                    Indicator.close();
                    let data = res.data,
                        errcode = data.Code;
                    if (errcode && errcode != 0) {
                    data.data = null;
                    data.Message && Toast(data.Message);
                    }
                    return res;
                }, error => {
                    Indicator.close();
                    Toast('您的网络出现问题，请稍后再试');
                    return Promise.reject(error);
                });
            },
            setHtmlFontSize() {
                
                const htmlDom = document.getElementsByTagName('html')[0];
                let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
                console.log(htmlWidth)
                if (htmlWidth >= 750) {
                    htmlWidth = 750;
                }
                if (htmlWidth <= 320) {
                    htmlWidth = 320;
                }
                
                htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
            },
            select(){
                this.$router.push('list')
                this.title = '选择收货城市'
            }
        },
        mounted(){
            this.setAxios()
            this.setHtmlFontSize()
        }
    }
</script>

<style lang="less">
@import './styles/common.css' ;
@import './styles/theme.less';
    h1{
        color:#58bc58;
    }
    .father{
        width: 500px;
        height: 500px;
        background-color: blue;
        .son{
            width: 100px;
            height: 100px;
            background-color: green;
        }
    }
</style>


