import cookies from 'js-cookie'

export default () => ({

    namespaced: true,

    mutations: {
        set: (state, { name, value, options }) => {
            cookies.set(name, value, options)
        },

        remove: (state, { name, options }) => {
            cookies.remove(name, options)
        },
    },

    getters: {
        cookie: () => (name, options) => cookies.get(name, options),
    },

    actions: {
        location: (context, path) => document.location.assign(path),
    },

})
