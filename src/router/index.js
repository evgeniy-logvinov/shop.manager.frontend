import Vue from 'vue'
import Router from 'vue-router'
import Pages from 'src/pages'

Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
// const ItemView = () => import('../views/ItemView.vue')
// const UserView = () => import('../views/UserView.vue')
export function createRouter() {
	const router =
		new Router({
			routes: [{
				path: "/",
				redirect: { path: "/private/baskets" }
			},

			{
				path: "/login",
				name: "login",
				component: Pages.Login
			},


			{
				path: "/private",
				component: Pages.Login,

				meta: {
					requiresAuth: true
				},

				children: [{
					path: "baskets",
					name: "baskets",
					component: Pages.Baskets,
				},			
				]
			}
			]
		});
	// 	mode: 'history',
	// 	fallback: false,
	// 	scrollBehavior: () => ({
	// 		y: 0
	// 	}),
	// 	routes: [
	// 		{
	// 			path: '/',
	// 			redirect: { path: "/private/baskets" },
	// 			// meta: {
	// 			// 	requiresAuth: true
	// 			// },
	// 		},
	// 		{
	// 			path: '/private',
	// 			redirect: { path: "/private/baskets" },
	// 			// meta: {
	// 			// 	requiresAuth: true
	// 			// },

	// 			children: [
	// 				{
	// 					path: 'baskets',
	// 					name: 'baskets',
	// 					component: Pages.Baskets,
	// 				},
	// 				{
	// 					path: 'sign_up',
	// 					name: 'signup',
	// 					component: Pages.SignUp,
	// 					// meta: {
	// 					// 	requiresAuth: false
	// 					// },
	// 				},
	// 				{
	// 					path: 'login',
	// 					name: 'login',
	// 					component: Pages.Login,
	// 					// meta: {
	// 					// 	requiresAuth: false
	// 					// },
	// 				},
	// 			]
	// 		},
	// 		// { path: '/top/:page(\\d+)?', component: createListView('top') },
	// 		// { path: '/new/:page(\\d+)?', component: createListView('new') },
	// 		// { path: '/show/:page(\\d+)?', component: createListView('show') },
	// 		// { path: '/ask/:page(\\d+)?', component: createListView('ask') },
	// 		// { path: '/job/:page(\\d+)?', component: createListView('job') },
	// 		// { path: '/item/:id(\\d+)', component: ItemView },
	// 		// { path: '/user/:id', component: UserView },
	// 	]
	// })

	// router.beforeEach((to, from, next) => {
	// 	console.log('no', to.matched)
	// 	if (to.matched.some(record => record.meta.requiresAuth)) {
	// 		console.log('yes')
	// 		// this route requires auth, check if logged in
	// 		// if not, redirect to login page.
	// 		if (store.state.security.accessToken == null) {
	// 			next({
	// 				path: "/login",
	// 				query: {
	// 					redirect: to.fullPath
	// 				}
	// 			});
	// 		} else {
	// 			next();
	// 		}
	// 	} else {
	// 		next();
	// 	}
	// });

	return router
}
