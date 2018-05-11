import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'

Vue.use(Vuex)

export function createStore(mode, context) {
	const Store = new Vuex.Store({
		strict: process.env.NODE_ENV !== 'production'
	})

	// pause before actions and mutations 
	Store.debouncedDispatch = _.debounce((action, payload) => Store.dispatch(action, payload), 1000)
	Store.debouncedCommit = _.debounce((mutation, payload) => Store.commit(mutation, payload), 1000)




	
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
