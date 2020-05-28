import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/", name: "Home", component: Home,
		meta: { requiresAuth: true }
	},
	{ 	path: "*", component: PageNotFound,
		meta: { requiresAuth: false } 
	}

];

const router = new VueRouter({
    mode: "history",
    routes: routes
});

function isAuthenticated(){
	return true;
}

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (isAuthenticated()) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router;
