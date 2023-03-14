<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
         <router-link :to="{name: 'home'}" class="inline-flex px-2 text-center text-3xl items-center p-8 pb-0 text-orange-500">
          <img src="../assets/home-icons.png" alt="" class="inline-flex mb-3 bg-red">
          <p>Home</p>
         </router-link>
         <div class="flex items-center gap-1">
          <router-link :to="{name: 'byName'}" class="px-2 h-full transition-colors hover:bg-purple-200 inline-flex items-center ">
            Search Meals
          </router-link >
            <router-link :to="{name: 'byLetter'}" class="px-2 h-full transition-colors hover:bg-purple-200 inline-flex items-center">
             Meals by Letters
          </router-link >
            <router-link :to="{name: 'byIngredients'}" class="px-2 h-full transition-colors hover:bg-purple-200 inline-flex items-center">
             Meals byIngredients
          </router-link>
         </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>