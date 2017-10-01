<!-- Component for Header -->
<template>
  <v-toolbar fixed class="blue">

    <v-toolbar-title class="mr-4 white--text">
      <span class="home" v-on:click="navigateTo({name: 'root'})">
        GuitarTabs
      </span>
    </v-toolbar-title>

    <v-toolbar-items>

      <v-btn flat class="white--text" v-on:click="navigateTo({name: 'songs'})">
        Browse
      </v-btn>

    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" v-on:click="navigateTo({name: 'login'})" flat class="white--text">
        Login
      </v-btn> 
      <v-btn v-if="!$store.state.isUserLoggedIn" v-on:click="navigateTo({name: 'register'})" flat class="white--text">
        Sign Up
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" v-on:click="logout" flat class="white--text">
        Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #000;
}
</style>
<!-- End -->
