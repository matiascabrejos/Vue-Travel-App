<template>
  <section
    class="py-60 text-center bg-cover bg-center "
    style="background-image: url(https://eleconomista.com.ar/wp-content/uploads/2019/06/airbnb_luxe_announcement.0.jpg)"
  >
    <div class="bottom-24 relative">
      <h1 class="text-5xl font-bold mb-6 bg-clip-text text-gray-900">
        Book Your Next Trip
      </h1>
      <button
        @click="$router.push('checkin')"
        type="button"
        class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-white text-gray-900 hover:bg-gray-900 hover:text-white text-lg font-bold py-2 px-4 mr-1 rounded"
      >
        Check-In
      </button>
    </div>
  </section>
</template>
