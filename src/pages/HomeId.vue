<template>
  <div>
    <h1>KAPPA</h1>
    <h1>Params: {{ this.$route.params.homeId }}</h1>
    <h1>{{ Home }}</h1>
  </div>
</template>

<script>
import Homes from '../../public/homes.json'
export default {
  data() {
    return {
      Home: {}
    }
  },
  created() {
    const Home = Homes.find((Home) => Home.objectID == this.$route.params.homeId) 
    this.Home = Home
  },
}
</script>

<style></style>
