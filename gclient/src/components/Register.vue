<!-- Component for Register-->
<template> 
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-3">
        <v-toolbar flat dense class="blue" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      </div>
      <!-- Input Styles -->
      <div class="pl-4 pr-4 pt-2 pb-2">
        <form name="guitar-tabs" autocomplete="off">
          <v-text-field type="email" name="email" label="Email" v-model="email">
          </v-text-field>
          <br>
          <v-text-field type="password" name="password" label="Password" v-model="password" autocomplete="new-password"></v-text-field>
        </form>
        <br>
        <div class="error" v-model="error">{{error}}</div><br>
        <v-btn class="blue" v-on:click="register" type="submit" dark>Register</v-btn>
      </div>
      <!-- End -->
    </v-flex>
  </v-layout>
</template>
<!-- End -->

<!-- Vue Register Controller -->
<script>

// Importing Authentication Service
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    // Register Method
    // Allows users to register using Email and Password
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
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
