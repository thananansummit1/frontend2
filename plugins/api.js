import authRepository from '~/api/auth'
export default (ctx, inject) => {
  inject('apiAuth', authRepository(ctx.$axios))
}
