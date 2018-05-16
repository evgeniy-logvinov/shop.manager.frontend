import Cookies from 'cookies'
import moment from 'moment'

export default context => ({

    namespaced: true,

    mutations: {
        set: (state, { name, value, options }) => {
            const scope = context.requestScope()
            const cookies = new Cookies(scope.req, scope.res)
            const cache = scope.res.cookiesCache = scope.res.cookiesCache || {}

            cookies.set(name, value, options)
            cache[name] = { name, value, options }
        },

        remove: (state, { name }) => {
            const scope = context.requestScope()
            const cookies = new Cookies(scope.req, scope.res)
            const cache = scope.res.cookiesCache

            cookies.set(name)

            if (cache) {
                delete cache[name]
            }
        },
    },

    getters: {
        cookie: () => (name, options) => {
            const scope = context.requestScope()
            const cookies = new Cookies(scope.req, scope.res)
            const cache = scope.res.cookiesCache

            if (cache) {
                const responseCookie = cache[name]
                if (responseCookie) {
                    if (responseCookie.options && responseCookie.options.expires) {
                        if (!moment().isBefore(moment(responseCookie.options.expires))) {
                            return null
                        }
                    }

                    return responseCookie.value
                }
            }

            return cookies.get(name, options)
        },

        header: () => name => {
            const scope = context.requestScope()
            return scope.req.headers[name]
        },
        clientIP: () => {
            const scope = context.requestScope()
            return scope.req.headers['x-forwarded-for'] || scope.req.connection.remoteAddress
        },
    },

    actions: {
        location: (storeContext, path) => {
            const scope = context.requestScope()
            scope.res.redirect(path)
        },
    },

})
