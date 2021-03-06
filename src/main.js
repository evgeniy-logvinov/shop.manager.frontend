import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'

import * as components from './components'

import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.use(components)

// if (global.document) {
// 	Vue.component('test', require('test'))
// } else {
// 	Vue.component('test', {
// 			template: '<div><slot></slot></div>',
// 	})
// }

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './styles/_global.scss'

// import titleMixin from './util/title'
// import * as filters from './util/filters'

// mixin for handling title
// Vue.mixin(titleMixin)

// register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp({ mode, context }) {
	// create store and router instances
	const store = createStore(mode, context)
	const router = createRouter(context.publicConfig)

	// sync the router with the vuex store.
	// this registers `store.state.route`
	sync(store, router)

	// create the app instance.
	// here we inject the router, store and ssr context to all child components,
	// making them available everywhere as `this.$router` and `this.$store`.
	const app = new Vue({
		router,
		store,
		render: h => h(App)
	})

	// expose the app, the router and the store.
	// note we are not mounting the app here, since bootstrapping will be
	// different depending on whether we are in a browser or on the server.
	return { app, router, store }
}
