import { createRouter, createWebHistory } from 'vue-router'
import DriversPage from './pages/DriversPage.vue'
import PrintersPage from './pages/PrintersPage.vue'
import MFDPage from './pages/MFDPage.vue'
import MainPage from './pages/MainPage.vue'

const routes = [
  { path: '/drivers', component: DriversPage },
  { path: '/printers', component: PrintersPage },
  { path: '/mfp', component: MFDPage },
  { path: '/', component: MainPage },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: MainPage },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router