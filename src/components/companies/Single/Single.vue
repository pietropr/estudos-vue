<template>
    <div class="container container-vue">
        <h2>{{this.empresa.company.nome}}</h2>
        <p><strong>E-mail: </strong>{{this.empresa.company.email}}</p>
        <p><strong>Site: </strong>{{this.empresa.company.site}}</p>
        <div class="jobs-realizados">
            <h3>Jobs realizados</h3>
            <ul>
                <li v-for="jobs in this.empresa.jobs">
                    {{jobs.titulo}} - {{jobs.local}}, Permite remoto: {{(jobs.remoto == "yes") ? "Sim" : "Não"}}
                </li>
            </ul>
        </div>
    </div>

</template>
<script>

    import axios from 'axios'

    export default {
      name: 'single-company',
      props: ['companyId'],
      data() {
        return {
          empresa: [],
          id: this.$route.params.companyId
        }
      },

      mounted () {
        axios.get('http://localhost:8000/api/companies/'+this.$route.params.companyId)
          .then(res => (this.empresa = res.data))
      }
    }
</script>
