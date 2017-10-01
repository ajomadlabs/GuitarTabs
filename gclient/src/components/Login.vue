<!-- Component for Login-->
<template> 
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login"> 
      <!-- Input Styles -->
        <v-text-field type="email" name="email" label="Email" v-model="email">
        </v-text-field>
        <br>
        <v-text-field type="password" name="password" label="Password" v-model="password"></v-text-field>
        <br>
        <div class="error" v-model="error">{{error}}</div><br>
        <v-btn class="blue" v-on:click="login" type="submit" dark>Login</v-btn>
      </panel>
      <!-- End -->
    </v-flex>
  </v-layout>
</template>
<!-- End -->

<!-- Vue Register Controller -->
<script>

// Importing Authentication Service
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    // Login Method
    // Allows users to login using Email and Password
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}

</script>
<!-- End -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
