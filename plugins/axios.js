/* eslint-disable no-console */

export default ({ app: { $axios, router }, res, req, store, redirect }) => {
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('X-Requested-With', 'XMLHttpRequest')
  $axios.setHeader('Allow-Control-Allow-Origin', '*')

  $axios.interceptors.request.use(function (request) {
    if (store.getters.token) {
      request.headers.common.Authorization = 'Bearer ' + store.getters.token
    }
    return request
  })

  $axios.interceptors.response.use(
    function (response) {
      if (response.headers && 'authorization' in response.headers) {
        let token = response.headers.authorization
        if (token) {
          if (token.includes('Bearer')) {
            token = response.headers.authorization.split('Bearer ')
            token = token[1]
          }
          store.commit('UPDATE_AUTH_TOKEN', token)
        }
      }
      return response
    },
    function (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.log(error.response.config.url)
          store.commit('LOGOUT')
          router.push(`/login`)
        } else if (error.response.data.Errors !== undefined) {
          const errors = error.response.data.Errors
          alert(errors)
        } else {
          alert(error)
        }
      }
      if (error.headers && 'authorization' in error.headers) {
        let token = error.headers.authorization
        if (token) {
          if (token.includes('Bearer')) {
            token = error.headers.authorization.split('Bearer ')
            token = token[1]
          }
          store.commit('UPDATE_AUTH_TOKEN', token)
        }
      }
      return Promise.reject(error)
    }
  )
}
