export default ($axios) => ({
  testSubmitdata(form) {
    return $axios.$post(`/xxxxxxxx/`, form)
  },
})
