import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import TheHome from './pages/TheHome.vue'
import Test from './pages/Test.vue'
import HomeId from './pages/HomeId.vue'
import HomeGrid from './components/HomeGrid.vue'
import TheForm from './components/TheForm.vue'
import MainSection from './components/MainSection.vue'

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
app.component('home-grid', HomeGrid)
app.component('the-form', TheForm)
app.component('main-section', MainSection)

app.use(router)

app.mount('#app')
