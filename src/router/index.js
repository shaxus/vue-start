import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '@/components/user'
import Counter from '@/components/Counter'
import playVideo from '@/components/playVideo'
import Test from '@/components/test'
import HeadXMShop from '@/components/HeadXMShop'
import MainXMShop from '@/components/MainXMShop'
Vue.use(Router);


const UserHome = { template: '<div>Home</div>' };
const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

export default new Router({
  routes: [
    {
      path: '/shaxu/:id',
      name: 'HelloWorld',
      component: HelloWorld,

      children: [
        { path: '', component: UserHome },
        { path: 'profile', component: UserProfile },
        { path: 'posts', component: UserPosts },
      ]
    },
    {

      path: '/user/:id',
      name: 'user',
      component: user,
      // props: {name: 'world'},  静态值
      props: true,
      children:[
        // {
        //   path: '/more/fag',
        //   name: 'fag',
        //   component: fag,
        // }
      ]
    },
    {
      path: '/counter/:id',
      name: 'Counter',
      component: Counter,
    },
    {
      path: '/playVideo/:id',
      name: 'playVideo',
      component: playVideo,
    },
    {
      path:'/test/:id',
      name: 'test',
      component: Test
    },
    {
      path:'/HeadXMShop/:id',
      name: 'HeadXMShop',
      component: HeadXMShop
    },
    {
      path:'/MainXMShop/:id',
      name: 'MainXMShop',
      component: MainXMShop
    }
  ],
  mode: 'history',
  // 默认的活动路由类名叫: router-link-active
  // linkActiveClass: 'active',
})
