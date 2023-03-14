 <template>
  <div class="p-8">
   <h1 class="text-4xl text-bold mb-4">Ingredients</h1>
    <input 
    type="text"
 placeholder="Search for Ingredients"
    v-model="keyword" class="bg-white p-6 rounded border-2 border-gray-200 w-full mb-4" 
      
      />

  <router-link :to="{name: 'byIngredients', params: {ingredient: ingredient.idIngredient} }"
   v-for="ingredient of ingredients" :key="ingredient.idIngredient" 
   class="block bg-white rounded p-3 mb-3 shadow">
   <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
   <p>{{ ingredient.strDescription}}</p>
  </router-link>
  </div>
  <div v-if="!ingredients.length" class="flex justify-center text-gray-600">
    <p>There are no meals</p>
  </div>
</template>

<script setup>
import axiosClient from "@/axiosClient"
import { onMounted, ref } from "vue";
const ingredients = ref([])
const keyword = ([])

onMounted(() => {
  axiosClient.get("list.php?i=list")
  .then(({data}) => {
 ingredients.value = data.meals;
  })
})
</script>

<style>

</style>