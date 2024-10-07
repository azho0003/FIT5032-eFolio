import { createRouter, createWebHistory } from 'vue-router'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'

const routes = [
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/getbookcount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherView
  },
  {
    path: '/countbookapi',
    name: 'CountBookAPI',
    component: CountBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router