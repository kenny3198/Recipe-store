import { createStore } from 'vuex'
import axiosClient from "@/axiosClient"  
export default createStore({
  state: {
   searchedMeal : [],
   mealsByLetters: [],
   mealsByIngredients: []
  
  },
  getters: {
  },
  mutations: {
    setSearchMeal(state, meals) {
    state.searchedMeal = meals
    },
    setMealsByLetter(state,meals) {
      state.mealsByLetters = meals
    },
    setMealsByIngredients(state,meals) {
      state.mealsByIngredients = meals
    }
  },
  actions: {
     searchMeal({commit}, keyword) {
      axiosClient.get(`search.php?s=${keyword}`)
      .then(({data}) => {
        debugger;
        commit("setSearchMeal", data.meals)
      })
      
     },
     mealsByLetter({commit}, letters) {
      axiosClient.get(`search.php?f=${letters}`)
      .then(({data}) => {
        debugger;
        commit("setMealsByLetter", data.meals)
      })
     },
     mealsByIngredients({commit}, ingredients) {
      axiosClient.get(`filter.php?i=${ingredients}`)
      .then(({data}) => {
        debugger;
        commit("setMealsByIngredients", data.meals)
      })
     }
   
  },
  modules: {
  }
})








// <template>
//   <div class="home flex flex-col p-8 " >
//      <input class="rounded border-2 border-gray-200 w-full" type="text"
//      placeholder="Search for Meals">

//      <div class="gap-1 flex justify-center mt-2">
//     <router-link :to="{ name: 'byLetter', params: {letters} }" :key="letter" v-for="letter in letters">
//        {{ letter }}
//     </router-link> 
//      </div>
//     <pre> {{ ingredient }}</pre>
//   </div>
// </template>

// <script setup>
// // @ is an alias to /src
//   import { onMounted, ref } from "vue"
//   // import store from "../store"
//   import axiosClient from "../axiosClient.js"


//   // const meals = computed(() => store.state.meals) 
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
//   const ingredient = ref([])
//   onMounted( async () => {
//   const response = await axiosClient.get("/list.php?i=list")
//   console.log(response.data)
//   ingredient.value = response.data
//   })

// </script>