<template>
  <div
    class="bg-gray-100 mx-auto max-w-2xl shadow-xl mb-24"
  >
    <form>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="company"
            >
              Where*
            </label>
            <input
              class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              id="company"
              type="text"
              placeholder="Anywhere"
            />
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="title"
            >
              Check-In - Checkout*
            </label>
            <input
              class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              id="title"
              type="date"
              placeholder="mm/dd/yyyy - mm/dd/yyyy"
            />
          </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="location"
            >
              Guests*
            </label>
            <div>
              <select
                class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                id="location"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="job-type"
            >
              Bedrooms*
            </label>
            <div>
              <select
                class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                id="job-type"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="department"
            >
              Bathrooms*
            </label>
            <div>
              <select
                class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                id="department"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
