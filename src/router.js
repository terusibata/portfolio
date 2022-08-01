import {createRouter, createWebHistory} from "vue-router"
const router =  createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/portfolio/',
            name: 'home',
            meta:{
                title: "ホーム"  
            },
            component: () => import('./views/Home.vue')
        },
        {
            path: '/portfolio/about',
            name: 'about',
            props: true,
            meta:{
                title: "私について"  
            },
            component: () => import('./views/About.vue')
        },
        {
            path: '/portfolio/projectlist',
            name: 'projectlist',
            props: true,
            meta:{
                title: "プロジェクト一覧"  
            },
            component: () => import('./views/ProjectList.vue')
        },
        {
            path: '/portfolio/project/:id',
            name: 'project',
            props: true,
            meta:{
                title: "プロジェクト"  
            },
            component: () => import('./views/Project.vue')
        },        
        {
            path: '/portfolio/study_meeting/:id',
            name: 'study_meeting',
            props: true,
            meta:{
                title: "勉強会"  
            },
            component: () => import('./views/study_meeting.vue')
        },
        {
            path: '/portfolio/original/:id',
            name: 'original',
            props: true,
            meta:{
                title: "オリジナル作品"  
            },
            component: () => import('./views/original.vue')
        },
        {
            path: `/:catchAll(.*)`,
            name: 'notFound',
            meta:{
                title: "ページがないようです"  
            },
            component: () => import('./views/NotFound.vue')
        }
    ]
})
router.afterEach((to, from) => {
    document.title = `${to.meta.title} | terusibata` || "terusibata's ポートフォリオ"
})
export default router