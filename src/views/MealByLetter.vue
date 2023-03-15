<template>
      <div class="gap-3 flex justify-center mt-2 gap-2">
    <router-link :to="{ name: 'byLetter', params: {letter} }" :key="letter" v-for="letter in letters">
       {{ letter }}
    </router-link>
     </div>
    <div>
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
 <div class="flex items-center justify-between">
  <youTubeButton :href="meal.strYoutube">Youtube</youTubeButton>
  
 </div>

   </div>
  </div>
 
</div> 
    </div>
</template>

<script setup>
import youTubeButton from "@/components/youTubeButton.vue"
import { computed } from "vue"
import { onMounted, watch } from "vue"
import store from "@/store"
import { useRoute } from "vue-router"
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const route = useRoute();
 const meals = computed(() => store.state.mealsByLetters)
 watch(route, () => {
   store.dispatch("mealsByLetter", route.params.letter)
 })
onMounted(() => {
  store.dispatch("mealsByLetter", route.params.letter)
})
</script>


<style>

</style>