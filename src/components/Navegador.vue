<template>
  <section class="src-components-navbar">
    <ul class="nav nav-tabs navbar-dark bg-dark">
      <li class="nav-item">
        <router-link to="/Notas">
          <a class="nav-link" href="#">Notas</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Respuestas">
          <a class="nav-link" href="#">Respuestas</a>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style>
  h1{
    padding: 4vh;
  }
  a{
    color: rgb(5, 229, 254) !important;
  }
</style>
