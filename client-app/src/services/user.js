import axios from "../services/instance";

export default {
  async getUser () {
    return await axios.get('/me')
  },
  async updateUser (userFields) {
    return await axios.put('/me', { ...userFields });
  },
  async logIn (email, password){
    return await axios.post('/login', { email, password}, {
        withCredentials: true
      }
    )
  },
  async registration (email, name, password, passwordConfirmation) {
    return await axios.post('/register', { email, name, password, passwordConfirmation })
  }
}
