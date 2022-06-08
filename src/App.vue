<template>
  <div id="app">

      <h1>Parcial de NT2 - Germán Osses Macchia</h1>
      <br>
      <Navegador />
      <router-view></router-view>
    </div> 

</template>

<script>
import Navegador from './components/Navegador.vue'

export default {
  name: 'App',
  components: {
    Navegador
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0e3862;
    margin-top: 60px;
    background-color: cadetblue;
  }
  html {
      height: 100vh;
  }
</style>
