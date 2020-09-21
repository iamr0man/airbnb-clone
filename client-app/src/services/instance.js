import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api`,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

apiClient.interceptors.response.use(response => {
   return response;
}, async (error) => {
  return error;
});

apiClient.defaults.withCredentials = true

export default apiClient;
