
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingleBlog from './views/SingleBlog'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/blog',
      name:"SingleBlog",
      component:SingleBlog
    },
    {
      path: '*',
      redirect:'/'
    },
  ],
  mode:'history'
})
