<template>
  <div style="min-height: 80vh;" class="pt-20 text-center">
    <div class="card text-gray-900">
      <h1 class="font-bold">Page not found</h1>
      <h2 class="font-semibold">
        This page could not be found - Check out our
        <router-link to="/home" class="text-emerald-400">Homepage</router-link>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
