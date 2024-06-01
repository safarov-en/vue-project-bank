const TOKEN_KEY = 'jwt-token'
export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    actions: {
        async login({commit}, payload) {
            commit('setToken')
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(state) {
            return !!state.token
        }
    }
}