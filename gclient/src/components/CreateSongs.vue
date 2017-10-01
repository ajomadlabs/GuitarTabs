<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Add Song">
        <v-text-field label="Title" type="text" v-model="song.title"></v-text-field>
        <v-text-field label="Artist" type="text" v-model="song.artists"></v-text-field>
        <v-text-field label="Genre" type="text" v-model="song.genre"></v-text-field>
        <v-text-field label="Album" type="text" v-model="song.album"></v-text-field>
        <v-text-field label="Album Image" type="text" v-model="song.albumImageUrl"></v-text-field>
        <v-text-field label="Youtube Id" type="text" v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Lyrics">
        <v-text-field label="Lyrics" multi-line v-model="song.lyrics" type="text">Lyrics</v-text-field>
      </panel>
      <panel title="Tabs">
        <v-text-field label="Tab" multi-line v-model="song.tab" type="text">Tabs</v-text-field>
      </panel>
      <v-btn class="blue white--text" v-on:click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
</style>
