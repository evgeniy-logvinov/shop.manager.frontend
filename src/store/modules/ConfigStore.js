export default () => ({

	namespaced: true,

	state: {
		public: {},
	},

	getters: {
		backendUrl: state => {
			return state.public.backend
		},
		title: state => {
			return state.public.title
		}
	},

	mutations: {
		set: (state, config) => {
			state.public = config
		},
	},

})
