<!-- Vue Register View -->
<template> 
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      </div>
      <!-- Input Styles -->
      <div class="pl-0 pr-0 pt-0 pb-2">
        <v-card>
          <input type="email" placeholder="email" name="email" v-model="email" /><br>
          <input type="password" placeholder="password" v-model="password"/><br>
          <div class="error" v-model="error">{{error}}</div><br>
          <v-btn class="cyan" v-on:click="register" type="submit">Register</v-btn>
        </v-card>
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
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
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
