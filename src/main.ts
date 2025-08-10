import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' 
import './components/styles/style.css'
import App from './App.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('./views/Home.vue')
  },
  { 
    path: '/certificates', 
    name: 'Certificates', 
    component: () => import('../pages/Certificates.vue') 
  },
  { 
    path: '/blog', 
    name: 'Blog', 
    component: () => import('../pages/Blog.vue')
  }
]

const router = createRouter({   
  history: createWebHistory(),   
  routes 
})  

const app = createApp(App) 
app.use(router) 
app.mount('#app')