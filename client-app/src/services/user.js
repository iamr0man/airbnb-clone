import axios from "../services/instance";

export default {
  async getUser () {
    return await axios.get('/home')
  },
  async logIn (email, password){
    return await axios.post('/login', { email, password})
  },
  async registration (email, name, password) {
    return await axios.post('/', { email, name, password})
  }
}
