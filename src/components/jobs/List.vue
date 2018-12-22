<template>
    <div class="container container-vue">
        <h3>Jobs Cadastrados</h3>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      name: 'ListJobsComponent',
      data() {
        return {
           empresas: null
        }
      },
      beforeMount() {
        axios('http://localhost:8000/api/companies')
          .then(res => {
              this.empresas = res.data;
          })
      }
    }
</script>
