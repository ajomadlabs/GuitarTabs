<!-- Component for Header -->
<template>
  <v-toolbar fixed class="blue">

    <v-toolbar-title class="mr-4 white--text">
      <span class="home" v-on:click="navigateTo({name: 'root'})">
        GuitarTabs
      </span>
    </v-toolbar-title>

    <!-- @TODO: Implement Me -->
    <!--
    <v-toolbar-items>

      <v-btn flat dark>
        Browse
      </v-btn>

    </v-toolbar-items>
    -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-on:click="navigateTo({name: 'login'})" flat class="white--text">
        Login
      </v-btn> 
      <v-btn v-on:click="navigateTo({name: 'register'})" flat class="white--text">
        Sign Up
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
