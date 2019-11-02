// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/hello-vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import  "../static/css/index.css"
import  "../static/css/iconfont.css"
import "../static/css/reset.css"

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */);
Vue.use(VueAxios,axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;


// const Counter = {
//   template: `<div>{{ count }}</div>`,
//   computed: {
//     count () {
//       return this.$store.state.count
//     }
//   }
// }

 new Vue({
  el: '#app',
   store,
    router,
  components: {App},
  template: '<App/>'
 });


// new Vue({
//   el: '#app',
//   vuex,
//   router,
//   components: { App },
//   template: '<App/>'
// })
