<template>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Name">
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  import api from './api.js';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        api.registerUser({ name: this.name, email: this.email, password: this.password })
          .then(response => {
            // Handle successful registration
            console.log(response)

          })
          .catch(error => {
            // Handle registration error
            console.log(error)

          });
      }
    }
  };
  </script>
  