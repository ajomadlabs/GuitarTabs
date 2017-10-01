<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn v-on:click="navigateTo({name: 'songs-create'})" slot="action" fab class="red white--text" medium absolute right>
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="songs.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-album">
                {{song.album}}
              </div>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" v-bind:src="song.albumImageUrl"/>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
 .song {
   padding: 20px;
   height: 330px;
   overflow: hidden;
 }
 .song-title {
  font-size: 30px;
 }
 .song-artist {
  font-size: 24px;
 }
 .song-genre {
  font-size: 18px;
 }
 .album-image {
   width: 100%;
   margin: 0 auto;
 }
</style>
