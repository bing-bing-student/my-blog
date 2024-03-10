import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import searchResult from '../views/searchResult.vue'
import blogArchive from '../views/blogArchive.vue'
import Category from '../views/Category.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Gpt from '../views/Gpt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/blogArchive',
      component: blogArchive
    },
    {
      path: '/search-results',
      component: searchResult
    },
    {
      path: '/category/',
      component: Category
    },
    {
      path: '/gpt',
      component: Gpt
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/blog/:id',
      component: Blog,
    },
  ]
})

export default router
