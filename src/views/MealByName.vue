<template>
<div class="p-8 pb-4">
    <input v-model="keyword" @change="searchMeal" class="bg-white p-6 rounded border-2 border-gray-200 w-full" type="text"
     placeholder="Search for Meals">
</div>
<div v-if="!meals">
  <p>There are no meals</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
  <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
<router-link :to="{name: 'mealsDetails', params: {id: meal.idMeal} }">
   <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-2xl w-full h-48 object-cover">
  </router-link> 
   <div class="p-3">
    <h3 class="font-bold">{{meal.strMeal}}</h3>
 <p class="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea!</p>
 <div class="flex items-center justify-between">
  <youTubeButton :href="meal.strYoutube">Youtube</youTubeButton>
  
 </div>

   </div>
  </div>
 
</div> 
</template>

<script setup>
// import mealItems from "@/components/mealItems"
import youTubeButton from "@/components/youTubeButton.vue"
import store from "@/store"
import { computed } from "vue"
import {onMounted, ref} from "vue"
import { useRoute } from "vue-router"
const keyword = ref("")
const route = useRoute()
const meals = computed(() => store.state.searchedMeal)
function searchMeal() {
  if(keyword.value) {
store.dispatch("searchMeal", keyword.value)
  }
  else {
    store.commit('setSearchMeal', [])
  }

}
onMounted(() => {
  keyword.value = route.params.name
  if(keyword.value) {
    searchMeal()
  }
})
</script>

<style>

</style>