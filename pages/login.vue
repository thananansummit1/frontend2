<template>
  <div>
    <div class="login-page">
      <b-container>
        <b-row>
          <b-col xs="12" sm="8" md="6" lg="4" class="mx-auto">
            <div class="login">
              <Logo />
              <h1>Sign In</h1>
              <div>
                <b-form-group label="Username:">
                  <b-form-input placeholder="Username"></b-form-input>
                </b-form-group>
                <b-form-group label="Password:">
                  <b-form-input
                    type="password"
                    placeholder="Password"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div>
                <b-button variant="outline-primary">Button</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/NuxtLogo.vue'
export default {
  components: {
    Logo,
  },
  layout(context) {
    return 'landding'
  },
  middleware: 'guest',
  data: function () {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>

<style>
.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}
</style>
