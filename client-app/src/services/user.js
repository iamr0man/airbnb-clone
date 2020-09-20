import axios from "../services/instance";

export default {
  async getUser () {
    return await axios.get('/me')
  },
  async logIn (email, password){
    return await axios.post('/login', { email, password}, {
        withCredentials: true
      }
    )
  },
  async registration (email, name, password, passwordConfirmation) {
    return await axios.post('/registration', { email, name, password, passwordConfirmation })
  }
}
