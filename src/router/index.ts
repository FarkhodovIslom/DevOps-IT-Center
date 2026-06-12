import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('@/views/Home.vue')
  },
  { 
    path: '/certificates', 
    name: 'Certificates', 
    component: () => import('@/views/Certificates.vue') 
  },
  { 
    path: '/blog', 
    name: 'Blog', 
    component: () => import('@/views/Blog.vue')
  }
]

const router = createRouter({   
  history: createWebHistory(),   
  routes 
})  

export default router
