export default () => ({

	namespaced: true,

	state: {
		baskets: {},
		selected: '',
	},

	mutations: {
		set: (state, baskets) => {
			state.baskets = baskets
		},
	},

})
