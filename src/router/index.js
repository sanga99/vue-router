import Vue from 'vue';
import VueRouter from 'vue-router';
// import Route from '../components/Route.vue';
import Route01 from '../components/Route01.vue';
import Route02 from '../components/Route02.vue';
import Route03 from '../components/Route03.vue';
import RouteParam from '../components/RouteParam.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/main/:id',
            component: RouteParam,
        },
        {
            path: '/',
            redirect: '/r3',
        },
        {
            path: '/r1',
            component: Route01,
        },
        {
            path: '/r2',
            component: Route02,    
        },
        {
            path: '/r3',
            component: Route03,
        },
    ]
});



export default router;