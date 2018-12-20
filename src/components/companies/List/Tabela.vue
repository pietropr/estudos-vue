<template>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Site</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empresa in empresas">
                <td>{{ empresa.id }}</td>
                <td>{{ empresa.nome }}</td>
                <td>{{ empresa.email }}</td>
                <td>{{ (empresa.site) ? empresa.site : "Nenhum site" }}</td>
                <td>
                    <router-link class="btn btn-sm btn-primary" :to="{name: 'singleCompany', params: {companyId: empresa.id}}">Ver mais</router-link>
                    <router-link class="btn btn-sm btn-warning text-white" :to="{name: 'editCompany', params: {companyId: empresa.id}}">Editar</router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
  export default {
    name: 'TabelaListCompanies',
    props: ['empresas']
  }
</script>
