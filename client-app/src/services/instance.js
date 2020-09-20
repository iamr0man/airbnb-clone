import axios from "axios";
import router from '../router/index'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

apiClient.interceptors.response.use(response => {
   return response;
}, async (error) => {
  if (error.response.status === 401) {
    await router.push('/login')
  }
  return error;
});

apiClient.defaults.withCredentials = true

export default apiClient;
