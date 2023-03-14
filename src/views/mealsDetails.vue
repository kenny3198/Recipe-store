<template>
  <div class=" max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
    <div class="grid grid-cold-1 md:grid-cols-3 text-lg py-2">
    <div>
   <strong class="font-bold"> category</strong>: {{meal.strCategory}}
    </div>
      <div>
     <strong class="font-bold">Area</strong>: {{meal.strArea}}
    </div>
  <div>
     <strong class="font-bold">Tags</strong>: {{meal.strTags}}
    </div>

    </div>
     <div class="my-3">
        {{meal.strInstructions }}
     </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
    <div class="text-2xl font-semibold mb-3">
        <h2>Ingridients</h2>
        <ul>
            <template  :key="el" v-for="(el, index) of new Array(20)">
                <li v-if="meal[`strIngredient${index + 1}`]">
                 {{index + 1}} .  {{ meal[`strIngredient${index + 1}`]}}
                </li>
            </template>
        </ul>
    </div>
    <div class="text-2xl font-semibold mb-2">
        <h2>Measures</h2>
         <ul>
            <template  :key="el" v-for="(el, index) of new Array(20)">
                <li v-if="meal[`strMeasure${index + 1}`]">
                 {{index + 1}} .  {{ meal[`strMeasure${index + 1}`]}}
                </li>
            </template>
        </ul>
 
    </div>
    <div class="mt-4">
<youTubeButton :href="meal.strYoutube">Go to youtube</youTubeButton>
  
    <a :href="meal.strSource" target="_blank" class="px-3 py-2 cursor-pointer text-grey-200
     rounded border-2 border-purple-600 bg-purple-500 hover:bg-purple-600 
     hover:text-white transition-colors"> 
     View original Source
     </a>
    </div>
    </div> 
  </div>

</template>

<script setup>
import youTubeButton from "@/components/youTubeButton"
import axiosClient from "@/axiosClient";
import {onMounted, ref} from "vue"
import { useRoute } from "vue-router"
const meal = ref({})
const route = useRoute();

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
        debugger;
        meal.value = data.meals[0] || {}
    })
})
</script>

<style>

</style>