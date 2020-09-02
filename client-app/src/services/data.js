import axios from "axios";

export default {
  async getPoints () {
    return await axios.get('/expe/all')
  },
  async createPoint (latitude, longitude, title, description, emoji){
    return await axios.post('/expe', { latitude, longitude, title, description, emoji })
  },
  async likePoint (id){
    return await axios.put(`/expe/like/${id}`)
  },
  async unlikePoint (id){
    return await axios.put(`/expe/unlike/${id}`)
  },
  async deletePoint (id) {
    return await axios.delete(`/expe/${id}`)
  },
}
