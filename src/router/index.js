import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Project from '@/views/Project'
import Achievements from '@/views/Achievements'
import Members from '@/views/Members'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: Achievements,
  },
  {
    path: '/members',
    name: 'Members',
    component: Members,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
