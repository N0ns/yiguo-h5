// 在浏览器端运行的文件
// 项目入口文件
// 利用es6的模块化引入其他模块
// * import
// * export

// 引入Vue框架
import Vue from 'vue';
import router from '@/router'
// 引入模板文件(.vue单文件模板)
import App from './app.vue';

import { IndexList, IndexSection, Cell, Header, Button, Popup ,Search ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Popup.name, Popup);
Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
    el:'#app',
    router,
    // render() > template > 挂载点内容#app
    render:createElement=>{
        return createElement(App);
    }
});