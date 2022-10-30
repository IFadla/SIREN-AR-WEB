import { createRouter, createWebHistory } from 'vue-router'
import KategoriView from '../views/KategoriView.vue'
import MarkerBanjir from '../views/MarkerBanjir.vue'
import MarkerKebakaran from '../views/MarkerKebakaran.vue'
import MarkerHuruHara from '../views/MarkerHuruHara.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'kategori',
      component: KategoriView
    },
    {
      path: '/Download',
      name: 'download',
      // route level code-splitting
      // this generates a separate chunk (Download.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DownloadView.vue')
    },
    {
      path: '/marker-banjir',
      name: 'marker-banjir',
      component: MarkerBanjir
    },
    {
      path: '/marker-kebakaran',
      name: 'marker-kebakaran',
      component: MarkerKebakaran
    },
    {
      path: '/marker-huru-hara',
      name: 'marker-huru-hara',
      component: MarkerHuruHara
    },
  ]
})

export default router
