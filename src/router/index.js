import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import AboutUs from '@/page/AboutUs'
    import Work from '@/page/Work'
    import Project from '@/page/Project'
    import Skill from '@/page/Skill'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },{
      path: '/work',
      name: 'Work',
      component: Work
    },{
      path: '/project',
      name: 'Project',
      component: Project
    },{
      path: '/skill',
      name: 'Skill',
      component: Skill
    }
  ]
})
