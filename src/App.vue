<template>
  <the-navbar></the-navbar>
  <router-view></router-view>
</template>

<script>
import HomeGrid from './components/HomeGrid.vue'
import TheHome from './pages/TheHome.vue'
import HomeCard from './components/HomeCard.vue'

export default {
  components: TheHome,
  HomeCard,
  HomeGrid,
}
</script>
