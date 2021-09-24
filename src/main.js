import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import TheHome from './pages/TheHome.vue'
import Test from './pages/Test.vue'
import HomeId from './pages/HomeId.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/home', component: Test },
      { path:'/homeprof/:homeId', component: HomeId }
  ],
})

app.component('the-home', TheHome)
app.component('test', Test)
app.component('home-id', HomeId)

app.use(router)

app.mount('#app')
