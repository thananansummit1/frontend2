import Cookies from 'js-cookie'

export const state = () => {
  return {
    user: null,
    token: null,
  }
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user || null
    Cookies.set('user-test', user)
  },
  UPDATE_AUTH_TOKEN(state, token) {
    state.token = token
    Cookies.set('token-test', token)
  },
  LOGOUT(state) {
    state.user = null
    state.token = null
    Cookies.remove('user-test')
    Cookies.remove('token-test')
  },
}

export const getters = {
  loggedUser(state) {
    return state.user
  },
  token(state) {
    return state.token
  },
}

export const actions = {
  nuxtClientInit(store, context) {
    if (Cookies.get('user-test')) {
      const user = JSON.parse(Cookies.get('user-test'))
      if (user) {
        store.commit('SET_USER', user)
        store.commit('UPDATE_AUTH_TOKEN', Cookies.get('token-test'))
      }
    }
  },
}
