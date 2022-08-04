export default function ({ store, redirect }) {
  if (store.getters.token) {
    return redirect('/')
  }
}
