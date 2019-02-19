import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
			path: "/",
			redirect: "/homePage"
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import( './views/Home/Home.vue'),
      children: [
        { 
          path: "/homePage",
          redirect: "/homePage/page1"
        },
        {
          path: '/homePage/page1',
          name: 'page1',
          component:  () => import( './views/Home/page1.vue'),
        },
        {
          path: '/homePage/page2',
          name: 'page2',
          component:  () => import( './views/Home/page2.vue'),
        },
        {
          path: '/homePage/page3',
          name: 'page3',
          component:  () => import( './views/Home/page3.vue'),
        },
        {
          path: '/homePage/page4',
          name: 'page4',
          component:  () => import( './views/Home/page4.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    }
  ],
  linkActiveClass: 'active'
})
