import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import ConfigStore from './modules/ConfigStore.js'
import HeadersServer from './modules/Headers.server'
import HeadersClient from './modules/Headers.client'
import { Config, Cookies } from 'src/store/constants'
import { SmError } from 'src/errors'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

export function createStore(mode, context) {

	if (!context) {
		throw new SmError('Context is undefined')
	}

	const Store = new Vuex.Store({
		strict: process.env.NODE_ENV !== 'production'
	})

	// pause before actions and mutations 
	Store.debouncedDispatch = _.debounce((action, payload) => Store.dispatch(action, payload), 1000)
	Store.debouncedCommit = _.debounce((mutation, payload) => Store.commit(mutation, payload), 1000)

	let cookiesModule

	if (mode === 'server') {
		cookiesModule = new HeadersServer(context)
	} else {
		cookiesModule = new HeadersClient()
	}

	Store.registerModule(Config.MODULE_NAME, new ConfigStore())
	Store.registerModule(Cookies.MODULE_NAME, cookiesModule)

	if (context.publicConfig) {
		Store.commit(Config.SET, context.publicConfig)
	}

	// state: {
	// activeType: null,
	// itemsPerPage: 20,
	// items: {/* [id: number]: Item */},
	// users: {/* [id: string]: User */},
	// lists: {
	//   top: [/* number */],
	//   new: [],
	//   show: [],
	//   ask: [],
	//   job: []
	// }
	// },
	// actions,
	// mutations,
	// getters


	return Store
}
