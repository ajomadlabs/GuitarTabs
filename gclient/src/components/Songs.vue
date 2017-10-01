<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div v-for="song in songs">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  }
}
</script>

<style scoped>
</style>
