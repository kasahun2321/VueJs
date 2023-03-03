import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Replace with the URL of your backend server
  withCredentials: true
});

export default {
  registerUser(user) {
    return apiClient.post('/register', user);
  },
  loginUser(user) {
    return apiClient.post('/login', user);
  },
  logoutUser() {
    return apiClient.post('/logout');
  },
  getUser() {
    return apiClient.get('/user');
  }
};
