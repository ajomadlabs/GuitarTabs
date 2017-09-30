// Service for sending and receiving data from the register endpoint

// Importing the Api.js for HTTP
import Api from '@/services/Api.js'

// Making it exportable
export default {
  // Register Method to send user data
  register (userdata) {
    return Api().post('register', userdata)
  },
  // Login Method to get user data
  login (userdata) {
    return Api().post('login', userdata)
  }
}
