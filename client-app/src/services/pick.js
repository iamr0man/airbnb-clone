import axios from "./instance";

export default {
  async getPick () {
    return await axios.get('/pick')
  },
  async createPick (discover, city, museum){
    return await axios.post('/pick', { discover, city, museum })
  },
  async deletePick (id) {
    return await axios.delete(`/pick/${id}`)
  },
}
