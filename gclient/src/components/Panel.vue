<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue">
          <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
        </v-toolbar>
      </div>
      <div class="pl-4 pr-4 pt-2 pb-2">
       <slot>
        No slot Defined.
       </slot>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
