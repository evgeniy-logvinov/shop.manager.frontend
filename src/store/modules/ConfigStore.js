export default () => ({

    namespaced: true,

    state: {
        public: {},
    },

    mutations: {
        set: (state, config) => {
            state.public = config
        },
    },

})
