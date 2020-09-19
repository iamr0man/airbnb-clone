import axios from "axios";
// import router from '../router/index'

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api`,
});

// apiClient.interceptors.response.use(response => {
//   debugger
//    return response;
// }, error => {
//   if (error.response.status === 401) {
//     router.push('/login')
//   }
//   return error;
// });

export default apiClient;
