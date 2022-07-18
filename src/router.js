import {createRouter, createWebHistory} from "vue-router"
const router =  createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            meta:{
                title: "ホーム"  
            },
            component: () => import('./views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            props: true,
            meta:{
                title: "私について"  
            },
            component: () => import('./views/About.vue')
        },
        {
            path: '/project',
            name: 'project',
            props: true,
            meta:{
                title: "プロジェクト一覧"  
            },
            component: () => import('./views/Project.vue')
        },
        {
            path: `/:catchAll(.*)`,
            name: 'notFound',
            meta:{
                title: "ページが見つからないよん"  
            },
            component: () => import('./views/NotFound.vue')
        }
    ]
})
router.afterEach((to, from) => {
    document.title = `${to.meta.title} | terusibata` || "URL共有できちまう"
})
export default router