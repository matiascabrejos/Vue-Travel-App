<template>
  <div
    class="
        p-10
        grid grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        gap-5
      "
  >
    <div
      v-for="home in Homes"
      :key="home.id"
      class="
          border-2 border-white
          px-4
          py-6
          rounded-lg
          transform
          transition
          duration-500
          hover:scale-110
          text-center
          mb-6
         
          
        "
    >
    <router-link :to="`/homeprof/${home.objectID}`">
      <img
        :src="home.images"
        alt=""
        class="rounded-lg inset-0 h-full md:h-3/4 sm:h-3/4 w-full object-cover"
      />
      </router-link>
      <div class="flex pt-2 justify-center">
        <img src="../../public/marker.svg" class="img-icon" />
        <h2 class="pl-1">
          {{ home.location.city }}, {{ home.location.state }}
        </h2>
      </div>
      <h2
        class="text title-font font-medium text-base text-gray-900 xl:text-sm"
      >
        {{ home.title }}
      </h2>
      <h2>
        {{ home.guests }} guests · {{ home.bedrooms }} bedrooms ·
        {{ home.beds }} beds · {{ home.bathrooms }} bathrooms
      </h2>
      <h2>${{ home.pricePerNight }}/night</h2>
      <div class="mx-auto"></div>
      <div class="flex justify-center">
        <img src="../../public/star.svg" class="img-icon" />
        <h2 class="pl-1">
          {{ home.reviewValue }}
          ({{ home.reviewCount }} reviews)
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import Homes from '../../public/homes.json'

export default {
  data() {
    return {
      Homes,
    }
  },
}
</script>

<style>
.img-icon {
  width: 20px;
  height: 20px;
}
</style>
