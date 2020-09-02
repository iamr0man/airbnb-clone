import axios from "axios";

export default {
  async getUser () {
    return await axios.get('/auth')
  },
  async doLogin (email, password){
    return await axios.post('/auth', { email, password})
  },
  async registration (email, name, password) {
    return await axios.post('/users', { email, name, password})
  }
}
