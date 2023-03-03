<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <KasMas message="greeting from parrent kasmass"/>
  <LoginForm/>
  <RegisterForm/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import KasMas from './components/kas.vue'
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    KasMas,
    LoginForm,
    RegisterForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
