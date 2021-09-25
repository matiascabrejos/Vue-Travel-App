<template>
  <the-background></the-background>
  <home-grid></home-grid>
  <home-card></home-card>
</template>

<script>
import HomeCard from '../components/HomeCard.vue'
import HomeGrid from '../components/HomeGrid.vue'
import TheBackground from '../components/TheBackground.vue'

export default {
  components: HomeCard,
  HomeGrid,
  TheBackground,
}
</script>

<style scoped>
.img-icon {
  height: 20px;
  width: 20px;
}
</style>
