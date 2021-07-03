import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'

Vue.use(Router)

const routes=[
    {
        path:'/a',
        component:Index
    }
]

const router = new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes
  })

export default router