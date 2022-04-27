import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Beranda from '../views/Beranda.vue'

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import(/* webpackChunkName: "about" */ '../views/Data.vue')
  },
  {
    path: '/publikasi',
    name: 'Publikasi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Publikasi.vue')
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tabel-daftar',
    name: 'Daftar Tabel',
    component: () => import(/* webpackChunkName: "about" */ '../views/DaftarTabel.vue')
  },
  {
    path: '/tabel-metadata',
    name: 'Metadata Tabel',
    component: () => import(/* webpackChunkName: "about" */ '../views/MetadataTabel.vue')
  },
  {
    path: '/tabel-tambah',
    name: 'Tambah Tabel',
    component: () => import(/* webpackChunkName: "about" */ '../views/TambahTabel.vue')
  },
  {
    path: '/survei-tambah',
    name: 'Tambah Survei',
    component: () => import(/* webpackChunkName: "about" */ '../views/TambahSurvei.vue')
  },
  {
    path: '/survei-daftar',
    name: 'Daftar Survei',
    component: () => import(/* webpackChunkName: "about" */ '../views/DaftarSurvei.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
