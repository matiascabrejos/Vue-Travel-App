import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import TheHome from './pages/TheHome.vue'
import HomeCard from './components/HomeCard.vue'
import HomeGrid from './components/HomeGrid.vue'
import TheForm from './components/TheForm.vue'
import MainSection from './components/MainSection.vue'
import TheNavbar from './components/TheNavbar.vue'
import TheBackground from './components/TheBackground.vue'
import TheHost from './pages/TheHost'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: TheHome },
      { path: '/home', component: TheHome },
      { path: '/checkin', component: MainSection },
      { path: '/host', component: TheHost}
  ],
  linkActiveClass: 'active'  
})

app.component('the-home', TheHome)
app.component('home-card', HomeCard)
app.component('home-grid', HomeGrid)
app.component('the-form', TheForm)
app.component('main-section', MainSection)
app.component('the-navbar', TheNavbar)
app.component('the-background', TheBackground)
app.component('the-host', TheHost)

app.use(router)

app.mount('#app')
