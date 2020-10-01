import axios from "axios";

export default {
  async getRequests () {
    return await axios.get('/api/request')
  },
  async createRequest (requestFields){
    return await axios.post('/api/request', { requestFields })
  },
  async updateRequest (id, requestFields){
    return await axios.put(`/api/request/${id}`, { ...requestFields })
  },
}
