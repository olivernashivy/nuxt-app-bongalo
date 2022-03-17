export default {
    state: {
        email: null,    
        user: null,
    },
    actions: {
        async patch_user({ commit }, payload) {
            try {
                const res = await this.$axios.patch(`/acount/user/me/`, payload)
                await this.$auth.setUser(res.data)
                return res.data
            } catch (e) {
                console.error(e)
            }
        },
        async get_user({ commit }) {
            try {
                const res = await this.$axios.get(`/account/user/me/`)
                this.$auth.setUser(res.data)
                commit('set_user', res.data)
                return res.data
            } catch (e) {
                console.error(e)
            }
        },

    },
    mutations: {

        set_user(state, payload) {
            state.user = payload
        },
        
    }
}
