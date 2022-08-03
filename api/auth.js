export default ($axios) => ({
  loginEmail(email, password) {
    const body = new FormData()
    body.set('email', email)
    body.set('password', password)
    return $axios.$post(`auth/login_email`, body)
  },
})
