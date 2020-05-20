import Vue from 'vue';
import VueRouter from 'vue-router';
import Route from '../components/Route.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Route,
        }
    ]
});



export default router;