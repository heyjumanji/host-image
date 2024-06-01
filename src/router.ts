import {createRouter, createWebHistory} from "vue-router"
import Home from "./pages/Home.vue"
import Block from "./pages/Block.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', name: 'Home', component: Home, meta: {
                title: 'front page'
            }
        },
        {
            path: '/block', name: 'Block', component: Block, meta: {
                title: 'Forbidden pictures'
            }
        },
        {path: '/:pathMatch(.*)*', redirect: '/'},
    ],
})

router.beforeEach((to, from, next) => {
        const {  meta } = to
        if(meta && meta.title){
            document.title = `${meta.title} | image-host`
        }
        next()
})

