<template>
    <div class="container container-vue">
        <h3>Jobs Cadastrados</h3>
        <router-link to="/jobs/novo" class="btn btn-link">Criar Jobs</router-link>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Local</th>
                    <th>Empresa</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="job in jobs">
                    <td>{{job.id}}</td>
                    <td>{{job.titulo}}</td>
                    <td>
                        <truncate clamp="..." :length="45" less="Show Less" :text=job.descricao />
                    </td>
                    <td>{{job.local}}</td>
                    <td>{{job.company.nome}}</td>
                    <td>
                        <router-link class="btn btn-sm btn-primary" :to="{name: 'singleJob', params: {jobId: job.id}}">Ver mais</router-link>
                        <router-link class="btn btn-sm btn-warning text-white" :to="{name: 'editJob', params: {jobId: job.id}}">Editar</router-link>
                        <a class="btn btn-sm btn-danger text-white" v-on:click="excluir(job.id)">Excluir</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import truncate from 'vue-truncate-collapsed'
    import axios from 'axios'
    export default {
      name: 'ListJobsComponent',
      components: {
        truncate
      },
      data() {
        return {
           jobs: []
        }
      },
      mounted() {
        axios.get('http://localhost:8000/api/jobs')
          .then(res => (this.jobs = res.data))
      },
      beforeRouteUpdate() {
        axios.get('http://localhost:8000/api/jobs')
          .then(res => (this.jobs = res.data))
      }
    }
</script>
