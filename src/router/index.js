import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home.vue'
import List from '@/page/list.vue'
Vue.use(Router)

export default new Router({
    //配置路由信息
    routes:[{
            path: '/',
            name:'/',
            component: Home,
        },
        {
            path: '/home',
            name:'home',
            component: Home,
        },
        {
            path: '/list',
            name:'cities',
            component: List,
        }
    ]
})