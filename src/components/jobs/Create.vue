<template>
    <div class="container-vue container">
        <h3>Criar novo Job</h3>
        <form class="row">
            <div class="form-group col-sm-4">
                <label for="titulo">Titulo</label>
                <input class="form-control" type="text" id="titulo">
            </div>
            <div class="form-group col-sm-4">
                <label for="local">Local</label>
                <input class="form-control" type="text" id="local">
            </div>
            <div class="form-group col-sm-4">
                <label for="remoto">Permite Remoto?</label>
                <select class="form-control" id="remoto">
                    <option value="0">Não</option>
                    <option value="1">Sim</option>
                </select>
            </div>
            <div class="form-group col-sm-4">
                <label for="empresa">Empresa</label>
                <select v-model="company_id" class="form-control" id="empresa">
                    <option value="null" selected disabled>Selecione...</option>
                    <option v-bind:value="company_id" v-for="empresa in companies" :value="empresa.id">{{empresa.nome}}</option>
                </select>
            </div>
            <div class="form-group col-sm-12">
                <label for="descricao">Descrição</label>
                <textarea class="form-control" id="descricao"></textarea>
            </div>
            <span>{{this.company_id}} </span>
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
           descricao: '',
           company_id: null,
           local: '',
           tipo: null,
           companies: []

        }
      },
      mounted() {
        axios.get('http://localhost:8000/api/companies')
          .then(res => {
            this.companies = res.data
          })
      },
    }
</script>
