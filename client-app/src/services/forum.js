import axios from "axios";

export default {
  async getPosts () {
    return await axios.get('/post/all')
  },
  async getPhoto(formData){
    const url = 'https://api.cloudinary.com/v1_1/dd1zwnjkj/image/upload';
    const res = await fetch(url,{
      method: "POST",
      body: formData
    })
    const { secure_url } = await res.json();
    return secure_url;
  },
  async createPost (title, description, shortDescription, preview){
    return await axios.post('/post', { title, shortDescription, description, preview })
  },
  // eslint-disable-next-line
  async deletePost (id) {
    return await axios.delete(`/post/${id}`)
  },
}
