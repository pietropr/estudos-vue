<template>
    <div class="container container-vue">
        <TituloListCompanies />
        <TabelaListCompanies :empresas="this.dados" />
    </div>

</template>
<script>
    import TituloListCompanies from '../../components/companies/List/Titulo'
    import TabelaListCompanies from '../../components/companies/List/Tabela'

    import axios from 'axios'


    export default {
      name: 'Listcompanies',
      components: {TabelaListCompanies, TituloListCompanies}  ,
      data() {
        return {
          dados: []
        }
      },
      mounted () {
        axios.get("http://localhost:8000/api/companies")
          .then(res => (this.dados = res.data))
      }
    }
</script>
