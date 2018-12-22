<template>
    <div class="container container-vue">
        <h4>Editar empresa {{this.nome}}</h4>

            <form v-on:submit="altera" class="col-sm-12">
                <div class="row">
                    <div class="col-sm-6">
                        <label>Nome</label>
                        <input v-model="nome" class="form-control" name="nome" type="text">
                    </div>
                    <div class="col-sm-6">
                        <label>E-mail</label>
                        <input v-model="email" class="form-control" name="email" type="text">
                    </div>
                    <div class="col-sm-6">
                        <label>Site</label>
                        <input v-model="site" class="form-control" name="site" type="text">
                        <input v-model="senha" class="form-control" name="site" type="hidden">
                    </div>
                    <div class="col-sm-12">
                        <hr>
                        <input class="btn btn-primary" type="submit" value="Atualizar">
                    </div>
                </div>
            </form>
    </div>

</template>
<script>
    import axios from 'axios'
    export default {
      name: 'EditCompany',
      props: ['companyId'],
      data() {
        return {
          empresa: [],
          nomeEmpresa: null,
          //variaveis
          nome: '',
          email: '',
          site: '',
          senha: '',
        }
      },
    beforeCreate() {
        axios.get('http://localhost:8000/api/companies/'+this.$route.params.companyId)
          .then(res => {
            this.empresa = res.data;
            this.nome = this.empresa.company.nome;
            this.email = this.empresa.company.email;
            this.site = this.empresa.company.site;
            this.senha = this.empresa.company.senha;
          })
      },
      methods: {
        altera(e) {
          e.preventDefault();
          axios.put('http://localhost:8000/api/companies/'+this.$route.params.companyId, {
            nome: this.nome,
            email: this.email,
            site: this.site,
            senha: this.senha,
          })
            .then(res => {
                this.$router.push('/companies');
            })
        }
      }
    }
</script>
<style></style>
