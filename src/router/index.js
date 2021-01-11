import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dog from '../views/Dog.vue'
import store from "@/store"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true
  },
 
  {
    path: '/destination/:slug/',
    name: 'Destination',
    props:true,
    component: () => import(/*webpackChunkName: "Destination" */"../views/Destination.vue"),
    children:[
      {
        path:":exp",
        props:true,
        name:"expDetails",
        component: () => import(/*webpackChunkName: "ExperienceDetails" */"../views/ExperienceDetails.vue"),
      }
    ],
    beforeEnter:(to,from,next) => {
      const exitst = store.destinations.find(
        destination  => destination.slug == to.params.slug
      )
      if(exitst){
        next()
      }else{
        next({name:"notFound"})
      }
    },
     
  },
  {
    path:"/login",
    name:"login",
    

    component:()=> import(/*webpackChunkName: "user"*/"../views/Login.vue")
  },
  {
    path:"/user",
    name:"user",
    component:()=> import(/*wevpackChunkName: "user"*/"../views/User.vue"),
    meta:{requiresAuth:true} 
  },
  {
    path:"/404",
    alias:"*",
    name:"notFound",
    component:()=> import(/*webpackChunkName: "ExperienceDetails" */"../components/NotFound.vue"),
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  scrollBehavior(to,from, savePosition){
    if(savePosition){
      return savePosition
    }else{
      const position = {}
      if(to.hash){
        
        position.selector = to.hash
        if(to.hash == "experience"){
          position.offset = {y:'350'}
        }
        if(document.querySelector(to.hash)){
          return position
        }
        return false
      }
    }
  },

  routes
})

router.beforeEach((to,from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
      if(store.user){
        next()
      }else{
        next({
          name:"login",
          query : {redirect:to.fullPath}
        })
      }
    }else{
      next()
    }
})

export default router
