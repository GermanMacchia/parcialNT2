<template>
  <section class="src-components-respuestas">
    <div class="jumbotron bg-dark border border-5 border-white">
      <h5>Muliple Choice</h5>
        <div>
          <table class="table table-dark  ">
              <tr>
                  <th>Pregunta</th>
                  <th>Respuesta</th>
              </tr>
              <tr v-for="(respuesta,index) in cuestionario" :key="index">
                  <td>{{ respuesta.pregunta}}</td>
                  <td>{{ respuesta.respuesta}}</td>
              </tr>
          </table>
        </div>    
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        cuestionario: [{
          pregunta: '1',
          respuesta: 'c',
        },{
          pregunta: '2',
          respuesta: 'c',
        },{
          pregunta: '3',
          respuesta: 'b',
        },]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-respuestas {

  }

  h5 {
    color: aliceblue;
  }
</style>
