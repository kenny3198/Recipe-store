import DefaultLayout from "@/components/DefaultLayout"
import GuestLayout from "@/components/GuestLayout"
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MealByName from "../views/MealByName"
import MealByIngredients from "../views/MealByIngredients"
import MealByLetter from "../views/MealByLetter"
import mealsDetails from "../views/mealsDetails"
import IngredientsPage from  "../views/IngredientsPage"


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealByName
      },
      {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealByLetter
      },
      {
        path: '/ingredients',
        name: 'ingredients',
        component: IngredientsPage
      },
      {
        path: '/by-ingredient/:ingredient?',
        name: 'byIngredients',
        component: MealByIngredients
      },
      {
        path: '/meal/:id?',
        name: 'mealsDetails',
        component: mealsDetails
      },
    ],
  },
  {
    path: '/guest',
    component: GuestLayout
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
