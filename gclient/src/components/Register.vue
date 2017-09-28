<!-- Vue Register View -->
<template>
  <div>
    <h1>Register</h1>
    <input type="email" placeholder="email" name="email" v-model="email" /><br>
    <input type="password" placeholder="password" v-model="password"/><br>
    <button v-on:click="register" type="submit">Register</button>
  </div>
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
      password: ''
    }
  },
  methods: {
    // Register Method
    // Allows users to register using Email and Password
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}

</script>
<!-- End -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
