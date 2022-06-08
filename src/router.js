import Vue from 'vue'
import VueRouter from 'vue-router'

import Notas from './components/Notas'
import Respuestas from './components/Respuestas'

Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/Notas' },
        { path: '/Notas', component: Notas },
        { path: '/Respuestas', component: Respuestas },
        { path: '*', redirect: '/' },
    ]
})