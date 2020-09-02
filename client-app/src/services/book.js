import axios from "axios";

export default {
  async getBooks () {
    return await axios.get('/book/all')
  },
  async createBook (title, logo, author){
    return await axios.post('/book', title, logo, author)
  },
  async deleteBook (id) {
    return await axios.delete(`/book/${id}`)
  },
}
