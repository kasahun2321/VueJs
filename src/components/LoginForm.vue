<template>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import api from './api.js';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        api.loginUser({ email: this.email, password: this.password })
          .then(response => {
            // Handle successful login
            console.log(response)
          })
          .catch(error => {
            // Handle login error
            console.log(error)

          });
      }
    }
  };
  </script>
  