<template>

  <section class="src-components-notas mx-auto w-75 mt-4">

  <h1>Ingresar Nota del Alumno</h1>
  <div class="jumbotron bg-dark border border-5 border-white">
    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input 
          id="nombre"
          type="text"
          v-model.trim="formData.nombre" 
          required
          autocomplete="off" 
          class="form-control"
          name="nombre" 
          minlength="3"
          maxlength="15"
        />

        <field-messages name="nombre" show="$dirty">
          <div class="alert alert-info mt-2">OK</div>
          <div slot="required" class="alert alert-danger mt-1">El nombre es un campo requerido</div>
          <div slot="minlength" class="alert alert-danger mt-1">El nombre requiere como mínimo 5 caracteres</div>
        </field-messages>
      </validate>


      <validate tag="div">
        <label for="apellido">Apellido</label>
        <input 
          id="apellido"
          type="text"
          v-model.trim="formData.apellido" 
          required 
          autocomplete="off" 
          class="form-control"
          name="apellido" 
          minlength="3"
          maxlength="15"
        />

        <field-messages name="apellido" show="$dirty">
          <div class="alert alert-info mt-2">OK</div>
          <div slot="required" class="alert alert-danger mt-1 ">El apellido es un campo requerido</div>
          <div slot="minlength" class="alert alert-danger mt-1">El apellido requiere como mínimo 5 caracteres</div>
        </field-messages>
      </validate>

      <validate tag="div">
        <label for="nota">Nota</label>
        <input 
          id="nota"
          type="number"
          v-model.trim="formData.nota" 
          required 
          class="form-control"
          name="nota" 
          min="0"
          max="10"
        />

        <field-messages name="nota" show="$dirty">
          <div class="alert alert-info mt-2">OK!</div>
          <div slot="required" class="alert alert-danger mt-1">La nota es un campo requerido</div>
          <div slot="min" class="alert alert-danger mt-1">La nota no puede tener menos de 0</div>
          <div slot="max" class="alert alert-danger mt-1">La nota no puede ser mas de 10</div>
        </field-messages>
      </validate>

      <hr>
      <button :disabled="formState.$invalid" class="btn btn-primary my-3">Enviar</button>
    </vue-form>
    
    <div class="jumbotron bg-dark border border-5 border-white">
      <h5>INGRESOS</h5>
        <div>
          <table class="table table-dark">
              <tr>
                  <th>Nombre y Apellido</th>
                  <th>Nota</th>
              </tr>
              <tr v-for="(alumno,index) in alumnos" :key="index">
                  <td>{{ alumno.nombre + ' ' + alumno.apellido}}</td>
                  <td>{{ alumno.nota }}</td>
              </tr>
              
              <tr>
                <td>
                  Promedio
                </td>
                <td>

                </td>
              </tr>
          </table>
        </div>    
    </div>
  </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-notas',
    props: [],
    mounted () {
    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        alumnos: [{
          nombre: '',
          apellido: '',
          nota: ''
        }]
      }
    },
    methods: {
      getInicialData(){
        return {
          nombre: '',
          apellido: '',
          nota: ''
        }
      },
      enviar(){
        this.alumnos.push({...this.formData});
        this.formData = this.getInicialData();
        this.formState._reset()
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .src-components-notas {
    background-color: rgb(143, 197, 197);
  }
  label{
    width: 75vw;
    color: white
  }

  .formulario{
    display: flex;
    flex-direction: column;

  }
</style>
