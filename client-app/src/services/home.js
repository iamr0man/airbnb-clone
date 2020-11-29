import axios from "./instance";

export default {
  async getHome (id) {
    return await axios.get(`/home/${id}`)
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
  async updateHome ({ id, bookedDate }){
    return await axios.put(`/home/${id}`, { bookedDate })
  }
}
