import { createRouter, createWebHistory } from 'vue-router';
import AddNewClients from '../components/AddNewClients.vue';
import Home from '../components/Home.vue';
import EditClient from '../components/EditClient.vue';

export let routes = [
  {
    path: '/addClients',
    name: 'AddNewClients',
    component: AddNewClients,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/edit',
    name: 'EditClient',
    component: EditClient,
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
