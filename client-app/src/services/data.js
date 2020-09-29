import axios from "axios";

export default {
  async getRequests () {
    return await axios.get('/api/request')
  },
  async createRequest (host_id, home, date, guests, money){
    return await axios.post('/api/request', { host_id, home, date, guests, money})
  },
}
