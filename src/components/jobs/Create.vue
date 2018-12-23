<template>
    <div class="container-vue container">
        <h3>Criar novo Job</h3>
        <form class="row">
            <div class="form-group col-sm-4">
                <label for="titulo">Titulo</label>
                <input v-model="titulo" class="form-control" type="text" id="titulo">
            </div>
            <div class="form-group col-sm-4">
                <label for="local">Local</label>
                <input v-model="local" class="form-control" type="text" id="local">
            </div>
            <div class="form-group col-sm-4">
                <label for="remoto">Permite Remoto?</label>
                <select v-model="remoto" class="form-control" id="remoto">
                    <option value="0">Não</option>
                    <option value="1">Sim</option>
                </select>
            </div>
            <div class="form-group col-sm-4">
                <label for="empresa">Empresa</label>
                <select v-model="company_id" class="form-control" id="empresa">
                    <option value="null" selected disabled>Selecione...</option>
                    <option  v-for="empresa in companies" :value="empresa.id">{{empresa.nome}}</option>
                </select>
            </div>
            <div class="form-group col-sm-12">
                <label for="descricao">Descrição</label>
                <textarea v-model="descricao" class="form-control" id="descricao"></textarea>
            </div>
            <span>{{descricao}} </span>
            <input type="submit" @click="cadastrar" value="Cadastrar" class="btn btn-primary">
        </form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      name: 'CreateJob',
      data() {
        return {
           titulo: '',
           remoto: '',
           descricao: '',
           company_id: null,
           local: '',
           tipo: 1,
           companies: []

        }
      },
      mounted() {
        axios.get('http://localhost:8000/api/companies')
          .then(res => {
            this.companies = res.data
          })
      },
      methods: {
        cadastrar(e) {
          e.preventDefault();
          axios.post('http://localhost:8000/api/jobs', {
            titulo: this.titulo,
            remoto: this.remoto,
            descricao: this.descricao,
            company_id: this.company_id,
            local: this.local,
            tipo: this.tipo

          })
            .then(rs => {
              this.$router.push('/jobs');
            })
        }
      }
    }
</script>
