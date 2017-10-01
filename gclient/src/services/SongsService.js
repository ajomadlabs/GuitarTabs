import Api from '@/services/Api.js'

export default {
  index () {
    return Api().get('songs')
  }
}
