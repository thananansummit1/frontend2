import authRepository from '~/api/auth'
import testapiRepository from '~/api/testapi'
export default (ctx, inject) => {
  inject('apiAuth', authRepository(ctx.$axios))
  inject('apiTestapi', testapiRepository(ctx.$axios))
}
